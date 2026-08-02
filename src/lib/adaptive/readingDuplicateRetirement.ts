import type {
  ExamQuestion,
} from "./types";

const RETIRED_DUPLICATE_IDS =
  new Set<string>([
    "rexp4-concision-07",
    "rexp4-concision-08",
    "rexp4-concision-11",
    "rexp4-concision-13",
    "rexp4-concision-15",
    "rexp4-transition-04",
    "rexp4-transition-06",
    "rexp4-transition-07",
    "rexp4-transition-08",
    "rexp5-agreement-16",
    "rexp6-parallel-07",
    "rexp6-parallel-13",
    "rexp6-pronouns-03",
    "rexp6-pronouns-06",
    "rexp6-pronouns-08",
    "rexp6-pronouns-11",
    "rexp6-pronouns-12",
    "rexp6-pronouns-13",
    "rexp6-pronouns-16",
  ]);

export interface DuplicateRetirementResult {
  questions: ExamQuestion[];
  removedIds: string[];
}

export function isRetiredDuplicateReadingQuestion(
  question: ExamQuestion,
): boolean {
  return RETIRED_DUPLICATE_IDS.has(
    question.examId ||
      question.id,
  );
}

/**
 * Retires the older rexp* predecessor from each verified rexp/repl duplicate
 * pair. The newer repl* replacement remains in the bank.
 */
export function retireVerifiedReadingDuplicates(
  questions: readonly ExamQuestion[],
): DuplicateRetirementResult {
  const removedIds: string[] = [];

  const retained = questions.filter(
    (question) => {
      if (
        !isRetiredDuplicateReadingQuestion(
          question,
        )
      ) {
        return true;
      }

      removedIds.push(
        question.examId ||
          question.id,
      );

      return false;
    },
  );

  return {
    questions: retained,
    removedIds,
  };
}

export function verifiedRetiredDuplicateIds(): string[] {
  return [
    ...RETIRED_DUPLICATE_IDS,
  ].sort();
}
