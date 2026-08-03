"use client";

import { useMemo, useState } from "react";
import { runVocabularyProductionQualityGate } from "@/lib/adaptive/vocabularyProductionQualityGate";

export default function Page() {
  const [run, setRun] = useState(0);

  const report = useMemo(() => {
    void run;
    return runVocabularyProductionQualityGate(1000);
  }, [run]);

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed ? "bg-emerald-950" : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 56V-4
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              Vocabulary Production Quality Gate
            </h1>

            <p className="mt-3 text-white/75">
              {report.passed
                ? "The 100-question Vocabulary bank is production-ready."
                : `${report.issues.length} blocking quality issue(s) found.`}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setRun((value) => value + 1)}
            className="rounded-xl border border-white/25 px-5 py-3 font-semibold"
          >
            Run gate again
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <Metric label="Reading" value={report.totalReadingQuestions} />
        <Metric label="Vocabulary" value={report.vocabularyQuestions} />
        <Metric label="Unique words" value={report.uniqueCorrectWords} />
        <Metric label="Issues" value={report.issues.length} />
        <Metric label="Unreachable" value={report.unreachableQuestions} />
        <Metric label="Status" value={report.passed ? "PASS" : "FAIL"} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Distribution title="Difficulty" rows={report.difficultyCounts} />

        <Distribution
          title="Answer position"
          rows={report.answerPositionCounts}
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Blocking issues by code</h2>

        {Object.keys(report.issueCounts).length === 0 ? (
          <p className="mt-4 text-emerald-800">None</p>
        ) : (
          <div className="mt-4 space-y-2">
            {Object.entries(report.issueCounts).map(([code, count]) => (
              <div
                key={code}
                className="flex justify-between rounded-xl bg-red-50 p-3 text-sm"
              >
                <span>{code}</span>
                <strong>{count}</strong>
              </div>
            ))}
          </div>
        )}
      </section>

      {report.issues.length > 0 && (
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Affected questions</h2>

          <div className="mt-5 space-y-3">
            {report.issues.map((issue, index) => (
              <article
                key={`${issue.code}-${index}`}
                className="rounded-2xl border border-red-200 bg-red-50 p-4"
              >
                <p className="font-bold">{issue.code}</p>

                <p className="mt-2 text-sm">{issue.details}</p>

                <p className="mt-2 break-all font-mono text-xs">
                  {issue.questionIds.join(", ")}
                </p>
              </article>
            ))}
          </div>
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

function Distribution({
  title,
  rows,
}: {
  title: string;
  rows: Record<string, number>;
}) {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>

      <div className="mt-4 space-y-2">
        {Object.entries(rows).map(([label, count]) => (
          <div
            key={label}
            className="flex justify-between rounded-xl bg-slate-50 p-3 text-sm"
          >
            <span>{label}</span>
            <strong>{count}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
