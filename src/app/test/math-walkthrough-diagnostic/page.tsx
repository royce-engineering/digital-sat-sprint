"use client";

import {
  useMemo,
} from "react";
import {
  diagnoseMathWalkthroughs,
  mathWalkthroughDiagnosticJson,
} from "@/lib/adaptive/mathWalkthroughDiagnostic";

export default function Page() {
  const report = useMemo(
    () =>
      diagnoseMathWalkthroughs(),
    [],
  );

  const exportJson = () => {
    const blob = new Blob(
      [
        mathWalkthroughDiagnosticJson(
          report,
        ),
      ],
      {
        type: "application/json",
      },
    );

    const url =
      URL.createObjectURL(blob);
    const anchor =
      document.createElement("a");

    anchor.href = url;
    anchor.download =
      "math-walkthrough-diagnostic.json";
    anchor.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${
          report.passed
            ? "bg-emerald-950"
            : "bg-slate-950"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
          Sprint 54D-1
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              Math Walkthrough Diagnostic
            </h1>
            <p className="mt-3 text-white/70">
              {report.passed
                ? "Every Math question has a walkthrough."
                : `${report.missingWalkthroughs} Math questions need walkthroughs.`}
            </p>
          </div>

          <button
            type="button"
            onClick={exportJson}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
          >
            Export JSON
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Metric
          label="Questions"
          value={
            report.totalQuestions
          }
        />
        <Metric
          label="Complete"
          value={
            report.completeWalkthroughs
          }
        />
        <Metric
          label="Missing"
          value={
            report.missingWalkthroughs
          }
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <CountTable
          title="Missing by Domain"
          rows={report.byDomain}
        />
        <CountTable
          title="Missing by Skill"
          rows={report.bySkill}
        />
        <CountTable
          title="Missing by Difficulty"
          rows={
            report.byDifficulty
          }
        />
        <CountTable
          title="Missing by Question Type"
          rows={
            report.byQuestionType
          }
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Questions missing walkthroughs
        </h2>

        {report.issues.length === 0 ? (
          <p className="mt-5 rounded-xl bg-emerald-50 p-4 text-emerald-900">
            None
          </p>
        ) : (
          <div className="mt-6 space-y-5">
            {report.issues.map(
              (issue) => (
                <article
                  key={
                    issue.questionId
                  }
                  className="rounded-2xl border p-5"
                >
                  <code className="text-xs">
                    {
                      issue.questionId
                    }
                  </code>

                  <p className="mt-2 text-sm text-slate-600">
                    {
                      issue.mathDomain
                    }{" "}
                    · {issue.skill} ·{" "}
                    {
                      issue.difficulty
                    }{" "}
                    ·{" "}
                    {
                      issue.questionType
                    }
                  </p>

                  <p className="mt-4 whitespace-pre-wrap text-sm">
                    {issue.passage}
                  </p>

                  <p className="mt-3 font-semibold">
                    {issue.prompt}
                  </p>

                  {issue.choices.length >
                  0 ? (
                    <ol className="mt-3 list-[upper-alpha] space-y-1 pl-6 text-sm">
                      {issue.choices.map(
                        (
                          choice,
                          index,
                        ) => (
                          <li
                            key={index}
                          >
                            {choice}
                            {index ===
                            issue.answer
                              ? " ✓"
                              : ""}
                          </li>
                        ),
                      )}
                    </ol>
                  ) : (
                    <p className="mt-3 text-sm">
                      Numeric answer:{" "}
                      {
                        issue.numericAnswer
                      }
                    </p>
                  )}
                </article>
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

function CountTable({
  title,
  rows,
}: {
  title: string;
  rows: {
    key: string;
    count: number;
  }[];
}) {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      {rows.length === 0 ? (
        <p className="mt-5 rounded-xl bg-emerald-50 p-4 text-emerald-900">
          None
        </p>
      ) : (
        <table className="mt-5 w-full text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3">
                Group
              </th>
              <th className="p-3 text-right">
                Count
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.key}
                className="border-t"
              >
                <td className="p-3">
                  {row.key}
                </td>
                <td className="p-3 text-right font-bold">
                  {row.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
