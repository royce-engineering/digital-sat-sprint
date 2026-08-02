"use client";

import { useMemo, useState } from "react";
import { validateReadingExpansionPack1 } from "@/lib/adaptive/readingExpansionPack1/validator";
import { buildReadingCoverageReport } from "@/lib/adaptive/readingCoverageAudit";
import { readingWritingBank } from "@/lib/adaptive/questionBank";

export default function ReadingExpansionDiagnosticPage() {
  const [runNumber, setRunNumber] = useState(0);

  const validation = validateReadingExpansionPack1();
  const coverage = buildReadingCoverageReport(readingWritingBank);

  const focusSkills = coverage.cells.filter((cell) =>
    [
      "Central Ideas and Details",
      "Text Structure and Purpose",
      "Cross-Text Connections",
      "Quantitative Evidence",
    ].includes(cell.skill),
  );

  return (
    <main className="mx-auto max-w-6xl space-y-7 p-4 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          validation.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 52B
        </p>
        <h1 className="mt-3 text-4xl font-bold">Reading Expansion Pack 1</h1>
        <p className="mt-3 text-white/75">
          {validation.passed
            ? "All 48 expansion questions passed validation."
            : `${validation.issues.length} validation issues found.`}
        </p>

        <button
          type="button"
          onClick={() => setRunNumber((value) => value + 1)}
          className="mt-6 rounded-xl border border-white/25 px-5 py-3 font-semibold"
        >
          Run again
        </button>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Metric label="Pack questions" value={String(validation.total)} />
        <Metric
          label="Validation issues"
          value={String(validation.issues.length)}
        />
        <Metric
          label="Updated Reading bank"
          value={String(readingWritingBank.length)}
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold">Pack distribution</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">Skill</th>
                <th className="p-3">Easy</th>
                <th className="p-3">Medium</th>
                <th className="p-3">Hard</th>
                <th className="p-3">M1</th>
                <th className="p-3">M2</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {validation.coverage.map((row) => (
                <tr key={row.skill} className="border-t">
                  <td className="p-3 font-semibold">{row.skill}</td>
                  <td className="p-3">{row.easy}</td>
                  <td className="p-3">{row.medium}</td>
                  <td className="p-3">{row.hard}</td>
                  <td className="p-3">{row.module1}</td>
                  <td className="p-3">{row.module2}</td>
                  <td className="p-3 font-bold">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold">Updated coverage</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">Skill</th>
                <th className="p-3">Easy</th>
                <th className="p-3">Medium</th>
                <th className="p-3">Hard</th>
                <th className="p-3">M1 eligible</th>
                <th className="p-3">M2 eligible</th>
                <th className="p-3">Priority</th>
              </tr>
            </thead>
            <tbody>
              {focusSkills.map((cell) => (
                <tr key={cell.skill} className="border-t">
                  <td className="p-3 font-semibold">{cell.skill}</td>
                  <td className="p-3">{cell.easy}</td>
                  <td className="p-3">{cell.medium}</td>
                  <td className="p-3">{cell.hard}</td>
                  <td className="p-3">{cell.module1Eligible}</td>
                  <td className="p-3">{cell.module2Eligible}</td>
                  <td className="p-3 capitalize">{cell.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {!validation.passed && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-red-950">Validation issues</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-red-900">
            {validation.issues.map((issue, index) => (
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

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}
