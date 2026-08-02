import type { ExamQuestion } from "../types";
import { centralIdeasExpansion2Questions } from "./centralIdeas";
import { textStructureExpansion2Questions } from "./textStructure";
import { crossTextExpansion2Questions } from "./crossText";
import { quantitativeEvidenceExpansion2Questions } from "./quantitativeEvidence";

export const readingExpansionPack2: ExamQuestion[] = [
  ...centralIdeasExpansion2Questions,
  ...textStructureExpansion2Questions,
  ...crossTextExpansion2Questions,
  ...quantitativeEvidenceExpansion2Questions,
];

export {
  centralIdeasExpansion2Questions,
  textStructureExpansion2Questions,
  crossTextExpansion2Questions,
  quantitativeEvidenceExpansion2Questions,
};
