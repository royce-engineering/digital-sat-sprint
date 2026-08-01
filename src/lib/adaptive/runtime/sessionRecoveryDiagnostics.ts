import {
  recoverSectionSession,
  type RecoverableSectionSession,
} from "./sessionRecovery";
import { fullQuestionBank } from "../questionBank";

export interface SessionRecoveryDiagnosticCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface SessionRecoveryDiagnosticReport {
  passed: boolean;
  checks: SessionRecoveryDiagnosticCheck[];
}

function check(
  name: string,
  passed: boolean,
  details: string,
): SessionRecoveryDiagnosticCheck {
  return { name, passed, details };
}

export function diagnoseSessionRecovery(): SessionRecoveryDiagnosticReport {
  const checks: SessionRecoveryDiagnosticCheck[] = [];
  const first = fullQuestionBank[0];
  const second = fullQuestionBank[1];

  if (!first || !second) {
    return {
      passed: false,
      checks: [
        check(
          "Question bank contains recovery samples",
          false,
          "At least two questions are required.",
        ),
      ],
    };
  }

  const broken: RecoverableSectionSession = {
    version: 1,
    phase: "module-2",
    module1QuestionIds: [
      first.id,
      first.examId,
      "missing-question",
    ],
    module2QuestionIds: [],
    answers: {
      [first.id]: {
        selected: 0,
        typedAnswer: "",
        flagged: false,
        answeredAt: 1,
      },
      orphan: {
        selected: 1,
        typedAnswer: "",
        flagged: false,
        answeredAt: 1,
      },
    },
    currentIndex: 99,
    secondsRemaining: -5,
    startedAt: 1,
    updatedAt: 1,
  };

  const result = recoverSectionSession(
    broken,
    35 * 60,
  );

  checks.push(
    check(
      "Legacy and duplicate IDs normalize",
      result.session.module1QuestionIds.length === 1 &&
        result.session.module1QuestionIds[0] ===
          first.examId,
      result.session.module1QuestionIds.join(", "),
    ),
    check(
      "Unknown references are removed",
      !result.session.module1QuestionIds.includes(
        "missing-question",
      ),
      `${result.issues.length} recovery issues reported.`,
    ),
    check(
      "Impossible Module 2 phase recovers",
      result.session.phase === "module-1-review",
      `Recovered phase: ${result.session.phase}.`,
    ),
    check(
      "Question index is clamped",
      result.session.currentIndex === 0,
      `currentIndex ${result.session.currentIndex}.`,
    ),
    check(
      "Invalid timer is reset",
      result.session.secondsRemaining === 35 * 60,
      `${result.session.secondsRemaining} seconds.`,
    ),
    check(
      "Orphan answers are removed",
      Object.keys(result.session.answers).length === 1 &&
        Boolean(
          result.session.answers[first.examId],
        ),
      Object.keys(result.session.answers).join(", "),
    ),
  );

  const healthy: RecoverableSectionSession = {
    version: 1,
    phase: "module-1",
    module1QuestionIds: [
      first.examId,
      second.examId,
    ],
    module2QuestionIds: [],
    answers: {},
    currentIndex: 1,
    secondsRemaining: 1000,
    startedAt: 1,
    updatedAt: 1,
  };

  const healthyResult = recoverSectionSession(
    healthy,
    35 * 60,
  );

  checks.push(
    check(
      "Healthy session remains semantically unchanged",
      healthyResult.session.phase === healthy.phase &&
        healthyResult.session.currentIndex ===
          healthy.currentIndex &&
        healthyResult.session.secondsRemaining ===
          healthy.secondsRemaining &&
        JSON.stringify(
          healthyResult.session.module1QuestionIds,
        ) ===
          JSON.stringify(
            healthy.module1QuestionIds,
          ),
      "Core session values were preserved.",
    ),
  );

  return {
    passed: checks.every((item) => item.passed),
    checks,
  };
}
