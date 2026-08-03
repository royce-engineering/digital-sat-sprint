"use client";

import { diagnoseVocabularyExpansionPack3 } from "@/lib/adaptive/vocabularyExpansionPack3Diagnostic";

export default function Page() {
  const report = diagnoseVocabularyExpansionPack3();

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-8">
      <section className={`rounded-3xl p-8 text-white ${
        report.passed ? "bg-emerald-950" : "bg-red-950"
      }`}>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Sprint 56V-5
        </p>
        <h1 className="mt-3 text-4xl font-bold">Vocabulary Expansion Pack 3</h1>
        <p className="mt-3">
          {report.passed ? "The third 36-question vocabulary pack is ready." : `${report.issues.length} issue(s) found.`}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <p>Questions: <strong>{report.total}</strong></p>
        <p>Unique words: <strong>{report.uniqueWords}</strong></p>
        <p>Missing walkthroughs: <strong>{report.missingWalkthroughs}</strong></p>
        <p>Easy / Medium / Hard: <strong>{report.difficulty.Easy} / {report.difficulty.Medium} / {report.difficulty.Hard}</strong></p>
        <p>Duplicate passages: <strong>{report.duplicatePassages}</strong></p>
        <p>Status: <strong>{report.passed ? "PASS" : "FAIL"}</strong></p>
      </section>

      {!report.passed && (
        <ul className="list-disc space-y-2 pl-5">
          {report.issues.map((issue) => <li key={issue}>{issue}</li>)}
        </ul>
      )}
    </main>
  );
}
