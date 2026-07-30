"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  getExamRecord,
  type AdaptiveExamRecord,
  type ExamQuestionResult,
} from "@/lib/adaptive/analytics/history";

function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(timestamp));
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}m ${remainder}s`;
}

function percent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export default function ExamHistoryDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [record, setRecord] = useState<AdaptiveExamRecord | null | undefined>(undefined);

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
      questions,
    }));
  }, [record]);

  if (record === undefined) {
    return <main className="mx-auto max-w-5xl p-8">Loading result…</main>;
  }

  if (record === null) {
    return (
      <main className="mx-auto max-w-3xl p-8">
        <section className="rounded-2xl border bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold">Attempt not found</h1>
          <p className="mt-3 text-gray-600">This record may have been deleted or belongs to another browser.</p>
          <Link href="/test/history" className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white">
            Return to history
          </Link>
        </section>
      </main>
    );
  }

  const section = record.readingWriting;

  return (
    <main className="mx-auto max-w-6xl space-y-6 p-4 sm:p-8">
      <section className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
        <Link href="/test/history" className="text-sm font-semibold text-blue-700 hover:underline">← Exam history</Link>
        <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Saved attempt</p>
            <h1 className="mt-2 text-3xl font-bold">{record.title}</h1>
            <p className="mt-2 text-gray-600">{formatDate(record.completedAt)}</p>
          </div>
          <Link href="/test/adaptive" className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
            Take another test
          </Link>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <Metric label="RW estimate" value={section?.score ? String(section.score) : "—"} />
          <Metric label="Estimated range" value={section?.lowEstimate && section?.highEstimate ? `${section.lowEstimate}–${section.highEstimate}` : "—"} />
          <Metric label="Correct" value={section ? `${section.correct}/${section.total}` : "—"} />
          <Metric label="Module 2" value={section?.module2Path ?? "—"} />
          <Metric label="Duration" value={formatDuration(record.durationSeconds)} />
        </div>
      </section>

      {section && (
        <section className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">Domain breakdown</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
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
      )}

      {groupedModules.map((module) => (
        <section key={module.key} className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">{module.title}</h2>
          <p className="mt-2 text-gray-600">
            {module.questions.filter((question) => question.correct).length} of {module.questions.length} correct
          </p>
          <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-10">
            {module.questions.map((question, index) => (
              <div
                key={`${module.key}-${question.questionId}`}
                title={`${question.domain} · ${question.skill}`}
                className={`rounded-lg border p-3 text-center font-bold ${
                  !question.answered
                    ? "bg-gray-100 text-gray-600"
                    : question.correct
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                } ${question.flagged ? "ring-2 ring-amber-300" : ""}`}
              >
                <div>{index + 1}</div>
                <div className="mt-1 text-xs">{!question.answered ? "—" : question.correct ? "✓" : "✕"}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-600">
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

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-gray-50 p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}
