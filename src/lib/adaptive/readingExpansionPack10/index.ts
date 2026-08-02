import type { ExamQuestion } from "../types";
import { parallelStructureReplacementQuestions } from "./parallelStructure";
import { pronounsReplacementQuestions } from "./pronouns";

export const readingExpansionPack10: ExamQuestion[] = [
  ...parallelStructureReplacementQuestions,
  ...pronounsReplacementQuestions,
];

export { parallelStructureReplacementQuestions, pronounsReplacementQuestions };
