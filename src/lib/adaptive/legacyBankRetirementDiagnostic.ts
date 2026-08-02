import {
  readingWritingBank,
} from "./questionBank";
import {
  retireLegacyReadingBanks,
} from "./legacyBankRetirement";

export interface LegacyBankRetirementDiagnosticReport {
  passed: boolean;
  total: number;
  remainingRwVocab: number;
  remainingRwGrammarExtra: number;
  expectedTotal: number;
}

export function diagnoseLegacyBankRetirement(): LegacyBankRetirementDiagnosticReport {
  const result =
    retireLegacyReadingBanks(
      readingWritingBank,
    );

  const remainingRwVocab =
    readingWritingBank.filter(
      (question) =>
        (
          question.examId ||
          question.id
        ).startsWith(
          "rw-vocab-",
        ),
    ).length;

  const remainingRwGrammarExtra =
    readingWritingBank.filter(
      (question) =>
        (
          question.examId ||
          question.id
        ).startsWith(
          "rw-grammar-extra-",
        ),
    ).length;

  return {
    passed:
      remainingRwVocab === 0 &&
      remainingRwGrammarExtra === 0 &&
      readingWritingBank.length ===
        476 &&
      result.removed.length === 0,
    total:
      readingWritingBank.length,
    remainingRwVocab,
    remainingRwGrammarExtra,
    expectedTotal: 476,
  };
}
