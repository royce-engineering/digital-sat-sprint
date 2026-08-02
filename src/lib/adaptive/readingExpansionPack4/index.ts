import type { ExamQuestion } from "../types";
import { concisionExpansion4Questions } from "./concision";
import { transitionsExpansion4Questions } from "./transitions";

export const readingExpansionPack4: ExamQuestion[] = [
  ...concisionExpansion4Questions,
  ...transitionsExpansion4Questions,
];

export {
  concisionExpansion4Questions,
  transitionsExpansion4Questions,
};
