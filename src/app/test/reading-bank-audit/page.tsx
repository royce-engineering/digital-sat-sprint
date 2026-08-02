"use client";

import {
  useMemo,
  useState,
} from "react";
import {
  auditReadingBank,
  type AuditSeverity,
} from "@/lib/adaptive/readingBankStaticAudit";

type Filter =
  | "all"
  | AuditSeverity;

export default function ReadingBankAuditPage() {
  const [runNumber, setRunNumber] =
    useState(0);
  const [filter, setFilter] =
    useState<Filter>("all");

  const report = useMemo(
    () => auditReadingBank(),
    [runNumber],
  );

  const issues =
    filter === "all"
      ? report.issues
      : report.issues.filter(
          (issue) =>
            issue.severity === filter,
        );

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-4 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed
            ? "bg-emerald-950"
            : "bg-red-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 53A
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold">
              Reading Bank Static Audit
            </h1>
            <p className="mt-3 text-white/75">
              {report.passed
                ? "No blocking Reading bank errors were found."
                : `${report.errors} blocking errors were found.`}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setRunNumber(
                (value) => value + 1,
              )
            }
            className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Run again
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Metric
          label="Questions"
          value={String(
            report.totalQuestions,
          )}
        />
        <Metric
          label="Errors"
          value={String(
            report.errors,
          )}
        />
        <Metric
          label="Warnings"
          value={String(
            report.warnings,
          )}
        />
        <Metric
          label="Skills"
          value={String(
            report.coverage.length,
          )}
        />
        <Metric
          label="Status"
          value={
            report.passed
              ? "PASS"
              : "FAIL"
          }
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold">
          Answer-position distribution
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          {(
            [
              ["A", report.answerPositions.A],
              ["B", report.answerPositions.B],
              ["C", report.answerPositions.C],
              ["D", report.answerPositions.D],
            ] as const
          ).map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl bg-slate-50 p-5"
            >
              <p className="text-sm text-slate-500">
                Choice {label}
              </p>
              <p className="mt-2 text-3xl font-bold">
                {value}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {(
                  (value /
                    Math.max(
                      1,
                      report.answerPositions
                        .total,
                    )) *
                  100
                ).toFixed(1)}
                %
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold">
          Skill and module capacity
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
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
                  M1 eligible
                </th>
                <th className="p-3">
                  M2 eligible
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
                      {
                        row.module1Eligible
                      }
                    </td>
                    <td className="p-3">
                      {
                        row.module2Eligible
                      }
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold">
            Audit issues
          </h2>

          <div className="flex flex-wrap gap-2">
            {(
              [
                "all",
                "error",
                "warning",
                "info",
              ] as Filter[]
            ).map((value) => (
              <button
                type="button"
                key={value}
                onClick={() =>
                  setFilter(value)
                }
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${
                  filter === value
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {issues.length === 0 ? (
          <p className="mt-6 rounded-2xl bg-green-50 p-5 text-green-900">
            No issues in this category.
          </p>
        ) : (
          <div className="mt-6 space-y-3">
            {issues.map(
              (issue, index) => (
                <div
                  key={`${issue.code}-${issue.questionId ?? "global"}-${index}`}
                  className={`rounded-2xl border p-5 ${
                    issue.severity ===
                    "error"
                      ? "border-red-200 bg-red-50"
                      : issue.severity ===
                          "warning"
                        ? "border-amber-200 bg-amber-50"
                        : "border-blue-200 bg-blue-50"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-wide">
                    {issue.severity} ·{" "}
                    {issue.code}
                  </p>
                  <p className="mt-2 font-semibold">
                    {issue.message}
                  </p>

                  {issue.questionId && (
                    <p className="mt-2 text-sm text-slate-600">
                      Question:{" "}
                      {issue.questionId}
                    </p>
                  )}
                </div>
              ),
            )}
          </div>
        )}
      </section>
    </main>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
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
