import type { ExamQuestion } from "../types";
import { astronomyHardQuestions } from "./astronomy";
import { ecologyHardQuestions } from "./ecology";
import { economicsHardQuestions } from "./economics";
import { geneticsHardQuestions } from "./genetics";
import { historyHardQuestions } from "./history";
import { literatureHardQuestions } from "./literature";

export const readingHardPack1: ExamQuestion[] = [
  ...ecologyHardQuestions,
  ...geneticsHardQuestions,
  ...astronomyHardQuestions,
  ...economicsHardQuestions,
  ...historyHardQuestions,
  ...literatureHardQuestions,
];

export {
  astronomyHardQuestions,
  ecologyHardQuestions,
  economicsHardQuestions,
  geneticsHardQuestions,
  historyHardQuestions,
  literatureHardQuestions,
};
