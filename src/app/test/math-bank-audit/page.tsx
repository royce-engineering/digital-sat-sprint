"use client";

import { useMemo, useState } from "react";
import { auditMathBank } from "@/lib/adaptive/mathBankProductionAudit";
import { summarizeMathBankAudit } from "@/lib/adaptive/mathBankAuditSummary";

export default function Page() {
  const [run, setRun] = useState(0);

  const report = auditMathBank();
  const summary = summarizeMathBankAudit(report);

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 54A
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">Math Bank Production Audit</h1>
            <p className="mt-3 text-white/75">
              {report.passed
                ? "No blocking Math bank errors were found."
                : `${report.errors} blocking error(s) found.`}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setRun((value) => value + 1)}
            className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Run audit again
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Metric label="Questions" value={report.totalQuestions} />
        <Metric label="Errors" value={report.errors} />
        <Metric label="Warnings" value={report.warnings} />
        <Metric label="Affected" value={summary.affectedQuestionCount} />
        <Metric label="Status" value={report.passed ? "PASS" : "FAIL"} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <SummaryTable
          title="Blocking Errors by Code"
          rows={summary.errorsByCode}
        />
        <SummaryTable title="Warnings by Code" rows={summary.warningsByCode} />
      </section>

      <SummaryTable title="Missing Fields" rows={summary.missingFields} />

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Domain distribution</h2>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">Domain</th>
                <th className="p-3 text-right">Questions</th>
              </tr>
            </thead>
            <tbody>
              {report.domains.map((row) => (
                <tr key={row.domain} className="border-t">
                  <td className="p-3 font-semibold">{row.domain}</td>
                  <td className="p-3 text-right">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Skill and difficulty coverage</h2>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">Skill</th>
                <th className="p-3">Easy</th>
                <th className="p-3">Medium</th>
                <th className="p-3">Hard</th>
                <th className="p-3">Total</th>
                <th className="p-3">M1 eligible</th>
                <th className="p-3">M2 eligible</th>
              </tr>
            </thead>
            <tbody>
              {report.coverage.map((row) => (
                <tr key={row.skill} className="border-t">
                  <td className="p-3 font-semibold">{row.skill}</td>
                  <td className="p-3">{row.easy}</td>
                  <td className="p-3">{row.medium}</td>
                  <td className="p-3">{row.hard}</td>
                  <td className="p-3 font-bold">{row.total}</td>
                  <td className="p-3">{row.module1Eligible}</td>
                  <td className="p-3">{row.module2Eligible}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Answer-position distribution</h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-4">
          {(
            [
              ["A", report.answerPositions.A],
              ["B", report.answerPositions.B],
              ["C", report.answerPositions.C],
              ["D", report.answerPositions.D],
            ] as const
          ).map(([label, value]) => (
            <Metric key={label} label={`Choice ${label}`} value={value} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function SummaryTable({
  title,
  rows,
}: {
  title: string;
  rows: {
    key: string;
    count: number;
  }[];
}) {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">{title}</h2>

      {rows.length === 0 ? (
        <p className="mt-5 rounded-xl bg-emerald-50 p-4 text-emerald-900">
          None
        </p>
      ) : (
        <table className="mt-5 w-full text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3">Type</th>
              <th className="p-3 text-right">Count</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-t">
                <td className="p-3 font-mono">{row.key}</td>
                <td className="p-3 text-right font-bold">{row.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
