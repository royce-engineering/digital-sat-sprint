"use client";

import {
  useMemo,
  useState,
} from "react";
import {
  auditMathExpansionGaps,
  mathExpansionGapAuditJson,
} from "@/lib/adaptive/mathExpansionGapAudit";

export default function Page() {
  const [run, setRun] =
    useState(0);

  const report = useMemo(
    () =>
      auditMathExpansionGaps(
        1000,
      ),
    [run],
  );

  const exportJson = () => {
    const blob = new Blob(
      [
        mathExpansionGapAuditJson(
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
      "math-expansion-gap-audit.json";
    anchor.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section className="rounded-3xl bg-slate-950 p-8 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 56M-0
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              Math Expansion Gap Audit
            </h1>

            <p className="mt-3 text-white/75">
              Identifies the exact Domain × Skill × Difficulty × Type cells
              that should receive new questions.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={exportJson}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
            >
              Export JSON
            </button>

            <button
              type="button"
              onClick={() =>
                setRun(
                  (value) =>
                    value + 1,
                )
              }
              className="rounded-xl border border-white/25 px-5 py-3 font-semibold hover:bg-white/10"
            >
              Run again
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-4">
        <Metric
          label="Questions"
          value={
            report.totalQuestions
          }
        />
        <Metric
          label="Seeds / route"
          value={report.seeds}
        />
        <Metric
          label="Priority cells"
          value={
            report.priorities.length
          }
        />
        <Metric
          label="Suggested additions"
          value={
            report.suggestedExpansionTotal
          }
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Route telemetry
        </h2>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">
                  Route
                </th>
                <th className="p-3">
                  Runs
                </th>
                <th className="p-3">
                  Warning runs
                </th>
                <th className="p-3">
                  Warning total
                </th>
                <th className="p-3">
                  Max / run
                </th>
                <th className="p-3">
                  Questions reached
                </th>
              </tr>
            </thead>
            <tbody>
              {report.routes.map(
                (route) => (
                  <tr
                    key={route.route}
                    className="border-t"
                  >
                    <td className="p-3 font-semibold">
                      {route.route}
                    </td>
                    <td className="p-3">
                      {route.runs}
                    </td>
                    <td className="p-3">
                      {
                        route.warningRuns
                      }
                    </td>
                    <td className="p-3">
                      {
                        route.warningTotal
                      }
                    </td>
                    <td className="p-3">
                      {
                        route.maxWarningsPerRun
                      }
                    </td>
                    <td className="p-3">
                      {
                        route.uniqueQuestionsReached
                      }
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Recommended expansion cells
        </h2>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[1200px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">
                  Rank
                </th>
                <th className="p-3">
                  Domain
                </th>
                <th className="p-3">
                  Skill
                </th>
                <th className="p-3">
                  Difficulty
                </th>
                <th className="p-3">
                  Type
                </th>
                <th className="p-3">
                  Current
                </th>
                <th className="p-3">
                  Priority
                </th>
                <th className="p-3">
                  Add
                </th>
                <th className="p-3">
                  Reasons
                </th>
              </tr>
            </thead>
            <tbody>
              {report.priorities.map(
                (item) => (
                  <tr
                    key={`${item.domain}-${item.skill}-${item.difficulty}-${item.questionType}`}
                    className="border-t align-top"
                  >
                    <td className="p-3 font-bold">
                      {item.rank}
                    </td>
                    <td className="p-3">
                      {item.domain}
                    </td>
                    <td className="p-3">
                      {item.skill}
                    </td>
                    <td className="p-3">
                      {
                        item.difficulty
                      }
                    </td>
                    <td className="p-3">
                      {
                        item.questionType
                      }
                    </td>
                    <td className="p-3">
                      {
                        item.currentCount
                      }
                    </td>
                    <td className="p-3 font-bold">
                      {
                        item.priorityScore
                      }
                    </td>
                    <td className="p-3 font-bold">
                      +
                      {
                        item.suggestedAdditions
                      }
                    </td>
                    <td className="p-3">
                      {item.reasons.join(
                        " ",
                      )}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Warning messages
        </h2>

        <div className="mt-5 space-y-5">
          {report.routes.map(
            (route) => (
              <article
                key={route.route}
                className="rounded-2xl border p-5"
              >
                <h3 className="font-bold">
                  {route.route}
                </h3>

                {route.warningMessages
                  .length === 0 ? (
                  <p className="mt-3 text-sm text-emerald-800">
                    No warnings.
                  </p>
                ) : (
                  <ul className="mt-3 space-y-2 text-sm">
                    {route.warningMessages.map(
                      (warning) => (
                        <li
                          key={
                            warning.message
                          }
                          className="rounded-xl bg-amber-50 p-3"
                        >
                          <strong>
                            {
                              warning.count
                            }
                          </strong>
                          {" × "}
                          {
                            warning.message
                          }
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </article>
            ),
          )}
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
