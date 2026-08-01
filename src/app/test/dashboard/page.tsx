"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  loadExamHistory,
  type AdaptiveExamRecord,
} from "@/lib/adaptive/analytics/history";
import {
  accuracyByDifficulty,
  accuracyByDomain,
  accuracyBySkill,
  buildAnalyticsSummary,
  strongestGroups,
  weakestGroups,
  type GroupedAccuracy,
} from "@/lib/adaptive/analytics/statistics";
import {
  buildScoreTrend,
  summarizeTrend,
  type ScoreSeries,
  type ScoreTrendPoint,
} from "@/lib/adaptive/analytics/trends";
import type { ExamSection } from "@/lib/adaptive/types";

type DashboardView = "Overview" | "Reading & Writing" | "Math";
type DashboardSeries = Extract<
  ScoreSeries,
  "readingWriting" | "math" | "total"
>;

const SERIES_LABELS: Record<DashboardSeries, string> = {
  readingWriting: "Reading & Writing",
  math: "Math",
  total: "Total",
};

function percent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

function scoreText(value?: number): string {
  return typeof value === "number" ? String(value) : "—";
}

function formatDuration(seconds: number): string {
  const safe = Math.max(0, Math.round(seconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);

  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function latestRecord(
  records: AdaptiveExamRecord[],
): AdaptiveExamRecord | undefined {
  return [...records].sort(
    (left, right) => right.completedAt - left.completedAt,
  )[0];
}

function latestFullRecord(
  records: AdaptiveExamRecord[],
): AdaptiveExamRecord | undefined {
  return [...records]
    .filter((record) => record.readingWriting && record.math)
    .sort((left, right) => right.completedAt - left.completedAt)[0];
}

function viewSection(
  view: DashboardView,
): ExamSection | undefined {
  if (view === "Reading & Writing") return "Reading & Writing";
  if (view === "Math") return "Math";
  return undefined;
}

export default function UnifiedDashboardPage() {
  const [records, setRecords] = useState<AdaptiveExamRecord[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<DashboardView>("Overview");
  const [series, setSeries] =
    useState<DashboardSeries>("total");

  useEffect(() => {
    setRecords(loadExamHistory());
    setLoaded(true);
  }, []);

  const section = viewSection(view);
  const summary = useMemo(
    () => buildAnalyticsSummary(records),
    [records],
  );

  const domains = useMemo(
    () => accuracyByDomain(records, section),
    [records, section],
  );
  const skills = useMemo(
    () => accuracyBySkill(records, section),
    [records, section],
  );
  const difficulties = useMemo(
    () => accuracyByDifficulty(records, section),
    [records, section],
  );

  const trend = useMemo(
    () => buildScoreTrend(records, series),
    [records, series],
  );
  const trendSummary = useMemo(
    () => summarizeTrend(records, series),
    [records, series],
  );

  const latest = latestRecord(records);
  const latestFull = latestFullRecord(records);
  const strongest = strongestGroups(domains, 4);
  const weakest = weakestGroups(skills, 6);

  const selectedAccuracy =
    view === "Reading & Writing"
      ? summary.readingWriting
      : view === "Math"
        ? summary.math
        : summary.overall;

  if (!loaded) {
    return (
      <main className="mx-auto max-w-7xl p-8">
        Loading analytics…
      </main>
    );
  }

  if (!records.length) {
    return (
      <main className="mx-auto max-w-4xl p-5 sm:p-8">
        <section className="rounded-3xl border bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Adaptive analytics
          </p>
          <h1 className="mt-3 text-3xl font-bold">
            Complete a test to unlock your dashboard
          </h1>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Reading, Math, and combined full-test history all feed the
            same analytics layer.
          </p>
          <Link
            href="/test/sat"
            className="mt-7 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Open Test Center
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-4 sm:p-8">
      <section className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="bg-slate-950 px-7 py-9 text-white sm:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                Adaptive SAT analytics
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight">
                Performance Dashboard
              </h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                One analytics view for Reading & Writing, Math, and
                complete SAT attempts.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/test/history"
                className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
              >
                Exam history
              </Link>
              <Link
                href="/test/sat/full"
                className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
              >
                Take full SAT
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-7 sm:grid-cols-2 lg:grid-cols-5 sm:p-10">
          <MetricCard
            label="Latest full score"
            value={scoreText(latestFull?.bestTotal)}
            detail={
              latestFull
                ? `Range ${latestFull.lowTotal}–${latestFull.highTotal}`
                : "Complete both sections"
            }
          />
          <MetricCard
            label="Latest RW"
            value={scoreText(
              latest?.readingWriting?.score ??
                latestFull?.readingWriting?.score,
            )}
            detail="Estimated section score"
          />
          <MetricCard
            label="Latest Math"
            value={scoreText(
              latest?.math?.score ?? latestFull?.math?.score,
            )}
            detail="Estimated section score"
          />
          <MetricCard
            label="Overall accuracy"
            value={percent(summary.overall.accuracy)}
            detail={`${summary.overall.correct}/${summary.overall.total} correct`}
          />
          <MetricCard
            label="Attempts"
            value={String(summary.attempts)}
            detail={`${summary.completedQuestions} answered questions`}
          />
        </div>
      </section>

      <section className="flex flex-wrap gap-2 rounded-2xl border bg-white p-4 shadow-sm">
        {(
          ["Overview", "Reading & Writing", "Math"] as const
        ).map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => {
              setView(item);
              if (item === "Reading & Writing") {
                setSeries("readingWriting");
              } else if (item === "Math") {
                setSeries("math");
              }
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              view === item
                ? "bg-slate-950 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {item}
          </button>
        ))}
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          label={`${view} accuracy`}
          value={percent(selectedAccuracy.accuracy)}
          detail={`${selectedAccuracy.unanswered} unanswered`}
        />
        <MetricCard
          label="Hard-route rate"
          value={percent(summary.routes.hardRate)}
          detail={`${summary.routes.hard} Hard · ${summary.routes.easy} Easy`}
        />
        <MetricCard
          label="Flagged accuracy"
          value={
            summary.flagged.total
              ? percent(summary.flagged.accuracy)
              : "—"
          }
          detail={`${summary.flagged.total} flagged questions`}
        />
        <MetricCard
          label="Average duration"
          value={formatDuration(summary.averageDurationSeconds)}
          detail="Across saved attempts"
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Score progression
            </p>
            <h2 className="mt-1 text-2xl font-bold">
              {SERIES_LABELS[series]} trend
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {(
              [
                "readingWriting",
                "math",
                "total",
              ] as DashboardSeries[]
            ).map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setSeries(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  series === item
                    ? "bg-blue-700 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {SERIES_LABELS[item]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <TrendChart points={trend} />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <SmallMetric
            label="Latest"
            value={scoreText(trendSummary.latest)}
          />
          <SmallMetric
            label="Best"
            value={scoreText(trendSummary.best)}
          />
          <SmallMetric
            label="Average"
            value={scoreText(trendSummary.average)}
          />
          <SmallMetric
            label="Improvement"
            value={
              trendSummary.improvement !== undefined
                ? signed(trendSummary.improvement)
                : "—"
            }
          />
          <SmallMetric
            label="Consistency"
            value={
              trendSummary.consistency !== undefined
                ? `±${trendSummary.consistency}`
                : "—"
            }
          />
        </div>
      </section>

      <section className="grid gap-7 xl:grid-cols-2">
        <AccuracyPanel
          title={`${view} domain performance`}
          rows={domains}
          emptyText="No domain data for this view."
        />
        <AccuracyPanel
          title={`${view} difficulty performance`}
          rows={difficulties}
          emptyText="No difficulty data for this view."
        />
      </section>

      <section className="grid gap-7 xl:grid-cols-2">
        <RankedPanel
          title="Strongest domains"
          rows={strongest}
          emptyText="Complete more questions to identify strengths."
        />
        <RankedPanel
          title="Weakest skills"
          rows={weakest}
          emptyText="Complete more questions to identify weak skills."
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Recommended next action</h2>
            <p className="mt-2 text-slate-600">
              Use your weakest Reading & Writing skills for targeted
              practice, or begin another full test to strengthen the
              score trend.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/test/practice/recommended"
              className="rounded-xl border px-5 py-3 font-semibold hover:bg-slate-50"
            >
              Targeted practice
            </Link>
            <Link
              href="/test/sat/full"
              className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
            >
              New full test
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function signed(value: number): string {
  return value > 0 ? `+${value}` : String(value);
}

function MetricCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
      <p className="mt-2 text-sm text-slate-600">{detail}</p>
    </article>
  );
}

function SmallMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}

function AccuracyPanel({
  title,
  rows,
  emptyText,
}: {
  title: string;
  rows: GroupedAccuracy[];
  emptyText: string;
}) {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold">{title}</h2>

      {rows.length ? (
        <div className="mt-6 space-y-5">
          {rows.map((row) => (
            <AccuracyBar key={row.label} group={row} />
          ))}
        </div>
      ) : (
        <p className="mt-5 text-slate-500">{emptyText}</p>
      )}
    </section>
  );
}

function RankedPanel({
  title,
  rows,
  emptyText,
}: {
  title: string;
  rows: GroupedAccuracy[];
  emptyText: string;
}) {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold">{title}</h2>

      {rows.length ? (
        <ol className="mt-5 space-y-3">
          {rows.map((row, index) => (
            <li
              key={row.label}
              className="flex items-center justify-between gap-4 rounded-xl border bg-slate-50 p-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold">{row.label}</p>
                  <p className="text-xs text-slate-500">
                    {row.correct}/{row.total} correct
                  </p>
                </div>
              </div>
              <span className="font-bold">{percent(row.accuracy)}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-5 text-slate-500">{emptyText}</p>
      )}
    </section>
  );
}

function AccuracyBar({ group }: { group: GroupedAccuracy }) {
  const width = Math.max(
    0,
    Math.min(100, Math.round(group.accuracy * 100)),
  );

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium">{group.label}</p>
          <p className="text-xs text-slate-500">
            {group.correct}/{group.total} correct
            {group.unanswered
              ? ` · ${group.unanswered} unanswered`
              : ""}
          </p>
        </div>
        <span className="font-bold">{percent(group.accuracy)}</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-700"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function TrendChart({ points }: { points: ScoreTrendPoint[] }) {
  if (!points.length) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed bg-slate-50 text-sm text-slate-500">
        No scores are available for this series yet.
      </div>
    );
  }

  const width = 760;
  const height = 260;
  const paddingX = 48;
  const paddingY = 30;
  const values = points.flatMap((point) => [
    point.value,
    point.rollingAverage,
  ]);

  let min = Math.min(...values);
  let max = Math.max(...values);

  if (min === max) {
    min -= 20;
    max += 20;
  } else {
    const pad = Math.max(
      10,
      Math.round((max - min) * 0.15),
    );
    min -= pad;
    max += pad;
  }

  const xFor = (index: number) =>
    points.length === 1
      ? width / 2
      : paddingX +
        (index / (points.length - 1)) *
          (width - paddingX * 2);

  const yFor = (value: number) =>
    height -
    paddingY -
    ((value - min) / (max - min)) *
      (height - paddingY * 2);

  const scorePath = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${xFor(index)} ${yFor(
          point.value,
        )}`,
    )
    .join(" ");

  const averagePath = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${xFor(index)} ${yFor(
          point.rollingAverage,
        )}`,
    )
    .join(" ");

  const grid = Array.from({ length: 5 }, (_, index) =>
    Math.round(max - (index / 4) * (max - min)),
  );

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-64 min-w-[680px] w-full"
        role="img"
        aria-label="Score trend"
      >
        {grid.map((value) => {
          const y = yFor(value);
          return (
            <g key={value}>
              <line
                x1={paddingX}
                x2={width - paddingX}
                y1={y}
                y2={y}
                stroke="currentColor"
                className="text-slate-200"
              />
              <text
                x={paddingX - 10}
                y={y + 4}
                textAnchor="end"
                className="fill-slate-500 text-[11px]"
              >
                {value}
              </text>
            </g>
          );
        })}

        <path
          d={averagePath}
          fill="none"
          stroke="currentColor"
          className="text-slate-400"
          strokeWidth="3"
          strokeDasharray="7 6"
        />
        <path
          d={scorePath}
          fill="none"
          stroke="currentColor"
          className="text-blue-700"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((point, index) => (
          <g key={point.recordId}>
            <circle
              cx={xFor(index)}
              cy={yFor(point.value)}
              r="5"
              fill="currentColor"
              className="text-blue-700"
            />
            {(points.length <= 8 ||
              index === 0 ||
              index === points.length - 1) && (
              <>
                <text
                  x={xFor(index)}
                  y={yFor(point.value) - 12}
                  textAnchor="middle"
                  className="fill-slate-900 text-[11px] font-semibold"
                >
                  {point.value}
                </text>
                <text
                  x={xFor(index)}
                  y={height - 5}
                  textAnchor="middle"
                  className="fill-slate-500 text-[10px]"
                >
                  {point.label}
                </text>
              </>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
