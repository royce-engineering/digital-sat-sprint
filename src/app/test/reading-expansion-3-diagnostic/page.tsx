"use client";

import { useMemo } from "react";
import { validateReadingExpansionPack3 } from "@/lib/adaptive/readingExpansionPack3/validator";

export default function ReadingExpansion3DiagnosticPage() {
  const report = useMemo(() => validateReadingExpansionPack3(), []);

  return (
    <main className="mx-auto max-w-4xl space-y-6 p-6 sm:p-8">
      <section className={`rounded-3xl p-8 text-white ${report.passed ? "bg-emerald-950" : "bg-red-950"}`}>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Sprint 52D</p>
        <h1 className="mt-3 text-4xl font-bold">Reading Expansion Pack 3</h1>
        <p className="mt-3">{report.passed ? "All 47 questions passed validation." : `${report.issues.length} issues found.`}</p>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">Questions</p>
        <p className="mt-2 text-3xl font-bold">{report.total}</p>
      </section>

      {!report.passed && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <ul className="list-disc space-y-2 pl-5 text-sm text-red-900">
            {report.issues.map((issue) => <li key={issue}>{issue}</li>)}
          </ul>
        </section>
      )}
    </main>
  );
}
