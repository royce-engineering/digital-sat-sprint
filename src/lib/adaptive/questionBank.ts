import type { ExamQuestion } from "./types";
import { advancedReadingBank } from "./advancedReadingBank";
import { readingBankV2, wordsInContextV2 } from "./readingBankV2";
import { readingHardPack1 } from "./readingHardPack1";
import { supplementalGrammarBank, vocabularyExamBank } from "./supplementalBank";

// Add your existing banks to this array as additional spreads.
export const readingWritingBank: ExamQuestion[] = [
  ...readingBankV2,
  ...advancedReadingBank,
  ...wordsInContextV2,
  ...supplementalGrammarBank,
  ...vocabularyExamBank,
  ...readingHardPack1,
];

export function getQuestion(id: string): ExamQuestion | undefined {
  return readingWritingBank.find((question) => question.id === id);
}

export const bankStats = {
  totalReadingWriting: readingWritingBank.length,
  readingHardPack1: readingHardPack1.length,
};
