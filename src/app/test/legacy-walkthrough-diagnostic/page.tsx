"use client";

import { useMemo } from "react";
import {
  diagnoseLegacyWalkthroughMigration,
} from "@/lib/adaptive/legacyWalkthroughDiagnostic";

export default function Page() {
  const report = useMemo(
    () =>
      diagnoseLegacyWalkthroughMigration(),
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
          Sprint 53G
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Legacy Walkthrough Migration
        </h1>
        <p className="mt-3">
          {report.passed
            ? "All Reading questions now have walkthroughs."
            : "The walkthrough migration diagnostic found a problem."}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-4">
        <Metric
          label="Questions"
          value={
            report.totalQuestions
          }
        />
        <Metric
          label="Migrated"
          value={
            report.migratedCount
          }
        />
        <Metric
          label="Still missing"
          value={
            report
              .remainingMissingWalkthroughs
          }
        />
        <Metric
          label="Existing changed"
          value={
            report
              .changedExistingWalkthroughs
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
