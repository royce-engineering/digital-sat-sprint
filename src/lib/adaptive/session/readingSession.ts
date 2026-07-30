import type { ScoreAnswer } from "../scoreEngine";

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
  startedAt: number;
  updatedAt: number;
}

export const READING_SESSION_STORAGE_KEY = "digital-sat-reading-session-v1";

export function saveReadingSession(session: ReadingSessionState): void {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(
    READING_SESSION_STORAGE_KEY,
    JSON.stringify({ ...session, updatedAt: Date.now() }),
  );
}

export function loadReadingSession(): ReadingSessionState | null {
  if (typeof window === "undefined") return null;

  const raw = window.sessionStorage.getItem(READING_SESSION_STORAGE_KEY);
  if (!raw) return null;

  try {
    const value = JSON.parse(raw) as ReadingSessionState;
    return value?.version === 1 ? value : null;
  } catch {
    return null;
  }
}

export function clearReadingSession(): void {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(READING_SESSION_STORAGE_KEY);
}
