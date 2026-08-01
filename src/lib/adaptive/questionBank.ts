import type { ExamQuestion } from "./types";
import { advancedReadingBank } from "./advancedReadingBank";
import { mathBankV2 } from "./mathBankV2";
import { readingBankV2, wordsInContextV2 } from "./readingBankV2";
import { readingHardPack1 } from "./readingHardPack1";
import {
  supplementalGrammarBank,
  vocabularyExamBank,
} from "./supplementalBank";

// Add your existing banks to this array as additional spreads.
export const readingWritingBank: ExamQuestion[] = [
  ...readingBankV2,
  ...advancedReadingBank,
  ...wordsInContextV2,
  ...supplementalGrammarBank,
  ...vocabularyExamBank,
  ...readingHardPack1,
];

export const mathBank: ExamQuestion[] = mathBankV2;

export const fullQuestionBank: ExamQuestion[] = [
  ...readingWritingBank,
  ...mathBank,
];

const questionById = new Map<string, ExamQuestion>();

for (const question of fullQuestionBank) {
  /*
   * Most existing score/session code stores CourseQuestion.id, while adaptive
   * answer maps use ExamQuestion.examId. Supporting both identifiers keeps
   * old Reading records compatible and allows Math score reconstruction.
   */
  questionById.set(question.id, question);
  questionById.set(question.examId, question);
}

export function getQuestion(id: string): ExamQuestion | undefined {
  return questionById.get(id);
}

export const bankStats = {
  totalReadingWriting: readingWritingBank.length,
  totalMath: mathBank.length,
  total: fullQuestionBank.length,
  readingHardPack1: readingHardPack1.length,
};
