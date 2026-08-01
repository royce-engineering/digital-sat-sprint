import {
  phaseUsesModuleTimer,
  readDeadlineTimer,
  resetDeadlineTimer,
  startDeadlineTimer,
} from "./deadlineTimer";

export interface TimerDiagnosticCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface TimerDiagnosticReport {
  passed: boolean;
  checks: TimerDiagnosticCheck[];
}

function check(
  name: string,
  passed: boolean,
  details: string,
): TimerDiagnosticCheck {
  return { name, passed, details };
}

export function diagnoseDeadlineTimer(): TimerDiagnosticReport {
  const checks: TimerDiagnosticCheck[] = [];
  const start = 1_000_000;
  const timer = startDeadlineTimer(
    120,
    start,
  );

  checks.push(
    check(
      "Timer creates an absolute deadline",
      timer.timerDeadlineAt ===
        start + 120_000,
      String(timer.timerDeadlineAt),
    ),
  );

  const after30Seconds = readDeadlineTimer(
    timer,
    start + 30_000,
  );

  checks.push(
    check(
      "Elapsed background time is deducted",
      after30Seconds.secondsRemaining === 90,
      `${after30Seconds.secondsRemaining} seconds remain.`,
    ),
  );

  const afterRefresh = readDeadlineTimer(
    {
      timerDeadlineAt:
        timer.timerDeadlineAt,
      secondsRemaining: 120,
    },
    start + 75_000,
  );

  checks.push(
    check(
      "Refresh does not reset the timer",
      afterRefresh.secondsRemaining === 45,
      `${afterRefresh.secondsRemaining} seconds remain.`,
    ),
  );

  const expired = readDeadlineTimer(
    timer,
    start + 121_000,
  );

  checks.push(
    check(
      "Timer expires at zero",
      expired.expired &&
        expired.secondsRemaining === 0,
      `${expired.secondsRemaining} seconds remain.`,
    ),
  );

  const reset = resetDeadlineTimer(
    2100,
    start + 200_000,
  );

  checks.push(
    check(
      "New module receives a new deadline",
      reset.timerDeadlineAt ===
        start + 2_300_000 &&
        reset.secondsRemaining === 2100,
      String(reset.timerDeadlineAt),
    ),
  );

  checks.push(
    check(
      "Review phases keep the timer active",
      phaseUsesModuleTimer(
        "module-1-review",
      ) &&
        phaseUsesModuleTimer(
          "module-2-review",
        ),
      "Both review phases are timed.",
    ),
    check(
      "Transition and results phases are not timed",
      !phaseUsesModuleTimer(
        "module-2-transition",
      ) &&
        !phaseUsesModuleTimer("results"),
      "Non-module phases are untimed.",
    ),
  );

  return {
    passed: checks.every(
      (item) => item.passed,
    ),
    checks,
  };
}
