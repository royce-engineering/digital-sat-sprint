"use client";

import { useMemo, useState } from "react";
import {
  diagnoseAdaptiveCore,
} from "@/lib/adaptive/core";

export default function CoreDiagnosticPage() {
  const [runNumber, setRunNumber] = useState(0);
  const report = useMemo(
    () => diagnoseAdaptiveCore(),
    [runNumber],
  );

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white shadow-sm ${
          report.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 48A
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Shared Core Diagnostic
        </h1>
        <p className="mt-3 text-white/75">
          {report.passed
            ? "All additive core utilities passed."
            : "One or more core checks failed."}
        </p>

        <button
          type="button"
          onClick={() => setRunNumber((value) => value + 1)}
          className="mt-6 rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-semibold"
        >
          Run again
        </button>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold">
          {report.checks.filter((item) => item.passed).length}/
          {report.checks.length} checks passed
        </h2>

        <div className="mt-6 space-y-3">
          {report.checks.map((item) => (
            <div
              key={item.name}
              className={`rounded-2xl border p-5 ${
                item.passed
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <div className="flex gap-4">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white ${
                    item.passed ? "bg-green-700" : "bg-red-700"
                  }`}
                >
                  {item.passed ? "✓" : "!"}
                </span>
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
