"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  diagnoseAdaptiveSystem,
  type SystemDiagnosticCheck,
} from "@/lib/adaptive/systemDiagnostics";

export default function SystemDiagnosticPage() {
  const [runNumber, setRunNumber] = useState(0);

  const report = useMemo(
    () => diagnoseAdaptiveSystem(),
    [runNumber],
  );

  const categories = [...new Set(
    report.checks.map((item) => item.category),
  )];

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-4 sm:p-8">
      <section className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div
          className={`px-7 py-9 text-white sm:px-10 ${
            report.passed ? "bg-emerald-950" : "bg-red-950"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Release health check
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold">
                Adaptive System Diagnostic
              </h1>
              <p className="mt-3 text-white/75">
                {report.passed
                  ? "All required checks passed."
                  : `${report.errors} required checks failed.`}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setRunNumber((value) => value + 1)}
              className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-semibold hover:bg-white/20"
            >
              Run diagnostics again
            </button>
          </div>
        </div>

        <div className="grid gap-4 p-7 sm:grid-cols-2 lg:grid-cols-5 sm:p-10">
          <Metric
            label="Overall"
            value={report.passed ? "PASS" : "FAIL"}
          />
          <Metric
            label="Reading questions"
            value={String(report.stats.readingQuestions)}
          />
          <Metric
            label="Math questions"
            value={String(report.stats.mathQuestions)}
          />
          <Metric
            label="Errors"
            value={String(report.errors)}
          />
          <Metric
            label="Warnings"
            value={String(report.warnings)}
          />
        </div>
      </section>

      {categories.map((category) => {
        const checks = report.checks.filter(
          (item) => item.category === category,
        );
        const passed = checks.filter((item) => item.passed).length;

        return (
          <section
            key={category}
            className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  Diagnostic group
                </p>
                <h2 className="mt-1 text-2xl font-bold">
                  {category}
                </h2>
              </div>
              <p className="text-sm font-semibold text-slate-600">
                {passed}/{checks.length} passed
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {checks.map((item) => (
                <CheckRow key={item.id} check={item} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="rounded-3xl border bg-slate-950 p-7 text-white shadow-sm">
        <h2 className="text-2xl font-bold">Release checklist</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {[
            "Run npx tsc --noEmit",
            "Run npm run lint",
            "Complete one Reading adaptive test",
            "Complete one Math adaptive test",
            "Complete the full SAT controller flow",
            "Verify combined history and dashboard",
            "Verify personalized practice for both sections",
            "Confirm this diagnostic reports PASS",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/15 bg-white/5 p-4 text-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/test/sat"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
          >
            Open Test Center
          </Link>
          <Link
            href="/test/dashboard"
            className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Open Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function CheckRow({
  check,
}: {
  check: SystemDiagnosticCheck;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        check.passed
          ? "border-green-200 bg-green-50"
          : check.severity === "warning"
            ? "border-amber-200 bg-amber-50"
            : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold ${
            check.passed
              ? "bg-green-700 text-white"
              : check.severity === "warning"
                ? "bg-amber-600 text-white"
                : "bg-red-700 text-white"
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
