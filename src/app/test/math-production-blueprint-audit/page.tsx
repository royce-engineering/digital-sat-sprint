"use client";

import { useMemo, useState } from "react";
import { auditMathProductionBlueprint } from "@/lib/adaptive/mathProductionBlueprintAudit";

export default function Page() {
  const [run, setRun] = useState(0);

  const report = auditMathProductionBlueprint();

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 54E-A
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              22-Question Math Production Blueprint Audit
            </h1>
            <p className="mt-3 text-white/75">
              {report.passed
                ? "All Math production routes have sufficient blueprint capacity."
                : `${report.issues.length} production blueprint issue(s) found.`}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setRun((value) => value + 1)}
            className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Run audit again
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Metric label="Math questions" value={report.totalQuestions} />
        <Metric label="Module size" value={report.moduleSize} />
        <Metric label="Status" value={report.passed ? "PASS" : "FAIL"} />
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        {report.routes.map((route) => (
          <article
            key={route.route}
            className="rounded-3xl border bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold">{route.route}</h2>

            <p className="mt-2 text-sm text-slate-600">
              Pathway: <strong>{route.pathway}</strong>
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <SmallMetric label="Blueprint" value={route.blueprintTotal} />
              <SmallMetric label="Selected" value={route.selectedTotal} />
              <SmallMetric
                label="Validation"
                value={route.validationPassed ? "PASS" : "FAIL"}
              />
            </div>

            <h3 className="mt-6 font-bold">Domain capacity</h3>

            <div className="mt-3 space-y-2">
              {route.domainCapacity.map((row) => (
                <div
                  key={row.domain}
                  className={`rounded-xl border p-3 text-sm ${
                    row.ready
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <p className="font-semibold">{row.domain}</p>
                  <p className="mt-1 text-slate-700">
                    {row.availableAfterModule1} eligible / {row.requested}{" "}
                    required
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mt-6 font-bold">Question-type capacity</h3>

            <div className="mt-3 space-y-2">
              {route.typeCapacity.map((row) => (
                <div
                  key={row.questionType}
                  className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm"
                >
                  <span>{row.questionType}</span>
                  <span className="font-semibold">
                    {row.available} available / {row.target} target
                  </span>
                </div>
              ))}
            </div>

            {route.warnings.length > 0 && (
              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm">
                <p className="font-bold">Soft-target warnings</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {route.warnings.map((warning) => (
                    <li key={warning}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </section>

      {!report.passed && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold">Blocking issues</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            {report.issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        </section>
      )}
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

function SmallMetric({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}
