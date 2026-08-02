"use client";

import { useMemo, useState } from "react";
import {
  buildReadingCoverageReport,
  readingCoverageCsv,
  type ReadingCoverageCell,
} from "@/lib/adaptive/readingCoverageAudit";

type PriorityFilter = "all" | "critical" | "high" | "medium" | "healthy";

export default function ReadingCoverageAuditPage() {
  const [runNumber, setRunNumber] = useState(0);
  const [priority, setPriority] = useState<PriorityFilter>("all");

  const report = buildReadingCoverageReport();

  const visible =
    priority === "all"
      ? report.cells
      : report.cells.filter((cell) => cell.priority === priority);

  const downloadCsv = () => {
    const blob = new Blob([readingCoverageCsv(report)], {
      type: "text/csv;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "reading-coverage-audit.csv";
    anchor.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-4 sm:p-8">
      <section className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
          Sprint 52A
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold">Reading Coverage Audit</h1>
            <p className="mt-3 max-w-3xl text-slate-300">
              Domain × skill × difficulty coverage, module eligibility, passage
              diversity, and recommended additions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setRunNumber((value) => value + 1)}
              className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
            >
              Recalculate
            </button>

            <button
              type="button"
              onClick={downloadCsv}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
            >
              Export CSV
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Metric
          label="Reading questions"
          value={String(report.totalQuestions)}
        />
        <Metric label="Unique skills" value={String(report.uniqueSkills)} />
        <Metric
          label="Passage types"
          value={String(report.uniquePassageTypes)}
        />
        <Metric
          label="Critical / high cells"
          value={String(report.criticalCells.length)}
        />
        <Metric
          label="Recommended additions"
          value={String(report.recommendedNewQuestions)}
        />
      </section>

      {(report.duplicateExamIds.length > 0 ||
        report.missingMetadataIds.length > 0) && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-950">
          <h2 className="text-xl font-bold">Data integrity issues</h2>

          {report.duplicateExamIds.length > 0 && (
            <p className="mt-3 text-sm">
              Duplicate examIds: {report.duplicateExamIds.join(", ")}
            </p>
          )}

          {report.missingMetadataIds.length > 0 && (
            <p className="mt-3 text-sm">
              Missing Reading metadata: {report.missingMetadataIds.join(", ")}
            </p>
          )}
        </section>
      )}

      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold">Domain summary</h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="p-3">Domain</th>
                <th className="p-3">Easy</th>
                <th className="p-3">Medium</th>
                <th className="p-3">Hard</th>
                <th className="p-3">Total</th>
                <th className="p-3">Skills</th>
                <th className="p-3">Passage types</th>
              </tr>
            </thead>
            <tbody>
              {report.domains.map((domain) => (
                <tr key={domain.domain} className="border-t">
                  <td className="p-3 font-semibold">{domain.domain}</td>
                  <td className="p-3">{domain.easy}</td>
                  <td className="p-3">{domain.medium}</td>
                  <td className="p-3">{domain.hard}</td>
                  <td className="p-3 font-bold">{domain.total}</td>
                  <td className="p-3">{domain.skills}</td>
                  <td className="p-3">{domain.passageTypes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Skill coverage</h2>
            <p className="mt-2 text-sm text-slate-600">
              Targets per skill: Easy 8, Medium 10, Hard 10.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(
              [
                "all",
                "critical",
                "high",
                "medium",
                "healthy",
              ] as PriorityFilter[]
            ).map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setPriority(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${
                  priority === item
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[1250px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="p-3">Priority</th>
                <th className="p-3">Domain</th>
                <th className="p-3">Skill</th>
                <th className="p-3">Easy</th>
                <th className="p-3">Medium</th>
                <th className="p-3">Hard</th>
                <th className="p-3">Total</th>
                <th className="p-3">M1 eligible</th>
                <th className="p-3">M2 eligible</th>
                <th className="p-3">Passage types</th>
                <th className="p-3">Add E/M/H</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((cell) => (
                <CoverageRow key={`${cell.domain}-${cell.skill}`} cell={cell} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function CoverageRow({ cell }: { cell: ReadingCoverageCell }) {
  return (
    <tr className="border-t align-top">
      <td className="p-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${priorityClass(
            cell.priority,
          )}`}
        >
          {cell.priority}
        </span>
      </td>
      <td className="p-3">{cell.domain}</td>
      <td className="p-3 font-semibold">{cell.skill}</td>
      <td className="p-3">{cell.easy}</td>
      <td className="p-3">{cell.medium}</td>
      <td className="p-3">{cell.hard}</td>
      <td className="p-3 font-bold">{cell.total}</td>
      <td className="p-3">{cell.module1Eligible}</td>
      <td className="p-3">{cell.module2Eligible}</td>
      <td className="p-3">{cell.passageTypes.join(", ")}</td>
      <td className="p-3 font-semibold">
        {cell.recommendedAdditions.easy}/{cell.recommendedAdditions.medium}/
        {cell.recommendedAdditions.hard}
      </td>
    </tr>
  );
}

function priorityClass(priority: ReadingCoverageCell["priority"]): string {
  if (priority === "critical") {
    return "bg-red-100 text-red-800";
  }

  if (priority === "high") {
    return "bg-amber-100 text-amber-800";
  }

  if (priority === "medium") {
    return "bg-blue-100 text-blue-800";
  }

  return "bg-green-100 text-green-800";
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}
