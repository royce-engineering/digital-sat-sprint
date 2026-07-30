"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

export default function ExamHistoryPage() {
  const [records, setRecords] = useState<AdaptiveExamRecord[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setRecords(loadExamHistory());
    setLoaded(true);
  }, []);

  const removeRecord = (id: string) => {
    if (!window.confirm("Delete this test attempt?")) return;
    setRecords(deleteExamRecord(id));
  };

  const clearAll = () => {
    if (!window.confirm("Delete all saved test history? This cannot be undone.")) return;
    clearExamHistory();
    setRecords([]);
  };

  if (!loaded) {
    return <main className="mx-auto max-w-6xl p-8">Loading exam history…</main>;
  }

  return (
    <main className="mx-auto max-w-6xl space-y-6 p-4 sm:p-8">
      <section className="flex flex-wrap items-end justify-between gap-4 rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Sprint 45B-2</p>
          <h1 className="mt-2 text-3xl font-bold">Exam History</h1>
          <p className="mt-2 text-gray-600">Completed adaptive tests are saved in this browser.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/test/adaptive" className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
            Take a test
          </Link>
          {records.length > 0 && (
            <button type="button" onClick={clearAll} className="rounded-lg border px-5 py-3 font-semibold hover:bg-gray-50">
              Clear history
            </button>
          )}
        </div>
      </section>

      {records.length === 0 ? (
        <section className="rounded-2xl border bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-bold">No saved attempts yet</h2>
          <p className="mt-3 text-gray-600">Complete the adaptive Reading & Writing test to create your first history record.</p>
          <Link href="/test/adaptive" className="mt-6 inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">
            Start adaptive test
          </Link>
        </section>
      ) : (
        <section className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="p-4">Attempt</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">RW estimate</th>
                  <th className="p-4">Accuracy</th>
                  <th className="p-4">Module 2</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => {
                  const section = record.readingWriting;
                  return (
                    <tr key={record.id} className="border-t">
                      <td className="p-4 font-semibold">#{records.length - index}</td>
                      <td className="p-4">{formatDate(record.completedAt)}</td>
                      <td className="p-4 font-bold">{section?.score ?? "—"}</td>
                      <td className="p-4">{section ? `${Math.round(section.accuracy * 100)}%` : "—"}</td>
                      <td className="p-4">{section?.module2Path ?? "—"}</td>
                      <td className="p-4">{formatDuration(record.durationSeconds)}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Link href={`/test/history/${record.id}`} className="rounded-md border px-3 py-2 font-semibold hover:bg-gray-50">
                            View
                          </Link>
                          <button type="button" onClick={() => removeRecord(record.id)} className="rounded-md border px-3 py-2 font-semibold text-red-700 hover:bg-red-50">
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
