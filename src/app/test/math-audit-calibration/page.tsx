"use client";

import { useMemo } from "react";
import {
  calibrateMathAudit,
} from "@/lib/adaptive/mathAuditCalibration";

export default function Page() {
  const report = useMemo(
    () =>
      calibrateMathAudit(),
    [],
  );

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section className="rounded-3xl bg-slate-950 p-8 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 54A-2
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Math Audit Schema Alignment
        </h1>
        <p className="mt-3 text-white/75">
          Uses mathDomain and questionType from the production Math schema.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <Metric
          label="Questions"
          value={
            report.totalQuestions
          }
        />
        <Metric
          label="Choice-based"
          value={
            report.choiceBasedCount
          }
        />
        <Metric
          label="Student response"
          value={
            report.studentResponseCount
          }
        />
        <Metric
          label="Choice count errors"
          value={
            report.choiceCountErrors
          }
        />
        <Metric
          label="Choice answer errors"
          value={
            report.choiceAnswerErrors
          }
        />
        <Metric
          label="SPR schema errors"
          value={
            report.studentResponseSchemaErrors
          }
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Math Domain Distribution
        </h2>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">
                  Domain
                </th>
                <th className="p-3">
                  Skills
                </th>
                <th className="p-3 text-right">
                  Questions
                </th>
              </tr>
            </thead>
            <tbody>
              {report.domainPreview.map(
                (row) => (
                  <tr
                    key={row.domain}
                    className="border-t"
                  >
                    <td className="p-3 font-semibold">
                      {row.domain}
                    </td>
                    <td className="p-3">
                      {row.skills.join(
                        ", ",
                      )}
                    </td>
                    <td className="p-3 text-right font-bold">
                      {row.questions}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>

      <IssueSection
        title="Exact Duplicate Content Groups"
        issues={
          report
            .duplicateContentGroups
        }
      />

      <IssueSection
        title="Duplicate Choice Questions"
        issues={
          report
            .duplicateChoiceQuestions
        }
      />
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

function IssueSection({
  title,
  issues,
}: {
  title: string;
  issues: {
    questionId: string;
    code: string;
    message: string;
  }[];
}) {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      {issues.length === 0 ? (
        <p className="mt-5 rounded-xl bg-emerald-50 p-4 text-emerald-900">
          None
        </p>
      ) : (
        <div className="mt-5 space-y-3">
          {issues.map(
            (issue, index) => (
              <article
                key={`${issue.questionId}-${issue.code}-${index}`}
                className="rounded-xl border bg-slate-50 p-4"
              >
                <code className="text-xs">
                  {issue.questionId}
                </code>
                <p className="mt-2 text-sm">
                  {issue.message}
                </p>
              </article>
            ),
          )}
        </div>
      )}
    </section>
  );
}
