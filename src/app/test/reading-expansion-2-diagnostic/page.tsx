"use client";

import { useMemo, useState } from "react";
import {
  validateReadingExpansionPack2,
} from "@/lib/adaptive/readingExpansionPack2/validator";

export default function ReadingExpansion2DiagnosticPage() {
  const [runNumber, setRunNumber] = useState(0);
  const report = useMemo(
    () => validateReadingExpansionPack2(),
    [runNumber],
  );

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 52C
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Reading Expansion Pack 2
        </h1>
        <p className="mt-3 text-white/75">
          {report.passed
            ? "All 44 questions passed validation."
            : `${report.issues.length} issues found.`}
        </p>
        <button
          type="button"
          onClick={() => setRunNumber((value) => value + 1)}
          className="mt-6 rounded-xl border border-white/25 px-5 py-3 font-semibold"
        >
          Run again
        </button>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Distribution</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">Skill</th>
                <th className="p-3">Easy</th>
                <th className="p-3">Medium</th>
                <th className="p-3">Hard</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(report.distribution).map(([skill, row]) => (
                <tr key={skill} className="border-t">
                  <td className="p-3 font-semibold">{skill}</td>
                  <td className="p-3">{row.easy}</td>
                  <td className="p-3">{row.medium}</td>
                  <td className="p-3">{row.hard}</td>
                  <td className="p-3 font-bold">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {!report.passed && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <ul className="list-disc space-y-2 pl-5 text-sm text-red-900">
            {report.issues.map((issue, index) => (
              <li key={`${issue.questionId}-${index}`}>
                <strong>{issue.questionId}:</strong> {issue.message}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
