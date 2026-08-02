import type { ExamQuestion } from "../types";
import { sentenceBoundariesReplacementQuestions } from "./sentenceBoundaries";
import { punctuationReplacementQuestions } from "./punctuation";

export const readingExpansionPack8: ExamQuestion[] = [
  ...sentenceBoundariesReplacementQuestions,
  ...punctuationReplacementQuestions,
];

export {
  sentenceBoundariesReplacementQuestions,
  punctuationReplacementQuestions,
};
