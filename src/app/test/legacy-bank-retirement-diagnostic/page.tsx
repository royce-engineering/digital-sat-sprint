"use client";

import { useMemo } from "react";
import {
  diagnoseLegacyBankRetirement,
} from "@/lib/adaptive/legacyBankRetirementDiagnostic";

export default function Page() {
  const report = useMemo(
    () =>
      diagnoseLegacyBankRetirement(),
    [],
  );

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-6 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed
            ? "bg-emerald-950"
            : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 53C-5
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Legacy Bank Retirement
        </h1>
        <p className="mt-3">
          {report.passed
            ? "Both legacy Reading banks were retired successfully."
            : "Legacy Reading records are still present or the total is unexpected."}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-4">
        <Metric
          label="Reading total"
          value={report.total}
        />
        <Metric
          label="Expected total"
          value={report.expectedTotal}
        />
        <Metric
          label="rw-vocab remaining"
          value={
            report.remainingRwVocab
          }
        />
        <Metric
          label="grammar-extra remaining"
          value={
            report
              .remainingRwGrammarExtra
          }
        />
      </section>
    </main>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}
