"use client";

import Link from "next/link";
import { FullSatHistorySaver } from "./FullSatHistorySaver";
import { useEffect, useMemo, useState } from "react";
import {
  estimateSatScore,
  type SatScoreEstimate,
  type ScoreAnswer,
  type ScoreModule,
} from "@/lib/adaptive/scoreEngine";
import {
  loadReadingSession,
  type ReadingSessionState,
} from "@/lib/adaptive/session/readingSession";
import {
  loadMathSession,
  type MathSessionState,
} from "@/lib/adaptive/session/mathSession";

type LoadedSessions = {
  reading: ReadingSessionState | null;
  math: MathSessionState | null;
};

function moduleDifficulty(route?: "Easy" | "Hard") {
  return route ?? "Medium";
}

function buildScoreModules(
  reading: ReadingSessionState,
  math: MathSessionState,
): ScoreModule[] {
  return [
    {
      key: "reading-module-1",
      title: "Reading & Writing Module 1",
      section: "Reading & Writing",
      difficulty: "Medium",
      questionIds: reading.module1QuestionIds,
    },
    {
      key: "reading-module-2",
      title: "Reading & Writing Module 2",
      section: "Reading & Writing",
      difficulty: moduleDifficulty(reading.module2Route),
      questionIds: reading.module2QuestionIds,
    },
    {
      key: "math-module-1",
      title: "Math Module 1",
      section: "Math",
      difficulty: "Medium",
      questionIds: math.module1QuestionIds,
    },
    {
      key: "math-module-2",
      title: "Math Module 2",
      section: "Math",
      difficulty: moduleDifficulty(math.module2Route),
      questionIds: math.module2QuestionIds,
    },
  ];
}

function mergeAnswers(
  readingAnswers: Record<string, ScoreAnswer>,
  mathAnswers: Record<string, ScoreAnswer>,
) {
  return {
    ...readingAnswers,
    ...mathAnswers,
  };
}

