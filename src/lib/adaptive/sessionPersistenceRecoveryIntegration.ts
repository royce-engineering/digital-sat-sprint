import {
  buildMathAdaptiveExam,
} from "./mathAdaptiveEngine";
import {
  buildReadingAdaptiveExam,
} from "./readingAdaptiveEngine";
import {
  claimModuleSubmission,
  createModuleSubmissionState,
} from "./runtime/moduleSubmissionGuard";
import {
  readDeadlineTimer,
  resetDeadlineTimer,
} from "./runtime/deadlineTimer";
import {
  recoverSectionSession,
} from "./runtime/sessionRecovery";
import type {
  MathSessionState,
} from "./session/mathSession";
import type {
  ReadingSessionState,
} from "./session/readingSession";
import type {
  ScoreAnswer,
} from "./scoreEngine";
import type {
  ExamQuestion,
} from "./types";

export interface SessionIntegrationCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface SessionPersistenceRecoveryReport {
  passed: boolean;
  checks: SessionIntegrationCheck[];
}

function correctAnswer(
  question: ExamQuestion,
): ScoreAnswer {
  if (
    question.questionType ===
    "student-response"
  ) {
    return {
      selected: -1,
      typedAnswer:
        question.numericAnswer ?? "",
      flagged: false,
      answeredAt: 1,
    };
  }

  return {
    selected: question.answer,
    typedAnswer: "",
    flagged: false,
    answeredAt: 1,
  };
}

function answersFor(
  questions: readonly ExamQuestion[],
  correctCount: number,
): Record<string, ScoreAnswer> {
  const answers:
    Record<string, ScoreAnswer> = {};

  questions
    .slice(0, correctCount)
    .forEach((question) => {
      answers[question.examId] =
        correctAnswer(question);
    });

  return answers;
}

function check(
  name: string,
  passed: boolean,
  details: string,
): SessionIntegrationCheck {
  return {
    name,
    passed,
    details,
  };
}

