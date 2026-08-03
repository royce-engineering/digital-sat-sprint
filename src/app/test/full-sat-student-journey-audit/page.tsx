"use client";

import { useMemo, useState } from "react";
import { auditFullSatStudentJourney } from "@/lib/adaptive/fullSatStudentJourneyAudit";

export default function Page() {
  const [run, setRun] = useState(0);
  const report = useMemo(() => {
    void run;
    return auditFullSatStudentJourney();
  }, [run]);

  return (
    <main className="mx-auto max-w-6xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 56A-1
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Full SAT Student Journey Audit
        </h1>
        <p className="mt-3 text-white/75">
          {report.passed
            ? "All modeled controller journey checks passed."
            : `${report.failures.length} blocking journey issue(s) found.`}
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

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Journey checks</h2>
        <div className="mt-5 space-y-3">
          {report.checks.map((item) => (
            <article
              key={item.id}
              className={`rounded-2xl border p-4 ${
                item.status === "pass"
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-1 font-mono text-xs text-slate-600">
                    {item.id}
                  </p>
                </div>
                <strong
                  className={
                    item.status === "pass" ? "text-emerald-800" : "text-red-800"
                  }
                >
                  {item.status.toUpperCase()}
                </strong>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {item.details}
              </p>
            </article>
          ))}
        </div>
      </section>
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
