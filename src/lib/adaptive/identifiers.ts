import { getQuestion } from "./questionBank";
import type { ScoreAnswer } from "./scoreEngine";

/**
 * Returns the canonical adaptive identifier for a question reference.
 *
 * Both legacy CourseQuestion.id values and adaptive ExamQuestion.examId
 * values are accepted. Unknown identifiers are preserved so callers can
 * report or recover from missing bank entries without silently dropping data.
 */
export function toExamId(id: string): string {
  return getQuestion(id)?.examId ?? id;
}

/**
 * Returns the legacy/course identifier when a question can be resolved.
 * New adaptive code should normally prefer `toExamId()`.
 */
export function toCourseQuestionId(id: string): string {
  return getQuestion(id)?.id ?? id;
}

export function normalizeQuestionIds(ids: string[]): string[] {
  const normalized: string[] = [];
  const seen = new Set<string>();

  for (const id of ids) {
    const examId = toExamId(id);

    if (!seen.has(examId)) {
      normalized.push(examId);
      seen.add(examId);
    }
  }

  return normalized;
}

/**
 * Normalizes answer-map keys to examId.
 *
 * When the same question exists under both an old `id` key and an `examId`
 * key, the explicit examId entry wins. This prevents an old migrated answer
 * from overwriting a newer canonical answer.
 */
export function normalizeAnswerMap(
  answers: Record<string, ScoreAnswer>,
): Record<string, ScoreAnswer> {
  const normalized: Record<string, ScoreAnswer> = {};

  for (const [id, answer] of Object.entries(answers)) {
    const examId = toExamId(id);

    if (!(examId in normalized) || id === examId) {
      normalized[examId] = answer;
    }
  }

  return normalized;
}

export interface NormalizableSessionQuestionState {
  module1QuestionIds: string[];
  module2QuestionIds: string[];
  answers: Record<string, ScoreAnswer>;
}

/**
 * Converts persisted adaptive session references to canonical examId values.
 * The function is pure and can be used by both Reading and Math loaders.
 */
export function normalizeSessionQuestionState<
  T extends NormalizableSessionQuestionState,
>(session: T): T {
  return {
    ...session,
    module1QuestionIds: normalizeQuestionIds(
      session.module1QuestionIds,
    ),
    module2QuestionIds: normalizeQuestionIds(
      session.module2QuestionIds,
    ),
    answers: normalizeAnswerMap(session.answers),
  };
}

export function sessionUsesCanonicalExamIds(
  session: NormalizableSessionQuestionState,
): boolean {
  const ids = [
    ...session.module1QuestionIds,
    ...session.module2QuestionIds,
    ...Object.keys(session.answers),
  ];

  return ids.every((id) => toExamId(id) === id);
}
