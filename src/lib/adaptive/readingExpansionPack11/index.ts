import type { ExamQuestion } from "../types";
import {
  concisionReplacementQuestions,
} from "./concision";
import {
  transitionsReplacementQuestions,
} from "./transitions";

export const readingExpansionPack11: ExamQuestion[] = [
  ...concisionReplacementQuestions,
  ...transitionsReplacementQuestions,
];

export {
  concisionReplacementQuestions,
  transitionsReplacementQuestions,
};
