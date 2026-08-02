import type { ExamQuestion } from "../types";
import {
  verbAgreementReplacementQuestions,
} from "./verbAgreement";
import {
  modifiersReplacementQuestions,
} from "./modifiers";

export const readingExpansionPack9: ExamQuestion[] = [
  ...verbAgreementReplacementQuestions,
  ...modifiersReplacementQuestions,
];

export {
  verbAgreementReplacementQuestions,
  modifiersReplacementQuestions,
};
