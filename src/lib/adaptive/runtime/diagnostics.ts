import {
  FULL_TEST_BREAK_SECONDS,
  beginFullTestBreak,
  beginFullTestMath,
  completeFullTest,
  createFullTestAttempt,
  fullTestBreakRemaining,
  parseFullTestState,
  reconcileFullTestState,
} from "./fullTestRuntime";

export interface RuntimeDiagnosticCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface RuntimeDiagnosticReport {
  passed: boolean;
  checks: RuntimeDiagnosticCheck[];
}

function check(
  name: string,
  passed: boolean,
  details: string,
): RuntimeDiagnosticCheck {
  return { name, passed, details };
}

export function diagnoseFullTestRuntime(): RuntimeDiagnosticReport {
  const checks: RuntimeDiagnosticCheck[] = [];
  const start = 1_000_000;
  const attempt = createFullTestAttempt(start);

  checks.push(
    check(
      "Fresh attempt starts in Reading",
      attempt.phase === "reading" &&
        attempt.startedAt === start &&
        Boolean(attempt.attemptId),
      `${attempt.phase} · ${attempt.attemptId}`,
    ),
  );

  const recovered = parseFullTestState(
    "{not-valid-json",
    start,
  );

  checks.push(
    check(
      "Corrupt storage recovers to intro",
      recovered.phase === "intro" &&
        recovered.version === 1,
      `Recovered phase: ${recovered.phase}.`,
    ),
  );

  const afterReading = reconcileFullTestState(
    attempt,
    {
      readingComplete: true,
      mathComplete: false,
    },
    start + 5000,
  );

  checks.push(
    check(
      "Completed Reading advances once to break",
      afterReading.phase === "break" &&
        afterReading.breakStartedAt === start + 5000,
      `Phase ${afterReading.phase}.`,
    ),
  );

  const reconciledAgain = reconcileFullTestState(
    afterReading,
    {
      readingComplete: true,
      mathComplete: false,
    },
    start + 9000,
  );

  checks.push(
    check(
      "Repeated reconciliation preserves break start",
      reconciledAgain.breakStartedAt ===
        afterReading.breakStartedAt,
      `Break started at ${reconciledAgain.breakStartedAt}.`,
    ),
  );

  const remaining = fullTestBreakRemaining(
    afterReading,
    start + 65_000,
  );

  checks.push(
    check(
      "Break timer derives from timestamp",
      remaining === FULL_TEST_BREAK_SECONDS - 60,
      `${remaining} seconds remain.`,
    ),
  );

  const math = beginFullTestMath(
    beginFullTestBreak(attempt, start + 5000),
    start + 605_000,
  );

  checks.push(
    check(
      "Math transition records one start time",
      math.phase === "math" &&
        math.mathStartedAt === start + 605_000,
      `Math started at ${math.mathStartedAt}.`,
    ),
  );

  const complete = reconcileFullTestState(
    math,
    {
      readingComplete: true,
      mathComplete: true,
    },
    start + 900_000,
  );
  const completedAgain = completeFullTest(
    complete,
    start + 910_000,
  );

  checks.push(
    check(
      "Completion timestamps are idempotent",
      complete.phase === "complete" &&
        completedAgain.completedAt ===
          complete.completedAt &&
        completedAgain.mathCompletedAt ===
          complete.mathCompletedAt,
      `Completed at ${completedAgain.completedAt}.`,
    ),
  );

  return {
    passed: checks.every((item) => item.passed),
    checks,
  };
}
