"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  clearExamHistory,
  deleteExamRecord,
  loadExamHistory,
  type AdaptiveExamRecord,
} from "@/lib/adaptive/analytics/history";

function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(timestamp));
}

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

function recordType(record: AdaptiveExamRecord): string {
  if (record.readingWriting && record.math) return "Full SAT";
  if (record.math) return "Math";
  return "Reading & Writing";
}

export default function ExamHistoryPage() {
  const [records, setRecords] = useState<AdaptiveExamRecord[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<
    "All" | "Full SAT" | "Reading & Writing" | "Math"
  >("All");

  useEffect(() => {
    setRecords(loadExamHistory());
    setLoaded(true);
  }, []);

  const visibleRecords = useMemo(
    () =>
      filter === "All"
        ? records
        : records.filter((record) => recordType(record) === filter),
    [records, filter],
  );

  const removeRecord = (id: string) => {
    if (!window.confirm("Delete this test attempt?")) return;
    setRecords(deleteExamRecord(id));
  };

  const clearAll = () => {
    if (
      !window.confirm(
        "Delete all saved test history? This cannot be undone.",
      )
    ) {
      return;
    }

    clearExamHistory();
    setRecords([]);
  };

  if (!loaded) {
    return (
      <main className="mx-auto max-w-7xl p-8">
        Loading exam history…
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl space-y-6 p-4 sm:p-8">
      <section className="flex flex-wrap items-end justify-between gap-4 rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Adaptive SAT
          </p>
          <h1 className="mt-2 text-3xl font-bold">Exam History</h1>
          <p className="mt-2 text-slate-600">
            Reading, Math, and combined full-test attempts saved in
            this browser.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/test/sat/full"
            className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Take full SAT
          </Link>

          {records.length > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="rounded-xl border px-5 py-3 font-semibold hover:bg-slate-50"
            >
              Clear history
            </button>
          )}
        </div>
      </section>

      {records.length > 0 && (
        <section className="flex flex-wrap gap-2 rounded-2xl border bg-white p-4 shadow-sm">
          {(
            ["All", "Full SAT", "Reading & Writing", "Math"] as const
          ).map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                filter === item
                  ? "bg-slate-950 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </section>
      )}

      {records.length === 0 ? (
        <section className="rounded-3xl border bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-bold">No saved attempts yet</h2>
          <p className="mt-3 text-slate-600">
            Complete a Reading, Math, or full adaptive SAT test to
            create your first history record.
          </p>
          <Link
            href="/test/sat"
            className="mt-6 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Open Test Center
          </Link>
        </section>
      ) : visibleRecords.length === 0 ? (
        <section className="rounded-3xl border bg-white p-10 text-center shadow-sm">
          <h2 className="text-xl font-bold">
            No {filter} attempts found
          </h2>
          <button
            type="button"
            onClick={() => setFilter("All")}
            className="mt-5 rounded-xl border px-5 py-3 font-semibold"
          >
            Show all attempts
          </button>
        </section>
      ) : (
        <section className="overflow-hidden rounded-3xl border bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="p-4">Attempt</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">RW</th>
                  <th className="p-4">Math</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Accuracy</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleRecords.map((record, index) => {
                  const correct =
                    (record.readingWriting?.correct ?? 0) +
                    (record.math?.correct ?? 0);
                  const total =
                    (record.readingWriting?.total ?? 0) +
                    (record.math?.total ?? 0);
                  const accuracy = total
                    ? Math.round((correct / total) * 100)
                    : 0;

                  return (
                    <tr key={record.id} className="border-t">
                      <td className="p-4 font-semibold">
                        #{visibleRecords.length - index}
                      </td>
                      <td className="p-4">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold">
                          {recordType(record)}
                        </span>
                      </td>
                      <td className="p-4">
                        {formatDate(record.completedAt)}
                      </td>
                      <td className="p-4 font-bold">
                        {record.readingWriting?.score ?? "—"}
                      </td>
                      <td className="p-4 font-bold">
                        {record.math?.score ?? "—"}
                      </td>
                      <td className="p-4 text-lg font-bold text-blue-700">
                        {record.bestTotal ?? "—"}
                      </td>
                      <td className="p-4">
                        {total ? `${accuracy}%` : "—"}
                      </td>
                      <td className="p-4">
                        {formatDuration(record.durationSeconds)}
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Link
                            href={`/test/history/${record.id}`}
                            className="rounded-lg border px-3 py-2 font-semibold hover:bg-slate-50"
                          >
                            View
                          </Link>
                          <button
                            type="button"
                            onClick={() => removeRecord(record.id)}
                            className="rounded-lg border px-3 py-2 font-semibold text-red-700 hover:bg-red-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
}
