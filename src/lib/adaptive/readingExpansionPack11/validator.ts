import type { ExamQuestion } from "../types";
import {
  readingExpansionPack11,
} from "./index";

const expected = {
  Concision: {
    Easy: 4,
    Medium: 4,
    Hard: 4,
  },
  Transitions: {
    Easy: 4,
    Medium: 4,
    Hard: 4,
  },
} as const;

function normalize(
  value: string,
): string {
  return value
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function validateReadingExpansionPack11(
  questions: ExamQuestion[] =
    readingExpansionPack11,
) {
  const issues: string[] = [];
  const seenIds = new Set<string>();
  const seenContent =
    new Set<string>();

  for (const question of questions) {
    if (seenIds.has(question.examId)) {
      issues.push(
        `Duplicate examId: ${question.examId}`,
      );
    }

    seenIds.add(question.examId);

    const key = `${normalize(
      question.passage,
    )}::${normalize(
      question.prompt,
    )}`;

    if (seenContent.has(key)) {
      issues.push(
        `Duplicate passage and prompt: ${question.examId}`,
      );
    }

    seenContent.add(key);

    if (
      question.choices.length !== 4
    ) {
      issues.push(
        `Expected four choices: ${question.examId}`,
      );
    }

    if (
      question.choices.some(
        (choice) =>
          !choice.text.trim(),
      )
    ) {
      issues.push(
        `Empty choice: ${question.examId}`,
      );
    }

    if (
      question.answer < 0 ||
      question.answer >=
        question.choices.length
    ) {
      issues.push(
        `Invalid answer: ${question.examId}`,
      );
    }

    if (!question.walkthrough?.length) {
      issues.push(
        `Missing walkthrough: ${question.examId}`,
      );
    }
  }

  for (const [
    skill,
    target,
  ] of Object.entries(expected)) {
    const items = questions.filter(
      (question) =>
        question.skill === skill,
    );

    for (const difficulty of [
      "Easy",
      "Medium",
      "Hard",
    ] as const) {
      const count = items.filter(
        (question) =>
          question.difficulty ===
          difficulty,
      ).length;

      if (
        count !==
        target[difficulty]
      ) {
        issues.push(
          `${skill} ${difficulty}: expected ${target[difficulty]}, found ${count}`,
        );
      }
    }
  }

  if (questions.length !== 24) {
    issues.push(
      `Expected 24 questions; found ${questions.length}`,
    );
  }

  return {
    passed: issues.length === 0,
    issues,
    total: questions.length,
  };
}
