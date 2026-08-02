"use client";

import {
  useMemo,
  useState,
} from "react";
import {
  runFullSatAssemblyAudit,
} from "@/lib/adaptive/fullSatAssemblyAudit";

export default function Page() {
  const [run, setRun] =
    useState(0);

  const report = useMemo(
    () =>
      runFullSatAssemblyAudit(
        500,
      ),
    [run],
  );

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed
            ? "bg-emerald-950"
            : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 55A
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              Full SAT Assembly Audit
            </h1>

            <p className="mt-3 text-white/75">
              {report.passed
                ? `All ${report.totalAssemblies} full-test assemblies passed.`
                : `${report.failures.length} assembly failure(s) found.`}
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
            Run again
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-4">
        <Metric
          label="Seeds"
          value={
            report.seeds
          }
        />
        <Metric
          label="Route combinations"
          value={
            report.routeCombinations
          }
        />
        <Metric
          label="Full tests"
          value={
            report.totalAssemblies
          }
        />
        <Metric
          label="Failures"
          value={
            report.failures.length
          }
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Route combinations
        </h2>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[920px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">
                  Reading route
                </th>
                <th className="p-3">
                  Math route
                </th>
                <th className="p-3">
                  Runs
                </th>
                <th className="p-3">
                  Failures
                </th>
                <th className="p-3">
                  Unique full tests
                </th>
                <th className="p-3">
                  Reading reached
                </th>
                <th className="p-3">
                  Math reached
                </th>
              </tr>
            </thead>

            <tbody>
              {report.summaries.map(
                (row) => (
                  <tr
                    key={`${row.readingRoute}-${row.mathRoute}`}
                    className="border-t"
                  >
                    <td className="p-3 font-semibold">
                      {
                        row.readingRoute
                      }
                    </td>
                    <td className="p-3 font-semibold">
                      {row.mathRoute}
                    </td>
                    <td className="p-3">
                      {row.runs}
                    </td>
                    <td className="p-3">
                      {row.failures}
                    </td>
                    <td className="p-3">
                      {
                        row.uniqueFullTests
                      }
                    </td>
                    <td className="p-3">
                      {
                        row.readingQuestionsReached
                      }
                    </td>
                    <td className="p-3">
                      {
                        row.mathQuestionsReached
                      }
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>

      {report.failures.length >
        0 && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold">
            First 100 failures
          </h2>

          <div className="mt-5 space-y-3">
            {report.failures
              .slice(0, 100)
              .map(
                (
                  failure,
                  index,
                ) => (
                  <article
                    key={`${failure.seed}-${failure.readingRoute}-${failure.mathRoute}-${failure.code}-${index}`}
                    className="rounded-xl bg-white p-4"
                  >
                    <p className="font-bold">
                      Reading{" "}
                      {
                        failure.readingRoute
                      }{" "}
                      · Math{" "}
                      {
                        failure.mathRoute
                      }{" "}
                      ·{" "}
                      {
                        failure.code
                      }
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      Seed:{" "}
                      {failure.seed}
                    </p>

                    <p className="mt-2 text-sm">
                      {failure.message}
                    </p>
                  </article>
                ),
              )}
          </div>
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
