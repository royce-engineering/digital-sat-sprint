"use client";

import {
  summarizeMathExpansionBlueprint,
  validateMathExpansionBlueprint,
} from "@/lib/adaptive/mathExpansionBlueprint";

export default function Page() {
  const summary =
    summarizeMathExpansionBlueprint();
  const issues =
    validateMathExpansionBlueprint();
  const passed =
    issues.length === 0;

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          passed
            ? "bg-emerald-950"
            : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 56M-1
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Exact Math Expansion Blueprint
        </h1>
        <p className="mt-3 text-white/75">
          {passed
            ? "The 72-question expansion blueprint is internally consistent."
            : `${issues.length} blueprint issue(s) found.`}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-5">
        <Metric label="Current" value={summary.currentQuestions} />
        <Metric label="Additions" value={summary.additions} />
        <Metric label="Projected" value={summary.projectedQuestions} />
        <Metric label="Phase 1" value={summary.phase1Additions} />
        <Metric label="Phase 2" value={summary.phase2Additions} />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Distribution title="By Domain" rows={summary.byDomain} />
        <Distribution title="By Difficulty" rows={summary.byDifficulty} />
        <Distribution title="By Question Type" rows={summary.byQuestionType} />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">New Geometry skills</h2>
        <p className="mt-4 text-sm text-slate-700">
          {summary.newSkills.join(", ")}
        </p>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Blueprint cells</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[1250px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">Phase</th>
                <th className="p-3">Domain</th>
                <th className="p-3">Skill</th>
                <th className="p-3">Difficulty</th>
                <th className="p-3">Type</th>
                <th className="p-3">Count</th>
                <th className="p-3">Rationale</th>
              </tr>
            </thead>
            <tbody>
              {summary.cells.map((cell, index) => (
                <tr
                  key={`${cell.phase}-${cell.domain}-${cell.skill}-${cell.difficulty}-${cell.questionType}-${index}`}
                  className="border-t align-top"
                >
                  <td className="p-3 font-bold">{cell.phase}</td>
                  <td className="p-3">{cell.domain}</td>
                  <td className="p-3">{cell.skill}</td>
                  <td className="p-3">{cell.difficulty}</td>
                  <td className="p-3">{cell.questionType}</td>
                  <td className="p-3 font-bold">{cell.count}</td>
                  <td className="p-3">{cell.rationale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {!passed && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold">Issues</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {issues.map((issue) => (
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
  value: number;
}) {
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
        {Object.entries(rows)
          .sort((a, b) => b[1] - a[1])
          .map(([label, count]) => (
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
