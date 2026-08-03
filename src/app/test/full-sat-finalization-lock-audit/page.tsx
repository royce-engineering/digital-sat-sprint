"use client";

import { useMemo, useState } from "react";
import { auditFullSatFinalizationAndLock } from "@/lib/adaptive/fullSatFinalizationAndLockAudit";

export default function Page() {
  const [run, setRun] = useState(0);

  const report = useMemo(() => {
    void run;
    return auditFullSatFinalizationAndLock();
  }, [run]);

  const categories = [
    "History finalization",
    "Result completeness",
    "Cross-tab protection",
  ] as const;

  return (
    <main className="mx-auto max-w-6xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 56A-3
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Full SAT Finalization & Lock Audit
        </h1>

        <p className="mt-3 text-white/75">
          {report.passed
            ? "History finalization, combined results, and cross-tab protection passed."
            : `${report.failures.length} blocking issue(s) found.`}
        </p>

        <button
          type="button"
          onClick={() => setRun((value) => value + 1)}
          className="mt-6 rounded-xl border border-white/25 px-5 py-3 font-semibold"
        >
          Run audit again
        </button>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Metric label="Checks" value={report.checks.length} />
        <Metric label="Failures" value={report.failures.length} />
        <Metric label="Status" value={report.passed ? "PASS" : "FAIL"} />
      </section>

      {categories.map((category) => (
        <section
          key={category}
          className="rounded-3xl border bg-white p-6 shadow-sm"
        >
          <h2 className="text-2xl font-bold">{category}</h2>

          <div className="mt-5 space-y-3">
            {report.checks
              .filter((item) => item.category === category)
              .map((item) => (
                <article
                  key={item.name}
                  className={`rounded-2xl border p-4 ${
                    item.passed
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex flex-wrap justify-between gap-3">
                    <p className="font-bold">{item.name}</p>

                    <strong
                      className={
                        item.passed ? "text-emerald-800" : "text-red-800"
                      }
                    >
                      {item.passed ? "PASS" : "FAIL"}
                    </strong>
                  </div>

                  <p className="mt-2 text-sm text-slate-700">{item.details}</p>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>

      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}
