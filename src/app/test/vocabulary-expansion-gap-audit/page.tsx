"use client";

import { useState } from "react";
import {
  auditVocabularyExpansionGaps,
  vocabularyExpansionGapAuditJson,
} from "@/lib/adaptive/vocabularyExpansionGapAudit";

export default function Page() {
  const [run, setRun] = useState(0);
  const report = auditVocabularyExpansionGaps(1000);

  const exportJson = () => {
    const blob = new Blob([vocabularyExpansionGapAuditJson(report)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "vocabulary-expansion-gap-audit.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section className="rounded-3xl bg-slate-950 p-8 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 56V-0
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Vocabulary Expansion Gap Audit
        </h1>
        <p className="mt-3 text-white/75">
          Measures lexical breadth, template repetition, route usage, answer
          balance, and walkthrough coverage.
        </p>
        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={exportJson}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold"
          >
            Export JSON
          </button>
          <button
            type="button"
            onClick={() => setRun((value) => value + 1)}
            className="rounded-xl border border-white/25 px-5 py-3 font-semibold"
          >
            Run again
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <Metric
          label="Reading questions"
          value={report.totalReadingQuestions}
        />
        <Metric
          label="Vocabulary questions"
          value={report.vocabularyQuestions}
        />
        <Metric label="Unique words" value={report.uniqueCorrectWords} />
        <Metric
          label="Questions / word"
          value={report.averageQuestionsPerWord.toFixed(2)}
        />
        <Metric label="Max reuse" value={report.maxQuestionsForOneWord} />
        <Metric
          label="Missing walkthroughs"
          value={report.missingWalkthroughs}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Distribution title="Difficulty" rows={report.difficultyCounts} />
        <Distribution
          title="Answer position"
          rows={report.answerPositionCounts}
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Route telemetry</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">Route</th>
                <th className="p-3">Runs</th>
                <th className="p-3">Runs with vocab</th>
                <th className="p-3">Selections</th>
                <th className="p-3">Average</th>
                <th className="p-3">Max</th>
                <th className="p-3">Unique reached</th>
              </tr>
            </thead>
            <tbody>
              {report.routes.map((route) => (
                <tr key={route.route} className="border-t">
                  <td className="p-3 font-semibold">{route.route}</td>
                  <td className="p-3">{route.runs}</td>
                  <td className="p-3">{route.runsWithVocabulary}</td>
                  <td className="p-3">{route.selections}</td>
                  <td className="p-3">{route.averagePerModule.toFixed(2)}</td>
                  <td className="p-3">{route.maxPerModule}</td>
                  <td className="p-3">{route.uniqueReached}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Highest-reuse words</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">Word</th>
                <th className="p-3">Questions</th>
                <th className="p-3">Easy</th>
                <th className="p-3">Medium</th>
                <th className="p-3">Hard</th>
              </tr>
            </thead>
            <tbody>
              {report.highestReuseWords.slice(0, 50).map((item) => (
                <tr key={item.word} className="border-t">
                  <td className="p-3 font-semibold">{item.word}</td>
                  <td className="p-3">{item.questions}</td>
                  <td className="p-3">{item.easy}</td>
                  <td className="p-3">{item.medium}</td>
                  <td className="p-3">{item.hard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Metric
          label="Direct definitions"
          value={report.directDefinitionTemplateQuestions}
        />
        <Metric label="Repeated prompts" value={report.repeatedPromptGroups} />
        <Metric
          label="Repeated passages"
          value={report.repeatedPassageGroups}
        />
        <Metric
          label="Repeated choice sets"
          value={report.repeatedChoiceSetGroups}
        />
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Recommendations</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm">
          {report.recommendations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number | string }) {
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
