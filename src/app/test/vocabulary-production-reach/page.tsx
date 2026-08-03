"use client";

import { useMemo, useState } from "react";
import {
  auditVocabularyProductionReach,
  vocabularyProductionReachAuditJson,
} from "@/lib/adaptive/vocabularyProductionReachAudit";

export default function Page() {
  const [run, setRun] = useState(0);
  const report = useMemo(() => {
    void run;
    return auditVocabularyProductionReach(1000);
  }, [run]);

  const exportJson = () => {
    const blob = new Blob([vocabularyProductionReachAuditJson(report)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "vocabulary-production-reach-audit.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto max-w-7xl space-y-7 p-5 sm:p-8">
      <section
        className={`rounded-3xl p-8 text-white ${report.passed ? "bg-emerald-950" : "bg-red-950"}`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 56V-3
        </p>
        <h1 className="mt-3 text-4xl font-bold">
          Vocabulary Production Reachability
        </h1>
        <p className="mt-3">
          {report.passed
            ? "All production Vocabulary questions are reachable."
            : `${report.issues.length} issue(s) found.`}
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
        {[
          ["Reading", report.totalReadingQuestions],
          ["Vocabulary", report.totalVocabularyQuestions],
          ["Existing", report.existing],
          ["Pack 1", report.pack1],
          ["Pack 2", report.pack2],
          ["Pack 3", report.pack3],
          ["Unreachable", report.unreachableIds.length],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold">{value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Route reach</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">Route</th>
                <th className="p-3">Runs</th>
                <th className="p-3">Selections</th>
                <th className="p-3">Unique</th>
                <th className="p-3">Existing</th>
                <th className="p-3">Pack 1</th>
                <th className="p-3">Pack 2</th>
                <th className="p-3">Pack 3</th>
              </tr>
            </thead>
            <tbody>
              {report.routes.map((route) => (
                <tr key={route.route} className="border-t">
                  <td className="p-3 font-semibold">{route.route}</td>
                  <td className="p-3">{route.runs}</td>
                  <td className="p-3">{route.selections}</td>
                  <td className="p-3">{route.uniqueReached}</td>
                  <td className="p-3">
                    {route.existingReached}/{report.existing}
                  </td>
                  <td className="p-3">
                    {route.pack1Reached}/{report.pack1}
                  </td>
                  <td className="p-3">
                    {route.pack2Reached}/{report.pack2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Question reach</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Pack</th>
                <th className="p-3">Difficulty</th>
                <th className="p-3">Correct word</th>
                <th className="p-3">M1</th>
                <th className="p-3">M2 Easy</th>
                <th className="p-3">M2 Hard</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {report.questions.map((question) => (
                <tr
                  key={question.questionId}
                  className={`border-t ${question.total === 0 ? "bg-red-50" : ""}`}
                >
                  <td className="p-3 font-mono text-xs">
                    {question.questionId}
                  </td>
                  <td className="p-3">{question.pack}</td>
                  <td className="p-3">{question.difficulty}</td>
                  <td className="p-3 font-semibold">{question.correctWord}</td>
                  <td className="p-3">{question.module1}</td>
                  <td className="p-3">{question.module2Easy}</td>
                  <td className="p-3">{question.module2Hard}</td>
                  <td className="p-3 font-bold">{question.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {!report.passed && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold">Issues</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {report.issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
