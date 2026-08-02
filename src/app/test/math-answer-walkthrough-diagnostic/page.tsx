"use client";

import { useMemo } from "react";
import {
  diagnoseMathAnswerIntegrityAndWalkthroughs,
} from "@/lib/adaptive/mathAnswerWalkthroughDiagnostic";

export default function Page() {
  const report = useMemo(
    () =>
      diagnoseMathAnswerIntegrityAndWalkthroughs(),
    [],
  );

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
          Sprint 54D-2
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Math Answer Integrity + Walkthrough Generator
        </h1>
        <p className="mt-3 text-white/75">
          {report.passed
            ? "All missing walkthroughs were generated from independently verified answers."
            : "Some answers or walkthrough inputs require review."}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Metric
          label="Questions"
          value={
            report.totalQuestions
          }
        />
        <Metric
          label="Generated"
          value={
            report.generatedWalkthroughs
          }
        />
        <Metric
          label="Still missing"
          value={
            report.remainingMissingWalkthroughs
          }
        />
        <Metric
          label="Unsupported"
          value={
            report.unsupportedQuestions
          }
        />
        <Metric
          label="Answer issues"
          value={
            report.answerIntegrityIssues
          }
        />
      </section>

      {report.answerIssues.length >
        0 && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold">
            Answer integrity issues
          </h2>

          <div className="mt-5 space-y-3">
            {report.answerIssues.map(
              (issue) => (
                <article
                  key={
                    issue.questionId
                  }
                  className="rounded-xl bg-white p-4"
                >
                  <code className="text-xs">
                    {
                      issue.questionId
                    }
                  </code>
                  <p className="mt-2 text-sm">
                    Expected:{" "}
                    <strong>
                      {
                        issue.expectedAnswer
                      }
                    </strong>
                    {" · "}
                    Stored:{" "}
                    <strong>
                      {
                        issue.storedAnswer
                      }
                    </strong>
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {issue.message}
                  </p>
                </article>
              ),
            )}
          </div>
        </section>
      )}

      {report.unsupportedIds.length >
        0 && (
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold">
            Unsupported questions
          </h2>
          <p className="mt-3 break-words text-sm">
            {report.unsupportedIds.join(
              ", ",
            )}
          </p>
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
      <p className="text-sm text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}
