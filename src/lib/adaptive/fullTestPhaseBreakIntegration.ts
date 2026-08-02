import {
  beginFullTestBreak,
  beginFullTestMath,
  completeFullTest,
  createFullTestAttempt,
  createFullTestState,
  fullTestBreakRemaining,
  isMathSessionComplete,
  isReadingSessionComplete,
  parseFullTestState,
  reconcileFullTestState,
  type FullTestState,
} from "./runtime/fullTestRuntime";
import type {
  MathSessionState,
} from "./session/mathSession";
import type {
  ReadingSessionState,
} from "./session/readingSession";

export interface FullTestPhaseCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface FullTestPhaseBreakReport {
  passed: boolean;
  checks: FullTestPhaseCheck[];
}

function check(
  name: string,
  passed: boolean,
  details: string,
): FullTestPhaseCheck {
  return {
    name,
    passed,
    details,
  };
}

function readingSession(
  phase: ReadingSessionState["phase"],
): ReadingSessionState {
  return {
    version: 1,
    phase,
    module1Seed: 1,
    module2Seed: 2,
    hardRouteThreshold: 0.65,
    module1QuestionIds: [
      "reading-m1",
    ],
    module2QuestionIds: [
      "reading-m2",
    ],
    module2Route: "Hard",
    answers: {},
    currentIndex: 0,
    secondsRemaining: 0,
    submissionState: {
      submitted: {},
    },
    startedAt: 1,
    updatedAt: 1,
  };
}

function mathSession(
  phase: MathSessionState["phase"],
): MathSessionState {
  return {
    version: 1,
    phase,
    module1Seed: 3,
    module2Seed: 4,
    hardRouteThreshold: 0.65,
    module1QuestionIds: [
      "math-m1",
    ],
    module2QuestionIds: [
      "math-m2",
    ],
    module2Route: "Easy",
    answers: {},
    currentIndex: 0,
    secondsRemaining: 0,
    submissionState: {
      submitted: {},
    },
    startedAt: 1,
    updatedAt: 1,
  };
}

