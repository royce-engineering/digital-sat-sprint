"use client";

import { useMemo } from "react";
import { validateReadingExpansionPack12 } from "@/lib/adaptive/readingExpansionPack12/validator";

export default function Page() {
  const report = useMemo(() => validateReadingExpansionPack12(), []);

  return (
    <main className="mx-auto max-w-4xl space-y-6 p-6 sm:p-8">
      <section className={`rounded-3xl p-8 text-white ${report.passed ? "bg-emerald-950" : "bg-red-950"}`}>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Sprint 53G-2</p>
        <h1 className="mt-3 text-4xl font-bold">Final Coverage Restoration</h1>
        <p className="mt-3">
          {report.passed
            ? "All 19 replacement questions passed validation."
            : `${report.issues.length} issues found.`}
        </p>
      </section>

      <section className="rounded-3xl border bg-white p-6">
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
