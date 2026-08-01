import type { ScoreAnswer } from "../scoreEngine";
import { normalizeSessionQuestionState } from "../identifiers";
import {
  recoverSectionSession,
} from "../runtime/sessionRecovery";
import type {
  ModuleSubmissionState,
} from "../runtime/moduleSubmissionGuard";

export type ReadingExamPhase =
  | "intro"
  | "module-1"
  | "module-1-review"
  | "module-2-transition"
  | "module-2"
  | "module-2-review"
  | "results";

export interface ReadingSessionState {
  version: 1;
  phase: ReadingExamPhase;
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

export const READING_SESSION_STORAGE_KEY =
  "digital-sat-reading-session-v1";
export const READING_MODULE_SECONDS = 12 * 60;

export function saveReadingSession(
  session: ReadingSessionState,
): void {
  if (typeof window === "undefined") return;

  const normalized =
    normalizeSessionQuestionState(session);

  window.sessionStorage.setItem(
    READING_SESSION_STORAGE_KEY,
    JSON.stringify({
      ...normalized,
      updatedAt: Date.now(),
    }),
  );
}

export function loadReadingSession():
  | ReadingSessionState
  | null {
  if (typeof window === "undefined") return null;

  const raw = window.sessionStorage.getItem(
    READING_SESSION_STORAGE_KEY,
  );
  if (!raw) return null;

  try {
    const value = JSON.parse(
      raw,
    ) as ReadingSessionState;

    if (value?.version !== 1) return null;

    const normalized =
      normalizeSessionQuestionState(value);
    const recovered = recoverSectionSession(
      normalized,
      READING_MODULE_SECONDS,
    );

    if (
      recovered.changed ||
      JSON.stringify(normalized) !==
        JSON.stringify(value)
    ) {
      window.sessionStorage.setItem(
        READING_SESSION_STORAGE_KEY,
        JSON.stringify(recovered.session),
      );
    }

    return recovered.session;
  } catch {
    return null;
  }
}

export function clearReadingSession(): void {
  if (typeof window === "undefined") return;

  window.sessionStorage.removeItem(
    READING_SESSION_STORAGE_KEY,
  );
}
