"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { loadExamHistory, type AdaptiveExamRecord } from "@/lib/adaptive/analytics/history";
import {
  buildRecommendedPracticePlan,
  type PracticePlan,
} from "@/lib/adaptive/analytics/recommendations";
import { readingWritingBank } from "@/lib/adaptive/questionBank";

function percent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export default function RecommendedPracticePage() {
  const [records, setRecords] = useState<AdaptiveExamRecord[]>([]);
  const [plan, setPlan] = useState<PracticePlan | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const generate = (history: AdaptiveExamRecord[], seed = Date.now()) => {
    const nextPlan = buildRecommendedPracticePlan(readingWritingBank, history, {
      count: 10,
      limit: 4,
      minimumAttempts: 2,
      seed,
      excludeRecentlySeen: true,
    });
    setPlan(nextPlan);
    setCurrentIndex(0);
    setAnswers({});
    setRevealed({});
    setFinished(false);
  };

  useEffect(() => {
    const history = loadExamHistory();
    setRecords(history);
    generate(history);
    setLoaded(true);
  }, []);

  const score = useMemo(() => {
    if (!plan) return { correct: 0, total: 0 };
    const correct = plan.questions.filter(
      (question) => answers[question.examId] === question.answer,
    ).length;
    return { correct, total: plan.questions.length };
  }, [answers, plan]);

  if (!loaded || !plan) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="text-sm text-slate-500">Building your practice set…</p>
      </main>
    );
  }

  if (records.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Sprint 45B-4</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">Personalized practice needs exam history</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Complete at least one adaptive Reading & Writing test. The recommendation engine will use your skill-level results to choose the next practice set.
          </p>
          <Link href="/test/adaptive" className="mt-7 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            Take adaptive test
          </Link>
        </div>
      </main>
    );
  }

  if (finished) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Practice complete</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              {score.correct}/{score.total} correct
            </h1>
            <p className="mt-2 text-lg text-slate-600">
              {score.total ? percent(score.correct / score.total) : "0%"} accuracy
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {plan.questions.map((question, index) => {
                const selected = answers[question.examId];
                const correct = selected === question.answer;
                return (
                  <button
                    key={question.examId}
                    type="button"
                    onClick={() => {
                      setFinished(false);
                      setCurrentIndex(index);
                    }}
                    className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-left hover:bg-slate-50"
                  >
                    <span>
                      <span className="font-semibold text-slate-950">Question {index + 1}</span>
                      <span className="ml-2 text-sm text-slate-500">{question.skill}</span>
                    </span>
                    <span className={correct ? "font-semibold text-emerald-700" : "font-semibold text-rose-700"}>
                      {correct ? "Correct" : selected === undefined ? "Unanswered" : "Review"}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => generate(records, Date.now())} className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                Generate another set
              </button>
              <Link href="/test/dashboard" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100">
                Back to dashboard
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  const question = plan.questions[currentIndex];
  const selected = answers[question.examId];
  const isRevealed = Boolean(revealed[question.examId]);
  const progress = plan.questions.length ? ((currentIndex + 1) / plan.questions.length) * 100 : 0;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Sprint 45B-4</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Recommended Practice</h1>
            <p className="mt-2 text-slate-600">A targeted set built from your weakest Reading & Writing skills.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/test/dashboard" className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100">
              Dashboard
            </Link>
            <button type="button" onClick={() => generate(records, Date.now())} className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
              Regenerate set
            </button>
          </div>
        </header>

        <section className="mt-7 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="space-y-5">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-slate-950">Priority skills</h2>
              <div className="mt-4 space-y-4">
                {plan.recommendations.map((item, index) => (
                  <div key={item.skill}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{index + 1}. {item.skill}</p>
                        <p className="mt-1 text-xs text-slate-500">{item.domain} · Target {item.targetDifficulty}</p>
                      </div>
                      <span className="text-sm font-semibold text-slate-900">{percent(item.accuracy)}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{item.reason}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Answered</span>
                <span className="font-semibold text-slate-950">{Object.keys(answers).length}/{plan.questions.length}</span>
              </div>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {plan.questions.map((item, index) => (
                  <button
                    key={item.examId}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-lg border px-2 py-2 text-sm font-semibold ${
                      index === currentIndex
                        ? "border-slate-950 bg-slate-950 text-white"
                        : answers[item.examId] !== undefined
                          ? "border-slate-300 bg-slate-100 text-slate-900"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </article>
          </aside>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <span className="font-semibold text-slate-600">Question {currentIndex + 1} of {plan.questions.length}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">{question.skill} · {question.difficulty}</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full bg-slate-950" style={{ width: `${progress}%` }} />
            </div>

            {question.passage ? (
              <div className="mt-7 whitespace-pre-wrap rounded-2xl bg-slate-50 p-5 leading-7 text-slate-700">{question.passage}</div>
            ) : null}
            <h2 className="mt-7 text-xl font-semibold leading-8 text-slate-950">{question.prompt}</h2>

            <div className="mt-6 space-y-3">
              {question.choices.map((choice, index) => {
                const chosen = selected === index;
                const correctChoice = isRevealed && index === question.answer;
                const incorrectChoice = isRevealed && chosen && index !== question.answer;
                return (
                  <button
                    key={`${question.examId}-${index}`}
                    type="button"
                    disabled={isRevealed}
                    onClick={() => setAnswers((current) => ({ ...current, [question.examId]: index }))}
                    className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition ${
                      correctChoice
                        ? "border-emerald-500 bg-emerald-50"
                        : incorrectChoice
                          ? "border-rose-500 bg-rose-50"
                          : chosen
                            ? "border-slate-950 bg-slate-100"
                            : "border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    <span className="font-bold text-slate-700">{String.fromCharCode(65 + index)}.</span>
                    <span className="text-slate-800">{choice.text}</span>
                  </button>
                );
              })}
            </div>

            {isRevealed ? (
              <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-950">
                  {selected === question.answer ? "Correct" : "Review this question"}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{question.choices[question.answer]?.rationale}</p>
                {selected !== undefined && selected !== question.answer ? (
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    <strong>Why your choice misses:</strong> {question.choices[selected]?.rationale}
                  </p>
                ) : null}
                {question.walkthrough?.length ? (
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                    {question.walkthrough.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                ) : null}
              </section>
            ) : null}

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
              <button type="button" disabled={currentIndex === 0} onClick={() => setCurrentIndex((value) => Math.max(0, value - 1))} className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 disabled:cursor-not-allowed disabled:opacity-40">
                Previous
              </button>
              <div className="flex gap-3">
                {!isRevealed ? (
                  <button type="button" disabled={selected === undefined} onClick={() => setRevealed((current) => ({ ...current, [question.examId]: true }))} className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">
                    Check answer
                  </button>
                ) : currentIndex < plan.questions.length - 1 ? (
                  <button type="button" onClick={() => setCurrentIndex((value) => value + 1)} className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white">
                    Next question
                  </button>
                ) : (
                  <button type="button" onClick={() => setFinished(true)} className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white">
                    Finish practice
                  </button>
                )}
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
