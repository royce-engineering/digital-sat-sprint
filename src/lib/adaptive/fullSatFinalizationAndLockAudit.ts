import {
  buildFullSatRecord,
  fullSatRecordId,
} from "./analytics/fullSatHistory";
import {
  assembleFullSat,
} from "./fullSatAssemblyAudit";
import {
  diagnoseSessionLease,
} from "./runtime/sessionLeaseDiagnostics";
import type {
  ScoreAnswer,
} from "./scoreEngine";
import type {
  ReadingSessionState,
} from "./session/readingSession";
import type {
  MathSessionState,
} from "./session/mathSession";
import type {
  ExamQuestion,
} from "./types";

export interface FullSatFinalizationCheck {
  category:
    | "History finalization"
    | "Result completeness"
    | "Cross-tab protection";
  name: string;
  passed: boolean;
  details: string;
}

export interface FullSatFinalizationAndLockAuditReport {
  passed: boolean;
  checks: FullSatFinalizationCheck[];
  failures: FullSatFinalizationCheck[];
}

function answerFor(
  question: ExamQuestion,
  answeredAt: number,
): ScoreAnswer {
  if (
    question.questionType ===
    "student-response"
  ) {
    return {
      selected: -1,
      typedAnswer:
        question.numericAnswer ??
        "0",
      flagged: false,
      answeredAt,
    };
  }

  return {
    selected:
      question.answer,
    typedAnswer: "",
    flagged: false,
    answeredAt,
  };
}

function answerMap(
  questions:
    readonly ExamQuestion[],
  startedAt: number,
): Record<string, ScoreAnswer> {
  return Object.fromEntries(
    questions.map(
      (question, index) => [
        question.examId,
        answerFor(
          question,
          startedAt +
            index * 1_000,
        ),
      ],
    ),
  );
}

function fixture() {
  const assembly =
    assembleFullSat(
      56_003,
      "Hard",
      "Hard",
    );

  const readingStartedAt =
    1_700_000_000_000;
  const mathStartedAt =
    readingStartedAt +
    3_000_000;

  const readingQuestions = [
    ...assembly.readingModule1,
    ...assembly.readingModule2,
  ];

  const mathQuestions = [
    ...assembly.mathModule1,
    ...assembly.mathModule2,
  ];

  const reading:
    ReadingSessionState = {
    version: 1,
    phase: "results",
    module1Seed: 56_003,
    module2Seed: 66_003,
    hardRouteThreshold: 18,
    module1QuestionIds:
      assembly.readingModule1.map(
        (question) =>
          question.examId,
      ),
    module2QuestionIds:
      assembly.readingModule2.map(
        (question) =>
          question.examId,
      ),
    module2Route: "Hard",
    answers: answerMap(
      readingQuestions,
      readingStartedAt,
    ),
    currentIndex: 0,
    secondsRemaining: 0,
    startedAt:
      readingStartedAt,
    updatedAt:
      readingStartedAt +
      2_500_000,
  };

  const math:
    MathSessionState = {
    version: 1,
    phase: "results",
    module1Seed: 76_003,
    module2Seed: 86_003,
    hardRouteThreshold: 15,
    module1QuestionIds:
      assembly.mathModule1.map(
        (question) =>
          question.examId,
      ),
    module2QuestionIds:
      assembly.mathModule2.map(
        (question) =>
          question.examId,
      ),
    module2Route: "Hard",
    answers: answerMap(
      mathQuestions,
      mathStartedAt,
    ),
    currentIndex: 0,
    secondsRemaining: 0,
    startedAt:
      mathStartedAt,
    updatedAt:
      mathStartedAt +
      2_000_000,
  };

  return {
    reading,
    math,
    readingQuestions,
    mathQuestions,
  };
}

function check(
  category:
    FullSatFinalizationCheck["category"],
  name: string,
  passed: boolean,
  details: string,
): FullSatFinalizationCheck {
  return {
    category,
    name,
    passed,
    details,
  };
}

export function auditFullSatFinalizationAndLock():
  FullSatFinalizationAndLockAuditReport {
  const checks:
    FullSatFinalizationCheck[] = [];

  const {
    reading,
    math,
    readingQuestions,
    mathQuestions,
  } = fixture();

  const completedAt =
    Math.max(
      reading.updatedAt,
      math.updatedAt,
    );

  const first =
    buildFullSatRecord(
      reading,
      math,
      completedAt,
    );

  const second =
    buildFullSatRecord(
      reading,
      math,
      completedAt,
    );

  const expectedId =
    fullSatRecordId(
      reading,
      math,
    );

  checks.push(
    check(
      "History finalization",
      "Completed sessions produce a combined record",
      Boolean(first),
      first
        ? `record=${first.id}`
        : "No record was built.",
    ),
  );

  checks.push(
    check(
      "History finalization",
      "Full SAT record ID is deterministic",
      Boolean(first) &&
        first?.id ===
          expectedId &&
        second?.id ===
          expectedId,
      expectedId,
    ),
  );

  checks.push(
    check(
      "History finalization",
      "Repeated pure builds are identical",
      JSON.stringify(first) ===
        JSON.stringify(second),
      "The same completed sessions and completion timestamp were built twice.",
    ),
  );

  checks.push(
    check(
      "Result completeness",
      "Combined result contains all 98 questions",
      first?.questionResults
        .length === 98,
      `questionResults=${first?.questionResults.length ?? 0}`,
    ),
  );

  checks.push(
    check(
      "Result completeness",
      "Reading contributes 54 questions",
      first?.questionResults.filter(
        (result) =>
          result.section ===
          "Reading & Writing",
      ).length === 54,
      `expected=${readingQuestions.length}`,
    ),
  );

  checks.push(
    check(
      "Result completeness",
      "Math contributes 44 questions",
      first?.questionResults.filter(
        (result) =>
          result.section ===
          "Math",
      ).length === 44,
      `expected=${mathQuestions.length}`,
    ),
  );

  checks.push(
    check(
      "Result completeness",
      "All canonical question IDs remain unique",
      Boolean(first) &&
        new Set(
          first?.questionResults.map(
            (result) =>
              result.examId,
          ),
        ).size === 98,
      "Checked all combined result exam IDs.",
    ),
  );

  checks.push(
    check(
      "Result completeness",
      "All fixture answers are represented",
      Boolean(first) &&
        Object.keys(
          first?.answers ?? {},
        ).length === 98,
      `answers=${Object.keys(first?.answers ?? {}).length}`,
    ),
  );

  checks.push(
    check(
      "History finalization",
      "Incomplete Reading prevents finalization",
      buildFullSatRecord(
        {
          ...reading,
          phase: "module-2",
        },
        math,
        completedAt,
      ) === undefined,
      "Reading phase changed from results to module-2.",
    ),
  );

  checks.push(
    check(
      "History finalization",
      "Incomplete Math prevents finalization",
      buildFullSatRecord(
        reading,
        {
          ...math,
          phase: "module-2",
        },
        completedAt,
      ) === undefined,
      "Math phase changed from results to module-2.",
    ),
  );

  const lease =
    diagnoseSessionLease();

  for (const item of lease.checks) {
    checks.push(
      check(
        "Cross-tab protection",
        item.name,
        item.passed,
        item.details,
      ),
    );
  }

  const failures =
    checks.filter(
      (item) =>
        !item.passed,
    );

  return {
    passed:
      failures.length === 0,
    checks,
    failures,
  };
}
