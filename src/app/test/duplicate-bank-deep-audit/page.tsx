"use client";

import { useMemo } from "react";
import { auditDuplicateReadingBank } from "@/lib/adaptive/duplicateBankDeepAudit";

export default function Page() {
  const report = useMemo(() => auditDuplicateReadingBank(), []);

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section className="rounded-3xl bg-slate-950 p-8 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
          Sprint 53C-2
        </p>
        <h1 className="mt-3 text-4xl font-bold">Duplicate Bank Deep Audit</h1>
        <p className="mt-3 text-white/70">
          Measures real content diversity before any duplicate records are removed or rewritten.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-4">
        <Metric label="Raw questions" value={report.rawQuestions} />
        <Metric label="Unique questions" value={report.uniqueQuestions} />
        <Metric label="Duplicate copies" value={report.duplicateCopies} />
        <Metric label="Duplicate rate" value={`${(report.duplicateRate * 100).toFixed(1)}%`} />
      </section>

      <AuditTable title="By Source Bank" rows={report.bySource} />
      <AuditTable title="By Skill" rows={report.bySkill} />
      <AuditTable title="By Difficulty" rows={report.byDifficulty} />

      <section className="rounded-3xl border bg-white p-6">
        <h2 className="text-2xl font-bold">Duplicate Groups</h2>
        <div className="mt-5 space-y-4">
          {report.duplicateGroups.map((group, index) => (
            <article key={group.key} className="rounded-2xl border p-5">
              <p className="font-bold">
                Group {index + 1} · {group.count} copies
              </p>
              <p className="mt-3 text-sm">{group.passage}</p>
              <p className="mt-2 text-sm font-semibold">{group.prompt}</p>
              <p className="mt-3 text-xs text-slate-500">
                Skills: {group.skills.join(", ")} · Difficulties: {group.difficulties.join(", ")}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.questionIds.map(id => (
                  <code key={id} className="rounded bg-slate-100 px-2 py-1 text-xs">{id}</code>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function AuditTable({
  title,
  rows,
}: {
  title: string;
  rows: { key: string; raw: number; unique: number; duplicates: number; duplicateRate: number }[];
}) {
  return (
    <section className="rounded-3xl border bg-white p-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr>
              <th className="p-3">Group</th>
              <th className="p-3 text-right">Raw</th>
              <th className="p-3 text-right">Unique</th>
              <th className="p-3 text-right">Duplicate</th>
              <th className="p-3 text-right">Rate</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.key} className="border-t">
                <td className="p-3 font-mono">{row.key}</td>
                <td className="p-3 text-right">{row.raw}</td>
                <td className="p-3 text-right font-bold">{row.unique}</td>
                <td className="p-3 text-right">{row.duplicates}</td>
                <td className="p-3 text-right">{(row.duplicateRate * 100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
