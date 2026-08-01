"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  getExamRecord,
  type AdaptiveExamRecord,
  type ExamQuestionResult,
  type ExamSectionRecord,
} from "@/lib/adaptive/analytics/history";

function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(timestamp));
}

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m ${remainder}s`;
  }

  return `${minutes}m ${remainder}s`;
}

function percent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export default function ExamHistoryDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [record, setRecord] = useState<
    AdaptiveExamRecord | null | undefined
  >(undefined);

  useEffect(() => {
    setRecord(id ? getExamRecord(id) ?? null : null);
  }, [id]);

  const groupedModules = useMemo(() => {
    if (!record) return [];

    const groups = new Map<string, ExamQuestionResult[]>();

    for (const result of record.questionResults) {
      const current = groups.get(result.moduleKey) ?? [];
      current.push(result);
      groups.set(result.moduleKey, current);
    }

    return [...groups.entries()].map(([key, questions]) => ({
      key,
      title: questions[0]?.moduleTitle ?? key,
      section: questions[0]?.section,
      questions,
    }));
  }, [record]);

  if (record === undefined) {
    return (
      <main className="mx-auto max-w-6xl p-8">
        Loading result…
      </main>
    );
  }

  if (record === null) {
    return (
      <main className="mx-auto max-w-3xl p-8">
        <section className="rounded-3xl border bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold">Attempt not found</h1>
          <p className="mt-3 text-slate-600">
            This record may have been deleted or belongs to another
            browser.
          </p>
          <Link
            href="/test/history"
            className="mt-6 inline-block rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white"
          >
            Return to history
          </Link>
        </section>
      </main>
    );
  }

  const hasBothSections = Boolean(record.readingWriting && record.math);

  return (
    <main className="mx-auto max-w-7xl space-y-6 p-4 sm:p-8">
      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <Link
          href="/test/history"
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          ← Exam history
        </Link>

        <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Saved attempt
            </p>
            <h1 className="mt-2 text-3xl font-bold">{record.title}</h1>
            <p className="mt-2 text-slate-600">
              {formatDate(record.completedAt)}
            </p>
          </div>

          <Link
            href={hasBothSections ? "/test/sat/full" : "/test/sat"}
            className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Take another test
          </Link>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <Metric
            label="RW estimate"
            value={scoreValue(record.readingWriting)}
          />
          <Metric
            label="Math estimate"
            value={scoreValue(record.math)}
          />
          <Metric
            label="Total"
            value={
              record.bestTotal !== undefined
                ? String(record.bestTotal)
                : "—"
            }
          />
          <Metric
            label="Total range"
            value={
              record.lowTotal !== undefined &&
              record.highTotal !== undefined
                ? `${record.lowTotal}–${record.highTotal}`
                : "—"
            }
          />
          <Metric
            label="Confidence"
            value={record.confidence ?? "—"}
          />
          <Metric
            label="Duration"
            value={formatDuration(record.durationSeconds)}
          />
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {record.readingWriting && (
          <SectionSummary
            title="Reading & Writing"
            section={record.readingWriting}
          />
        )}

        {record.math && (
          <SectionSummary title="Math" section={record.math} />
        )}
      </div>

      {groupedModules.map((module) => (
        <section
          key={module.key}
          className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {module.section}
              </p>
              <h2 className="mt-1 text-2xl font-bold">{module.title}</h2>
            </div>
            <p className="text-slate-600">
              {
                module.questions.filter(
                  (question) => question.correct,
                ).length
              }{" "}
              of {module.questions.length} correct
            </p>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12">
            {module.questions.map((question, index) => (
              <div
                key={`${module.key}-${question.examId}`}
                title={`${question.domain} · ${question.skill}`}
                className={`rounded-xl border p-3 text-center font-bold ${
                  !question.answered
                    ? "bg-slate-100 text-slate-600"
                    : question.correct
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                } ${
                  question.flagged
                    ? "ring-2 ring-amber-300"
                    : ""
                }`}
              >
                <div>{index + 1}</div>
                <div className="mt-1 text-xs">
                  {!question.answered
                    ? "—"
                    : question.correct
                      ? "✓"
                      : "✕"}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
            <span>Green: correct</span>
            <span>Red: incorrect</span>
            <span>Gray: unanswered</span>
            <span>Gold outline: flagged</span>
          </div>
        </section>
      ))}
    </main>
  );
}

function scoreValue(section?: ExamSectionRecord): string {
  return section?.score !== undefined ? String(section.score) : "—";
}

function SectionSummary({
  title,
  section,
}: {
  title: string;
  section: ExamSectionRecord;
}) {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Section
          </p>
          <h2 className="mt-1 text-2xl font-bold">{title}</h2>
        </div>

        <div className="text-right">
          <p className="text-4xl font-bold">{section.score ?? "—"}</p>
          <p className="mt-1 text-sm text-slate-500">
            {section.lowEstimate !== undefined &&
            section.highEstimate !== undefined
              ? `${section.lowEstimate}–${section.highEstimate}`
              : "No range"}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Metric
          label="Correct"
          value={`${section.correct}/${section.total}`}
        />
        <Metric
          label="Accuracy"
          value={percent(section.accuracy)}
        />
        <Metric label="Module 2" value={section.module2Path} />
      </div>

      <h3 className="mt-7 font-bold">Domain breakdown</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-3">Domain</th>
              <th className="p-3">Correct</th>
              <th className="p-3">Total</th>
              <th className="p-3">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {section.domainBreakdown.map((row) => (
              <tr key={row.label} className="border-t">
                <td className="p-3 font-medium">{row.label}</td>
                <td className="p-3">{row.correct}</td>
                <td className="p-3">{row.total}</td>
                <td className="p-3">{percent(row.accuracy)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
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
      <p className="mt-1 text-xl font-bold capitalize">{value}</p>
    </div>
  );
}
