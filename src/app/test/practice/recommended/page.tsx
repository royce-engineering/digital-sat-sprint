"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  loadExamHistory,
  type AdaptiveExamRecord,
} from "@/lib/adaptive/analytics/history";
import {
  buildRecommendedPracticePlan,
  type PracticePlan,
} from "@/lib/adaptive/analytics/recommendations";
import { isEquivalentAnswer } from "@/lib/adaptive/answerEvaluator";
import {
  fullQuestionBank,
} from "@/lib/adaptive/questionBank";
import type {
  ExamQuestion,
  ExamSection,
} from "@/lib/adaptive/types";

type PracticeAnswer = {
  selected: number;
  typedAnswer: string;
};

function blankAnswer(): PracticeAnswer {
  return {
    selected: -1,
    typedAnswer: "",
  };
}

function percent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

function isCorrect(
  question: ExamQuestion,
  answer?: PracticeAnswer,
): boolean {
  if (!answer) return false;

  if (question.questionType === "student-response") {
    return isEquivalentAnswer(
      answer.typedAnswer,
      question.numericAnswer ?? "",
    );
  }

  return answer.selected === question.answer;
}

function hasAnswer(
  question: ExamQuestion,
  answer?: PracticeAnswer,
): boolean {
  if (!answer) return false;

  if (question.questionType === "student-response") {
    return Boolean(answer.typedAnswer.trim());
  }

  return answer.selected >= 0;
}