export function runSessionPersistenceRecoveryIntegration(): SessionPersistenceRecoveryReport {
  const checks:
    SessionIntegrationCheck[] = [];

  const readingExam =
    buildReadingAdaptiveExam({
      module1Seed: 55_201,
      module2Seed: 55_202,
      hardRouteThreshold: 0.65,
    });

  const readingAnswers =
    answersFor(
      readingExam.module1,
      18,
    );

  const readingModule2 =
    readingExam.buildModule2(
      readingAnswers,
    );

  const readingSession: ReadingSessionState = {
    version: 1,
    phase:
      "module-2-transition",
    module1Seed: 55_201,
    module2Seed: 55_202,
    hardRouteThreshold: 0.65,
    module1QuestionIds:
      readingExam.module1.map(
        (question) =>
          question.examId,
      ),
    module2QuestionIds:
      readingModule2.questions.map(
        (question) =>
          question.examId,
      ),
    module2Route:
      readingModule2.route,
    answers:
      readingAnswers,
    currentIndex: 0,
    secondsRemaining: 720,
    timerDeadlineAt:
      undefined,
    submissionState: {
      submitted: {
        "reading-module-1":
          1000,
      },
    },
    startedAt: 1,
    updatedAt: 2,
  };

  const recoveredReading =
    recoverSectionSession(
      readingSession,
      720,
    );

  checks.push(
    check(
      "Valid Reading session survives recovery unchanged",
      !recoveredReading.changed &&
        recoveredReading.session
          .module2Route ===
          "Hard" &&
        recoveredReading.session
          .module2QuestionIds
          .join("|") ===
          readingSession
            .module2QuestionIds
            .join("|"),
      `changed=${recoveredReading.changed}; route=${recoveredReading.session.module2Route}`,
    ),
  );

  const mathExam =
    buildMathAdaptiveExam({
      module1Seed: 55_301,
      module2Seed: 55_302,
      hardRouteThreshold: 0.65,
    });

  const mathAnswers =
    answersFor(
      mathExam.module1,
      15,
    );

  const mathModule2 =
    mathExam.buildModule2(
      mathAnswers,
    );

  const corruptMathSession: MathSessionState = {
    version: 1,
    phase: "module-2",
    module1Seed: 55_301,
    module2Seed: 55_302,
    hardRouteThreshold: 0.65,
    module1QuestionIds: [
      ...mathExam.module1.map(
        (question) =>
          question.examId,
      ),
      mathExam.module1[0].examId,
      "unknown-question-id",
    ],
    module2QuestionIds: [
      ...mathModule2.questions.map(
        (question) =>
          question.examId,
      ),
      mathModule2.questions[0]
        .examId,
    ],
    module2Route:
      mathModule2.route,
    answers: {
      ...mathAnswers,
      "unknown-question-id": {
        selected: 0,
        typedAnswer: "",
        flagged: false,
        answeredAt: 1,
      },
    },
    currentIndex: 999,
    secondsRemaining: -25,
    timerDeadlineAt: -10,
    submissionState: {
      submitted: {
        "math-module-1":
          2000,
        "math-module-2":
          -1,
      },
    },
    startedAt: 1,
    updatedAt: 2,
  };

  const recoveredMath =
    recoverSectionSession(
      corruptMathSession,
      2100,
    );

  const recoveredIssueCodes =
    new Set(
      recoveredMath.issues.map(
        (issue) => issue.code,
      ),
    );

  checks.push(
    check(
      "Corrupt Math session repairs invalid references",
      recoveredMath.changed &&
        recoveredIssueCodes.has(
          "unknown-question",
        ) &&
        recoveredIssueCodes.has(
          "duplicate-question",
        ) &&
        recoveredIssueCodes.has(
          "orphan-answer",
        ),
      recoveredMath.issues
        .map((issue) => issue.code)
        .join(", "),
    ),
  );

  checks.push(
    check(
      "Corrupt Math index and timers are repaired",
      recoveredMath.session
        .currentIndex ===
        recoveredMath.session
          .module2QuestionIds
          .length -
          1 &&
        recoveredMath.session
          .secondsRemaining ===
          2100 &&
        recoveredMath.session
          .timerDeadlineAt ===
          undefined,
      `index=${recoveredMath.session.currentIndex}; seconds=${recoveredMath.session.secondsRemaining}; deadline=${String(recoveredMath.session.timerDeadlineAt)}`,
    ),
  );

  checks.push(
    check(
      "Valid submission markers survive while invalid ones are removed",
      Boolean(
        recoveredMath.session
          .submissionState
          ?.submitted[
          "math-module-1"
        ],
      ) &&
        !recoveredMath.session
          .submissionState
          ?.submitted[
          "math-module-2"
        ],
      JSON.stringify(
        recoveredMath.session
          .submissionState,
      ),
    ),
  );

  const guardStart =
    createModuleSubmissionState();

  const firstClaim =
    claimModuleSubmission(
      guardStart,
      "math-module-1",
      3000,
    );

  const secondClaim =
    claimModuleSubmission(
      firstClaim.state,
      "math-module-1",
      4000,
    );

  checks.push(
    check(
      "Repeated module submission is idempotent",
      firstClaim.allowed &&
        !secondClaim.allowed &&
        secondClaim.submittedAt ===
          3000,
      `first=${firstClaim.allowed}; second=${secondClaim.allowed}; submittedAt=${secondClaim.submittedAt}`,
    ),
  );

  const deadline =
    resetDeadlineTimer(
      2100,
      1_000_000,
    );

  const afterRefresh =
    readDeadlineTimer(
      deadline,
      1_600_000,
    );

  checks.push(
    check(
      "Refresh preserves absolute timer deadline",
      afterRefresh
        .secondsRemaining ===
        1500 &&
        !afterRefresh.expired,
      `${afterRefresh.secondsRemaining} seconds remain.`,
    ),
  );

  const expired =
    readDeadlineTimer(
      deadline,
      3_101_000,
    );

  checks.push(
    check(
      "Expired timer reaches zero",
      expired.expired &&
        expired
          .secondsRemaining === 0,
      `${expired.secondsRemaining} seconds remain.`,
    ),
  );

  const impossibleSession: ReadingSessionState = {
    ...readingSession,
    phase: "module-2",
    module2QuestionIds: [],
    currentIndex: 8,
  };

  const recoveredImpossible =
    recoverSectionSession(
      impossibleSession,
      720,
    );

  checks.push(
    check(
      "Impossible Module 2 phase falls back safely",
      recoveredImpossible.session
        .phase ===
        "module-1-review",
      `phase=${recoveredImpossible.session.phase}`,
    ),
  );

  return {
    passed:
      checks.every(
        (item) =>
          item.passed,
      ),
    checks,
  };
}
