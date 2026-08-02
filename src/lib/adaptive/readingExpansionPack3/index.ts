import type { ExamQuestion } from "../types";
import { commandOfEvidenceExpansion3Questions } from "./commandOfEvidence";
import { authorsPurposeExpansion3Questions } from "./authorsPurpose";
import { inferenceExpansion3Questions } from "./inference";

export const readingExpansionPack3: ExamQuestion[] = [
  ...commandOfEvidenceExpansion3Questions,
  ...authorsPurposeExpansion3Questions,
  ...inferenceExpansion3Questions,
];

export {
  commandOfEvidenceExpansion3Questions,
  authorsPurposeExpansion3Questions,
  inferenceExpansion3Questions,
};
