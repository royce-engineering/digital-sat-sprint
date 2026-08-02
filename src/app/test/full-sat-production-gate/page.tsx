"use client";

import {
  useMemo,
  useState,
} from "react";
import {
  runFullSatProductionGate,
} from "@/lib/adaptive/fullSatProductionGate";

export default function Page() {
  const [run, setRun] =
    useState(0);

  const report = useMemo(
    () =>
      runFullSatProductionGate({
        mathStressSeeds: 1000,
        assemblySeeds: 500,
      }),
    [run],
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
          Sprint 55F
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              Full SAT Production Gate
            </h1>

            <p className="mt-3 text-white/75">
              {report.passed
                ? "The complete adaptive SAT system is production-ready."
                : "The complete adaptive SAT system is not yet production-ready."}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setRun(
                (value) =>
                  value + 1,
              )
            }
            className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Run gate again
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Metric
          label="Production checks"
          value={
            report.checks.length
          }
        />

        <Metric
          label="Gate status"
          value={
            report.passed
              ? "PASS"
              : "FAIL"
          }
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Release checks
        </h2>

        <div className="mt-5 space-y-3">
          {report.checks.map(
            (check) => (
              <article
                key={check.name}
                className={`rounded-2xl border p-5 ${
                  check.passed
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold">
                    {check.name}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      check.passed
                        ? "bg-emerald-900 text-white"
                        : "bg-red-900 text-white"
                    }`}
                  >
                    {check.passed
                      ? "PASS"
                      : "FAIL"}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-700">
                  {check.details}
                </p>
              </article>
            ),
          )}
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
  value: number | string;
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
