import type { ExamQuestion } from "./types";
import { advancedReadingBank } from "./advancedReadingBank";
import { mathBankV2 } from "./mathBankV2";
import { readingBankV2, wordsInContextV2 } from "./readingBankV2";
import { readingHardPack1 } from "./readingHardPack1";
import { readingExpansionPack1 } from "./readingExpansionPack1";
import { readingExpansionPack2 } from "./readingExpansionPack2";
import { readingExpansionPack3 } from "./readingExpansionPack3";
import { readingExpansionPack4 } from "./readingExpansionPack4";
import { readingExpansionPack5 } from "./readingExpansionPack5";
import { readingExpansionPack6 } from "./readingExpansionPack6";
import { readingExpansionPack7 } from "./readingExpansionPack7";
import { readingExpansionPack8 } from "./readingExpansionPack8";
import { readingExpansionPack9 } from "./readingExpansionPack9";
import { readingExpansionPack10 } from "./readingExpansionPack10";
import { readingExpansionPack11 } from "./readingExpansionPack11";
import { migrateLegacyReadingWalkthroughs } from "./legacyWalkthroughMigration";
import { retireVerifiedReadingDuplicates } from "./readingDuplicateRetirement";
import { readingExpansionPack12 } from "./readingExpansionPack12";
import { repairMathContent } from "./mathContentRepair";
import { generateVerifiedMathWalkthroughs } from "./mathGeneratedWalkthroughs";
import { mathExpansionPack1 } from "./mathExpansionPack1";
import { mathExpansionPack2 } from "./mathExpansionPack2";
import { mathExpansionPack3 } from "./mathExpansionPack3";
import { mathExpansionPack4 } from "./mathExpansionPack4";
import { vocabularyExpansionPack1 } from "./vocabularyExpansionPack1";
import { vocabularyExpansionPack2 } from "./vocabularyExpansionPack2";
import { vocabularyExpansionPack3 } from "./vocabularyExpansionPack3";

// Add your existing banks to this array as additional spreads.
const readingWritingBankBase: ExamQuestion[] = [
  ...readingBankV2,
  ...advancedReadingBank,
  ...wordsInContextV2,
  ...readingHardPack1,
  ...readingExpansionPack1,
  ...readingExpansionPack2,
  ...readingExpansionPack3,
  ...readingExpansionPack4,
  ...readingExpansionPack5,
  ...readingExpansionPack6,
  ...readingExpansionPack7,
  ...readingExpansionPack8,
  ...readingExpansionPack9,
  ...readingExpansionPack10,
  ...readingExpansionPack11,
  ...readingExpansionPack12,
  ...vocabularyExpansionPack1,
  ...vocabularyExpansionPack2,
  ...vocabularyExpansionPack3,
];
const readingWritingBankWithoutVerifiedDuplicates =
  retireVerifiedReadingDuplicates(readingWritingBankBase).questions;

export const readingWritingBank: ExamQuestion[] =
  migrateLegacyReadingWalkthroughs(
    readingWritingBankWithoutVerifiedDuplicates,
  ).questions;

const rawMathBank: ExamQuestion[] = [
  ...mathBankV2,
  ...mathExpansionPack1,
  ...mathExpansionPack2,
  ...mathExpansionPack3,
  ...mathExpansionPack4,
];

const repairedMathBank = repairMathContent(rawMathBank).questions;

export const mathBank: ExamQuestion[] =
  generateVerifiedMathWalkthroughs(repairedMathBank).questions;

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
  readingExpansionPack1: readingExpansionPack1.length,
  readingExpansionPack2: readingExpansionPack2.length,
  readingExpansionPack3: readingExpansionPack3.length,
  readingExpansionPack4: readingExpansionPack4.length,
  readingExpansionPack5: readingExpansionPack5.length,
  readingExpansionPack6: readingExpansionPack6.length,
  readingExpansionPack7: readingExpansionPack7.length,
  readingExpansionPack8: readingExpansionPack8.length,
  readingExpansionPack9: readingExpansionPack9.length,
  readingExpansionPack10: readingExpansionPack10.length,
  readingExpansionPack11: readingExpansionPack11.length,
  readingExpansionPack12: readingExpansionPack12.length,
  readingWritingBankBase: readingWritingBankBase.length,
  withoutDuplicates: readingWritingBankWithoutVerifiedDuplicates.length,
  mathBankV2: mathBankV2.length,
  mathExpansionPack1: mathExpansionPack1.length,
  mathExpansionPack2: mathExpansionPack2.length,
  mathExpansionPack3: mathExpansionPack3.length,
  mathExpansionPack4: mathExpansionPack4.length,
  rawMath: rawMathBank.length,
  vocabularyExpansionPack1: vocabularyExpansionPack1.length,
  vocabularyExpansionPack2: vocabularyExpansionPack2.length,
  vocabularyExpansionPack3: vocabularyExpansionPack3.length,
};