export default function CombinedSatResultsPage() {
  const [sessions, setSessions] = useState<LoadedSessions | null>(null);

  useEffect(() => {
    setSessions({
      reading: loadReadingSession(),
      math: loadMathSession(),
    });
  }, []);

  const score = useMemo<SatScoreEstimate | null>(() => {
    if (!sessions?.reading || !sessions.math) return null;

    const modules = buildScoreModules(
      sessions.reading,
      sessions.math,
    );
    const answers = mergeAnswers(
      sessions.reading.answers,
      sessions.math.answers,
    );

    return estimateSatScore(modules, answers);
  }, [sessions]);

  if (!sessions) {
    return (
      <main className="mx-auto max-w-5xl p-8">
        Loading combined SAT results…
      </main>
    );
  }

  const readingComplete =
    sessions.reading?.phase === "results" &&
    sessions.reading.module2QuestionIds.length > 0;
  const mathComplete =
    sessions.math?.phase === "results" &&
    sessions.math.module2QuestionIds.length > 0;

  if (!readingComplete || !mathComplete || !score) {
    return (
      <main className="mx-auto max-w-4xl p-5 sm:p-8">
        <section className="rounded-3xl border bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Combined SAT report
          </p>
          <h1 className="mt-2 text-3xl font-bold">
            Complete both sections first
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            The combined report requires completed Reading & Writing
            and Math sessions. Your existing progress remains saved.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <CompletionCard
              title="Reading & Writing"
              complete={readingComplete}
              href="/test/adaptive"
            />
            <CompletionCard
              title="Math"
              complete={mathComplete}
              href="/test/adaptive-math"
            />
          </div>

          <Link
            href="/test/sat"
            className="mt-7 inline-flex rounded-xl border px-5 py-3 font-semibold hover:bg-slate-50"
          >
            Return to Test Center
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl space-y-7 p-5 sm:p-8">
      <section className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="bg-slate-950 px-7 py-9 text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Digital SAT estimate
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold tracking-tight">
                {score.bestTotal}
              </h1>
              <p className="mt-2 text-slate-300">
                Estimated range {score.lowTotal}–{score.highTotal}
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4">
              <p className="text-xs uppercase tracking-wide text-slate-300">
                Confidence
              </p>
              <p className="mt-1 text-xl font-bold capitalize">
                {score.confidence}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-7 sm:grid-cols-2 sm:p-10">
          <SectionScoreCard
            title="Reading & Writing"
            score={score.readingWriting.bestEstimate}
            low={score.readingWriting.lowEstimate}
            high={score.readingWriting.highEstimate}
            correct={score.readingWriting.correct}
            total={score.readingWriting.total}
            route={score.readingWriting.module2Path}
          />

          <SectionScoreCard
            title="Math"
            score={score.math.bestEstimate}
            low={score.math.lowEstimate}
            high={score.math.highEstimate}
            correct={score.math.correct}
            total={score.math.total}
            route={score.math.module2Path}
          />
        </div>
      </section>

      <section className="grid gap-7 lg:grid-cols-2">
        <BreakdownTable
          title="Reading & Writing domains"
          rows={score.readingWriting.domainBreakdown}
        />
        <BreakdownTable
          title="Math domains"
          rows={score.math.domainBreakdown}
        />
      </section>

      <section className="grid gap-7 lg:grid-cols-2">
        <BreakdownTable
          title="Reading difficulty"
          rows={score.readingWriting.difficultyBreakdown}
        />
        <BreakdownTable
          title="Math difficulty"
          rows={score.math.difficultyBreakdown}
        />
      </section>

      <FullSatHistorySaver
        reading={sessions.reading!}
        math={sessions.math!}
      />

      <section className="rounded-2xl border bg-amber-50 p-6 text-sm leading-6 text-amber-950">
        <strong>Important:</strong> {score.disclaimer} The estimate is
        generated by this project’s transparent weighted-performance
        model and does not reproduce College Board scoring parameters.
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/test/sat"
          className="rounded-xl border bg-white px-5 py-3 font-semibold hover:bg-slate-50"
        >
          Return to Test Center
        </Link>
        <Link
          href="/test/dashboard"
          className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Open Analytics Dashboard
        </Link>
      </div>
    </main>
  );
}

function CompletionCard({
  title,
  complete,
  href,
}: {
  title: string;
  complete: boolean;
  href: string;
}) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-5">
      <p className="font-bold">{title}</p>
      <p
        className={`mt-2 text-sm font-semibold ${
          complete ? "text-green-700" : "text-amber-700"
        }`}
      >
        {complete ? "Completed" : "Incomplete"}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white"
      >
        {complete ? "View section" : "Continue section"}
      </Link>
    </div>
  );
}

function SectionScoreCard({
  title,
  score,
  low,
  high,
  correct,
  total,
  route,
}: {
  title: string;
  score: number;
  low: number;
  high: number;
  correct: number;
  total: number;
  route: string;
}) {
  return (
    <article className="rounded-2xl border bg-slate-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </p>
      <p className="mt-2 text-4xl font-bold">{score}</p>
      <p className="mt-1 text-sm text-slate-500">
        Range {low}–{high}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <Metric label="Correct" value={`${correct}/${total}`} />
        <Metric label="Module 2" value={route} />
      </div>
    </article>
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
    <div className="rounded-xl border bg-white p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 font-bold">{value}</p>
    </div>
  );
}

function BreakdownTable({
  title,
  rows,
}: {
  title: string;
  rows: {
    label: string;
    correct: number;
    total: number;
    accuracy: number;
  }[];
}) {
  return (
    <section className="rounded-3xl border bg-white p-7 shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b text-slate-500">
              <th className="p-3">Category</th>
              <th className="p-3">Correct</th>
              <th className="p-3">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b last:border-0">
                <td className="p-3 font-medium">{row.label}</td>
                <td className="p-3">
                  {row.correct}/{row.total}
                </td>
                <td className="p-3">
                  {Math.round(row.accuracy * 100)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
