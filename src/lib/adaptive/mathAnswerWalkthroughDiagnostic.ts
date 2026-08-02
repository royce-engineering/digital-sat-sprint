import {
  mathBank,
} from "./questionBank";
import {
  generateVerifiedMathWalkthroughs,
} from "./mathGeneratedWalkthroughs";

export interface MathAnswerWalkthroughDiagnosticReport {
  passed: boolean;
  totalQuestions: number;
  generatedWalkthroughs: number;
  remainingMissingWalkthroughs: number;
  unsupportedQuestions: number;
  answerIntegrityIssues: number;
  unsupportedIds: string[];
  answerIssues: {
    questionId: string;
    questionType: string;
    expectedAnswer: string;
    storedAnswer: string;
    message: string;
  }[];
}

export function diagnoseMathAnswerIntegrityAndWalkthroughs(): MathAnswerWalkthroughDiagnosticReport {
  const result =
    generateVerifiedMathWalkthroughs(
      mathBank,
    );

  const remaining =
    result.questions.filter(
      (question) =>
        !question.walkthrough
          ?.length,
    ).length;

  return {
    passed:
      remaining === 0 &&
      result.unsupportedIds
        .length === 0 &&
      result.answerIssues
        .length === 0,
    totalQuestions:
      result.questions.length,
    generatedWalkthroughs:
      result.generatedIds.length,
    remainingMissingWalkthroughs:
      remaining,
    unsupportedQuestions:
      result.unsupportedIds
        .length,
    answerIntegrityIssues:
      result.answerIssues
        .length,
    unsupportedIds:
      result.unsupportedIds,
    answerIssues:
      result.answerIssues,
  };
}
