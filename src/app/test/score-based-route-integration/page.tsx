"use client";

import { useState } from "react";
import { runScoreBasedRouteIntegration } from "@/lib/adaptive/scoreBasedRouteIntegration";

export default function Page() {
  const [run, setRun] = useState(0);

  const report = runScoreBasedRouteIntegration();

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 55B
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              Score-Based Adaptive Route Integration
            </h1>

            <p className="mt-3 text-white/75">
              {report.passed
                ? "Reading and Math route correctly at every tested score boundary."
                : `${report.issues.length} routing integration issue(s) found.`}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setRun((value) => value + 1)}
            className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Run again
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Metric
          label="Threshold"
          value={`${Math.round(report.threshold * 100)}%`}
        />
        <Metric
          label="Reading boundary"
          value={`${report.readingBoundary.easyMax} Easy / ${report.readingBoundary.hardMin} Hard`}
        />
        <Metric
          label="Math boundary"
          value={`${report.mathBoundary.easyMax} Easy / ${report.mathBoundary.hardMin} Hard`}
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Boundary cases</h2>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">Section</th>
                <th className="p-3">Case</th>
                <th className="p-3">Correct</th>
                <th className="p-3">Unanswered</th>
                <th className="p-3">Expected</th>
                <th className="p-3">Actual</th>
                <th className="p-3">Module 2</th>
                <th className="p-3">Overlap</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {report.cases.map((row) => (
                <tr key={`${row.section}-${row.label}`} className="border-t">
                  <td className="p-3 font-semibold">{row.section}</td>
                  <td className="p-3">{row.label}</td>
                  <td className="p-3">
                    {row.correct}/{row.total}
                  </td>
                  <td className="p-3">{row.unanswered}</td>
                  <td className="p-3">{row.expectedRoute}</td>
                  <td className="p-3">{row.actualRoute}</td>
                  <td className="p-3">{row.module2Questions}</td>
                  <td className="p-3">{row.overlap}</td>
                  <td className="p-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        row.passed
                          ? "bg-emerald-900 text-white"
                          : "bg-red-900 text-white"
                      }`}
                    >
                      {row.passed ? "PASS" : "FAIL"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {report.issues.length > 0 && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold">Issues</h2>

          <div className="mt-5 space-y-3">
            {report.issues.map((issue, index) => (
              <article
                key={`${issue.section}-${issue.label}-${issue.code}-${index}`}
                className="rounded-xl bg-white p-4"
              >
                <p className="font-bold">
                  {issue.section} · {issue.label} · {issue.code}
                </p>
                <p className="mt-2 text-sm">{issue.message}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}
