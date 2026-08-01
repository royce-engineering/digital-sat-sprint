import type { ExamQuestion } from "./types";
import type { ScoreAnswer } from "./scoreEngine";
import { isScoreAnswerCorrect } from "./scoreEngine";
import { selectReadingModule } from "./selectModule";

export type ReadingModule2Route = "Easy" | "Hard";

export interface ReadingModule1Result {
  correct: number;
  total: number;
  unanswered: number;
  accuracy: number;
  route: ReadingModule2Route;
}

export interface BuildReadingAdaptiveExamOptions {
  module1Seed: number;
  module2Seed: number;
  hardRouteThreshold?: number;
}

export interface ReadingAdaptiveExam {
  module1: ExamQuestion[];
  scoreModule1: (
    answers: Record<string, ScoreAnswer>,
  ) => ReadingModule1Result;
  buildModule2: (
    answers: Record<string, ScoreAnswer>,
  ) => {
    route: ReadingModule2Route;
    questions: ExamQuestion[];
    module1Result: ReadingModule1Result;
  };
}

function isAnswered(question: ExamQuestion, answer?: ScoreAnswer): boolean {
  if (!answer) return false;

  if (question.questionType === "student-response") {
    return Boolean(answer.typedAnswer?.trim());
  }

  return answer.selected >= 0;
}

export function scoreReadingModule1(
  questions: ExamQuestion[],
  answers: Record<string, ScoreAnswer>,
  hardRouteThreshold = 0.65,
): ReadingModule1Result {
  if (hardRouteThreshold < 0 || hardRouteThreshold > 1) {
    throw new RangeError("hardRouteThreshold must be between 0 and 1.");
  }

  const total = questions.length;
  const correct = questions.filter((question) =>
    isScoreAnswerCorrect(question, answers[question.examId]),
  ).length;
  const unanswered = questions.filter(
    (question) => !isAnswered(question, answers[question.examId]),
  ).length;
  const accuracy = total ? correct / total : 0;

  return {
    correct,
    total,
    unanswered,
    accuracy,
    route: accuracy >= hardRouteThreshold ? "Hard" : "Easy",
  };
}

export function buildReadingAdaptiveExam({
  module1Seed,
  module2Seed,
  hardRouteThreshold = 0.65,
}: BuildReadingAdaptiveExamOptions): ReadingAdaptiveExam {
  const module1 = selectReadingModule({
    module: 1,
    seed: module1Seed,
  });

  const scoreModule1 = (
    answers: Record<string, ScoreAnswer>,
  ): ReadingModule1Result =>
    scoreReadingModule1(module1, answers, hardRouteThreshold);

  const buildModule2 = (answers: Record<string, ScoreAnswer>) => {
    const module1Result = scoreModule1(answers);
    const questions = selectReadingModule({
      module: 2,
      route: module1Result.route,
      seed: module2Seed,
      exclude: module1.map((question) => question.examId),
    });

    return {
      route: module1Result.route,
      questions,
      module1Result,
    };
  };

  return {
    module1,
    scoreModule1,
    buildModule2,
  };
}
