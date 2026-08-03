import { readingWritingBank } from "./questionBank";
import { selectReadingModule } from "./selectModule";
import type { ExamQuestion } from "./types";

export type VocabularyRoute = "module1" | "module2-easy" | "module2-hard";

export interface VocabularyRouteTelemetry {
  route: VocabularyRoute;
  runs: number;
  selections: number;
  runsWithVocabulary: number;
  uniqueReached: number;
  averagePerModule: number;
  maxPerModule: number;
}

export interface VocabularyExpansionGapAuditReport {
  passed: boolean;
  totalReadingQuestions: number;
  vocabularyQuestions: number;
  uniqueCorrectWords: number;
  averageQuestionsPerWord: number;
  maxQuestionsForOneWord: number;
  difficultyCounts: Record<string, number>;
  answerPositionCounts: Record<string, number>;
  missingWalkthroughs: number;
  directDefinitionTemplateQuestions: number;
  repeatedPromptGroups: number;
  repeatedPassageGroups: number;
  repeatedChoiceSetGroups: number;
  highestReuseWords: Array<{
    word: string;
    questions: number;
    easy: number;
    medium: number;
    hard: number;
  }>;
  routes: VocabularyRouteTelemetry[];
  recommendations: string[];
}

function idOf(question: ExamQuestion): string {
  return question.examId || question.id;
}

function isVocabularyQuestion(question: ExamQuestion): boolean {
  const value = `${question.skill} ${question.courseId} ${question.courseTitle}`.toLowerCase();
  return value.includes("words in context") ||
    value.includes("words-in-context") ||
    value.includes("vocabulary");
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[“”"'`]/g, "").replace(/\s+/g, " ").trim();
}

function correctWord(question: ExamQuestion): string {
  return question.choices[question.answer]?.text.trim().toLowerCase() ?? "(invalid)";
}

function repeatedGroupCount(
  questions: ExamQuestion[],
  valueFor: (question: ExamQuestion) => string,
): number {
  const counts = new Map<string, number>();
  for (const question of questions) {
    const value = normalize(valueFor(question));
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return [...counts.values()].filter((count) => count > 1).length;
}

function routeTelemetry(route: VocabularyRoute, seeds: number): VocabularyRouteTelemetry {
  const reached = new Set<string>();
  let selections = 0;
  let runsWithVocabulary = 0;
  let maxPerModule = 0;

  for (let seed = 0; seed < seeds; seed += 1) {
    const module1 = selectReadingModule({ module: 1, seed });
    const selected = route === "module1"
      ? module1
      : selectReadingModule({
          module: 2,
          route: route === "module2-easy" ? "Easy" : "Hard",
          seed: seed + 100_000,
          exclude: module1.map(idOf),
        });

    const vocabulary = selected.filter(isVocabularyQuestion);
    selections += vocabulary.length;
    if (vocabulary.length) runsWithVocabulary += 1;
    maxPerModule = Math.max(maxPerModule, vocabulary.length);
    vocabulary.forEach((question) => reached.add(idOf(question)));
  }

  return {
    route,
    runs: seeds,
    selections,
    runsWithVocabulary,
    uniqueReached: reached.size,
    averagePerModule: seeds ? selections / seeds : 0,
    maxPerModule,
  };
}

export function auditVocabularyExpansionGaps(
  seeds = 1000,
): VocabularyExpansionGapAuditReport {
  const questions = readingWritingBank.filter(isVocabularyQuestion);
  const difficultyCounts: Record<string, number> = { Easy: 0, Medium: 0, Hard: 0 };
  const answerPositionCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, Invalid: 0 };
  const words = new Map<string, ExamQuestion[]>();

  for (const question of questions) {
    difficultyCounts[question.difficulty] = (difficultyCounts[question.difficulty] ?? 0) + 1;
    const position = ["A", "B", "C", "D"][question.answer] ?? "Invalid";
    answerPositionCounts[position] = (answerPositionCounts[position] ?? 0) + 1;
    const word = correctWord(question);
    words.set(word, [...(words.get(word) ?? []), question]);
  }

  const highestReuseWords = [...words.entries()]
    .map(([word, items]) => ({
      word,
      questions: items.length,
      easy: items.filter((q) => q.difficulty === "Easy").length,
      medium: items.filter((q) => q.difficulty === "Medium").length,
      hard: items.filter((q) => q.difficulty === "Hard").length,
    }))
    .sort((a, b) => b.questions - a.questions || a.word.localeCompare(b.word));

  const missingWalkthroughs = questions.filter((q) => !q.walkthrough?.length).length;
  const directDefinitionTemplateQuestions = questions.filter((q) =>
    /needed a word meaning|a word meaning|means [“"]/.test(q.passage.toLowerCase()),
  ).length;

  const routes = [
    routeTelemetry("module1", seeds),
    routeTelemetry("module2-easy", seeds),
    routeTelemetry("module2-hard", seeds),
  ];

  const recommendations: string[] = [];
  const uniqueCorrectWords = words.size;
  const averageQuestionsPerWord = uniqueCorrectWords ? questions.length / uniqueCorrectWords : 0;

  if (averageQuestionsPerWord > 2) {
    recommendations.push("Expand lexical breadth; too many questions reuse the same correct words.");
  }
  if (directDefinitionTemplateQuestions > questions.length * 0.25) {
    recommendations.push("Replace direct-definition templates with genuine contextual sentence completion.");
  }
  if (missingWalkthroughs > 0) {
    recommendations.push("Add walkthroughs that explain context clues and reject each distractor.");
  }
  if (routes.some((route) => route.uniqueReached < Math.min(24, questions.length))) {
    recommendations.push("Improve Easy, Medium, and Hard route coverage so more vocabulary questions are reachable.");
  }
  if (!recommendations.length) {
    recommendations.push("Focus expansion on new words, secondary meanings, nuanced distractors, and varied contexts.");
  }

  return {
    passed: questions.length > 0,
    totalReadingQuestions: readingWritingBank.length,
    vocabularyQuestions: questions.length,
    uniqueCorrectWords,
    averageQuestionsPerWord,
    maxQuestionsForOneWord: Math.max(0, ...highestReuseWords.map((item) => item.questions)),
    difficultyCounts,
    answerPositionCounts,
    missingWalkthroughs,
    directDefinitionTemplateQuestions,
    repeatedPromptGroups: repeatedGroupCount(questions, (q) => q.prompt),
    repeatedPassageGroups: repeatedGroupCount(questions, (q) => q.passage),
    repeatedChoiceSetGroups: repeatedGroupCount(
      questions,
      (q) => q.choices.map((choice) => choice.text).sort().join(" | "),
    ),
    highestReuseWords,
    routes,
    recommendations,
  };
}

export function vocabularyExpansionGapAuditJson(
  report: VocabularyExpansionGapAuditReport,
): string {
  return JSON.stringify(report, null, 2);
}
