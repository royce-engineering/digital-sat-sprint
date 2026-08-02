"use client";

import { useMemo } from "react";
import {
  validateReadingBlueprints,
} from "@/lib/adaptive/readingBlueprintValidation";

export default function Page() {
  const report = useMemo(
    () =>
      validateReadingBlueprints(),
    [],
  );

  return (
    <main className="mx-auto max-w-6xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed
            ? "bg-emerald-950"
            : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 53F-A
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          27-Question Production Blueprint
        </h1>
        <p className="mt-3 text-white/75">
          {report.passed
            ? "All production Reading blueprints are ready."
            : `${report.issues.length} blueprint issues found.`}
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {report.rows.map(
          (row) => (
            <article
              key={row.name}
              className="rounded-3xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold">
                {row.name}
              </h2>

              <dl className="mt-5 grid grid-cols-3 gap-3 text-center">
                <Metric
                  label="Total"
                  value={row.total}
                />
                <Metric
                  label="Target"
                  value={
                    row.expectedTotal
                  }
                />
                <Metric
                  label="Shortages"
                  value={
                    row.shortages
                  }
                />
              </dl>

              <div className="mt-5 space-y-2">
                {row.slots.map(
                  (slot) => (
                    <div
                      key={
                        slot.slotIndex
                      }
                      className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm"
                    >
                      <span>
                        Slot{" "}
                        {
                          slot.slotIndex
                        }
                      </span>
                      <span
                        className={
                          slot.ready
                            ? "font-semibold text-emerald-700"
                            : "font-semibold text-red-700"
                        }
                      >
                        {
                          slot.available
                        }{" "}
                        available /{" "}
                        {
                          slot.requested
                        }{" "}
                        needed
                      </span>
                    </div>
                  ),
                )}
              </div>
            </article>
          ),
        )}
      </section>

      {!report.passed && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <ul className="list-disc space-y-2 pl-5 text-sm text-red-900">
            {report.issues.map(
              (issue) => (
                <li key={issue}>
                  {issue}
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
    <div className="rounded-xl bg-slate-50 p-3">
      <dt className="text-xs text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-bold">
        {value}
      </dd>
    </div>
  );
}
