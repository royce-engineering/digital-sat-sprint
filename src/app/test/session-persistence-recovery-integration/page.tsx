"use client";

import { useState } from "react";
import { runSessionPersistenceRecoveryIntegration } from "@/lib/adaptive/sessionPersistenceRecoveryIntegration";

export default function Page() {
  const [run, setRun] = useState(0);

  const report = runSessionPersistenceRecoveryIntegration();

  return (
    <main className="mx-auto max-w-6xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 55C
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              Session Persistence & Recovery Integration
            </h1>

            <p className="mt-3 text-white/75">
              {report.passed
                ? "Session recovery, timers, and submission guards passed."
                : "One or more session integration checks failed."}
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

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Integration checks</h2>

        <div className="mt-5 space-y-3">
          {report.checks.map((item) => (
            <article
              key={item.name}
              className={`rounded-2xl border p-5 ${
                item.passed
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-bold">{item.name}</h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    item.passed
                      ? "bg-emerald-900 text-white"
                      : "bg-red-900 text-white"
                  }`}
                >
                  {item.passed ? "PASS" : "FAIL"}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-700">{item.details}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
