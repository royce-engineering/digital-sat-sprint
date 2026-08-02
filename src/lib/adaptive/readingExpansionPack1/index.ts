import type { ExamQuestion } from "../types";
import {
  centralIdeasExpansionQuestions,
} from "./centralIdeas";
import {
  textStructureExpansionQuestions,
} from "./textStructure";
import {
  crossTextExpansionQuestions,
} from "./crossText";
import {
  quantitativeEvidenceExpansionQuestions,
} from "./quantitativeEvidence";

export const readingExpansionPack1: ExamQuestion[] = [
  ...centralIdeasExpansionQuestions,
  ...textStructureExpansionQuestions,
  ...crossTextExpansionQuestions,
  ...quantitativeEvidenceExpansionQuestions,
];

export {
  centralIdeasExpansionQuestions,
  crossTextExpansionQuestions,
  quantitativeEvidenceExpansionQuestions,
  textStructureExpansionQuestions,
};
