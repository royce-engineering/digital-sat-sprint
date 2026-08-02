"use client";

import { useMemo, useState } from "react";
import { runProductionReadingSelectorStress } from "@/lib/adaptive/productionReadingSelectorStress";

export default function Page() {
  const [run, setRun] = useState(0);

  const report = runProductionReadingSelectorStress(1000);

  return (
    <main className="mx-auto max-w-6xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 53F-B
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              Production Reading Selector Stress Test
            </h1>
            <p className="mt-3 text-white/75">
              {report.passed
                ? `All ${report.totalRuns} production module generations passed.`
                : `${report.failures.length} failures found.`}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setRun((value) => value + 1)}
            className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Run again
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-4">
        <Metric label="Seeds" value={report.seeds} />
        <Metric label="Routes" value={report.routes.length} />
        <Metric label="Total generations" value={report.totalRuns} />
        <Metric label="Failures" value={report.failures.length} />
      </section>

      <section className="rounded-3xl border bg-white p-6">
        <h2 className="text-2xl font-bold">Production route results</h2>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">Route</th>
                <th className="p-3">Runs</th>
                <th className="p-3">Failures</th>
                <th className="p-3">Unique orders</th>
                <th className="p-3">Questions reached</th>
              </tr>
            </thead>
            <tbody>
              {report.routes.map((route) => (
                <tr key={route.route} className="border-t">
                  <td className="p-3 font-semibold">{route.route}</td>
                  <td className="p-3">{route.runs}</td>
                  <td className="p-3">{route.failures}</td>
                  <td className="p-3">{route.uniqueOrders}</td>
                  <td className="p-3">{route.questionsReached}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {report.failures.length > 0 && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-950">
            First 100 failures
          </h2>

          <div className="mt-5 space-y-3">
            {report.failures.slice(0, 100).map((failure, index) => (
              <article
                key={`${failure.route}-${failure.seed}-${failure.code}-${index}`}
                className="rounded-xl bg-white p-4 text-sm"
              >
                <p className="font-bold">
                  {failure.route} · {failure.code}
                </p>
                <p className="mt-1 text-slate-600">Seed: {failure.seed}</p>
                <p className="mt-2">{failure.message}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}
