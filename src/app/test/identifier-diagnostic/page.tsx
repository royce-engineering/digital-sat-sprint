"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  diagnoseIdentifierMigration,
  type IdentifierDiagnosticCheck,
} from "@/lib/adaptive/identifierDiagnostics";

export default function IdentifierDiagnosticPage() {
  const [runNumber, setRunNumber] = useState(0);
  const report = diagnoseIdentifierMigration();

  return (
    <main className="mx-auto max-w-6xl space-y-7 p-4 sm:p-8">
      <section className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div
          className={`px-7 py-9 text-white sm:px-10 ${
            report.passed ? "bg-emerald-950" : "bg-red-950"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Sprint 47D
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold">
                Identifier Migration Diagnostic
              </h1>
              <p className="mt-3 text-white/75">
                {report.passed
                  ? "All id → examId migration checks passed."
                  : "One or more migration checks failed."}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setRunNumber((value) => value + 1)}
              className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-semibold hover:bg-white/20"
            >
              Run again
            </button>
          </div>
        </div>

        <div className="grid gap-4 p-7 sm:grid-cols-3 sm:p-10">
          <Metric label="Overall" value={report.passed ? "PASS" : "FAIL"} />
          <Metric
            label="Questions checked"
            value={String(report.stats.questionsChecked)}
          />
          <Metric
            label="Checks passed"
            value={`${
              report.checks.filter((item) => item.passed).length
            }/${report.checks.length}`}
          />
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold">Migration checks</h2>

        <div className="mt-6 space-y-3">
          {report.checks.map((item) => (
            <CheckRow key={item.id} check={item} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border bg-slate-950 p-7 text-white">
        <h2 className="text-2xl font-bold">Next regression steps</h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>Resume an old Reading session and verify it restores.</li>
          <li>Start a new Reading session and inspect examId storage.</li>
          <li>Complete Math Module 1 and verify exclusion behavior.</li>
          <li>Run the full adaptive system diagnostic.</li>
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/test/system-diagnostic"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
          >
            System diagnostic
          </Link>
          <Link
            href="/test/sat"
            className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Test Center
          </Link>
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function CheckRow({ check }: { check: IdentifierDiagnosticCheck }) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        check.passed
          ? "border-green-200 bg-green-50"
          : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white ${
            check.passed ? "bg-green-700" : "bg-red-700"
          }`}
        >
          {check.passed ? "✓" : "!"}
        </div>

        <div>
          <h3 className="font-bold">{check.label}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {check.details}
          </p>
        </div>
      </div>
    </div>
  );
}
