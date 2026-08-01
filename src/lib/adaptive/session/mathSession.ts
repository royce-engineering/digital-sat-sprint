import type { ScoreAnswer } from "../scoreEngine";
import { normalizeSessionQuestionState } from "../identifiers";
import {
  recoverSectionSession,
} from "../runtime/sessionRecovery";
import type {
  ModuleSubmissionState,
} from "../runtime/moduleSubmissionGuard";

export type MathExamPhase =
  | "intro"
  | "module-1"
  | "module-1-review"
  | "module-2-transition"
  | "module-2"
  | "module-2-review"
  | "results";

export interface MathSessionState {
  version: 1;
  phase: MathExamPhase;
  module1Seed: number;
  module2Seed: number;
  hardRouteThreshold: number;
  module1QuestionIds: string[];
  module2QuestionIds: string[];
  module2Route?: "Easy" | "Hard";
  historyRecordId?: string;
  answers: Record<string, ScoreAnswer>;
  currentIndex: number;
  secondsRemaining: number;
  timerDeadlineAt?: number;
  submissionState?: ModuleSubmissionState;
  startedAt: number;
  updatedAt: number;
}

export const MATH_SESSION_STORAGE_KEY =
  "digital-sat-math-session-v1";
export const MATH_MODULE_SECONDS = 35 * 60;

export function saveMathSession(
  session: MathSessionState,
): void {
  if (typeof window === "undefined") return;

  const normalized =
    normalizeSessionQuestionState(session);

  window.sessionStorage.setItem(
    MATH_SESSION_STORAGE_KEY,
    JSON.stringify({
      ...normalized,
      updatedAt: Date.now(),
    }),
  );
}

export function loadMathSession():
  | MathSessionState
  | null {
  if (typeof window === "undefined") return null;

  const raw = window.sessionStorage.getItem(
    MATH_SESSION_STORAGE_KEY,
  );
  if (!raw) return null;

  try {
    const value = JSON.parse(
      raw,
    ) as MathSessionState;

    if (value?.version !== 1) return null;

    const normalized =
      normalizeSessionQuestionState(value);
    const recovered = recoverSectionSession(
      normalized,
      MATH_MODULE_SECONDS,
    );

    if (
      recovered.changed ||
      JSON.stringify(normalized) !==
        JSON.stringify(value)
    ) {
      window.sessionStorage.setItem(
        MATH_SESSION_STORAGE_KEY,
        JSON.stringify(recovered.session),
      );
    }

    return recovered.session;
  } catch {
    return null;
  }
}

export function clearMathSession(): void {
  if (typeof window === "undefined") return;

  window.sessionStorage.removeItem(
    MATH_SESSION_STORAGE_KEY,
  );
}
