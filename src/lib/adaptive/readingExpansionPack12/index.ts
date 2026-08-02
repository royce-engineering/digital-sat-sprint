import type { ExamQuestion } from "../types";
import { finalConcisionQuestions } from "./concision";
import { finalParallelStructureQuestions } from "./parallelStructure";
import { finalPronounQuestions } from "./pronouns";
import { finalTransitionQuestions } from "./transitions";
import { finalVerbAgreementQuestions } from "./verbAgreement";

export const readingExpansionPack12: ExamQuestion[] = [
  ...finalConcisionQuestions,
  ...finalParallelStructureQuestions,
  ...finalPronounQuestions,
  ...finalTransitionQuestions,
  ...finalVerbAgreementQuestions,
];

export {
  finalConcisionQuestions,
  finalParallelStructureQuestions,
  finalPronounQuestions,
  finalTransitionQuestions,
  finalVerbAgreementQuestions,
};
