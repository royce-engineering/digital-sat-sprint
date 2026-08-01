export interface DeadlineTimerState {
  timerDeadlineAt?: number;
  secondsRemaining: number;
}

export interface DeadlineTimerResult {
  timerDeadlineAt: number;
  secondsRemaining: number;
  expired: boolean;
}

/**
 * Creates a deadline from the currently persisted remaining time.
 *
 * This is useful when migrating an existing session that has only
 * `secondsRemaining`.
 */
export function startDeadlineTimer(
  secondsRemaining: number,
  now = Date.now(),
): DeadlineTimerResult {
  const safeSeconds = Math.max(
    0,
    Math.floor(secondsRemaining),
  );

  return {
    timerDeadlineAt: now + safeSeconds * 1000,
    secondsRemaining: safeSeconds,
    expired: safeSeconds === 0,
  };
}

/**
 * Computes remaining time from an absolute deadline.
 *
 * Absolute deadlines continue to advance while:
 * - the tab is backgrounded;
 * - the browser throttles intervals;
 * - the page is refreshed;
 * - the user is on the module review screen.
 */
export function readDeadlineTimer(
  timer: DeadlineTimerState,
  now = Date.now(),
): DeadlineTimerResult {
  const deadline =
    Number.isFinite(timer.timerDeadlineAt) &&
    (timer.timerDeadlineAt ?? 0) > 0
      ? timer.timerDeadlineAt!
      : now +
        Math.max(
          0,
          Math.floor(timer.secondsRemaining),
        ) *
          1000;

  const millisecondsRemaining = Math.max(
    0,
    deadline - now,
  );
  const secondsRemaining = Math.ceil(
    millisecondsRemaining / 1000,
  );

  return {
    timerDeadlineAt: deadline,
    secondsRemaining,
    expired: secondsRemaining === 0,
  };
}

export function resetDeadlineTimer(
  durationSeconds: number,
  now = Date.now(),
): DeadlineTimerResult {
  return startDeadlineTimer(
    durationSeconds,
    now,
  );
}

export function clearDeadlineTimer(): {
  timerDeadlineAt: undefined;
} {
  return {
    timerDeadlineAt: undefined,
  };
}

/**
 * A module timer remains active while answering questions and while reviewing
 * the current module.
 */
export function phaseUsesModuleTimer(
  phase: string,
): boolean {
  return (
    phase === "module-1" ||
    phase === "module-1-review" ||
    phase === "module-2" ||
    phase === "module-2-review"
  );
}
