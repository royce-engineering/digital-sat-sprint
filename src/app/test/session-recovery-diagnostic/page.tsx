"use client";

import { useMemo, useState } from "react";
import { diagnoseSessionRecovery } from "@/lib/adaptive/runtime/sessionRecoveryDiagnostics";

export default function SessionRecoveryDiagnosticPage() {
  const [runNumber, setRunNumber] = useState(0);
  const report = diagnoseSessionRecovery();

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 50C
        </p>
        <h1 className="mt-3 text-4xl font-bold">Section Session Recovery</h1>
        <p className="mt-3 text-white/75">
          {report.passed
            ? "All recovery checks passed."
            : "One or more recovery checks failed."}
        </p>
        <button
          type="button"
          onClick={() => setRunNumber((value) => value + 1)}
          className="mt-6 rounded-xl border border-white/25 px-5 py-3 font-semibold"
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
              <h3 className="font-bold">
                {item.passed ? "✓ " : "! "}
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{item.details}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
