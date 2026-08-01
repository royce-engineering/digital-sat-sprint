import type { ExamQuestion } from "./types";
import type { ScoreAnswer } from "./scoreEngine";
import { isScoreAnswerCorrect } from "./scoreEngine";
import {
  selectMathModule,
  type MathAdaptiveRoute,
} from "./selectMathModule";

export interface MathModule1Result {
  correct: number;
  total: number;
  unanswered: number;
  accuracy: number;
  route: MathAdaptiveRoute;
}

export interface BuildMathAdaptiveExamOptions {
  module1Seed: number;
  module2Seed: number;
  hardRouteThreshold?: number;
}

export interface MathModule2Result {
  route: MathAdaptiveRoute;
  questions: ExamQuestion[];
  module1Result: MathModule1Result;
}

export interface MathAdaptiveExam {
  module1: ExamQuestion[];
  scoreModule1: (
    answers: Record<string, ScoreAnswer>,
  ) => MathModule1Result;
  buildModule2: (
    answers: Record<string, ScoreAnswer>,
  ) => MathModule2Result;
}

function isAnswered(question: ExamQuestion, answer?: ScoreAnswer): boolean {
  if (!answer) return false;

  if (question.questionType === "student-response") {
    return Boolean(answer.typedAnswer?.trim());
  }

  return answer.selected >= 0;
}

/**
 * Scores Math Module 1 and chooses the Module 2 route.
 *
 * The default threshold is 65% correct. This is a project-level routing
 * rule, not an official College Board scoring or routing algorithm.
 */
export function scoreMathModule1(
  questions: ExamQuestion[],
  answers: Record<string, ScoreAnswer>,
  hardRouteThreshold = 0.65,
): MathModule1Result {
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

/**
 * Creates Math Module 1 immediately and exposes functions for scoring it
 * and constructing the adaptive Module 2.
 */
export function buildMathAdaptiveExam({
  module1Seed,
  module2Seed,
  hardRouteThreshold = 0.65,
}: BuildMathAdaptiveExamOptions): MathAdaptiveExam {
  const module1 = selectMathModule({
    module: 1,
    seed: module1Seed,
  });

  const scoreModule1 = (
    answers: Record<string, ScoreAnswer>,
  ): MathModule1Result =>
    scoreMathModule1(module1, answers, hardRouteThreshold);

  const buildModule2 = (
    answers: Record<string, ScoreAnswer>,
  ): MathModule2Result => {
    const module1Result = scoreModule1(answers);
    const questions = selectMathModule({
      module: 2,
      route: module1Result.route,
      seed: module2Seed,

      // selectByBlueprint() compares exclusions against examId.
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
