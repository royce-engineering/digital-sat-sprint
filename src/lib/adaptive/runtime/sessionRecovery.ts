import { getQuestion } from "../questionBank";
import type { ScoreAnswer } from "../scoreEngine";
import type {
  ModuleSubmissionState,
} from "./moduleSubmissionGuard";

export type RecoverableExamPhase =
  | "intro"
  | "module-1"
  | "module-1-review"
  | "module-2-transition"
  | "module-2"
  | "module-2-review"
  | "results";

export interface RecoverableSectionSession {
  version: 1;
  phase: RecoverableExamPhase;
  module1QuestionIds: string[];
  module2QuestionIds: string[];
  answers: Record<string, ScoreAnswer>;
  currentIndex: number;
  secondsRemaining: number;
  timerDeadlineAt?: number;
  submissionState?: ModuleSubmissionState;
  startedAt: number;
  updatedAt: number;
}

export interface SessionRecoveryIssue {
  code:
    | "unknown-question"
    | "duplicate-question"
    | "orphan-answer"
    | "invalid-index"
    | "invalid-time"
    | "invalid-phase"
    | "invalid-deadline";
  message: string;
}

export interface SessionRecoveryResult<
  T extends RecoverableSectionSession,
> {
  session: T;
  changed: boolean;
  issues: SessionRecoveryIssue[];
}

function uniqueKnownQuestionIds(
  ids: string[],
  issues: SessionRecoveryIssue[],
): string[] {
  const output: string[] = [];
  const seen = new Set<string>();

  for (const id of ids) {
    const question = getQuestion(id);

    if (!question) {
      issues.push({
        code: "unknown-question",
        message: `Removed unknown question reference: ${id}.`,
      });
      continue;
    }

    if (seen.has(question.examId)) {
      issues.push({
        code: "duplicate-question",
        message: `Removed duplicate question reference: ${question.examId}.`,
      });
      continue;
    }

    seen.add(question.examId);
    output.push(question.examId);
  }

  return output;
}

function normalizeAnswers(
  answers: Record<string, ScoreAnswer>,
  validIds: Set<string>,
  issues: SessionRecoveryIssue[],
): Record<string, ScoreAnswer> {
  const normalized: Record<string, ScoreAnswer> = {};

  for (const [id, answer] of Object.entries(answers)) {
    const question = getQuestion(id);
    const examId = question?.examId ?? id;

    if (!validIds.has(examId)) {
      issues.push({
        code: "orphan-answer",
        message: `Removed answer for unavailable question: ${id}.`,
      });
      continue;
    }

    normalized[examId] = {
      selected: Number.isInteger(answer.selected)
        ? answer.selected
        : -1,
      typedAnswer:
        typeof answer.typedAnswer === "string"
          ? answer.typedAnswer
          : "",
      flagged: Boolean(answer.flagged),
      answeredAt:
        Number.isFinite(answer.answeredAt) &&
        answer.answeredAt > 0
          ? answer.answeredAt
          : 0,
    };
  }

  return normalized;
}

function activeLength(
  phase: RecoverableExamPhase,
  module1Ids: string[],
  module2Ids: string[],
): number {
  if (
    phase === "module-1" ||
    phase === "module-1-review"
  ) {
    return module1Ids.length;
  }

  if (
    phase === "module-2" ||
    phase === "module-2-review" ||
    phase === "module-2-transition" ||
    phase === "results"
  ) {
    return module2Ids.length;
  }

  return 0;
}

function validPhaseForQuestions(
  phase: RecoverableExamPhase,
  module1Ids: string[],
  module2Ids: string[],
): RecoverableExamPhase {
  if (
    (phase === "module-1" ||
      phase === "module-1-review") &&
    module1Ids.length === 0
  ) {
    return "intro";
  }

  if (
    (phase === "module-2" ||
      phase === "module-2-review" ||
      phase === "module-2-transition" ||
      phase === "results") &&
    module2Ids.length === 0
  ) {
    return module1Ids.length > 0
      ? "module-1-review"
      : "intro";
  }

  return phase;
}

function normalizeSubmissionState(
  value: ModuleSubmissionState | undefined,
): ModuleSubmissionState | undefined {
  if (!value?.submitted) return undefined;

  const submitted = Object.fromEntries(
    Object.entries(value.submitted).filter(
      ([, timestamp]) =>
        Number.isFinite(timestamp) &&
        Number(timestamp) > 0,
    ),
  );

  return { submitted };
}

/**
 * Repairs a persisted Reading or Math section session.
 *
 * The function is pure. It removes invalid references, normalizes answer keys
 * to examId, clamps the active question index, repairs invalid timers, and
 * moves impossible phases back to the nearest recoverable phase.
 */
export function recoverSectionSession<
  T extends RecoverableSectionSession,
>(
  input: T,
  moduleSeconds: number,
): SessionRecoveryResult<T> {
  const issues: SessionRecoveryIssue[] = [];

  const module1QuestionIds =
    uniqueKnownQuestionIds(
      input.module1QuestionIds ?? [],
      issues,
    );
  const module2QuestionIds =
    uniqueKnownQuestionIds(
      input.module2QuestionIds ?? [],
      issues,
    );

  const allIds = new Set([
    ...module1QuestionIds,
    ...module2QuestionIds,
  ]);
  const answers = normalizeAnswers(
    input.answers ?? {},
    allIds,
    issues,
  );

  const phase = validPhaseForQuestions(
    input.phase,
    module1QuestionIds,
    module2QuestionIds,
  );

  if (phase !== input.phase) {
    issues.push({
      code: "invalid-phase",
      message: `Recovered phase from ${input.phase} to ${phase}.`,
    });
  }

  const length = activeLength(
    phase,
    module1QuestionIds,
    module2QuestionIds,
  );
  const maxIndex = Math.max(0, length - 1);
  const currentIndex = Math.min(
    Math.max(
      0,
      Number.isInteger(input.currentIndex)
        ? input.currentIndex
        : 0,
    ),
    maxIndex,
  );

  if (currentIndex !== input.currentIndex) {
    issues.push({
      code: "invalid-index",
      message: `Clamped currentIndex to ${currentIndex}.`,
    });
  }

  const secondsRemaining =
    Number.isFinite(input.secondsRemaining) &&
    input.secondsRemaining >= 0 &&
    input.secondsRemaining <= moduleSeconds
      ? Math.floor(input.secondsRemaining)
      : moduleSeconds;

  if (
    secondsRemaining !== input.secondsRemaining
  ) {
    issues.push({
      code: "invalid-time",
      message: `Reset invalid timer to ${moduleSeconds} seconds.`,
    });
  }

  const timerDeadlineAt =
    Number.isFinite(input.timerDeadlineAt) &&
    (input.timerDeadlineAt ?? 0) > 0
      ? input.timerDeadlineAt
      : undefined;

  if (
    input.timerDeadlineAt !== undefined &&
    timerDeadlineAt === undefined
  ) {
    issues.push({
      code: "invalid-deadline",
      message: "Removed an invalid timer deadline.",
    });
  }

  const candidate = {
    ...input,
    phase,
    module1QuestionIds,
    module2QuestionIds,
    answers,
    currentIndex,
    secondsRemaining,
    timerDeadlineAt,
    submissionState: normalizeSubmissionState(
      input.submissionState,
    ),
  } as T;

  const changed =
    JSON.stringify(candidate) !==
    JSON.stringify(input);

  const session = (
    changed
      ? {
          ...candidate,
          updatedAt: Date.now(),
        }
      : candidate
  ) as T;

  return {
    session,
    changed,
    issues,
  };
}
