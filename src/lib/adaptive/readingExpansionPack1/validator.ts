import type {
  ExamQuestion,
} from "../types";
import {
  readingExpansionPack1,
} from "./index";

export interface ExpansionValidationIssue {
  questionId: string;
  message: string;
}

export interface ExpansionCoverageSummary {
  skill: string;
  easy: number;
  medium: number;
  hard: number;
  total: number;
  module1: number;
  module2: number;
}

export interface ExpansionValidationReport {
  passed: boolean;
  issues: ExpansionValidationIssue[];
  coverage: ExpansionCoverageSummary[];
  total: number;
}

const expected = {
  "Central Ideas and Details": {
    Easy: 8,
    Medium: 8,
    Hard: 0,
  },
  "Text Structure and Purpose": {
    Easy: 8,
    Medium: 8,
    Hard: 0,
  },
  "Cross-Text Connections": {
    Easy: 4,
    Medium: 2,
    Hard: 2,
  },
  "Quantitative Evidence": {
    Easy: 4,
    Medium: 2,
    Hard: 2,
  },
} as const;

function validateQuestion(
  question: ExamQuestion,
): ExpansionValidationIssue[] {
  const issues: ExpansionValidationIssue[] = [];
  const add = (message: string) =>
    issues.push({
      questionId:
        question.examId || question.id,
      message,
    });

  if (!question.id?.trim()) add("Missing id.");
  if (!question.examId?.trim()) {
    add("Missing examId.");
  }
  if (question.id !== question.examId) {
    add("id and examId must match.");
  }
  if (
    question.section !==
    "Reading & Writing"
  ) {
    add("Incorrect section.");
  }
  if (
    question.courseId !==
    "reading-expansion-pack-1"
  ) {
    add("Incorrect courseId.");
  }
  if (!question.passage.trim()) {
    add("Passage is empty.");
  }
  if (!question.prompt.trim()) {
    add("Prompt is empty.");
  }
  if (question.choices.length !== 4) {
    add(
      `Expected 4 choices; found ${question.choices.length}.`,
    );
  }
  if (
    !Number.isInteger(
      question.answer,
    ) ||
    question.answer < 0 ||
    question.answer >=
      question.choices.length
  ) {
    add("Invalid answer index.");
  }
  if (
    question.choices.some(
      (choice) =>
        !choice.text.trim() ||
        !choice.rationale.trim(),
    )
  ) {
    add(
      "Every choice needs text and rationale.",
    );
  }
  if (!question.walkthrough?.length) {
    add("Missing walkthrough.");
  }
  if (!question.blueprint) {
    add("Missing blueprint.");
  } else {
    if (
      question.blueprint.domain !==
      question.domain
    ) {
      add("Blueprint domain mismatch.");
    }
    if (
      question.blueprint.skill !==
      question.skill
    ) {
      add("Blueprint skill mismatch.");
    }
    if (
      question.blueprint.difficulty !==
      question.difficulty
    ) {
      add(
        "Blueprint difficulty mismatch.",
      );
    }
    if (
      question.blueprint.passageType !==
      question.passageType
    ) {
      add(
        "Blueprint passage type mismatch.",
      );
    }
  }

  return issues;
}

function coverageFor(
  questions: ExamQuestion[],
): ExpansionCoverageSummary[] {
  return Object.keys(expected).map(
    (skill) => {
      const skillQuestions =
        questions.filter(
          (question) =>
            question.skill === skill,
        );

      return {
        skill,
        easy: skillQuestions.filter(
          (question) =>
            question.difficulty ===
            "Easy",
        ).length,
        medium:
          skillQuestions.filter(
            (question) =>
              question.difficulty ===
              "Medium",
          ).length,
        hard: skillQuestions.filter(
          (question) =>
            question.difficulty ===
            "Hard",
        ).length,
        total: skillQuestions.length,
        module1:
          skillQuestions.filter(
            (question) =>
              question.blueprint
                ?.module === 1,
          ).length,
        module2:
          skillQuestions.filter(
            (question) =>
              question.blueprint
                ?.module === 2,
          ).length,
      };
    },
  );
}

export function validateReadingExpansionPack1(
  questions: ExamQuestion[] =
    readingExpansionPack1,
): ExpansionValidationReport {
  const issues =
    questions.flatMap(
      validateQuestion,
    );
  const seen = new Set<string>();

  for (const question of questions) {
    if (seen.has(question.examId)) {
      issues.push({
        questionId:
          question.examId,
        message:
          "Duplicate examId within expansion pack.",
      });
    }

    seen.add(question.examId);
  }

  const coverage =
    coverageFor(questions);

  for (const row of coverage) {
    const target =
      expected[
        row.skill as keyof typeof expected
      ];

    if (!target) continue;

    if (row.easy !== target.Easy) {
      issues.push({
        questionId: row.skill,
        message: `Expected ${target.Easy} Easy; found ${row.easy}.`,
      });
    }
    if (
      row.medium !== target.Medium
    ) {
      issues.push({
        questionId: row.skill,
        message: `Expected ${target.Medium} Medium; found ${row.medium}.`,
      });
    }
    if (row.hard !== target.Hard) {
      issues.push({
        questionId: row.skill,
        message: `Expected ${target.Hard} Hard; found ${row.hard}.`,
      });
    }
  }

  if (questions.length !== 48) {
    issues.push({
      questionId:
        "reading-expansion-pack-1",
      message: `Expected 48 questions; found ${questions.length}.`,
    });
  }

  return {
    passed: issues.length === 0,
    issues,
    coverage,
    total: questions.length,
  };
}
