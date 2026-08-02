import type { ExamQuestion } from "../types";
import { readingExpansionPack2 } from "./index";

export interface Pack2ValidationIssue {
  questionId: string;
  message: string;
}

export interface Pack2ValidationReport {
  passed: boolean;
  issues: Pack2ValidationIssue[];
  total: number;
  distribution: Record<string, {
    easy: number;
    medium: number;
    hard: number;
    total: number;
  }>;
}

const expected = {
  "Central Ideas and Details": { easy: 0, medium: 2, hard: 6 },
  "Text Structure and Purpose": { easy: 0, medium: 2, hard: 6 },
  "Cross-Text Connections": { easy: 2, medium: 6, hard: 6 },
  "Quantitative Evidence": { easy: 2, medium: 6, hard: 6 },
};

export function validateReadingExpansionPack2(
  questions: ExamQuestion[] = readingExpansionPack2,
): Pack2ValidationReport {
  const issues: Pack2ValidationIssue[] = [];
  const seen = new Set<string>();

  for (const question of questions) {
    const id = question.examId || question.id;

    if (seen.has(id)) {
      issues.push({ questionId: id, message: "Duplicate examId." });
    }
    seen.add(id);

    if (question.id !== question.examId) {
      issues.push({ questionId: id, message: "id and examId must match." });
    }
    if (question.section !== "Reading & Writing") {
      issues.push({ questionId: id, message: "Incorrect section." });
    }
    if (question.choices.length !== 4) {
      issues.push({ questionId: id, message: "Expected four choices." });
    }
    if (question.answer < 0 || question.answer >= question.choices.length) {
      issues.push({ questionId: id, message: "Invalid answer index." });
    }
    if (!question.blueprint) {
      issues.push({ questionId: id, message: "Missing blueprint." });
    }
    if (!question.walkthrough?.length) {
      issues.push({ questionId: id, message: "Missing walkthrough." });
    }
  }

  const distribution: Pack2ValidationReport["distribution"] = {};

  for (const skill of Object.keys(expected)) {
    const items = questions.filter((q) => q.skill === skill);
    distribution[skill] = {
      easy: items.filter((q) => q.difficulty === "Easy").length,
      medium: items.filter((q) => q.difficulty === "Medium").length,
      hard: items.filter((q) => q.difficulty === "Hard").length,
      total: items.length,
    };

    const target = expected[skill as keyof typeof expected];
    const actual = distribution[skill];

    if (
      actual.easy !== target.easy ||
      actual.medium !== target.medium ||
      actual.hard !== target.hard
    ) {
      issues.push({
        questionId: skill,
        message: `Expected ${target.easy}/${target.medium}/${target.hard}; found ${actual.easy}/${actual.medium}/${actual.hard}.`,
      });
    }
  }

  if (questions.length !== 44) {
    issues.push({
      questionId: "reading-expansion-pack-2",
      message: `Expected 44 questions; found ${questions.length}.`,
    });
  }

  return {
    passed: issues.length === 0,
    issues,
    total: questions.length,
    distribution,
  };
}
