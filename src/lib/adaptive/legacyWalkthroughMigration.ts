import type { ExamQuestion } from "./types";

export interface WalkthroughMigrationResult {
  questions: ExamQuestion[];
  migratedIds: string[];
}

function fallbackRationale(
  question: ExamQuestion,
): string {
  const correctChoice =
    question.choices[
      question.answer
    ];

  return (
    correctChoice?.rationale?.trim() ||
    "The correct choice best satisfies the question and the relevant Reading or Standard English convention."
  );
}

/**
 * Adds walkthroughs only when a question does not already have one.
 *
 * No passage, prompt, choice, answer, metadata, or existing walkthrough is
 * changed.
 */
export function migrateLegacyReadingWalkthroughs(
  questions: readonly ExamQuestion[],
): WalkthroughMigrationResult {
  const migratedIds: string[] = [];

  const migrated = questions.map(
    (question): ExamQuestion => {
      if (
        question.walkthrough?.length
      ) {
        return question;
      }

      migratedIds.push(
        question.examId ||
          question.id,
      );

      return {
        ...question,
        walkthrough: [
          "Identify exactly what the question is asking and locate the relevant evidence or grammatical relationship.",
          fallbackRationale(
            question,
          ),
          "Eliminate choices that are unsupported, imprecise, redundant, or grammatically incorrect.",
        ],
      };
    },
  );

  return {
    questions: migrated,
    migratedIds,
  };
}
