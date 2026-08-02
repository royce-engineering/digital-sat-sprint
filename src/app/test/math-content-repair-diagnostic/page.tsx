"use client";

import {
  useMemo,
} from "react";
import {
  diagnoseMathContentRepair,
} from "@/lib/adaptive/mathContentRepairDiagnostic";

export default function Page() {
  const report = useMemo(
    () =>
      diagnoseMathContentRepair(),
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
          Sprint 54C
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Math Duplicate Repair
        </h1>
        <p className="mt-3">
          {report.passed
            ? "All verified Math duplicate content and duplicate choices are repaired."
            : "Math content issues remain."}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Metric
          label="Questions"
          value={
            report.totalQuestions
          }
        />
        <Metric
          label="Duplicate groups"
          value={
            report
              .duplicateContentGroups
          }
        />
        <Metric
          label="Duplicate-choice questions"
          value={
            report
              .duplicateChoiceQuestions
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
