"use client";

import { useMemo } from "react";
import {
  diagnoseReadingFinalContent,
} from "@/lib/adaptive/readingFinalContentDiagnostic";

export default function Page() {
  const report = useMemo(
    () =>
      diagnoseReadingFinalContent(),
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
          Sprint 53G-1
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Final Reading Content Repair
        </h1>
        <p className="mt-3">
          {report.passed
            ? "Verified duplicates are retired and punctuation blanks are valid."
            : "The final content repair diagnostic found a problem."}
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
          label="Expected"
          value={
            report.expectedTotal
          }
        />
        <Metric
          label="Retired IDs present"
          value={
            report
              .retiredIdsStillPresent
              .length
          }
        />
        <Metric
          label="Valid blank choices"
          value={
            report
              .intentionalBlankChoices
          }
        />
      </section>

      {report.unexpectedBlankChoices
        .length > 0 && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-xl font-bold">
            Unexpected blank choices
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            {report.unexpectedBlankChoices.map(
              (issue) => (
                <li
                  key={`${issue.questionId}-${issue.choiceIndex}`}
                >
                  {issue.questionId} · choice{" "}
                  {issue.choiceIndex}
                </li>
              ),
            )}
          </ul>
        </section>
      )}
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
