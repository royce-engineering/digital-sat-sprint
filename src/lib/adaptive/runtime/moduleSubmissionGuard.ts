export type ModuleSubmissionKey =
  | "reading-module-1"
  | "reading-module-2"
  | "math-module-1"
  | "math-module-2";

export interface ModuleSubmissionState {
  submitted: Partial<Record<ModuleSubmissionKey, number>>;
}

export interface ModuleSubmissionResult {
  allowed: boolean;
  submittedAt?: number;
  state: ModuleSubmissionState;
}

export function createModuleSubmissionState(): ModuleSubmissionState {
  return {
    submitted: {},
  };
}

/**
 * Pure idempotency guard.
 *
 * A module can be submitted only once for a given session state. Repeated
 * timer expirations, double-clicks, Strict Mode effects, or stale callbacks
 * return `allowed: false`.
 */
export function claimModuleSubmission(
  state: ModuleSubmissionState,
  key: ModuleSubmissionKey,
  now = Date.now(),
): ModuleSubmissionResult {
  const existing = state.submitted[key];

  if (existing) {
    return {
      allowed: false,
      submittedAt: existing,
      state,
    };
  }

  return {
    allowed: true,
    submittedAt: now,
    state: {
      submitted: {
        ...state.submitted,
        [key]: now,
      },
    },
  };
}

export function hasModuleSubmission(
  state: ModuleSubmissionState,
  key: ModuleSubmissionKey,
): boolean {
  return Boolean(state.submitted[key]);
}

export function resetModuleSubmission(
  state: ModuleSubmissionState,
  key: ModuleSubmissionKey,
): ModuleSubmissionState {
  const submitted = {
    ...state.submitted,
  };

  delete submitted[key];

  return { submitted };
}
