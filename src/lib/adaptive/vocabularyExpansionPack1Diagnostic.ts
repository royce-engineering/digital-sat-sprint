import { vocabularyExpansionPack1 } from "./vocabularyExpansionPack1";

export function diagnoseVocabularyExpansionPack1() {
  const difficulty = { Easy: 0, Medium: 0, Hard: 0 } as Record<string, number>;
  const positions = { A: 0, B: 0, C: 0, D: 0 } as Record<string, number>;
  for (const q of vocabularyExpansionPack1) {
    difficulty[q.difficulty] += 1;
    const p = ["A","B","C","D"][q.answer];
    if (p) positions[p] += 1;
  }
  const words = new Set(vocabularyExpansionPack1.map(q => q.choices[q.answer]?.text.toLowerCase()));
  const missingWalkthroughs = vocabularyExpansionPack1.filter(q => !q.walkthrough?.length).length;
  const invalid = vocabularyExpansionPack1.filter(q => q.choices.length !== 4 || q.answer < 0 || q.answer > 3).length;
  const issues: string[] = [];
  if (vocabularyExpansionPack1.length !== 36) issues.push("Expected 36 questions.");
  if (words.size !== 36) issues.push("Expected 36 unique correct words.");
  for (const d of ["Easy","Medium","Hard"]) if (difficulty[d] !== 12) issues.push(`${d} must equal 12.`);
  for (const p of ["A","B","C","D"]) if (positions[p] !== 9) issues.push(`${p} must equal 9.`);
  if (missingWalkthroughs) issues.push(`${missingWalkthroughs} missing walkthrough(s).`);
  if (invalid) issues.push(`${invalid} invalid question(s).`);
  return { passed: issues.length === 0, total: vocabularyExpansionPack1.length, uniqueWords: words.size,
    difficulty, answerPositions: positions, missingWalkthroughs, issues };
}
