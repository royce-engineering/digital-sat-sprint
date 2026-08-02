"use client";

import {
  useMemo,
} from "react";
import {
  auditLegacyRetirementImpact,
  legacyRetirementImpactCsv,
} from "@/lib/adaptive/legacyRetirementImpactAudit";

export default function LegacyRetirementImpactPage() {
  const report = useMemo(
    () =>
      auditLegacyRetirementImpact(),
    [],
  );

  const downloadCsv = () => {
    const blob = new Blob(
      [
        legacyRetirementImpactCsv(
          report,
        ),
      ],
      {
        type: "text/csv;charset=utf-8",
      },
    );
    const url =
      URL.createObjectURL(blob);
    const anchor =
      document.createElement("a");

    anchor.href = url;
    anchor.download =
      "legacy-retirement-impact.csv";
    anchor.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section className="rounded-3xl bg-slate-950 p-8 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
          Sprint 53C-3
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              Legacy Retirement Impact Audit
            </h1>
            <p className="mt-3 text-white/70">
              Simulates removing
              rw-vocab and
              rw-grammar-extra without
              changing the production
              bank.
            </p>
          </div>

          <button
            type="button"
            onClick={downloadCsv}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
          >
            Export CSV
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Metric
          label="Raw questions"
          value={
            report.rawQuestions
          }
        />
        <Metric
          label="Retained"
          value={
            report.retainedQuestions
          }
        />
        <Metric
          label="Removed"
          value={
            report.removedQuestions
          }
        />
        <Metric
          label="Affected skills"
          value={
            report
              .affectedSkills.length
          }
        />
        <Metric
          label="Required replacements"
          value={
            report
              .totalRequiredAdditions
          }
        />
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Metric
          label="Remove rw-vocab"
          value={
            report.removedRwVocab
          }
        />
        <Metric
          label="Remove rw-grammar-extra"
          value={
            report
              .removedRwGrammarExtra
          }
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Coverage after simulated retirement
        </h2>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">
                  Skill
                </th>
                <th className="p-3">
                  Easy
                </th>
                <th className="p-3">
                  Medium
                </th>
                <th className="p-3">
                  Hard
                </th>
                <th className="p-3">
                  Total
                </th>
                <th className="p-3">
                  Add E
                </th>
                <th className="p-3">
                  Add M
                </th>
                <th className="p-3">
                  Add H
                </th>
                <th className="p-3">
                  Total additions
                </th>
              </tr>
            </thead>
            <tbody>
              {report.coverage.map(
                (row) => (
                  <tr
                    key={row.skill}
                    className="border-t"
                  >
                    <td className="p-3 font-semibold">
                      {row.skill}
                    </td>
                    <td className="p-3">
                      {row.easy}
                    </td>
                    <td className="p-3">
                      {row.medium}
                    </td>
                    <td className="p-3">
                      {row.hard}
                    </td>
                    <td className="p-3 font-bold">
                      {row.total}
                    </td>
                    <td className="p-3">
                      {row.addEasy}
                    </td>
                    <td className="p-3">
                      {row.addMedium}
                    </td>
                    <td className="p-3">
                      {row.addHard}
                    </td>
                    <td className="p-3 font-bold">
                      {
                        row.totalAdditions
                      }
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
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
