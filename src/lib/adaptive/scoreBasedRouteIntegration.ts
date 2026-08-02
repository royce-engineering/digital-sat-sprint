import {
  buildMathAdaptiveExam,
} from "./mathAdaptiveEngine";
import {
  buildReadingAdaptiveExam,
} from "./readingAdaptiveEngine";
import {
  isScoreAnswerCorrect,
  type ScoreAnswer,
} from "./scoreEngine";
import type {
  ExamQuestion,
} from "./types";

export type AdaptiveSection =
  | "Reading & Writing"
  | "Math";

export interface RouteBoundaryCase {
  section: AdaptiveSection;
  label: string;
  correct: number;
  total: number;
  expectedRoute: "Easy" | "Hard";
}

export interface RouteIntegrationIssue {
  section: AdaptiveSection;
  label: string;
  code:
    | "wrong-route"
    | "wrong-score"
    | "wrong-unanswered"
    | "wrong-module-size"
    | "cross-module-duplicate"
    | "nondeterministic";
  message: string;
}

export interface RouteIntegrationCaseResult {
  section: AdaptiveSection;
  label: string;
  correct: number;
  total: number;
  unanswered: number;
  expectedRoute: "Easy" | "Hard";
  actualRoute: "Easy" | "Hard";
  module2Questions: number;
  overlap: number;
  passed: boolean;
}

export interface ScoreBasedRouteIntegrationReport {
  passed: boolean;
  threshold: number;
  readingBoundary: {
    easyMax: number;
    hardMin: number;
    total: number;
  };
  mathBoundary: {
    easyMax: number;
    hardMin: number;
    total: number;
  };
  cases: RouteIntegrationCaseResult[];
  issues: RouteIntegrationIssue[];
}

const THRESHOLD = 0.65;

function idOf(
  question: ExamQuestion,
): string {
  return question.examId || question.id;
}

function correctAnswer(
  question: ExamQuestion,
): ScoreAnswer {
  if (
    question.questionType ===
    "student-response"
  ) {
    return {
      selected: -1,
      typedAnswer:
        question.numericAnswer ??
        "",
      flagged: false,
      answeredAt: 1,
    };
  }

  return {
    selected:
      question.answer,
    typedAnswer: "",
    flagged: false,
    answeredAt: 1,
  };
}

function wrongAnswer(
  question: ExamQuestion,
): ScoreAnswer {
  if (
    question.questionType ===
    "student-response"
  ) {
    return {
      selected: -1,
      typedAnswer:
        "__definitely-wrong__",
      flagged: false,
      answeredAt: 1,
    };
  }

  const wrongIndex =
    question.choices.length > 1
      ? (
          question.answer + 1
        ) %
        question.choices.length
      : -1;

  return {
    selected:
      wrongIndex,
    typedAnswer: "",
    flagged: false,
    answeredAt: 1,
  };
}

function answersForCorrectCount(
  questions: readonly ExamQuestion[],
  correctCount: number,
  unansweredCount = 0,
): Record<string, ScoreAnswer> {
  const answers:
    Record<string, ScoreAnswer> = {};

  questions.forEach(
    (question, index) => {
      if (
        index <
        correctCount
      ) {
        answers[
          question.examId
        ] =
          correctAnswer(
            question,
          );
        return;
      }

      if (
        index <
        correctCount +
          unansweredCount
      ) {
        return;
      }

      answers[
        question.examId
      ] =
        wrongAnswer(
          question,
        );
    },
  );

  return answers;
}

function expectedHardMinimum(
  total: number,
): number {
  return Math.ceil(
    total * THRESHOLD,
  );
}

function readingCases(
  total: number,
): Array<{
  label: string;
  correct: number;
  unanswered: number;
  expectedRoute:
    | "Easy"
    | "Hard";
}> {
  const hardMin =
    expectedHardMinimum(
      total,
    );

  return [
    {
      label: "all-wrong",
      correct: 0,
      unanswered: 0,
      expectedRoute:
        "Easy",
    },
    {
      label:
        "all-unanswered",
      correct: 0,
      unanswered: total,
      expectedRoute:
        "Easy",
    },
    {
      label:
        "threshold-minus-one",
      correct:
        hardMin - 1,
      unanswered: 0,
      expectedRoute:
        "Easy",
    },
    {
      label: "threshold",
      correct: hardMin,
      unanswered: 0,
      expectedRoute:
        "Hard",
    },
    {
      label:
        "threshold-plus-one-with-unanswered",
      correct:
        hardMin + 1,
      unanswered: 2,
      expectedRoute:
        "Hard",
    },
    {
      label: "all-correct",
      correct: total,
      unanswered: 0,
      expectedRoute:
        "Hard",
    },
  ];
}

