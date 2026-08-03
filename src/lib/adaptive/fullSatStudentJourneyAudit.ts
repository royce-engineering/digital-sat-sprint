import {
  FULL_TEST_BREAK_SECONDS,
  beginFullTestBreak,
  beginFullTestMath,
  completeFullTest,
  createFullTestAttempt,
  fullTestBreakRemaining,
  parseFullTestState,
  reconcileFullTestState,
  type FullTestState,
} from "./runtime/fullTestRuntime";

export type JourneyCheckStatus = "pass" | "fail";

export interface JourneyCheck {
  id: string;
  title: string;
  status: JourneyCheckStatus;
  details: string;
}

export interface FullSatStudentJourneyAuditReport {
  passed: boolean;
  checks: JourneyCheck[];
  failures: JourneyCheck[];
}

function check(
  id: string,
  title: string,
  condition: boolean,
  details: string,
): JourneyCheck {
  return {
    id,
    title,
    status: condition ? "pass" : "fail",
    details,
  };
}

export function auditFullSatStudentJourney(): FullSatStudentJourneyAuditReport {
  const checks: JourneyCheck[] = [];
  const t0 = 1_700_000_000_000;

  const attempt = createFullTestAttempt(t0);

  checks.push(
    check(
      "fresh-attempt",
      "Fresh attempt starts in Reading",
      attempt.phase === "reading" &&
        attempt.startedAt === t0 &&
        attempt.readingStartedAt === t0 &&
        Boolean(attempt.attemptId),
      `phase=${attempt.phase}`,
    ),
  );

  const afterReading = reconcileFullTestState(
    attempt,
    { readingComplete: true, mathComplete: false },
    t0 + 1_000,
  );

  checks.push(
    check(
      "reading-to-break",
      "Completed Reading advances to break",
      afterReading.phase === "break" &&
        afterReading.readingCompletedAt === t0 + 1_000 &&
        afterReading.breakStartedAt === t0 + 1_000,
      `phase=${afterReading.phase}`,
    ),
  );

  const refreshedBreak = parseFullTestState(
    JSON.stringify(afterReading),
    t0 + 120_000,
  );

  checks.push(
    check(
      "break-refresh",
      "Refresh preserves break start timestamp",
      refreshedBreak.phase === "break" &&
        refreshedBreak.breakStartedAt === afterReading.breakStartedAt,
      `breakStartedAt=${String(refreshedBreak.breakStartedAt)}`,
    ),
  );

  const breakAfterTwoMinutes = fullTestBreakRemaining(
    refreshedBreak,
    (afterReading.breakStartedAt ?? t0) + 120_000,
  );

  checks.push(
    check(
      "break-wall-clock",
      "Break countdown is wall-clock based",
      breakAfterTwoMinutes === FULL_TEST_BREAK_SECONDS - 120,
      `remaining=${breakAfterTwoMinutes}`,
    ),
  );

  const breakExpired = fullTestBreakRemaining(
    refreshedBreak,
    (afterReading.breakStartedAt ?? t0) + (FULL_TEST_BREAK_SECONDS + 30) * 1000,
  );

  checks.push(
    check(
      "break-expiry",
      "Break countdown clamps at zero",
      breakExpired === 0,
      `remaining=${breakExpired}`,
    ),
  );

  const mathState = beginFullTestMath(afterReading, t0 + 610_000);

  checks.push(
    check(
      "break-to-math",
      "Break advances to Math",
      mathState.phase === "math" && mathState.mathStartedAt === t0 + 610_000,
      `phase=${mathState.phase}`,
    ),
  );

  const afterMath = reconcileFullTestState(
    mathState,
    { readingComplete: true, mathComplete: true },
    t0 + 620_000,
  );

  checks.push(
    check(
      "math-to-complete",
      "Completed Math reconciles full test to complete",
      afterMath.phase === "complete" &&
        Boolean(afterMath.mathCompletedAt) &&
        Boolean(afterMath.completedAt),
      `phase=${afterMath.phase}`,
    ),
  );

  const explicitlyComplete = completeFullTest(mathState, t0 + 630_000);

  checks.push(
    check(
      "explicit-complete",
      "Explicit Finish full test is idempotent in timestamps",
      completeFullTest(explicitlyComplete, t0 + 640_000).completedAt ===
        explicitlyComplete.completedAt,
      `completedAt=${String(explicitlyComplete.completedAt)}`,
    ),
  );

  const corrupt = parseFullTestState("{not-json", t0);

  checks.push(
    check(
      "corrupt-controller",
      "Corrupt controller storage recovers to intro",
      corrupt.phase === "intro",
      `phase=${corrupt.phase}`,
    ),
  );

  const staleReading: FullTestState = {
    ...attempt,
    phase: "reading",
  };

  const staleRecovered = reconcileFullTestState(
    staleReading,
    { readingComplete: true, mathComplete: true },
    t0 + 700_000,
  );

  checks.push(
    check(
      "stale-controller-forward-only",
      "Stale controller moves forward to complete",
      staleRecovered.phase === "complete",
      `phase=${staleRecovered.phase}`,
    ),
  );

  // This models the current controller's Resume detected progress behavior:
  // createFullTestAttempt() followed by reconciliation using completion booleans.
  // An in-progress Math session is not represented by those booleans.
  const resumeBase = createFullTestAttempt(t0 + 800_000);
  const resumeWithReadingDoneAndMathInProgress = reconcileFullTestState(
    resumeBase,
    {
      readingComplete: true,
      mathComplete: false,
      mathStarted: true,
    },
    t0 + 800_001,
  );
  checks.push(
    check(
      "resume-math-in-progress",
      "Resume detects an in-progress Math section",
      resumeWithReadingDoneAndMathInProgress.phase === "math",
      `Current behavior resolves to phase=${resumeWithReadingDoneAndMathInProgress.phase}. Expected math when Reading is complete and a Math session already exists.`,
    ),
  );

  const failures = checks.filter((item) => item.status === "fail");

  return {
    passed: failures.length === 0,
    checks,
    failures,
  };
}
