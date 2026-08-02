"use client";

import { useMemo } from "react";
import { auditReadingBank } from "@/lib/adaptive/readingBankStaticAudit";
import { summarizeReadingBankAudit } from "@/lib/adaptive/readingBankAuditSummary";

export default function Page() {
  const { report, summary } = useMemo(() => {
    const report = auditReadingBank();
    return { report, summary: summarizeReadingBankAudit(report) };
  }, []);

  return (
    <main className="mx-auto max-w-6xl space-y-6 p-6">
      <section className="rounded-3xl bg-slate-950 p-8 text-white">
        <p className="text-sm uppercase tracking-widest text-white/60">Sprint 53A-1</p>
        <h1 className="mt-3 text-4xl font-bold">Reading Audit Error Classification</h1>
      </section>

      <div className="grid gap-4 sm:grid-cols-4">
        <Metric label="Questions" value={report.totalQuestions} />
        <Metric label="Errors" value={report.errors} />
        <Metric label="Warnings" value={report.warnings} />
        <Metric label="Affected questions" value={summary.affectedQuestionCount} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Table title="Blocking Errors by Code" rows={summary.errorsByCode} />
        <Table title="Warnings by Code" rows={summary.warningsByCode} />
      </div>

      <Table title="Missing Fields" rows={summary.missingFields} />

      <section className="rounded-3xl border bg-white p-6">
        <h2 className="text-2xl font-bold">Affected Question IDs</h2>
        <div className="mt-4 grid max-h-96 gap-2 overflow-auto sm:grid-cols-3">
          {summary.affectedQuestionIds.map((id) => (
            <code key={id} className="rounded bg-slate-50 p-2 text-xs">{id}</code>
          ))}
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return <div className="rounded-2xl border bg-white p-5">
    <p className="text-sm text-slate-500">{label}</p>
    <p className="mt-2 text-3xl font-bold">{value}</p>
  </div>;
}

function Table({ title, rows }: {
  title: string;
  rows: { key: string; count: number }[];
}) {
  return <section className="rounded-3xl border bg-white p-6">
    <h2 className="text-2xl font-bold">{title}</h2>
    {rows.length === 0 ? <p className="mt-4">None</p> :
      <table className="mt-4 w-full text-left text-sm">
        <thead><tr><th className="p-3">Type</th><th className="p-3 text-right">Count</th></tr></thead>
        <tbody>{rows.map((r) => <tr key={r.key} className="border-t">
          <td className="p-3 font-mono">{r.key}</td>
          <td className="p-3 text-right font-bold">{r.count}</td>
        </tr>)}</tbody>
      </table>}
  </section>;
}
