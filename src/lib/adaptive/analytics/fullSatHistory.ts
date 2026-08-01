import { getQuestion } from "../questionBank";
import {
  estimateSatScore,
  isScoreAnswerCorrect,
  type ScoreAnswer,
  type ScoreModule,
} from "../scoreEngine";
import type {
  ExamQuestion,
  ExamSection,
} from "../types";
import type { MathSessionState } from "../session/mathSession";
import type { ReadingSessionState } from "../session/readingSession";
import {
  createExamRecord,
  getExamRecord,
  addExamRecord,
  type AdaptiveExamRecord,
  type ExamQuestionResult,
} from "./history";

function isAnswered(
  question: ExamQuestion,
  answer?: ScoreAnswer,
): boolean {
  if (!answer) return false;

  if (question.questionType === "student-response") {
    return Boolean(answer.typedAnswer?.trim());
  }

  return answer.selected >= 0;
}

function readQuestions(ids: string[]): ExamQuestion[] {
  return ids
    .map((id) => getQuestion(id))
    .filter(
      (question): question is ExamQuestion =>
        Boolean(question),
    );
}

function questionDomain(
  question: ExamQuestion,
): string {
  if (question.section === "Math") {
    return (
      question.mathDomain ?? "Unclassified Math"
    );
  }

  return (
    question.blueprint?.domain ??
    question.domain ??
    "Unclassified Reading & Writing"
  );
}

function questionSkill(
  question: ExamQuestion,
): string {
  return (
    question.blueprint?.skill ??
    question.skill ??
    "Unclassified skill"
  );
}

function buildQuestionResults(
  questions: ExamQuestion[],
  answers: Record<string, ScoreAnswer>,
  section: ExamSection,
  moduleKey: string,
  moduleTitle: string,
): ExamQuestionResult[] {
  return questions.map((question) => {
    const answer = answers[question.examId];

    return {
      questionId: question.id,
      examId: question.examId,
      section,
      moduleKey,
      moduleTitle,
      difficulty: question.difficulty,
      domain: questionDomain(question),
      skill: questionSkill(question),
      correct: isScoreAnswerCorrect(
        question,
        answer,
      ),
      answered: isAnswered(question, answer),
      flagged: Boolean(answer?.flagged),
      answeredAt:
        answer?.answeredAt || undefined,
    };
  });
}

function sectionRecord(
  score: ReturnType<
    typeof estimateSatScore
  >["readingWriting"],
) {
  return {
    section: score.section,
    score: score.bestEstimate,
    lowEstimate: score.lowEstimate,
    highEstimate: score.highEstimate,
    module2Path: score.module2Path,
    correct: score.correct,
    total: score.total,
    unanswered: score.unanswered,
    accuracy: score.accuracy,
    weightedAccuracy: score.weightedAccuracy,
    domainBreakdown: score.domainBreakdown,
    difficultyBreakdown:
      score.difficultyBreakdown,
  };
}

export function fullSatRecordId(
  reading: ReadingSessionState,
  math: MathSessionState,
): string {
  return `full-sat-${reading.startedAt}-${math.startedAt}`;
}

function latestAnsweredAt(
  answers: Record<string, ScoreAnswer>,
): number | undefined {
  const values = Object.values(answers)
    .map((answer) => answer.answeredAt)
    .filter(
      (value): value is number =>
        Number.isFinite(value) && value > 0,
    );

  return values.length
    ? Math.max(...values)
    : undefined;
}

/**
 * Uses answer timestamps when possible so record creation can be deterministic
 * in tests and stable across result-page refreshes.
 */
export function inferFullSatCompletedAt(
  reading: ReadingSessionState,
  math: MathSessionState,
  fallback = Date.now(),
): number {
  return Math.max(
    latestAnsweredAt(reading.answers) ?? 0,
    latestAnsweredAt(math.answers) ?? 0,
    reading.updatedAt ?? 0,
    math.updatedAt ?? 0,
    fallback,
  );
}

/**
 * Pure record builder. It does not access localStorage.
 */
