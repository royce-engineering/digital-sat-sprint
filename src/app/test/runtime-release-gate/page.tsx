"use client";

import Link from "next/link";
import {
  useMemo,
  useState,
} from "react";
import {
  diagnoseRuntimeReleaseGate,
  type RuntimeReleaseCheck,
} from "@/lib/adaptive/runtime/runtimeReleaseGate";

const categories = [
  "Full-test runtime",
  "Session recovery",
  "Cross-tab lease",
  "Deadline timer",
  "Module submission",
] as const;

export default function RuntimeReleaseGatePage() {
  const [runNumber, setRunNumber] = useState(0);

  const report = useMemo(
    () => diagnoseRuntimeReleaseGate(),
    [runNumber],
  );

  return (
    <main className="mx-auto max-w-6xl space-y-7 p-4 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white shadow-sm ${
          report.passed
            ? "bg-emerald-950"
            : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 50G
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold">
              Runtime Release Gate
            </h1>
            <p className="mt-3 text-white/75">
              {report.passed
                ? "All runtime reliability checks passed."
                : `${report.errors} runtime checks failed.`}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setRunNumber((value) => value + 1)
            }
            className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-semibold hover:bg-white/20"
          >
            Run again
          </button>
        </div>
      </section>

      {categories.map((category) => {
        const checks = report.checks.filter(
          (item) => item.category === category,
        );
        const passed = checks.filter(
          (item) => item.passed,
        ).length;

        return (
          <section
            key={category}
            className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-2xl font-bold">
                {category}
              </h2>
              <p className="text-sm font-semibold text-slate-600">
                {passed}/{checks.length} passed
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {checks.map((item) => (
                <CheckRow
                  key={`${category}-${item.name}`}
                  check={item}
                />
              ))}
            </div>
          </section>
        );
      })}

      <section className="rounded-3xl border bg-slate-950 p-7 text-white">
        <h2 className="text-2xl font-bold">
          Runtime RC exit criteria
        </h2>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {[
            "Runtime Release Gate passes",
            "Main Adaptive System Diagnostic passes",
            "Reading browser flow passes",
            "Math browser flow passes",
            "Full SAT resume flow passes",
            "Cross-tab blocking works",
            "Background timer behavior is correct",
            "Duplicate submission is blocked",
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
            href="/test/system-diagnostic"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
          >
            Main release gate
          </Link>
          <Link
            href="/test/sat/full"
            className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Full SAT flow
          </Link>
        </div>
      </section>
    </main>
  );
}

function CheckRow({
  check,
}: {
  check: RuntimeReleaseCheck;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        check.passed
          ? "border-green-200 bg-green-50"
          : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex gap-4">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white ${
            check.passed
              ? "bg-green-700"
              : "bg-red-700"
          }`}
        >
          {check.passed ? "✓" : "!"}
        </span>

        <div>
          <h3 className="font-bold">
            {check.name}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {check.details}
          </p>
        </div>
      </div>
    </div>
  );
}
