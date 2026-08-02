import type { ExamQuestion } from "../types";
import {
  wordsInContextExpansion7Questions,
} from "./wordsInContext";
import {
  mainIdeaExpansion7Questions,
} from "./mainIdea";

export const readingExpansionPack7: ExamQuestion[] = [
  ...wordsInContextExpansion7Questions,
  ...mainIdeaExpansion7Questions,
];

export {
  wordsInContextExpansion7Questions,
  mainIdeaExpansion7Questions,
};
