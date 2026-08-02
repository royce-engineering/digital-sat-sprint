import type { ExamQuestion } from "../types";
import {
  modifiersExpansion6Questions,
} from "./modifiers";
import {
  parallelStructureExpansion6Questions,
} from "./parallelStructure";
import {
  pronounsExpansion6Questions,
} from "./pronouns";

export const readingExpansionPack6: ExamQuestion[] = [
  ...modifiersExpansion6Questions,
  ...parallelStructureExpansion6Questions,
  ...pronounsExpansion6Questions,
];

export {
  modifiersExpansion6Questions,
  parallelStructureExpansion6Questions,
  pronounsExpansion6Questions,
};
