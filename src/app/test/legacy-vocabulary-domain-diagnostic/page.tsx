"use client";

import { useMemo } from "react";
import {
  diagnoseLegacyVocabularyDomains,
} from "@/lib/adaptive/legacyReadingMetadataDiagnostics";

export default function LegacyVocabularyDomainDiagnosticPage() {
  const report = useMemo(
    () =>
      diagnoseLegacyVocabularyDomains(),
    [],
  );

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed
            ? "bg-emerald-950"
            : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 53B
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Legacy Vocabulary Domain Migration
        </h1>
        <p className="mt-3 text-white/75">
          {report.passed
            ? "All 120 legacy vocabulary domains migrated successfully."
            : "The migration diagnostic found a problem."}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Metric
          label="Source questions"
          value={report.sourceCount}
        />
        <Metric
          label="Migrated"
          value={report.migratedCount}
        />
        <Metric
          label="Missing domain"
          value={
            report
              .remainingMissingDomainIds
              .length
          }
        />
      </section>

      {report.unexpectedChangedIds
        .length > 0 && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-xl font-bold">
            Unexpected changes
          </h2>
          <p className="mt-3 text-sm">
            {report.unexpectedChangedIds.join(
              ", ",
            )}
          </p>
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
