import type { ExamQuestion } from "./types";

export interface LegacyBankRetirementResult {
  retained: ExamQuestion[];
  removed: ExamQuestion[];
  removedRwVocab: number;
  removedRwGrammarExtra: number;
}

export function isRetiredLegacyReadingQuestion(
  question: ExamQuestion,
): boolean {
  const id =
    question.examId ||
    question.id;

  return (
    id.startsWith("rw-vocab-") ||
    id.startsWith(
      "rw-grammar-extra-",
    )
  );
}

export function retireLegacyReadingBanks(
  questions: readonly ExamQuestion[],
): LegacyBankRetirementResult {
  const retained: ExamQuestion[] = [];
  const removed: ExamQuestion[] = [];

  for (const question of questions) {
    if (
      isRetiredLegacyReadingQuestion(
        question,
      )
    ) {
      removed.push(question);
    } else {
      retained.push(question);
    }
  }

  return {
    retained,
    removed,
    removedRwVocab:
      removed.filter(
        (question) =>
          (
            question.examId ||
            question.id
          ).startsWith(
            "rw-vocab-",
          ),
      ).length,
    removedRwGrammarExtra:
      removed.filter(
        (question) =>
          (
            question.examId ||
            question.id
          ).startsWith(
            "rw-grammar-extra-",
          ),
      ).length,
  };
}
