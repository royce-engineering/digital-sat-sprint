import {
  fullQuestionBank,
  getQuestion,
} from "./questionBank";
import {
  normalizeAnswerMap,
  normalizeQuestionIds,
  normalizeSessionQuestionState,
  sessionUsesCanonicalExamIds,
  toCourseQuestionId,
  toExamId,
} from "./identifiers";
import type { ScoreAnswer } from "./scoreEngine";

export interface IdentifierDiagnosticCheck {
  id: string;
  label: string;
  passed: boolean;
  details: string;
}

export interface IdentifierDiagnosticReport {
  passed: boolean;
  checks: IdentifierDiagnosticCheck[];
  stats: {
    questionsChecked: number;
    distinctLegacyIds: number;
    distinctExamIds: number;
  };
}

function check(
  id: string,
  label: string,
  passed: boolean,
  details: string,
): IdentifierDiagnosticCheck {
  return { id, label, passed, details };
}

function sampleAnswer(selected: number): ScoreAnswer {
  return {
    selected,
    typedAnswer: "",
    flagged: false,
    answeredAt: 1,
  };
}

/**
 * Pure regression checks for the id → examId migration layer.
 *
 * This function does not read or mutate browser storage.
 */
export function diagnoseIdentifierMigration(): IdentifierDiagnosticReport {
  const checks: IdentifierDiagnosticCheck[] = [];
  const sample = fullQuestionBank.find(
    (question) => question.id !== question.examId,
  ) ?? fullQuestionBank[0];

  if (!sample) {
    return {
      passed: false,
      checks: [
        check(
          "bank-empty",
          "Question bank contains migration samples",
          false,
          "No questions were available.",
        ),
      ],
      stats: {
        questionsChecked: 0,
        distinctLegacyIds: 0,
        distinctExamIds: 0,
      },
    };
  }

  checks.push(
    check(
      "course-to-exam",
      "Legacy id resolves to examId",
      toExamId(sample.id) === sample.examId,
      `${sample.id} → ${toExamId(sample.id)}`,
    ),
    check(
      "exam-remains-exam",
      "examId remains canonical",
      toExamId(sample.examId) === sample.examId,
      `${sample.examId} → ${toExamId(sample.examId)}`,
    ),
    check(
      "exam-to-course",
      "examId can resolve to legacy id",
      toCourseQuestionId(sample.examId) === sample.id,
      `${sample.examId} → ${toCourseQuestionId(sample.examId)}`,
    ),
  );

  const normalizedIds = normalizeQuestionIds([
    sample.id,
    sample.examId,
    sample.id,
  ]);

  checks.push(
    check(
      "id-deduplication",
      "Mixed id references normalize and deduplicate",
      normalizedIds.length === 1 &&
        normalizedIds[0] === sample.examId,
      `Normalized to: ${normalizedIds.join(", ")}`,
    ),
  );

  const legacyAnswer = sampleAnswer(1);
  const canonicalAnswer = sampleAnswer(2);
  const normalizedAnswers = normalizeAnswerMap({
    [sample.id]: legacyAnswer,
    [sample.examId]: canonicalAnswer,
  });

  checks.push(
    check(
      "canonical-answer-wins",
      "Explicit examId answer wins over legacy id answer",
      normalizedAnswers[sample.examId]?.selected === 2 &&
        Object.keys(normalizedAnswers).length === 1,
      `Canonical selected value: ${
        normalizedAnswers[sample.examId]?.selected ?? "missing"
      }`,
    ),
  );

  const legacySession = {
    module1QuestionIds: [sample.id, sample.examId],
    module2QuestionIds: [sample.id],
    answers: {
      [sample.id]: legacyAnswer,
    },
  };

  const normalizedSession =
    normalizeSessionQuestionState(legacySession);

  checks.push(
    check(
      "session-normalization",
      "Session question references normalize to examId",
      normalizedSession.module1QuestionIds.length === 1 &&
        normalizedSession.module1QuestionIds[0] === sample.examId &&
        normalizedSession.module2QuestionIds[0] === sample.examId &&
        Object.keys(normalizedSession.answers)[0] === sample.examId,
      `Module 1: ${normalizedSession.module1QuestionIds.join(
        ", ",
      )}; Module 2: ${normalizedSession.module2QuestionIds.join(
        ", ",
      )}`,
    ),
    check(
      "canonical-session-predicate",
      "Normalized session passes canonical-id predicate",
      sessionUsesCanonicalExamIds(normalizedSession),
      sessionUsesCanonicalExamIds(normalizedSession)
        ? "All references are canonical."
        : "At least one legacy reference remains.",
    ),
  );

  const unknownId = "missing-question-for-migration-test";
  checks.push(
    check(
      "unknown-preserved",
      "Unknown identifiers are preserved",
      toExamId(unknownId) === unknownId &&
        normalizeQuestionIds([unknownId])[0] === unknownId,
      `Unknown value remained ${toExamId(unknownId)}.`,
    ),
  );

  const lookupFailures = fullQuestionBank.filter(
    (question) =>
      getQuestion(question.id)?.examId !== question.examId ||
      getQuestion(question.examId)?.id !== question.id ||
      toExamId(question.id) !== question.examId ||
      toExamId(question.examId) !== question.examId,
  );

  checks.push(
    check(
      "full-bank-round-trip",
      "Every bank question supports dual lookup and normalization",
      lookupFailures.length === 0,
      lookupFailures.length
        ? `${lookupFailures.length} questions failed round-trip verification.`
        : `${fullQuestionBank.length} questions verified.`,
    ),
  );

  const legacyIds = new Set(
    fullQuestionBank.map((question) => question.id),
  );
  const examIds = new Set(
    fullQuestionBank.map((question) => question.examId),
  );

  return {
    passed: checks.every((item) => item.passed),
    checks,
    stats: {
      questionsChecked: fullQuestionBank.length,
      distinctLegacyIds: legacyIds.size,
      distinctExamIds: examIds.size,
    },
  };
}
