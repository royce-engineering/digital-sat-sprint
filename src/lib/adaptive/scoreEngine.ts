import { getQuestion } from "@/lib/adaptive/questionBank";
import { isEquivalentAnswer } from "@/lib/adaptive/answerEvaluator";
import type { ExamDifficulty, ExamQuestion, ExamSection } from "@/lib/adaptive/types";

export interface ScoreAnswer {
  selected: number;
  typedAnswer?: string;
  flagged: boolean;
  answeredAt: number;
}

export interface ScoreModule {
  key: string;
  title: string;
  section: ExamSection;
  difficulty: ExamDifficulty;
  questionIds: string[];
}

export interface ScoreBreakdown {
  label: string;
  correct: number;
  total: number;
  accuracy: number;
}

export interface SectionScoreEstimate {
  section: ExamSection;
  bestEstimate: number;
  lowEstimate: number;
  highEstimate: number;
  confidence: "low" | "medium" | "high";
  module2Path: "Easy" | "Hard" | "Not completed";
  correct: number;
  total: number;
  unanswered: number;
  accuracy: number;
  weightedAccuracy: number;
  domainBreakdown: ScoreBreakdown[];
  difficultyBreakdown: ScoreBreakdown[];
  studentResponse?: ScoreBreakdown;
}

export interface SatScoreEstimate {
  readingWriting: SectionScoreEstimate;
  math: SectionScoreEstimate;
  bestTotal: number;
  lowTotal: number;
  highTotal: number;
  confidence: "low" | "medium" | "high";
  disclaimer: string;
}

const difficultyWeight: Record<ExamDifficulty, number> = {
  Easy: 0.82,
  Medium: 1,
  Hard: 1.24,
};

function answered(question: ExamQuestion, answer?: ScoreAnswer) {
  if (!answer) return false;
  if (question.questionType === "student-response") return Boolean(answer.typedAnswer?.trim());
  return answer.selected >= 0;
}

export function isScoreAnswerCorrect(question: ExamQuestion, answer?: ScoreAnswer) {
  if (!answer) return false;
  if (question.questionType === "student-response") {
    return isEquivalentAnswer(answer.typedAnswer ?? "", question.numericAnswer ?? "");
  }
  return question.answer === answer.selected;
}

function domainLabel(question: ExamQuestion) {
  if (question.section === "Math") return question.mathDomain ?? "Unclassified Math";
  return question.domain ?? "Unclassified Reading & Writing";
}

function roundedScore(value: number) {
  return Math.max(200, Math.min(800, Math.round(value / 10) * 10));
}

function breakdown(questions: ExamQuestion[], answers: Record<string, ScoreAnswer>, labeler: (q: ExamQuestion) => string) {
  const groups = new Map<string, { correct: number; total: number }>();
  for (const question of questions) {
    const label = labeler(question);
    const current = groups.get(label) ?? { correct: 0, total: 0 };
    current.total += 1;
    if (isScoreAnswerCorrect(question, answers[question.examId])) current.correct += 1;
    groups.set(label, current);
  }
  return [...groups.entries()]
    .map(([label, values]) => ({ label, ...values, accuracy: values.total ? values.correct / values.total : 0 }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

function confidenceFor(total: number, unanswered: number, domainResults: ScoreBreakdown[]) {
  if (!total || unanswered / total > 0.12) return "low" as const;
  const coveredDomains = domainResults.filter(item => item.total >= 2).length;
  if (coveredDomains >= 4 && unanswered === 0) return "high" as const;
  return "medium" as const;
}

export function estimateSectionScore(
  section: ExamSection,
  modules: ScoreModule[],
  answers: Record<string, ScoreAnswer>,
): SectionScoreEstimate {
  const sectionModules = modules.filter(module => module.section === section);
  const questions = sectionModules
    .flatMap(module => module.questionIds)
    .map(getQuestion)
    .filter((question): question is ExamQuestion => Boolean(question));

  const total = questions.length;
  const correct = questions.filter(question => isScoreAnswerCorrect(question, answers[question.examId])).length;
  const unanswered = questions.filter(question => !answered(question, answers[question.examId])).length;
  const accuracy = total ? correct / total : 0;

  const weightedTotal = questions.reduce((sum, question) => sum + difficultyWeight[question.difficulty], 0);
  const weightedCorrect = questions.reduce(
    (sum, question) => sum + (isScoreAnswerCorrect(question, answers[question.examId]) ? difficultyWeight[question.difficulty] : 0),
    0,
  );
  const weightedAccuracy = weightedTotal ? weightedCorrect / weightedTotal : 0;

  const module2 = sectionModules[1];
  const module2Path = module2?.difficulty === "Hard" ? "Hard" : module2?.difficulty === "Easy" ? "Easy" : "Not completed";

  // Transparent IRT-like approximation: weighted performance supplies most of the estimate;
  // the adaptive route shifts the attainable band without pretending to reproduce College Board parameters.
  const routeAdjustment = module2Path === "Hard" ? 32 : module2Path === "Easy" ? -22 : 0;
  const omissionPenalty = total ? Math.min(35, (unanswered / total) * 130) : 0;
  const rawScore = 200 + 600 * (0.72 * weightedAccuracy + 0.28 * accuracy) + routeAdjustment - omissionPenalty;
  const bestEstimate = roundedScore(rawScore);

  const domainBreakdown = breakdown(questions, answers, domainLabel);
  const difficultyBreakdown = breakdown(questions, answers, question => question.difficulty);
  const confidence = confidenceFor(total, unanswered, domainBreakdown);
  const halfWidth = confidence === "high" ? 20 : confidence === "medium" ? 30 : 50;
  const lowEstimate = roundedScore(bestEstimate - halfWidth);
  const highEstimate = roundedScore(bestEstimate + halfWidth);

  const studentResponseQuestions = questions.filter(question => question.questionType === "student-response");
  const studentResponse = studentResponseQuestions.length
    ? {
        label: "Student-produced response",
        correct: studentResponseQuestions.filter(question => isScoreAnswerCorrect(question, answers[question.examId])).length,
        total: studentResponseQuestions.length,
        accuracy: studentResponseQuestions.filter(question => isScoreAnswerCorrect(question, answers[question.examId])).length / studentResponseQuestions.length,
      }
    : undefined;

  return {
    section,
    bestEstimate,
    lowEstimate,
    highEstimate,
    confidence,
    module2Path,
    correct,
    total,
    unanswered,
    accuracy,
    weightedAccuracy,
    domainBreakdown,
    difficultyBreakdown,
    studentResponse,
  };
}

export function estimateSatScore(modules: ScoreModule[], answers: Record<string, ScoreAnswer>): SatScoreEstimate {
  const readingWriting = estimateSectionScore("Reading & Writing", modules, answers);
  const math = estimateSectionScore("Math", modules, answers);
  const confidence = readingWriting.confidence === "low" || math.confidence === "low"
    ? "low"
    : readingWriting.confidence === "high" && math.confidence === "high"
      ? "high"
      : "medium";

  return {
    readingWriting,
    math,
    bestTotal: readingWriting.bestEstimate + math.bestEstimate,
    lowTotal: readingWriting.lowEstimate + math.lowEstimate,
    highTotal: readingWriting.highEstimate + math.highEstimate,
    confidence,
    disclaimer: "Estimated SAT score — not an official College Board score.",
  };
}
