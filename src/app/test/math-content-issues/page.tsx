"use client";

import {
  useMemo,
} from "react";
import {
  inspectMathContentIssues,
  mathContentIssueJson,
} from "@/lib/adaptive/mathContentIssueInspector";

export default function Page() {
  const inspection = useMemo(
    () =>
      inspectMathContentIssues(),
    [],
  );

  const downloadJson = () => {
    const blob = new Blob(
      [
        mathContentIssueJson(
          inspection,
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
      "math-content-issues.json";
    anchor.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section className="rounded-3xl bg-slate-950 p-8 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
          Sprint 54B
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              Math Content Issue Inspector
            </h1>
            <p className="mt-3 text-white/70">
              Shows exact duplicate-content groups and every choice-based
              question containing duplicate choices.
            </p>
          </div>

          <button
            type="button"
            onClick={downloadJson}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
          >
            Export JSON
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-4">
        <Metric
          label="Duplicate groups"
          value={
            inspection
              .duplicateContentGroups
              .length
          }
        />
        <Metric
          label="Questions in groups"
          value={
            inspection
              .duplicateContentQuestionCount
          }
        />
        <Metric
          label="Duplicate-choice questions"
          value={
            inspection
              .duplicateChoiceQuestionCount
          }
        />
        <Metric
          label="Total blocking findings"
          value={
            inspection
              .duplicateContentGroups
              .length +
            inspection
              .duplicateChoiceQuestionCount
          }
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Exact duplicate content
        </h2>

        <div className="mt-6 space-y-5">
          {inspection.duplicateContentGroups.map(
            (group, groupIndex) => (
              <article
                key={group.key}
                className="rounded-2xl border p-5"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-red-700">
                  Group {groupIndex + 1}
                </p>

                <p className="mt-3 whitespace-pre-wrap text-sm">
                  {group.passage}
                </p>

                <p className="mt-3 font-semibold">
                  {group.prompt}
                </p>

                <div className="mt-4 space-y-3">
                  {group.questionIds.map(
                    (id, itemIndex) => (
                      <div
                        key={id}
                        className="rounded-xl bg-slate-50 p-4"
                      >
                        <code className="text-xs">
                          {id}
                        </code>

                        <p className="mt-2 text-sm">
                          {
                            group
                              .questionTypes[
                              itemIndex
                            ]
                          }{" "}
                          ·{" "}
                          {
                            group.domains[
                              itemIndex
                            ]
                          }{" "}
                          ·{" "}
                          {
                            group.skills[
                              itemIndex
                            ]
                          }{" "}
                          ·{" "}
                          {
                            group
                              .difficulties[
                              itemIndex
                            ]
                          }
                        </p>

                        {group.choices[
                          itemIndex
                        ].length > 0 ? (
                          <ol className="mt-3 list-[upper-alpha] space-y-1 pl-6 text-sm">
                            {group.choices[
                              itemIndex
                            ].map(
                              (
                                choice,
                                choiceIndex,
                              ) => (
                                <li
                                  key={
                                    choiceIndex
                                  }
                                >
                                  {choice}
                                  {choiceIndex ===
                                  group.answers[
                                    itemIndex
                                  ]
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
                              group
                                .numericAnswers[
                                itemIndex
                              ]
                            }
                          </p>
                        )}
                      </div>
                    ),
                  )}
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Duplicate choices
        </h2>

        <div className="mt-6 space-y-4">
          {inspection.duplicateChoiceIssues.map(
            (issue) => (
              <article
                key={issue.questionId}
                className="rounded-2xl border border-red-200 bg-red-50 p-5"
              >
                <code className="text-xs">
                  {issue.questionId}
                </code>

                <p className="mt-2 text-sm text-slate-700">
                  {issue.questionType} ·{" "}
                  {issue.domain} ·{" "}
                  {issue.skill} ·{" "}
                  {issue.difficulty}
                </p>

                <p className="mt-3 whitespace-pre-wrap text-sm">
                  {issue.passage}
                </p>

                <p className="mt-3 font-semibold">
                  {issue.prompt}
                </p>

                <ol className="mt-3 list-[upper-alpha] space-y-1 pl-6 text-sm">
                  {issue.choices.map(
                    (choice, index) => (
                      <li key={index}>
                        {choice}
                        {index ===
                        issue.answer
                          ? " ✓"
                          : ""}
                      </li>
                    ),
                  )}
                </ol>

                <div className="mt-4 space-y-1 text-sm text-red-900">
                  {issue.duplicateChoiceGroups.map(
                    (group) => (
                      <p
                        key={`${issue.questionId}-${group.normalizedValue}`}
                      >
                        Duplicate “
                        {
                          group.normalizedValue
                        }
                        ” at choices{" "}
                        {group.indexes
                          .map(
                            (index) =>
                              String.fromCharCode(
                                65 +
                                  index,
                              ),
                          )
                          .join(", ")}
                      </p>
                    ),
                  )}
                </div>
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
