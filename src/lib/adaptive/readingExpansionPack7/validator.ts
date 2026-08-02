import type { ExamQuestion } from "../types";
import {
  readingExpansionPack7,
} from "./index";

const expected = {
  "Words in Context": {
    Easy: 1,
    Medium: 3,
    Hard: 1,
  },
  "Main Idea": {
    Easy: 3,
    Medium: 1,
    Hard: 0,
  },
} as const;

export function validateReadingExpansionPack7(
  questions: ExamQuestion[] =
    readingExpansionPack7,
) {
  const issues: string[] = [];
  const seen = new Set<string>();
  const distribution: Record<
    string,
    {
      easy: number;
      medium: number;
      hard: number;
      total: number;
    }
  > = {};

  for (const question of questions) {
    if (seen.has(question.examId)) {
      issues.push(
        `Duplicate examId: ${question.examId}`,
      );
    }

    seen.add(question.examId);

    if (
      question.id !== question.examId
    ) {
      issues.push(
        `id/examId mismatch: ${question.examId}`,
      );
    }

    if (
      question.section !==
      "Reading & Writing"
    ) {
      issues.push(
        `Incorrect section: ${question.examId}`,
      );
    }

    if (question.choices.length !== 4) {
      issues.push(
        `Expected four choices: ${question.examId}`,
      );
    }

    if (
      question.answer < 0 ||
      question.answer >=
        question.choices.length
    ) {
      issues.push(
        `Invalid answer index: ${question.examId}`,
      );
    }

    if (!question.blueprint) {
      issues.push(
        `Missing blueprint: ${question.examId}`,
      );
    }

    if (!question.walkthrough?.length) {
      issues.push(
        `Missing walkthrough: ${question.examId}`,
      );
    }
  }

  for (const [skill, target] of Object.entries(
    expected,
  )) {
    const items = questions.filter(
      (question) =>
        question.skill === skill,
    );

    const actual = {
      easy: items.filter(
        (question) =>
          question.difficulty === "Easy",
      ).length,
      medium: items.filter(
        (question) =>
          question.difficulty ===
          "Medium",
      ).length,
      hard: items.filter(
        (question) =>
          question.difficulty === "Hard",
      ).length,
      total: items.length,
    };

    distribution[skill] = actual;

    if (
      actual.easy !== target.Easy ||
      actual.medium !== target.Medium ||
      actual.hard !== target.Hard
    ) {
      issues.push(
        `${skill}: expected ${target.Easy}/${target.Medium}/${target.Hard}; found ${actual.easy}/${actual.medium}/${actual.hard}.`,
      );
    }
  }

  if (questions.length !== 9) {
    issues.push(
      `Expected 9 questions; found ${questions.length}.`,
    );
  }

  return {
    passed: issues.length === 0,
    issues,
    total: questions.length,
    distribution,
  };
}
