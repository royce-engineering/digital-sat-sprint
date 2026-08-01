import { getQuestion } from "../questionBank";
import {
  estimateSectionScore,
  isScoreAnswerCorrect,
  type ScoreAnswer,
  type ScoreModule,
} from "../scoreEngine";
import type { ExamQuestion } from "../types";
import type { ReadingSessionState } from "../session/readingSession";
import {
  createAndAddExamRecord,
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
    .map(getQuestion)
    .filter(
      (question): question is ExamQuestion =>
        Boolean(question),
    );
}

function questionDomain(question: ExamQuestion): string {
  return (
    question.blueprint?.domain ??
    question.domain ??
    "Unclassified Reading & Writing"
  );
}

function questionSkill(question: ExamQuestion): string {
  return (
    question.blueprint?.skill ??
    question.skill ??
    "Unclassified skill"
  );
}

function buildQuestionResults(
  questions: ExamQuestion[],
  answers: Record<string, ScoreAnswer>,
  moduleKey: string,
  moduleTitle: string,
): ExamQuestionResult[] {
  return questions.map((question) => {
    const answer = answers[question.examId];

    return {
      questionId: question.id,
      examId: question.examId,
      section: "Reading & Writing",
      moduleKey,
      moduleTitle,
      difficulty: question.difficulty,
      domain: questionDomain(question),
      skill: questionSkill(question),
      correct: isScoreAnswerCorrect(question, answer),
      answered: isAnswered(question, answer),
      flagged: Boolean(answer?.flagged),
      answeredAt: answer?.answeredAt || undefined,
    };
  });
}

/**
 * Builds canonical Reading score modules.
 *
 * `questionIds` intentionally contain `examId`, matching adaptive sessions,
 * answer-map keys, the full-SAT history adapter, and the project's canonical
 * identifier invariant.
 */
export function buildReadingScoreModules(
  module1Questions: ExamQuestion[],
  module2Questions: ExamQuestion[],
  module2Route?: "Easy" | "Hard",
): ScoreModule[] {
  return [
    {
      key: "reading-module-1",
      title: "Reading & Writing Module 1",
      section: "Reading & Writing",
      difficulty: "Medium",
      questionIds: module1Questions.map(
        (question) => question.examId,
      ),
    },
    {
      key: "reading-module-2",
      title: "Reading & Writing Module 2",
      section: "Reading & Writing",
      difficulty: module2Route ?? "Easy",
      questionIds: module2Questions.map(
        (question) => question.examId,
      ),
    },
  ];
}

export function saveReadingSessionAttempt(
  session: ReadingSessionState,
): AdaptiveExamRecord | undefined {
  if (session.phase !== "results") return undefined;

  const module1Questions = readQuestions(
    session.module1QuestionIds,
  );
  const module2Questions = readQuestions(
    session.module2QuestionIds,
  );
  const allQuestions = [
    ...module1Questions,
    ...module2Questions,
  ];

  if (!allQuestions.length) return undefined;

  const modules = buildReadingScoreModules(
    module1Questions,
    module2Questions,
    session.module2Route,
  );

  const score = estimateSectionScore(
    "Reading & Writing",
    modules,
    session.answers,
  );
  const completedAt = Date.now();

  return createAndAddExamRecord({
    title: "Adaptive Reading & Writing Test",
    startedAt: session.startedAt,
    completedAt,
    durationSeconds: Math.max(
      0,
      Math.round(
        (completedAt - session.startedAt) / 1000,
      ),
    ),
    readingWriting: {
      section: "Reading & Writing",
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
      difficultyBreakdown: score.difficultyBreakdown,
    },
    answers: session.answers,
    questionResults: [
      ...buildQuestionResults(
        module1Questions,
        session.answers,
        "reading-module-1",
        "Reading & Writing Module 1",
      ),
      ...buildQuestionResults(
        module2Questions,
        session.answers,
        "reading-module-2",
        "Reading & Writing Module 2",
      ),
    ],
  });
}
