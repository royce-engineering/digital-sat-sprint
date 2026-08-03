import { vocabularyExpansionPack2 } from "./vocabularyExpansionPack2";

const normalize = (value: string) =>
  value.toLowerCase().replace(/\s+/g, " ").trim();

function duplicateGroups(values: string[]): number {
  const counts = new Map<string, number>();
  for (const value of values) {
    const key = normalize(value);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.values()].filter((count) => count > 1).length;
}

export function diagnoseVocabularyExpansionPack2() {
  const difficulty = { Easy: 0, Medium: 0, Hard: 0 } as Record<string, number>;
  const answerPositions = { A: 0, B: 0, C: 0, D: 0 } as Record<string, number>;

  for (const question of vocabularyExpansionPack2) {
    difficulty[question.difficulty] += 1;
    const position = ["A", "B", "C", "D"][question.answer];
    if (position) answerPositions[position] += 1;
  }

  const words = vocabularyExpansionPack2.map(
    (question) => question.choices[question.answer]?.text ?? "",
  );
  const missingWalkthroughs = vocabularyExpansionPack2.filter(
    (question) => !question.walkthrough?.length,
  ).length;
  const invalidQuestions = vocabularyExpansionPack2.filter(
    (question) =>
      question.choices.length !== 4 ||
      question.answer < 0 ||
      question.answer > 3 ||
      new Set(question.choices.map((choice) => normalize(choice.text))).size !== 4,
  ).length;
  const duplicatePrompts = duplicateGroups(
    vocabularyExpansionPack2.map((question) => question.prompt),
  );
  const duplicatePassages = duplicateGroups(
    vocabularyExpansionPack2.map((question) => question.passage),
  );
  const duplicateChoiceSets = duplicateGroups(
    vocabularyExpansionPack2.map((question) =>
      question.choices.map((choice) => choice.text).sort().join(" | "),
    ),
  );

  const issues: string[] = [];
  if (vocabularyExpansionPack2.length !== 36) issues.push("Expected 36 questions.");
  if (new Set(words.map(normalize)).size !== 36) issues.push("Expected 36 unique correct words.");
  for (const level of ["Easy", "Medium", "Hard"]) {
    if (difficulty[level] !== 12) issues.push(`${level}: expected 12; found ${difficulty[level]}.`);
  }
  if (missingWalkthroughs) issues.push(`${missingWalkthroughs} missing walkthrough(s).`);
  if (invalidQuestions) issues.push(`${invalidQuestions} invalid question(s).`);
  if (duplicatePassages) issues.push(`${duplicatePassages} repeated passage group(s).`);
  if (duplicateChoiceSets) issues.push(`${duplicateChoiceSets} repeated choice-set group(s).`);

  return {
    passed: issues.length === 0,
    total: vocabularyExpansionPack2.length,
    uniqueWords: new Set(words.map(normalize)).size,
    difficulty,
    answerPositions,
    missingWalkthroughs,
    duplicatePrompts,
    duplicatePassages,
    duplicateChoiceSets,
    invalidQuestions,
    issues,
  };
}
