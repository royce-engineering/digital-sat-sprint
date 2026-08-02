"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { SessionLeaseGuard } from "@/components/adaptive/SessionLeaseGuard";
import { buildReadingAdaptiveExam } from "@/lib/adaptive/readingAdaptiveEngine";
import { getQuestion } from "@/lib/adaptive/questionBank";
import {
  isScoreAnswerCorrect,
  type ScoreAnswer,
} from "@/lib/adaptive/scoreEngine";
import type { ExamQuestion } from "@/lib/adaptive/types";
import { saveReadingSessionAttempt } from "@/lib/adaptive/analytics/readingHistory";
import Link from "next/link";
import {
  clearReadingSession,
  loadReadingSession,
  saveReadingSession,
  READING_MODULE_SECONDS,
  type ReadingExamPhase,
  type ReadingSessionState,
} from "@/lib/adaptive/session/readingSession";

import {
  phaseUsesModuleTimer,
  readDeadlineTimer,
  resetDeadlineTimer,
  startDeadlineTimer,
} from "@/lib/adaptive/runtime/deadlineTimer";
import {
  claimModuleSubmission,
  createModuleSubmissionState,
} from "@/lib/adaptive/runtime/moduleSubmissionGuard";

const MODULE_SECONDS = READING_MODULE_SECONDS;
const HARD_ROUTE_THRESHOLD = 0.65;

function newSeed(): number {
  return Math.floor(Date.now() % 2_147_483_647);
}

function emptyAnswer(): ScoreAnswer {
  return {
    selected: -1,
    typedAnswer: "",
    flagged: false,
    answeredAt: 0,
  };
}

function createInitialSession(): ReadingSessionState {
  return {
    version: 1,
    phase: "intro",
    module1Seed: newSeed(),
    module2Seed: newSeed() + 997,
    hardRouteThreshold: HARD_ROUTE_THRESHOLD,
    module1QuestionIds: [],
    module2QuestionIds: [],
    answers: {},
    currentIndex: 0,
    secondsRemaining: MODULE_SECONDS,
    timerDeadlineAt: undefined,
    submissionState: createModuleSubmissionState(),
    startedAt: Date.now(),
    updatedAt: Date.now(),
  };
}

function questionFromId(id: string): ExamQuestion | undefined {
  return getQuestion(id);
}

