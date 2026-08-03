import { readingWritingBank } from "./questionBank";
import { auditVocabularyProductionReach } from "./vocabularyProductionReachAudit";
import type { ExamQuestion } from "./types";

export interface VocabularyQualityIssue {
  code:
    | "invalid-answer"
    | "choice-count"
    | "duplicate-choice"
    | "missing-walkthrough"
    | "duplicate-passage"
    | "duplicate-choice-set"
    | "duplicate-correct-word"
    | "direct-definition-template";
  questionIds: string[];
  details: string;
}

export interface VocabularyProductionQualityGateReport {
  passed: boolean;
  totalReadingQuestions: number;
  vocabularyQuestions: number;
  uniqueCorrectWords: number;
  difficultyCounts: Record<string, number>;
  answerPositionCounts: Record<string, number>;
  reachabilityPassed: boolean;
  unreachableQuestions: number;
  issues: VocabularyQualityIssue[];
  issueCounts: Record<string, number>;
}

function idOf(question: ExamQuestion): string {
  return question.examId || question.id;
}

function isVocabularyQuestion(question: ExamQuestion): boolean {
  const value =
    `${question.skill} ${question.courseId} ${question.courseTitle}`.toLowerCase();

  return (
    value.includes("words in context") ||
    value.includes("words-in-context") ||
    value.includes("vocabulary")
  );
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[“”"'`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function duplicateGroups(
  questions: ExamQuestion[],
  valueFor: (question: ExamQuestion) => string,
): Array<{
  value: string;
  questionIds: string[];
}> {
  const groups = new Map<string, string[]>();

  for (const question of questions) {
    const value = normalize(valueFor(question));

    const ids = groups.get(value) ?? [];

    ids.push(idOf(question));
    groups.set(value, ids);
  }

  return [...groups.entries()]
    .filter(([, ids]) => ids.length > 1)
    .map(([value, questionIds]) => ({
      value,
      questionIds,
    }));
}

export function runVocabularyProductionQualityGate(
  reachabilitySeeds = 1000,
): VocabularyProductionQualityGateReport {
  const questions = readingWritingBank.filter(isVocabularyQuestion);

  const issues: VocabularyQualityIssue[] = [];

  for (const question of questions) {
    const id = idOf(question);

    if (question.choices.length !== 4) {
      issues.push({
        code: "choice-count",
        questionIds: [id],
        details: `Expected 4 choices; found ${question.choices.length}.`,
      });
    }

    if (question.answer < 0 || question.answer >= question.choices.length) {
      issues.push({
        code: "invalid-answer",
        questionIds: [id],
        details: `Answer index ${question.answer} is invalid.`,
      });
    }

    const normalizedChoices = question.choices.map((choice) =>
      normalize(choice.text),
    );

    if (new Set(normalizedChoices).size !== normalizedChoices.length) {
      issues.push({
        code: "duplicate-choice",
        questionIds: [id],
        details: "The question contains duplicate choices.",
      });
    }

    if (!question.walkthrough?.length) {
      issues.push({
        code: "missing-walkthrough",
        questionIds: [id],
        details: "The question has no walkthrough.",
      });
    }

    if (
      /needed a word meaning|a word meaning|means [“"]/.test(
        question.passage.toLowerCase(),
      )
    ) {
      issues.push({
        code: "direct-definition-template",
        questionIds: [id],
        details:
          "The passage uses a direct-definition template instead of contextual inference.",
      });
    }
  }

  for (const group of duplicateGroups(
    questions,
    (question) => question.passage,
  )) {
    issues.push({
      code: "duplicate-passage",
      questionIds: group.questionIds,
      details: "Multiple Vocabulary questions use the same passage.",
    });
  }

  for (const group of duplicateGroups(questions, (question) =>
    question.choices
      .map((choice) => choice.text)
      .sort()
      .join(" | "),
  )) {
    issues.push({
      code: "duplicate-choice-set",
      questionIds: group.questionIds,
      details:
        "Multiple Vocabulary questions reuse the same complete choice set.",
    });
  }

  for (const group of duplicateGroups(
    questions,
    (question) => question.choices[question.answer]?.text ?? "",
  )) {
    issues.push({
      code: "duplicate-correct-word",
      questionIds: group.questionIds,
      details: `The same correct word appears in ${group.questionIds.length} questions.`,
    });
  }

  const difficultyCounts: Record<string, number> = {
    Easy: 0,
    Medium: 0,
    Hard: 0,
  };

  const answerPositionCounts: Record<string, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    Invalid: 0,
  };

  for (const question of questions) {
    difficultyCounts[question.difficulty] =
      (difficultyCounts[question.difficulty] ?? 0) + 1;

    const label = ["A", "B", "C", "D"][question.answer] ?? "Invalid";

    answerPositionCounts[label] = (answerPositionCounts[label] ?? 0) + 1;
  }

  const reachability = auditVocabularyProductionReach(reachabilitySeeds);

  const issueCounts = issues.reduce(
    (counts, issue) => {
      counts[issue.code] = (counts[issue.code] ?? 0) + 1;

      return counts;
    },
    {} as Record<string, number>,
  );

  const uniqueCorrectWords = new Set(
    questions.map((question) =>
      normalize(question.choices[question.answer]?.text ?? ""),
    ),
  ).size;

  return {
    passed:
      questions.length === 136 &&
      uniqueCorrectWords === 136 &&
      issues.length === 0 &&
      reachability.passed,
    totalReadingQuestions: readingWritingBank.length,
    vocabularyQuestions: questions.length,
    uniqueCorrectWords,
    difficultyCounts,
    answerPositionCounts,
    reachabilityPassed: reachability.passed,
    unreachableQuestions: reachability.unreachableIds.length,
    issues,
    issueCounts,
  };
}