export function runFullTestPhaseBreakIntegration(): FullTestPhaseBreakReport {
  const checks:
    FullTestPhaseCheck[] = [];

  const initial =
    createFullTestState(1000);

  checks.push(
    check(
      "Fresh controller starts at intro",
      initial.phase === "intro" &&
        initial.version === 1,
      `phase=${initial.phase}`,
    ),
  );

  const attempt =
    createFullTestAttempt(2000);

  checks.push(
    check(
      "Starting a full test enters Reading",
      attempt.phase === "reading" &&
        attempt.startedAt === 2000 &&
        attempt.readingStartedAt ===
          2000 &&
        Boolean(attempt.attemptId),
      `phase=${attempt.phase}; attemptId=${attempt.attemptId}`,
    ),
  );

  checks.push(
    check(
      "Section completion requires results plus both modules",
      isReadingSessionComplete(
        readingSession("results"),
      ) &&
        !isReadingSessionComplete(
          readingSession("module-2"),
        ) &&
        isMathSessionComplete(
          mathSession("results"),
        ) &&
        !isMathSessionComplete(
          mathSession("module-2"),
        ),
      "Reading and Math completion predicates are phase-aware.",
    ),
  );

  const afterReading =
    reconcileFullTestState(
      attempt,
      {
        readingComplete: true,
        mathComplete: false,
      },
      3000,
    );

  checks.push(
    check(
      "Completed Reading advances controller to break",
      afterReading.phase ===
        "break" &&
        afterReading
          .readingCompletedAt ===
          3000 &&
        afterReading
          .breakStartedAt ===
          3000,
      `phase=${afterReading.phase}; breakStartedAt=${afterReading.breakStartedAt}`,
    ),
  );

  const explicitBreak =
    beginFullTestBreak(
      attempt,
      3500,
    );

  checks.push(
    check(
      "Explicit break transition stamps completion and break time",
      explicitBreak.phase ===
        "break" &&
        explicitBreak
          .readingCompletedAt ===
          3500 &&
        explicitBreak
          .breakStartedAt ===
          3500,
      `phase=${explicitBreak.phase}`,
    ),
  );

  const breakState: FullTestState = {
    ...afterReading,
    breakStartedAt:
      10_000,
  };

  checks.push(
    check(
      "Break initially has ten minutes remaining",
      fullTestBreakRemaining(
        breakState,
        10_000,
      ) === 600,
      `${fullTestBreakRemaining(
        breakState,
        10_000,
      )} seconds remain.`,
    ),
  );

  checks.push(
    check(
      "Break counts down using elapsed wall-clock time",
      fullTestBreakRemaining(
        breakState,
        310_000,
      ) === 300,
      `${fullTestBreakRemaining(
        breakState,
        310_000,
      )} seconds remain.`,
    ),
  );

  checks.push(
    check(
      "Break expires at zero and never becomes negative",
      fullTestBreakRemaining(
        breakState,
        700_000,
      ) === 0,
      `${fullTestBreakRemaining(
        breakState,
        700_000,
      )} seconds remain.`,
    ),
  );

  const mathStarted =
    beginFullTestMath(
      breakState,
      700_000,
    );

  checks.push(
    check(
      "Beginning Math preserves prior timestamps and enters Math",
      mathStarted.phase ===
        "math" &&
        mathStarted.mathStartedAt ===
          700_000 &&
        mathStarted
          .readingCompletedAt ===
          breakState
            .readingCompletedAt,
      `phase=${mathStarted.phase}; mathStartedAt=${mathStarted.mathStartedAt}`,
    ),
  );

  const completed =
    reconcileFullTestState(
      mathStarted,
      {
        readingComplete: true,
        mathComplete: true,
      },
      800_000,
    );

  checks.push(
    check(
      "Completed Math advances controller to complete",
      completed.phase ===
        "complete" &&
        completed
          .mathCompletedAt ===
          800_000 &&
        completed.completedAt ===
          800_000,
      `phase=${completed.phase}; completedAt=${completed.completedAt}`,
    ),
  );

  const explicitlyCompleted =
    completeFullTest(
      mathStarted,
      810_000,
    );

  checks.push(
    check(
      "Explicit completion is forward-only and timestamped",
      explicitlyCompleted.phase ===
        "complete" &&
        explicitlyCompleted
          .mathCompletedAt ===
          810_000 &&
        explicitlyCompleted
          .completedAt ===
          810_000,
      `phase=${explicitlyCompleted.phase}`,
    ),
  );

  const staleReadingState: FullTestState = {
    ...attempt,
    phase: "reading",
  };

  const reconciledComplete =
    reconcileFullTestState(
      staleReadingState,
      {
        readingComplete: true,
        mathComplete: true,
      },
      900_000,
    );

  checks.push(
    check(
      "Reconciliation never moves a completed attempt backward",
      reconciledComplete.phase ===
        "complete",
      `phase=${reconciledComplete.phase}`,
    ),
  );

  const parsedInvalid =
    parseFullTestState(
      JSON.stringify({
        version: 99,
        phase: "broken",
      }),
      950_000,
    );

  checks.push(
    check(
      "Invalid persisted controller resets safely",
      parsedInvalid.phase ===
        "intro" &&
        parsedInvalid.version ===
          1,
      `phase=${parsedInvalid.phase}; version=${parsedInvalid.version}`,
    ),
  );

  const parsedValid =
    parseFullTestState(
      JSON.stringify(
        completed,
      ),
      960_000,
    );

  checks.push(
    check(
      "Valid persisted controller preserves completion state",
      parsedValid.phase ===
        "complete" &&
        parsedValid.completedAt ===
          completed.completedAt,
      `phase=${parsedValid.phase}; completedAt=${parsedValid.completedAt}`,
    ),
  );

  return {
    passed:
      checks.every(
        (item) =>
          item.passed,
      ),
    checks,
  };
}