function formatTime(seconds: number): string {
  const safe = Math.max(0, seconds);
  const minutes = Math.floor(safe / 60);
  const remainder = safe % 60;
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

function answered(question: ExamQuestion, answer?: ScoreAnswer): boolean {
  if (!answer) return false;
  if (question.questionType === "student-response") {
    return Boolean(answer.typedAnswer?.trim());
  }
  return answer.selected >= 0;
}

function AdaptiveReadingPageContent() {
  const [session, setSession] = useState<ReadingSessionState | null>(null);

  useEffect(() => {
    setSession(loadReadingSession() ?? createInitialSession());
  }, []);

  useEffect(() => {
    if (session) saveReadingSession(session);
  }, [session]);

  useEffect(() => {
    if (!session || session.phase !== "results" || session.historyRecordId)
      return;

    const record = saveReadingSessionAttempt(session);
    if (!record) return;

    setSession((current) =>
      current && current.phase === "results" && !current.historyRecordId
        ? { ...current, historyRecordId: record.id }
        : current,
    );
  }, [session]);

  const adaptiveExam = useMemo(() => {
    if (!session) return null;
    return buildReadingAdaptiveExam({
      module1Seed: session.module1Seed,
      module2Seed: session.module2Seed,
      hardRouteThreshold: session.hardRouteThreshold,
    });
  }, [session]);

  const activeQuestionIds = useMemo(() => {
    if (!session) return [];
    return session.phase.startsWith("module-1")
      ? session.module1QuestionIds
      : session.module2QuestionIds;
  }, [session]);

  const activeQuestions = useMemo(
    () =>
      activeQuestionIds
        .map(questionFromId)
        .filter((q): q is ExamQuestion => Boolean(q)),
    [activeQuestionIds],
  );

  const submitModule1 = useCallback(() => {
    if (!adaptiveExam) return;

    setSession((current) => {
      if (
        !current ||
        (current.phase !== "module-1" && current.phase !== "module-1-review")
      ) {
        return current;
      }

      const claim = claimModuleSubmission(
        current.submissionState ?? createModuleSubmissionState(),
        "reading-module-1",
      );

      if (!claim.allowed) return current;

      const result = adaptiveExam.buildModule2(current.answers);

      return {
        ...current,
        phase: "module-2-transition",
        module2Route: result.route,
        module2QuestionIds: result.questions.map((question) => question.examId),
        currentIndex: 0,
        secondsRemaining: MODULE_SECONDS,
        timerDeadlineAt: undefined,
        submissionState: claim.state,
      };
    });
  }, [adaptiveExam]);

  const submitModule2 = useCallback(() => {
    setSession((current) => {
      if (
        !current ||
        (current.phase !== "module-2" && current.phase !== "module-2-review")
      ) {
        return current;
      }

      const claim = claimModuleSubmission(
        current.submissionState ?? createModuleSubmissionState(),
        "reading-module-2",
      );

      if (!claim.allowed) return current;

      return {
        ...current,
        phase: "results",
        currentIndex: 0,
        secondsRemaining: 0,
        timerDeadlineAt: undefined,
        submissionState: claim.state,
      };
    });
  }, []);

  useEffect(() => {
    if (!session || !phaseUsesModuleTimer(session.phase)) {
      return;
    }

    const tick = () => {
      setSession((current) => {
        if (!current || !phaseUsesModuleTimer(current.phase)) {
          return current;
        }

        const timer = current.timerDeadlineAt
          ? readDeadlineTimer(current)
          : startDeadlineTimer(current.secondsRemaining);

        const timed = {
          ...current,
          timerDeadlineAt: timer.timerDeadlineAt,
          secondsRemaining: timer.secondsRemaining,
        };

        if (!timer.expired) return timed;

        if (
          current.phase === "module-1" ||
          current.phase === "module-1-review"
        ) {
          if (!adaptiveExam) return timed;

          const claim = claimModuleSubmission(
            current.submissionState ?? createModuleSubmissionState(),
            "reading-module-1",
          );

          if (!claim.allowed) return timed;

          const result = adaptiveExam.buildModule2(current.answers);

          return {
            ...timed,
            phase: "module-2-transition",
            module2Route: result.route,
            module2QuestionIds: result.questions.map(
              (question) => question.examId,
            ),
            currentIndex: 0,
            secondsRemaining: MODULE_SECONDS,
            timerDeadlineAt: undefined,
            submissionState: claim.state,
          };
        }

        const claim = claimModuleSubmission(
          current.submissionState ?? createModuleSubmissionState(),
          "reading-module-2",
        );

        if (!claim.allowed) return timed;

        return {
          ...timed,
          phase: "results",
          currentIndex: 0,
          secondsRemaining: 0,
          timerDeadlineAt: undefined,
          submissionState: claim.state,
        };
      });
    };

    tick();
    const timerId = window.setInterval(tick, 1000);

    return () => window.clearInterval(timerId);
  }, [session, session?.phase, session?.timerDeadlineAt, adaptiveExam]);

  if (!session || !adaptiveExam) {
    return (
      <main className="mx-auto max-w-5xl p-8">Loading adaptive test…</main>
    );
  }

  const startExam = () => {
    const questions = adaptiveExam.module1;
    const timer = resetDeadlineTimer(MODULE_SECONDS);

    setSession({
      ...session,
      phase: "module-1",
      module1QuestionIds: questions.map((question) => question.examId),
      module2QuestionIds: [],
      module2Route: undefined,
      historyRecordId: undefined,
      answers: {},
      currentIndex: 0,
      secondsRemaining: timer.secondsRemaining,
      timerDeadlineAt: timer.timerDeadlineAt,
      submissionState: createModuleSubmissionState(),
      startedAt: Date.now(),
    });
  };

  const restartExam = () => {
    clearReadingSession();
    const next = createInitialSession();
    setSession(next);
  };

  if (session.phase === "intro") {
    return (
      <main className="mx-auto max-w-3xl p-8">
        <section className="rounded-2xl border bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Sprint 45A
          </p>
          <h1 className="mt-2 text-3xl font-bold">
            Adaptive Reading & Writing Test
          </h1>
          <p className="mt-4 text-gray-600">
            Complete Module 1, review your answers, and submit. Your Module 2
            route is then selected automatically.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <InfoCard
              label="Module 1"
              value={`${adaptiveExam.module1.length} questions`}
            />
            <InfoCard label="Time" value={`${MODULE_SECONDS / 60} minutes`} />
            <InfoCard label="Routing" value="Easy or Hard" />
          </div>
          <button
            type="button"
            onClick={startExam}
            className="mt-8 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Start Module 1
          </button>
        </section>
      </main>
    );
  }

  if (session.phase === "module-2-transition") {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center p-8">
        <section className="w-full rounded-2xl border bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Module 1 submitted
          </p>
          <h1 className="mt-3 text-3xl font-bold">Module 2 is ready</h1>
          <p className="mt-4 text-gray-600">Your adaptive route:</p>
          <p className="mt-2 text-4xl font-black">{session.module2Route}</p>
          <button
            type="button"
            onClick={() => {
              const timer = resetDeadlineTimer(MODULE_SECONDS);

              setSession({
                ...session,
                phase: "module-2",
                currentIndex: 0,
                secondsRemaining: timer.secondsRemaining,
                timerDeadlineAt: timer.timerDeadlineAt,
              });
            }}
            className="mt-8 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Start Module 2
          </button>
        </section>
      </main>
    );
  }

  if (session.phase === "results") {
    const allQuestions = [
      ...session.module1QuestionIds,
      ...session.module2QuestionIds,
    ]
      .map(questionFromId)
      .filter((q): q is ExamQuestion => Boolean(q));
    const correct = allQuestions.filter((question) =>
      isScoreAnswerCorrect(question, session.answers[question.examId]),
    ).length;
    const unansweredCount = allQuestions.filter(
      (question) => !answered(question, session.answers[question.examId]),
    ).length;
    const domainRows = buildDomainRows(allQuestions, session.answers);

    return (
      <main className="mx-auto max-w-5xl space-y-6 p-8">
        <section className="rounded-2xl border bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Test complete
          </p>
          <h1 className="mt-2 text-3xl font-bold">Reading & Writing Results</h1>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            <InfoCard
              label="Correct"
              value={`${correct}/${allQuestions.length}`}
            />
            <InfoCard
              label="Accuracy"
              value={`${Math.round((correct / Math.max(1, allQuestions.length)) * 100)}%`}
            />
            <InfoCard label="Unanswered" value={String(unansweredCount)} />
            <InfoCard label="Module 2" value={session.module2Route ?? "—"} />
          </div>
        </section>

        <section className="rounded-2xl border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Domain breakdown</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="p-3">Domain</th>
                  <th className="p-3">Correct</th>
                  <th className="p-3">Total</th>
                  <th className="p-3">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {domainRows.map((row) => (
                  <tr key={row.label} className="border-b">
                    <td className="p-3 font-medium">{row.label}</td>
                    <td className="p-3">{row.correct}</td>
                    <td className="p-3">{row.total}</td>
                    <td className="p-3">{Math.round(row.accuracy * 100)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={restartExam}
            className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Start a new test
          </button>
          <Link
            href={
              session.historyRecordId
                ? `/test/history/${session.historyRecordId}`
                : "/test/history"
            }
            className="rounded-lg border px-6 py-3 font-semibold hover:bg-gray-50"
          >
            View saved result
          </Link>
        </div>
      </main>
    );
  }

  const isReview =
    session.phase === "module-1-review" || session.phase === "module-2-review";

  if (isReview) {
    const moduleNumber = session.phase === "module-1-review" ? 1 : 2;
    return (
      <ReviewScreen
        title={`Module ${moduleNumber} review`}
        questions={activeQuestions}
        answers={session.answers}
        onOpenQuestion={(index) =>
          setSession({
            ...session,
            currentIndex: index,
            phase: moduleNumber === 1 ? "module-1" : "module-2",
          })
        }
        onSubmit={moduleNumber === 1 ? submitModule1 : submitModule2}
        onBack={() =>
          setSession({
            ...session,
            phase: moduleNumber === 1 ? "module-1" : "module-2",
          })
        }
      />
    );
  }

  const currentQuestion = activeQuestions[session.currentIndex];
  if (!currentQuestion) {
    return (
      <main className="mx-auto max-w-3xl p-8">
        <section className="rounded-xl border p-6">
          <h1 className="text-2xl font-bold">No questions were generated</h1>
          <p className="mt-2 text-gray-600">
            Check the blueprint diagnostic before starting the adaptive test.
          </p>
          <button
            onClick={restartExam}
            className="mt-5 rounded-lg bg-blue-700 px-5 py-2 text-white"
          >
            Reset
          </button>
        </section>
      </main>
    );
  }

  const currentAnswer =
    session.answers[currentQuestion.examId] ?? emptyAnswer();
  const moduleNumber = session.phase === "module-1" ? 1 : 2;

  const updateAnswer = (patch: Partial<ScoreAnswer>) => {
    setSession((current) => {
      if (!current) return current;
      const existing = current.answers[currentQuestion.examId] ?? emptyAnswer();
      return {
        ...current,
        answers: {
          ...current.answers,
          [currentQuestion.examId]: {
            ...existing,
            ...patch,
            answeredAt: Date.now(),
          },
        },
      };
    });
  };

  return (
    <main className="mx-auto max-w-6xl p-4 sm:p-8">
      <header className="mb-5 flex items-center justify-between rounded-xl border bg-white px-5 py-4 shadow-sm">
        <div>
          <p className="text-sm text-gray-500">Reading & Writing</p>
          <h1 className="font-bold">Module {moduleNumber}</h1>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Time remaining</p>
          <p className="font-mono text-2xl font-bold">
            {formatTime(session.secondsRemaining)}
          </p>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-[1fr_290px]">
        <section className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <p className="font-semibold">
              Question {session.currentIndex + 1} of {activeQuestions.length}
            </p>
            <button
              type="button"
              onClick={() => updateAnswer({ flagged: !currentAnswer.flagged })}
              className={`rounded-lg border px-3 py-2 text-sm font-semibold ${currentAnswer.flagged ? "border-amber-500 bg-amber-50" : "hover:bg-gray-50"}`}
            >
              {currentAnswer.flagged ? "⚑ Flagged" : "⚐ Flag"}
            </button>
          </div>

          {currentQuestion.passage && (
            <div className="mt-6 whitespace-pre-wrap rounded-xl bg-gray-50 p-5 leading-7 text-gray-800">
              {currentQuestion.passage}
            </div>
          )}

          <h2 className="mt-6 text-lg font-semibold leading-7">
            {currentQuestion.prompt}
          </h2>

          {currentQuestion.questionType === "student-response" ? (
            <input
              value={currentAnswer.typedAnswer ?? ""}
              onChange={(event) =>
                updateAnswer({ typedAnswer: event.target.value })
              }
              className="mt-5 w-full rounded-lg border px-4 py-3"
              placeholder="Enter your answer"
            />
          ) : (
            <div className="mt-5 space-y-3">
              {currentQuestion.choices.map((choice, index) => (
                <label
                  key={`${currentQuestion.id}-${index}`}
                  className={`flex cursor-pointer gap-3 rounded-xl border p-4 ${currentAnswer.selected === index ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50"}`}
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    checked={currentAnswer.selected === index}
                    onChange={() => updateAnswer({ selected: index })}
                    className="mt-1"
                  />
                  <span>
                    <strong>{String.fromCharCode(65 + index)}.</strong>{" "}
                    {choice.text}
                  </span>
                </label>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap justify-between gap-3 border-t pt-5">
            <button
              type="button"
              disabled={session.currentIndex === 0}
              onClick={() =>
                setSession({
                  ...session,
                  currentIndex: Math.max(0, session.currentIndex - 1),
                })
              }
              className="rounded-lg border px-5 py-2 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() =>
                  setSession({
                    ...session,
                    phase:
                      moduleNumber === 1
                        ? "module-1-review"
                        : "module-2-review",
                  })
                }
                className="rounded-lg border px-5 py-2 font-semibold"
              >
                Review
              </button>
              <button
                type="button"
                onClick={() => {
                  if (session.currentIndex < activeQuestions.length - 1) {
                    setSession({
                      ...session,
                      currentIndex: session.currentIndex + 1,
                    });
                  } else {
                    setSession({
                      ...session,
                      phase:
                        moduleNumber === 1
                          ? "module-1-review"
                          : "module-2-review",
                    });
                  }
                }}
                className="rounded-lg bg-blue-700 px-5 py-2 font-semibold text-white hover:bg-blue-800"
              >
                {session.currentIndex < activeQuestions.length - 1
                  ? "Next"
                  : "Review module"}
              </button>
            </div>
          </div>
        </section>

        <aside className="h-fit rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="font-bold">Question navigator</h2>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {activeQuestions.map((question, index) => {
              const value = session.answers[question.examId];
              const isAnswered = answered(question, value);
              return (
                <button
                  type="button"
                  key={question.id}
                  onClick={() =>
                    setSession({ ...session, currentIndex: index })
                  }
                  className={`aspect-square rounded-lg border text-sm font-semibold ${index === session.currentIndex ? "border-blue-700 ring-2 ring-blue-200" : ""} ${value?.flagged ? "bg-amber-100" : isAnswered ? "bg-green-50" : "bg-white"}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <div className="mt-5 space-y-2 text-xs text-gray-600">
            <p>
              <span className="mr-2 inline-block h-3 w-3 rounded border bg-green-50" />
              Answered
            </p>
            <p>
              <span className="mr-2 inline-block h-3 w-3 rounded border bg-amber-100" />
              Flagged
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default function AdaptiveReadingPage() {
  return (
    <SessionLeaseGuard kind="reading">
      <AdaptiveReadingPageContent />
    </SessionLeaseGuard>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-gray-50 p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}

function ReviewScreen({
  title,
  questions,
  answers,
  onOpenQuestion,
  onSubmit,
  onBack,
}: {
  title: string;
  questions: ExamQuestion[];
  answers: Record<string, ScoreAnswer>;
  onOpenQuestion: (index: number) => void;
  onSubmit: () => void;
  onBack: () => void;
}) {
  const unansweredCount = questions.filter(
    (question) => !answered(question, answers[question.examId]),
  ).length;
  const flaggedCount = questions.filter(
    (question) => answers[question.examId]?.flagged,
  ).length;

  return (
    <main className="mx-auto max-w-4xl p-8">
      <section className="rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-gray-600">
          Review unanswered or flagged questions before submitting.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <InfoCard label="Unanswered" value={String(unansweredCount)} />
          <InfoCard label="Flagged" value={String(flaggedCount)} />
        </div>
        <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
          {questions.map((question, index) => {
            const value = answers[question.examId];
            const isAnswered = answered(question, value);
            return (
              <button
                type="button"
                key={question.id}
                onClick={() => onOpenQuestion(index)}
                className={`rounded-lg border p-3 font-semibold ${value?.flagged ? "bg-amber-100" : isAnswered ? "bg-green-50" : "bg-red-50"}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <div className="mt-8 flex flex-wrap justify-between gap-3 border-t pt-5">
          <button
            type="button"
            onClick={onBack}
            className="rounded-lg border px-5 py-2 font-semibold"
          >
            Return to questions
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="rounded-lg bg-blue-700 px-5 py-2 font-semibold text-white hover:bg-blue-800"
          >
            Submit module
          </button>
        </div>
      </section>
    </main>
  );
}

function buildDomainRows(
  questions: ExamQuestion[],
  answers: Record<string, ScoreAnswer>,
) {
  const groups = new Map<string, { correct: number; total: number }>();

  for (const question of questions) {
    const label =
      question.blueprint?.domain ?? question.domain ?? "Unclassified";
    const row = groups.get(label) ?? { correct: 0, total: 0 };
    row.total += 1;
    if (isScoreAnswerCorrect(question, answers[question.examId]))
      row.correct += 1;
    groups.set(label, row);
  }

  return [...groups.entries()]
    .map(([label, row]) => ({
      label,
      correct: row.correct,
      total: row.total,
      accuracy: row.total ? row.correct / row.total : 0,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}
