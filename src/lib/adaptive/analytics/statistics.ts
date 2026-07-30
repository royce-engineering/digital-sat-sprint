import type { AdaptiveExamRecord, ExamQuestionResult } from "./history";
import type { ExamDifficulty, ExamSection } from "../types";

export interface AccuracySummary {
  correct: number;
  total: number;
  unanswered: number;
  accuracy: number;
}

export interface GroupedAccuracy extends AccuracySummary {
  label: string;
}

export interface RouteSummary {
  hard: number;
  easy: number;
  notCompleted: number;
  total: number;
  hardRate: number;
}

export interface AnalyticsSummary {
  attempts: number;
  completedQuestions: number;
  overall: AccuracySummary;
  readingWriting: AccuracySummary;
  math: AccuracySummary;
  byDomain: GroupedAccuracy[];
  bySkill: GroupedAccuracy[];
  byDifficulty: GroupedAccuracy[];
  routes: RouteSummary;
  flagged: AccuracySummary;
  averageDurationSeconds: number;
}

function emptyAccuracy(): AccuracySummary {
  return { correct: 0, total: 0, unanswered: 0, accuracy: 0 };
}

function finalize(summary: Omit<AccuracySummary, "accuracy">): AccuracySummary {
  return {
    ...summary,
    accuracy: summary.total ? summary.correct / summary.total : 0,
  };
}

function summarizeQuestions(questions: ExamQuestionResult[]): AccuracySummary {
  return finalize({
    correct: questions.filter((question) => question.correct).length,
    total: questions.length,
    unanswered: questions.filter((question) => !question.answered).length,
  });
}

function groupQuestions(
  questions: ExamQuestionResult[],
  labeler: (question: ExamQuestionResult) => string,
): GroupedAccuracy[] {
  const groups = new Map<string, ExamQuestionResult[]>();

  for (const question of questions) {
    const label = labeler(question) || "Unclassified";
    const current = groups.get(label) ?? [];
    current.push(question);
    groups.set(label, current);
  }

  return [...groups.entries()]
    .map(([label, values]) => ({ label, ...summarizeQuestions(values) }))
    .sort((a, b) => b.total - a.total || a.label.localeCompare(b.label));
}

export function getQuestionResults(records: AdaptiveExamRecord[]): ExamQuestionResult[] {
  return records.flatMap((record) => record.questionResults);
}

export function summarizeAccuracy(
  records: AdaptiveExamRecord[],
  section?: ExamSection,
): AccuracySummary {
  const questions = getQuestionResults(records).filter(
    (question) => section === undefined || question.section === section,
  );
  return summarizeQuestions(questions);
}

export function accuracyByDomain(
  records: AdaptiveExamRecord[],
  section?: ExamSection,
): GroupedAccuracy[] {
  const questions = getQuestionResults(records).filter(
    (question) => section === undefined || question.section === section,
  );
  return groupQuestions(questions, (question) => question.domain);
}

export function accuracyBySkill(
  records: AdaptiveExamRecord[],
  section?: ExamSection,
): GroupedAccuracy[] {
  const questions = getQuestionResults(records).filter(
    (question) => section === undefined || question.section === section,
  );
  return groupQuestions(questions, (question) => question.skill);
}

export function accuracyByDifficulty(
  records: AdaptiveExamRecord[],
  section?: ExamSection,
): GroupedAccuracy[] {
  const difficultyOrder: Record<ExamDifficulty, number> = {
    Easy: 0,
    Medium: 1,
    Hard: 2,
  };

  return groupQuestions(
    getQuestionResults(records).filter(
      (question) => section === undefined || question.section === section,
    ),
    (question) => question.difficulty,
  ).sort(
    (a, b) =>
      (difficultyOrder[a.label as ExamDifficulty] ?? 99) -
      (difficultyOrder[b.label as ExamDifficulty] ?? 99),
  );
}

export function flaggedAccuracy(records: AdaptiveExamRecord[]): AccuracySummary {
  return summarizeQuestions(getQuestionResults(records).filter((question) => question.flagged));
}

export function routeSummary(records: AdaptiveExamRecord[]): RouteSummary {
  let hard = 0;
  let easy = 0;
  let notCompleted = 0;

  for (const record of records) {
    for (const section of [record.readingWriting, record.math]) {
      if (!section) continue;
      if (section.module2Path === "Hard") hard += 1;
      else if (section.module2Path === "Easy") easy += 1;
      else notCompleted += 1;
    }
  }

  const total = hard + easy + notCompleted;
  const completed = hard + easy;
  return {
    hard,
    easy,
    notCompleted,
    total,
    hardRate: completed ? hard / completed : 0,
  };
}

export function averageDuration(records: AdaptiveExamRecord[]): number {
  if (!records.length) return 0;
  return Math.round(
    records.reduce((sum, record) => sum + record.durationSeconds, 0) / records.length,
  );
}

export function buildAnalyticsSummary(records: AdaptiveExamRecord[]): AnalyticsSummary {
  const allQuestions = getQuestionResults(records);

  return {
    attempts: records.length,
    completedQuestions: allQuestions.filter((question) => question.answered).length,
    overall: summarizeAccuracy(records),
    readingWriting: summarizeAccuracy(records, "Reading & Writing"),
    math: summarizeAccuracy(records, "Math"),
    byDomain: accuracyByDomain(records),
    bySkill: accuracyBySkill(records),
    byDifficulty: accuracyByDifficulty(records),
    routes: routeSummary(records),
    flagged: flaggedAccuracy(records),
    averageDurationSeconds: averageDuration(records),
  };
}

export function weakestGroups(groups: GroupedAccuracy[], limit = 3): GroupedAccuracy[] {
  return [...groups]
    .filter((group) => group.total > 0)
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
    .slice(0, Math.max(0, limit));
}

export function strongestGroups(groups: GroupedAccuracy[], limit = 3): GroupedAccuracy[] {
  return [...groups]
    .filter((group) => group.total > 0)
    .sort((a, b) => b.accuracy - a.accuracy || b.total - a.total)
    .slice(0, Math.max(0, limit));
}
