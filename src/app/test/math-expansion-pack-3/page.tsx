"use client";

import {
  diagnoseMathExpansionPack3,
} from "@/lib/adaptive/mathExpansionPack3Diagnostic";

export default function Page() {
  const report =
    diagnoseMathExpansionPack3();

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
          Sprint 56M-3A
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          First 18 Phase-2 Questions
        </h1>
        <p className="mt-3 text-white/75">
          {report.passed
            ? "The first Phase-2 expansion pack is ready."
            : `${report.issues.length} issue(s) found.`}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <Metric label="Questions" value={report.total} />
        <Metric label="Duplicates" value={report.duplicateGroups} />
        <Metric label="Duplicate choices" value={report.duplicateChoiceQuestions} />
        <Metric label="Missing walkthroughs" value={report.missingWalkthroughs} />
        <Metric label="Invalid tables" value={report.invalidTables} />
        <Metric label="Status" value={report.passed ? "PASS" : "FAIL"} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Distribution title="Domains" rows={report.domainCounts} />
        <Distribution title="Difficulty" rows={report.difficultyCounts} />
        <Distribution title="Skills" rows={report.skillCounts} />
        <Distribution title="Question Type" rows={report.questionTypeCounts} />
      </section>

      {!report.passed && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold">Issues</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {report.issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
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
  value: number | string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
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