export function buildFullSatRecord(
  reading: ReadingSessionState,
  math: MathSessionState,
  completedAt = inferFullSatCompletedAt(
    reading,
    math,
  ),
): AdaptiveExamRecord | undefined {
  if (
    reading.phase !== "results" ||
    math.phase !== "results"
  ) {
    return undefined;
  }

  const readingModule1 = readQuestions(
    reading.module1QuestionIds,
  );
  const readingModule2 = readQuestions(
    reading.module2QuestionIds,
  );
  const mathModule1 = readQuestions(
    math.module1QuestionIds,
  );
  const mathModule2 = readQuestions(
    math.module2QuestionIds,
  );

  const allQuestions = [
    ...readingModule1,
    ...readingModule2,
    ...mathModule1,
    ...mathModule2,
  ];

  if (!allQuestions.length) return undefined;

  const modules: ScoreModule[] = [
    {
      key: "reading-module-1",
      title: "Reading & Writing Module 1",
      section: "Reading & Writing",
      difficulty: "Medium",
      questionIds: readingModule1.map(
        (question) => question.examId,
      ),
    },
    {
      key: "reading-module-2",
      title: "Reading & Writing Module 2",
      section: "Reading & Writing",
      difficulty:
        reading.module2Route ?? "Easy",
      questionIds: readingModule2.map(
        (question) => question.examId,
      ),
    },
    {
      key: "math-module-1",
      title: "Math Module 1",
      section: "Math",
      difficulty: "Medium",
      questionIds: mathModule1.map(
        (question) => question.examId,
      ),
    },
    {
      key: "math-module-2",
      title: "Math Module 2",
      section: "Math",
      difficulty: math.module2Route ?? "Easy",
      questionIds: mathModule2.map(
        (question) => question.examId,
      ),
    },
  ];

  const answers: Record<string, ScoreAnswer> = {
    ...reading.answers,
    ...math.answers,
  };

  const score = estimateSatScore(
    modules,
    answers,
  );
  const startedAt = Math.min(
    reading.startedAt,
    math.startedAt,
  );

  return createExamRecord({
    id: fullSatRecordId(reading, math),
    title: "Full Adaptive Digital SAT",
    startedAt,
    completedAt,
    durationSeconds: Math.max(
      0,
      Math.round(
        (completedAt - startedAt) / 1000,
      ),
    ),
    readingWriting: sectionRecord(
      score.readingWriting,
    ),
    math: sectionRecord(score.math),
    bestTotal: score.bestTotal,
    lowTotal: score.lowTotal,
    highTotal: score.highTotal,
    confidence: score.confidence,
    answers,
    questionResults: [
      ...buildQuestionResults(
        readingModule1,
        answers,
        "Reading & Writing",
        "reading-module-1",
        "Reading & Writing Module 1",
      ),
      ...buildQuestionResults(
        readingModule2,
        answers,
        "Reading & Writing",
        "reading-module-2",
        "Reading & Writing Module 2",
      ),
      ...buildQuestionResults(
        mathModule1,
        answers,
        "Math",
        "math-module-1",
        "Math Module 1",
      ),
      ...buildQuestionResults(
        mathModule2,
        answers,
        "Math",
        "math-module-2",
        "Math Module 2",
      ),
    ],
  });
}

export type FullSatSaveStatus =
  | "created"
  | "existing"
  | "incomplete";

export interface FullSatSaveResult {
  status: FullSatSaveStatus;
  record?: AdaptiveExamRecord;
}

/**
 * Idempotent history finalization.
 *
 * React Strict Mode, refreshes, repeated navigation, and duplicate clicks all
 * return the already-saved record instead of rebuilding it with a new
 * completedAt timestamp.
 */
export function saveFullSatAttemptOnce(
  reading: ReadingSessionState,
  math: MathSessionState,
): FullSatSaveResult {
  if (
    reading.phase !== "results" ||
    math.phase !== "results"
  ) {
    return { status: "incomplete" };
  }

  const id = fullSatRecordId(reading, math);
  const existing = getExamRecord(id);

  if (existing) {
    return {
      status: "existing",
      record: existing,
    };
  }

  const record = buildFullSatRecord(
    reading,
    math,
  );

  if (!record) {
    return { status: "incomplete" };
  }

  addExamRecord(record);

  return {
    status: "created",
    record,
  };
}

/**
 * Backward-compatible API.
 */
export function saveFullSatAttempt(
  reading: ReadingSessionState,
  math: MathSessionState,
): AdaptiveExamRecord | undefined {
  return saveFullSatAttemptOnce(
    reading,
    math,
  ).record;
}
