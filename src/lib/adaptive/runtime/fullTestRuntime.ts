import type { MathSessionState } from "../session/mathSession";
import type { ReadingSessionState } from "../session/readingSession";

export const FULL_TEST_STORAGE_KEY =
  "digital-sat-full-test-v1";
export const FULL_TEST_BREAK_SECONDS = 10 * 60;

export type FullTestPhase =
  | "intro"
  | "reading"
  | "break"
  | "math"
  | "complete";

export interface FullTestState {
  version: 1;
  phase: FullTestPhase;
  attemptId?: string;
  startedAt?: number;
  readingStartedAt?: number;
  readingCompletedAt?: number;
  breakStartedAt?: number;
  mathStartedAt?: number;
  mathCompletedAt?: number;
  completedAt?: number;
  updatedAt: number;
}

export interface FullTestProgress {
  readingComplete: boolean;
  mathComplete: boolean;
}

export function createFullTestState(
  now = Date.now(),
): FullTestState {
  return {
    version: 1,
    phase: "intro",
    updatedAt: now,
  };
}

export function createFullTestAttempt(
  now = Date.now(),
): FullTestState {
  return {
    version: 1,
    phase: "reading",
    attemptId: `full-sat-${now}`,
    startedAt: now,
    readingStartedAt: now,
    updatedAt: now,
  };
}

export function isReadingSessionComplete(
  session: ReadingSessionState | null,
): boolean {
  return Boolean(
    session?.phase === "results" &&
      session.module1QuestionIds.length > 0 &&
      session.module2QuestionIds.length > 0,
  );
}

export function isMathSessionComplete(
  session: MathSessionState | null,
): boolean {
  return Boolean(
    session?.phase === "results" &&
      session.module1QuestionIds.length > 0 &&
      session.module2QuestionIds.length > 0,
  );
}

function isFullTestPhase(
  value: unknown,
): value is FullTestPhase {
  return (
    value === "intro" ||
    value === "reading" ||
    value === "break" ||
    value === "math" ||
    value === "complete"
  );
}

export function parseFullTestState(
  raw: string | null,
  now = Date.now(),
): FullTestState {
  if (!raw) return createFullTestState(now);

  try {
    const value = JSON.parse(raw) as Partial<FullTestState>;

    if (
      value.version !== 1 ||
      !isFullTestPhase(value.phase)
    ) {
      return createFullTestState(now);
    }

    return {
      version: 1,
      phase: value.phase,
      attemptId:
        typeof value.attemptId === "string"
          ? value.attemptId
          : undefined,
      startedAt:
        typeof value.startedAt === "number"
          ? value.startedAt
          : undefined,
      readingStartedAt:
        typeof value.readingStartedAt === "number"
          ? value.readingStartedAt
          : undefined,
      readingCompletedAt:
        typeof value.readingCompletedAt === "number"
          ? value.readingCompletedAt
          : undefined,
      breakStartedAt:
        typeof value.breakStartedAt === "number"
          ? value.breakStartedAt
          : undefined,
      mathStartedAt:
        typeof value.mathStartedAt === "number"
          ? value.mathStartedAt
          : undefined,
      mathCompletedAt:
        typeof value.mathCompletedAt === "number"
          ? value.mathCompletedAt
          : undefined,
      completedAt:
        typeof value.completedAt === "number"
          ? value.completedAt
          : undefined,
      updatedAt:
        typeof value.updatedAt === "number"
          ? value.updatedAt
          : now,
    };
  } catch {
    return createFullTestState(now);
  }
}

/**
 * Reconciles persisted controller state with the actual completed sections.
 *
 * It only moves forward. A stale or corrupt controller can therefore recover
 * without forcing a completed user back into an earlier section.
 */
export function reconcileFullTestState(
  state: FullTestState,
  progress: FullTestProgress,
  now = Date.now(),
): FullTestState {
  if (state.phase === "intro") return state;

  if (progress.mathComplete) {
    return {
      ...state,
      phase: "complete",
      readingCompletedAt:
        state.readingCompletedAt ??
        (progress.readingComplete ? now : undefined),
      mathCompletedAt: state.mathCompletedAt ?? now,
      completedAt: state.completedAt ?? now,
      updatedAt: now,
    };
  }

  if (
    progress.readingComplete &&
    state.phase === "reading"
  ) {
    return {
      ...state,
      phase: "break",
      readingCompletedAt:
        state.readingCompletedAt ?? now,
      breakStartedAt: state.breakStartedAt ?? now,
      updatedAt: now,
    };
  }

  return state;
}

export function beginFullTestBreak(
  state: FullTestState,
  now = Date.now(),
): FullTestState {
  return {
    ...state,
    phase: "break",
    readingCompletedAt:
      state.readingCompletedAt ?? now,
    breakStartedAt: state.breakStartedAt ?? now,
    updatedAt: now,
  };
}

export function beginFullTestMath(
  state: FullTestState,
  now = Date.now(),
): FullTestState {
  return {
    ...state,
    phase: "math",
    mathStartedAt: state.mathStartedAt ?? now,
    updatedAt: now,
  };
}

export function completeFullTest(
  state: FullTestState,
  now = Date.now(),
): FullTestState {
  return {
    ...state,
    phase: "complete",
    mathCompletedAt: state.mathCompletedAt ?? now,
    completedAt: state.completedAt ?? now,
    updatedAt: now,
  };
}

export function fullTestBreakRemaining(
  state: FullTestState,
  now = Date.now(),
): number {
  if (!state.breakStartedAt) {
    return FULL_TEST_BREAK_SECONDS;
  }

  const elapsed = Math.max(
    0,
    Math.floor((now - state.breakStartedAt) / 1000),
  );

  return Math.max(
    0,
    FULL_TEST_BREAK_SECONDS - elapsed,
  );
}

export function saveFullTestState(
  state: FullTestState,
): void {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(
    FULL_TEST_STORAGE_KEY,
    JSON.stringify({
      ...state,
      updatedAt: Date.now(),
    }),
  );
}

export function loadFullTestState(): FullTestState {
  if (typeof window === "undefined") {
    return createFullTestState();
  }

  const state = parseFullTestState(
    window.localStorage.getItem(
      FULL_TEST_STORAGE_KEY,
    ),
  );

  saveFullTestState(state);
  return state;
}

export function clearFullTestState(): void {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(
    FULL_TEST_STORAGE_KEY,
  );
}