export default function RecommendedPracticePage() {
  const [records, setRecords] = useState<
    AdaptiveExamRecord[]
  >([]);
  const [section, setSection] = useState<ExamSection>(
    "Reading & Writing",
  );
  const [plan, setPlan] = useState<PracticePlan | null>(
    null,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, PracticeAnswer>
  >({});
  const [revealed, setRevealed] = useState<
    Record<string, boolean>
  >({});
  const [finished, setFinished] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const generate = (
    history: AdaptiveExamRecord[],
    selectedSection: ExamSection,
    seed = Date.now(),
  ) => {
    const next = buildRecommendedPracticePlan(
      fullQuestionBank,
      history,
      {
        section: selectedSection,
        count: 10,
        seed,
        limit: 4,
        minimumAttempts: 2,
        excludeRecentlySeen: true,
      },
    );

    setPlan(next);
    setCurrentIndex(0);
    setAnswers({});
    setRevealed({});
    setFinished(false);
  };

  useEffect(() => {
    const history = loadExamHistory();
    setRecords(history);
    generate(history, "Reading & Writing", Date.now());
    setLoaded(true);
  }, []);

  const completedCount = useMemo(() => {
    if (!plan) return 0;

    return plan.questions.filter((question) =>
      Boolean(revealed[question.examId]),
    ).length;
  }, [plan, revealed]);

  if (!loaded || !plan) {
    return (
      <main className="mx-auto max-w-6xl p-8">
        Loading recommended practice…
      </main>
    );
  }

  if (!plan.questions.length) {
    return (
      <main className="mx-auto max-w-4xl p-8">
        <section className="rounded-3xl border bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold">
            No practice questions are available
          </h1>
          <p className="mt-3 text-slate-600">
            Check the question bank and complete at least one adaptive
            test for recommendation data.
          </p>
          <Link
            href="/test/sat"
            className="mt-6 inline-flex rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white"
          >
            Open Test Center
          </Link>
        </section>
      </main>
    );
  }

  if (finished) {
    const correct = plan.questions.filter((question) =>
      isCorrect(question, answers[question.examId]),
    ).length;

    return (
      <main className="mx-auto max-w-6xl space-y-6 p-5 sm:p-8">
        <section className="rounded-3xl border bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Recommended practice complete
          </p>
          <h1 className="mt-2 text-3xl font-bold">
            {section} Results
          </h1>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Metric
              label="Correct"
              value={`${correct}/${plan.questions.length}`}
            />
            <Metric
              label="Accuracy"
              value={percent(
                correct / Math.max(1, plan.questions.length),
              )}
            />
            <Metric
              label="Target skills"
              value={String(plan.recommendations.length)}
            />
          </div>

          <div className="mt-7 space-y-3">
            {plan.questions.map((question, index) => {
              const answer = answers[question.examId];
              const correctAnswer = isCorrect(
                question,
                answer,
              );

              return (
                <button
                  key={question.examId}
                  type="button"
                  onClick={() => {
                    setFinished(false);
                    setCurrentIndex(index);
                  }}
                  className="flex w-full items-center justify-between gap-4 rounded-xl border p-4 text-left hover:bg-slate-50"
                >
                  <span>
                    <strong>Question {index + 1}</strong>
                    <span className="ml-2 text-sm text-slate-500">
                      {question.skill}
                    </span>
                  </span>
                  <span
                    className={
                      correctAnswer
                        ? "font-semibold text-green-700"
                        : "font-semibold text-red-700"
                    }
                  >
                    {correctAnswer
                      ? "Correct"
                      : hasAnswer(question, answer)
                        ? "Review"
                        : "Unanswered"}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() =>
                generate(records, section, Date.now())
              }
              className="rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white"
            >
              Generate another set
            </button>
            <Link
              href="/test/dashboard"
              className="rounded-xl border px-5 py-3 font-semibold"
            >
              Back to dashboard
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const question = plan.questions[currentIndex];
  const answer =
    answers[question.examId] ?? blankAnswer();
  const isRevealed = Boolean(
    revealed[question.examId],
  );

  const updateAnswer = (
    patch: Partial<PracticeAnswer>,
  ) => {
    setAnswers((current) => ({
      ...current,
      [question.examId]: {
        ...(current[question.examId] ?? blankAnswer()),
        ...patch,
      },
    }));
  };

  const changeSection = (next: ExamSection) => {
    setSection(next);
    generate(records, next, Date.now());
  };

  return (
    <main className="mx-auto max-w-7xl space-y-6 p-4 sm:p-8">
      <header className="flex flex-wrap items-end justify-between gap-5 rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Personalized practice
          </p>
          <h1 className="mt-2 text-3xl font-bold">
            Recommended Practice
          </h1>
          <p className="mt-2 text-slate-600">
            Targeted questions generated from your weakest saved
            skills.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {(
            ["Reading & Writing", "Math"] as ExamSection[]
          ).map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => changeSection(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                section === item
                  ? "bg-slate-950 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="space-y-5">
          <section className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="font-bold">Priority skills</h2>

            {plan.recommendations.length ? (
              <div className="mt-4 space-y-4">
                {plan.recommendations.map(
                  (item, index) => (
                    <div key={`${item.section}-${item.skill}`}>
                      <div className="flex justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold">
                            {index + 1}. {item.skill}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {item.domain} · Target{" "}
                            {item.targetDifficulty}
                          </p>
                        </div>
                        <span className="text-sm font-bold">
                          {percent(item.accuracy)}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.reason}
                      </p>
                    </div>
                  ),
                )}
              </div>
            ) : (
              <p className="mt-4 text-sm text-slate-500">
                Not enough history exists yet, so the set uses a
                balanced fallback from the {section} bank.
              </p>
            )}
          </section>

          <section className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Checked</span>
              <strong>
                {completedCount}/{plan.questions.length}
              </strong>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2">
              {plan.questions.map((item, index) => (
                <button
                  type="button"
                  key={item.examId}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-lg border px-2 py-2 text-sm font-semibold ${
                    index === currentIndex
                      ? "border-slate-950 bg-slate-950 text-white"
                      : revealed[item.examId]
                        ? "bg-slate-100"
                        : "bg-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </section>

          {plan.shortages.length > 0 && (
            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
              <h2 className="font-bold">Question-bank notes</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {plan.shortages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        <article className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <span className="font-semibold text-slate-600">
              Question {currentIndex + 1} of{" "}
              {plan.questions.length}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold">
              {question.skill} · {question.difficulty}
            </span>
          </div>

          {question.passage && (
            <div className="mt-7 whitespace-pre-wrap rounded-2xl bg-slate-50 p-5 leading-7 text-slate-700">
              {question.passage}
            </div>
          )}

          <h2 className="mt-7 whitespace-pre-wrap text-xl font-semibold leading-8">
            {question.prompt}
          </h2>

          {question.questionType === "student-response" ? (
            <div className="mt-6">
              <label
                htmlFor="recommended-student-response"
                className="text-sm font-semibold"
              >
                Enter your answer
              </label>
              <input
                id="recommended-student-response"
                inputMode="decimal"
                disabled={isRevealed}
                value={answer.typedAnswer}
                onChange={(event) =>
                  updateAnswer({
                    typedAnswer: event.target.value,
                  })
                }
                className="mt-2 w-full rounded-xl border px-4 py-3 disabled:bg-slate-100"
              />
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {question.choices.map((choice, index) => {
                const chosen = answer.selected === index;
                const correctChoice =
                  isRevealed && index === question.answer;
                const incorrectChoice =
                  isRevealed &&
                  chosen &&
                  index !== question.answer;

                return (
                  <button
                    type="button"
                    key={`${question.examId}-${index}`}
                    disabled={isRevealed}
                    onClick={() =>
                      updateAnswer({ selected: index })
                    }
                    className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left ${
                      correctChoice
                        ? "border-green-500 bg-green-50"
                        : incorrectChoice
                          ? "border-red-500 bg-red-50"
                          : chosen
                            ? "border-slate-950 bg-slate-100"
                            : "hover:bg-slate-50"
                    }`}
                  >
                    <strong>
                      {String.fromCharCode(65 + index)}.
                    </strong>
                    <span>{choice.text}</span>
                  </button>
                );
              })}
            </div>
          )}

          {isRevealed && (
            <section className="mt-6 rounded-2xl border bg-slate-50 p-5">
              <h3 className="font-bold">
                {isCorrect(question, answer)
                  ? "Correct"
                  : "Review this question"}
              </h3>

              {question.questionType ===
              "student-response" ? (
                <p className="mt-2 text-sm leading-6">
                  Correct answer:{" "}
                  <strong>{question.numericAnswer}</strong>
                </p>
              ) : (
                <>
                  <p className="mt-2 text-sm leading-6">
                    {
                      question.choices[question.answer]
                        ?.rationale
                    }
                  </p>
                  {answer.selected >= 0 &&
                    answer.selected !== question.answer && (
                      <p className="mt-3 text-sm leading-6">
                        <strong>Why your choice misses:</strong>{" "}
                        {
                          question.choices[answer.selected]
                            ?.rationale
                        }
                      </p>
                    )}
                </>
              )}

              {question.walkthrough?.length ? (
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm">
                  {question.walkthrough.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              ) : null}
            </section>
          )}

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() =>
                setCurrentIndex((value) =>
                  Math.max(0, value - 1),
                )
              }
              className="rounded-xl border px-4 py-2.5 font-semibold disabled:opacity-40"
            >
              Previous
            </button>

            <div className="flex gap-3">
              {!isRevealed ? (
                <button
                  type="button"
                  disabled={!hasAnswer(question, answer)}
                  onClick={() =>
                    setRevealed((current) => ({
                      ...current,
                      [question.examId]: true,
                    }))
                  }
                  className="rounded-xl bg-slate-950 px-5 py-2.5 font-semibold text-white disabled:opacity-40"
                >
                  Check answer
                </button>
              ) : currentIndex <
                plan.questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((value) => value + 1)
                  }
                  className="rounded-xl bg-slate-950 px-5 py-2.5 font-semibold text-white"
                >
                  Next question
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setFinished(true)}
                  className="rounded-xl bg-slate-950 px-5 py-2.5 font-semibold text-white"
                >
                  Finish practice
                </button>
              )}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
}
