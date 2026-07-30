"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  loadExamHistory,
  type AdaptiveExamRecord,
} from "@/lib/adaptive/analytics/history";
import {
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

type DashboardSeries = Extract<ScoreSeries, "readingWriting" | "math" | "total">;

const SERIES_LABELS: Record<DashboardSeries, string> = {
  readingWriting: "Reading & Writing",
  math: "Math",
  total: "Total",
};

function percent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

function formatDuration(seconds: number): string {
  const safe = Math.max(0, Math.round(seconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const remainingSeconds = safe % 60;

  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${remainingSeconds}s`;
  return `${remainingSeconds}s`;
}

function scoreText(value?: number): string {
  return typeof value === "number" ? String(value) : "—";
}

function scoreRange(record?: AdaptiveExamRecord): string {
  if (!record) return "No completed attempt";

  if (typeof record.lowTotal === "number" && typeof record.highTotal === "number") {
    return `${record.lowTotal}–${record.highTotal}`;
  }

  const section = record.readingWriting ?? record.math;
  if (
    section &&
    typeof section.lowEstimate === "number" &&
    typeof section.highEstimate === "number"
  ) {
    return `${section.lowEstimate}–${section.highEstimate}`;
  }

  return "Range unavailable";
}

function latestRecord(records: AdaptiveExamRecord[]): AdaptiveExamRecord | undefined {
  return [...records].sort((a, b) => b.completedAt - a.completedAt)[0];
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
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{value}</p>
      <p className="mt-2 text-sm text-slate-600">{detail}</p>
    </article>
  );
}

function AccuracyBar({ group }: { group: GroupedAccuracy }) {
  const width = Math.max(0, Math.min(100, Math.round(group.accuracy * 100)));

  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-4 text-sm">
        <div>
          <p className="font-medium text-slate-900">{group.label}</p>
          <p className="text-xs text-slate-500">
            {group.correct}/{group.total} correct
            {group.unanswered > 0 ? ` · ${group.unanswered} unanswered` : ""}
          </p>
        </div>
        <span className="font-semibold text-slate-900">{percent(group.accuracy)}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-slate-900 transition-all"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function TrendChart({ points }: { points: ScoreTrendPoint[] }) {
  if (!points.length) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center text-sm text-slate-500">
        Complete an exam to create a score trend.
      </div>
    );
  }

  const width = 760;
  const height = 260;
  const paddingX = 46;
  const paddingY = 28;
  const values = points.flatMap((point) => [point.value, point.rollingAverage]);
  let min = Math.min(...values);
  let max = Math.max(...values);

  if (min === max) {
    min -= 20;
    max += 20;
  } else {
    const pad = Math.max(10, Math.round((max - min) * 0.15));
    min -= pad;
    max += pad;
  }

  const xFor = (index: number): number => {
    if (points.length === 1) return width / 2;
    return paddingX + (index / (points.length - 1)) * (width - paddingX * 2);
  };
  const yFor = (value: number): number =>
    height - paddingY - ((value - min) / (max - min)) * (height - paddingY * 2);

  const scorePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${xFor(index)} ${yFor(point.value)}`)
    .join(" ");
  const rollingPath = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${xFor(index)} ${yFor(point.rollingAverage)}`,
    )
    .join(" ");

  const gridValues = Array.from({ length: 5 }, (_, index) =>
    Math.round(max - (index / 4) * (max - min)),
  );

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-64 min-w-[680px] w-full"
        role="img"
        aria-label="Score trend chart"
      >
        {gridValues.map((value) => {
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
                strokeWidth="1"
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
          d={rollingPath}
          fill="none"
          stroke="currentColor"
          className="text-slate-400"
          strokeWidth="3"
          strokeDasharray="7 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={scorePath}
          fill="none"
          stroke="currentColor"
          className="text-slate-950"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((point, index) => {
          const x = xFor(index);
          const y = yFor(point.value);
          const showLabel = points.length <= 8 || index === 0 || index === points.length - 1;
          return (
            <g key={point.recordId}>
              <circle cx={x} cy={y} r="5" className="fill-white stroke-slate-950" strokeWidth="3" />
              <text x={x} y={y - 12} textAnchor="middle" className="fill-slate-900 text-[11px] font-semibold">
                {point.value}
              </text>
              {showLabel ? (
                <text
                  x={x}
                  y={height - 6}
                  textAnchor="middle"
                  className="fill-slate-500 text-[10px]"
                >
                  {point.label}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
      <div className="mt-2 flex flex-wrap gap-5 text-xs text-slate-600">
        <span className="inline-flex items-center gap-2">
          <span className="h-0.5 w-6 bg-slate-950" /> Score
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-0.5 w-6 border-t-2 border-dashed border-slate-400" /> 3-attempt rolling average
        </span>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [records, setRecords] = useState<AdaptiveExamRecord[]>([]);
  const [series, setSeries] = useState<DashboardSeries>("readingWriting");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setRecords(loadExamHistory());
    setLoaded(true);
  }, []);

  const analytics = useMemo(() => buildAnalyticsSummary(records), [records]);
  const latest = useMemo(() => latestRecord(records), [records]);
  const trendPoints = useMemo(() => buildScoreTrend(records, series), [records, series]);
  const trendSummary = useMemo(() => summarizeTrend(records, series), [records, series]);
  const readingDomains = useMemo(
    () => analytics.byDomain.filter((group) => group.label !== "Unclassified"),
    [analytics.byDomain],
  );
  const weakest = useMemo(() => weakestGroups(analytics.bySkill, 4), [analytics.bySkill]);
  const strongest = useMemo(() => strongestGroups(analytics.byDomain, 4), [analytics.byDomain]);
  const recent = useMemo(
    () => [...records].sort((a, b) => b.completedAt - a.completedAt).slice(0, 5),
    [records],
  );

  const latestReading = latest?.readingWriting;
  const latestMath = latest?.math;
  const latestTotal = latest?.bestTotal;

  if (!loaded) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">Loading dashboard…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Sprint 45B-4
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              SAT Analytics Dashboard
            </h1>
            <p className="mt-2 max-w-2xl text-slate-600">
              Review score trends, accuracy, adaptive routes, domains, and skills across saved attempts.
            </p>
          </div>
          <nav className="flex flex-wrap gap-3">
            <Link
              href="/test/history"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-100"
            >
              Exam history
            </Link>
            <Link
              href="/test/adaptive"
              className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Start adaptive test
            </Link>
          </nav>
        </header>

        {records.length === 0 ? (
          <section className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">No saved attempts yet</h2>
            <p className="mx-auto mt-2 max-w-xl text-slate-600">
              Finish the adaptive Reading & Writing test first. Sprint 45B-2 will save the result automatically, and this dashboard will populate from that history.
            </p>
            <Link
              href="/test/adaptive"
              className="mt-6 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Take the first test
            </Link>
          </section>
        ) : (
          <>
            <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard
                label="Latest estimate"
                value={scoreText(latestTotal ?? latestReading?.score ?? latestMath?.score)}
                detail={scoreRange(latest)}
              />
              <MetricCard
                label="Reading & Writing"
                value={scoreText(latestReading?.score)}
                detail={latestReading ? `${percent(latestReading.accuracy)} accuracy` : "Not completed"}
              />
              <MetricCard
                label="Math"
                value={scoreText(latestMath?.score)}
                detail={latestMath ? `${percent(latestMath.accuracy)} accuracy` : "Not completed"}
              />
              <MetricCard
                label="Questions answered"
                value={String(analytics.completedQuestions)}
                detail={`${analytics.attempts} saved attempt${analytics.attempts === 1 ? "" : "s"}`}
              />
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
              <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-950">Score trend</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Saved estimates shown chronologically.
                    </p>
                  </div>
                  <div className="flex flex-wrap rounded-xl bg-slate-100 p-1">
                    {(Object.keys(SERIES_LABELS) as DashboardSeries[]).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSeries(key)}
                        className={`rounded-lg px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                          series === key
                            ? "bg-white text-slate-950 shadow-sm"
                            : "text-slate-600 hover:text-slate-950"
                        }`}
                      >
                        {SERIES_LABELS[key]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <TrendChart points={trendPoints} />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <MetricCard label="Latest" value={scoreText(trendSummary.latest)} detail={SERIES_LABELS[series]} />
                  <MetricCard label="Best" value={scoreText(trendSummary.best)} detail="Personal best" />
                  <MetricCard label="Average" value={scoreText(trendSummary.average)} detail={`${trendSummary.count} scored attempts`} />
                  <MetricCard
                    label="Change"
                    value={
                      typeof trendSummary.improvement === "number"
                        ? `${trendSummary.improvement >= 0 ? "+" : ""}${trendSummary.improvement}`
                        : "—"
                    }
                    detail="First to latest"
                  />
                </div>
              </article>

              <aside className="space-y-6">
                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-slate-950">Adaptive routing</h2>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-slate-950 p-4 text-white">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-300">Hard route</p>
                      <p className="mt-2 text-3xl font-bold">{percent(analytics.routes.hardRate)}</p>
                      <p className="mt-1 text-xs text-slate-300">{analytics.routes.hard} section attempts</p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Easy route</p>
                      <p className="mt-2 text-3xl font-bold text-slate-950">{analytics.routes.easy}</p>
                      <p className="mt-1 text-xs text-slate-500">section attempts</p>
                    </div>
                  </div>
                </article>

                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-slate-950">Performance snapshot</h2>
                  <dl className="mt-4 space-y-4 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">Overall accuracy</dt>
                      <dd className="font-semibold text-slate-950">{percent(analytics.overall.accuracy)}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">Flagged accuracy</dt>
                      <dd className="font-semibold text-slate-950">{percent(analytics.flagged.accuracy)}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">Average test time</dt>
                      <dd className="font-semibold text-slate-950">{formatDuration(analytics.averageDurationSeconds)}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">Unanswered</dt>
                      <dd className="font-semibold text-slate-950">{analytics.overall.unanswered}</dd>
                    </div>
                  </dl>
                </article>
              </aside>
            </section>

            <section className="mt-6 grid gap-6 lg:grid-cols-2">
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-950">Domain heatmap</h2>
                    <p className="mt-1 text-sm text-slate-500">Accuracy across all saved questions.</p>
                  </div>
                </div>
                <div className="mt-6 space-y-5">
                  {(readingDomains.length ? readingDomains : analytics.byDomain).map((group) => (
                    <AccuracyBar key={group.label} group={group} />
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-950">Difficulty analysis</h2>
                <p className="mt-1 text-sm text-slate-500">Compare Easy, Medium, and Hard performance.</p>
                <div className="mt-6 space-y-5">
                  {analytics.byDifficulty.map((group) => (
                    <AccuracyBar key={group.label} group={group} />
                  ))}
                </div>
              </article>
            </section>

            <section className="mt-6 grid gap-6 lg:grid-cols-2">
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-950">Strongest domains</h2>
                <div className="mt-5 space-y-5">
                  {strongest.length ? (
                    strongest.map((group) => <AccuracyBar key={group.label} group={group} />)
                  ) : (
                    <p className="text-sm text-slate-500">No domain data available.</p>
                  )}
                </div>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-950">Skills to improve</h2>
                    <p className="mt-1 text-sm text-slate-500">Lowest accuracy skills with available data.</p>
                  </div>
                  <Link
                    href="/test/practice/recommended"
                    className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800"
                  >
                    Generate practice set
                  </Link>
                </div>
                <div className="mt-5 space-y-5">
                  {weakest.length ? (
                    weakest.map((group) => <AccuracyBar key={group.label} group={group} />)
                  ) : (
                    <p className="text-sm text-slate-500">No skill data available.</p>
                  )}
                </div>
              </article>
            </section>

            <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-slate-950">Recent attempts</h2>
                  <p className="mt-1 text-sm text-slate-500">Open a saved record for question-level details.</p>
                </div>
                <Link href="/test/history" className="text-sm font-semibold text-slate-900 hover:underline">
                  View all history
                </Link>
              </div>
              <div className="mt-5 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="px-3 py-3 font-semibold">Date</th>
                      <th className="px-3 py-3 font-semibold">Reading</th>
                      <th className="px-3 py-3 font-semibold">Math</th>
                      <th className="px-3 py-3 font-semibold">Total</th>
                      <th className="px-3 py-3 font-semibold">Accuracy</th>
                      <th className="px-3 py-3 font-semibold"><span className="sr-only">Open</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recent.map((record) => {
                      const correct = record.questionResults.filter((question) => question.correct).length;
                      const total = record.questionResults.length;
                      return (
                        <tr key={record.id} className="text-slate-700">
                          <td className="whitespace-nowrap px-3 py-4">
                            {new Date(record.completedAt).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </td>
                          <td className="px-3 py-4 font-semibold text-slate-950">{scoreText(record.readingWriting?.score)}</td>
                          <td className="px-3 py-4 font-semibold text-slate-950">{scoreText(record.math?.score)}</td>
                          <td className="px-3 py-4 font-semibold text-slate-950">{scoreText(record.bestTotal)}</td>
                          <td className="px-3 py-4">{total ? percent(correct / total) : "—"}</td>
                          <td className="px-3 py-4 text-right">
                            <Link href={`/test/history/${record.id}`} className="font-semibold text-slate-950 hover:underline">
                              Details
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