function validateResult(
  section: AdaptiveSection,
  label: string,
  expectedCorrect: number,
  expectedUnanswered: number,
  expectedRoute:
    | "Easy"
    | "Hard",
  module1: ExamQuestion[],
  module2: ExamQuestion[],
  actual: {
    correct: number;
    total: number;
    unanswered: number;
    route:
      | "Easy"
      | "Hard";
  },
): {
  result:
    RouteIntegrationCaseResult;
  issues:
    RouteIntegrationIssue[];
} {
  const issues:
    RouteIntegrationIssue[] = [];

  const module1Ids =
    new Set(
      module1.map(idOf),
    );
  const overlap =
    module2.filter(
      (question) =>
        module1Ids.has(
          idOf(question),
        ),
    ).length;

  if (
    actual.route !==
    expectedRoute
  ) {
    issues.push({
      section,
      label,
      code: "wrong-route",
      message: `Expected ${expectedRoute}; received ${actual.route}.`,
    });
  }

  if (
    actual.correct !==
    expectedCorrect
  ) {
    issues.push({
      section,
      label,
      code: "wrong-score",
      message: `Expected ${expectedCorrect} correct; received ${actual.correct}.`,
    });
  }

  if (
    actual.unanswered !==
    expectedUnanswered
  ) {
    issues.push({
      section,
      label,
      code:
        "wrong-unanswered",
      message: `Expected ${expectedUnanswered} unanswered; received ${actual.unanswered}.`,
    });
  }

  const expectedModule2Size =
    section ===
    "Reading & Writing"
      ? 27
      : 22;

  if (
    module2.length !==
    expectedModule2Size
  ) {
    issues.push({
      section,
      label,
      code:
        "wrong-module-size",
      message: `Expected ${expectedModule2Size} Module 2 questions; received ${module2.length}.`,
    });
  }

  if (overlap > 0) {
    issues.push({
      section,
      label,
      code:
        "cross-module-duplicate",
      message: `${overlap} Module 1 question(s) were reused in Module 2.`,
    });
  }

  return {
    result: {
      section,
      label,
      correct:
        actual.correct,
      total: actual.total,
      unanswered:
        actual.unanswered,
      expectedRoute,
      actualRoute:
        actual.route,
      module2Questions:
        module2.length,
      overlap,
      passed:
        issues.length === 0,
    },
    issues,
  };
}

export function runScoreBasedRouteIntegration(): ScoreBasedRouteIntegrationReport {
  const issues:
    RouteIntegrationIssue[] = [];
  const cases:
    RouteIntegrationCaseResult[] =
      [];

  const readingExam =
    buildReadingAdaptiveExam({
      module1Seed: 55_001,
      module2Seed: 55_002,
      hardRouteThreshold:
        THRESHOLD,
    });

  for (const testCase of readingCases(
    readingExam.module1.length,
  )) {
    const answers =
      answersForCorrectCount(
        readingExam.module1,
        testCase.correct,
        testCase.unanswered,
      );

    const result =
      readingExam.buildModule2(
        answers,
      );

    const repeated =
      readingExam.buildModule2(
        answers,
      );

    const validation =
      validateResult(
        "Reading & Writing",
        testCase.label,
        testCase.correct,
        testCase.unanswered,
        testCase.expectedRoute,
        readingExam.module1,
        result.questions,
        result.module1Result,
      );

    if (
      result.route !==
        repeated.route ||
      result.questions
        .map(idOf)
        .join("|") !==
        repeated.questions
          .map(idOf)
          .join("|")
    ) {
      validation.issues.push({
        section:
          "Reading & Writing",
        label:
          testCase.label,
        code:
          "nondeterministic",
        message:
          "The same answers and seeds produced a different Reading route or Module 2.",
      });

      validation.result.passed =
        false;
    }

    cases.push(
      validation.result,
    );
    issues.push(
      ...validation.issues,
    );
  }

  const mathExam =
    buildMathAdaptiveExam({
      module1Seed: 55_101,
      module2Seed: 55_102,
      hardRouteThreshold:
        THRESHOLD,
    });

  for (const testCase of readingCases(
    mathExam.module1.length,
  )) {
    const answers =
      answersForCorrectCount(
        mathExam.module1,
        testCase.correct,
        testCase.unanswered,
      );

    const independentlyCorrect =
      mathExam.module1.filter(
        (question) =>
          isScoreAnswerCorrect(
            question,
            answers[
              question.examId
            ],
          ),
      ).length;

    if (
      independentlyCorrect !==
      testCase.correct
    ) {
      issues.push({
        section: "Math",
        label:
          testCase.label,
        code: "wrong-score",
        message: `Generated answer fixture should produce ${testCase.correct} correct, but independent evaluation found ${independentlyCorrect}.`,
      });
    }

    const result =
      mathExam.buildModule2(
        answers,
      );

    const repeated =
      mathExam.buildModule2(
        answers,
      );

    const validation =
      validateResult(
        "Math",
        testCase.label,
        testCase.correct,
        testCase.unanswered,
        testCase.expectedRoute,
        mathExam.module1,
        result.questions,
        result.module1Result,
      );

    if (
      result.route !==
        repeated.route ||
      result.questions
        .map(idOf)
        .join("|") !==
        repeated.questions
          .map(idOf)
          .join("|")
    ) {
      validation.issues.push({
        section: "Math",
        label:
          testCase.label,
        code:
          "nondeterministic",
        message:
          "The same answers and seeds produced a different Math route or Module 2.",
      });

      validation.result.passed =
        false;
    }

    cases.push(
      validation.result,
    );
    issues.push(
      ...validation.issues,
    );
  }

  const readingTotal =
    readingExam.module1.length;
  const mathTotal =
    mathExam.module1.length;

  return {
    passed:
      issues.length === 0 &&
      cases.every(
        (testCase) =>
          testCase.passed,
      ),
    threshold:
      THRESHOLD,
    readingBoundary: {
      easyMax:
        expectedHardMinimum(
          readingTotal,
        ) - 1,
      hardMin:
        expectedHardMinimum(
          readingTotal,
        ),
      total:
        readingTotal,
    },
    mathBoundary: {
      easyMax:
        expectedHardMinimum(
          mathTotal,
        ) - 1,
      hardMin:
        expectedHardMinimum(
          mathTotal,
        ),
      total: mathTotal,
    },
    cases,
    issues,
  };
}
