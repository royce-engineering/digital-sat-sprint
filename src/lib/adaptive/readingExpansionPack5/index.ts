import type { ExamQuestion } from "../types";
import {
  sentenceBoundariesExpansion5Questions,
} from "./sentenceBoundaries";
import {
  punctuationExpansion5Questions,
} from "./punctuation";
import {
  verbAgreementExpansion5Questions,
} from "./verbAgreement";

export const readingExpansionPack5: ExamQuestion[] = [
  ...sentenceBoundariesExpansion5Questions,
  ...punctuationExpansion5Questions,
  ...verbAgreementExpansion5Questions,
];

export {
  sentenceBoundariesExpansion5Questions,
  punctuationExpansion5Questions,
  verbAgreementExpansion5Questions,
};
