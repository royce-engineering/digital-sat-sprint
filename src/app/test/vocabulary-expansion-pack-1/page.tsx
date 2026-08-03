"use client";
import { diagnoseVocabularyExpansionPack1 } from "@/lib/adaptive/vocabularyExpansionPack1Diagnostic";
export default function Page() {
  const r = diagnoseVocabularyExpansionPack1();
  return <main className="mx-auto max-w-5xl space-y-6 p-8">
    <h1 className="text-4xl font-bold">Sprint 56V-1 · Vocabulary Expansion Pack 1</h1>
    <p>Questions: {r.total}</p><p>Unique words: {r.uniqueWords}</p>
    <p>Easy / Medium / Hard: {r.difficulty.Easy} / {r.difficulty.Medium} / {r.difficulty.Hard}</p>
    <p>A / B / C / D: {r.answerPositions.A} / {r.answerPositions.B} / {r.answerPositions.C} / {r.answerPositions.D}</p>
    <p>Missing walkthroughs: {r.missingWalkthroughs}</p>
    <p className="text-2xl font-bold">Status: {r.passed ? "PASS" : "FAIL"}</p>
    {!r.passed && <ul>{r.issues.map(x => <li key={x}>{x}</li>)}</ul>}
  </main>;
}
