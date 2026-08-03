import { vocabularyExpansionPack3 } from "./vocabularyExpansionPack3";

const normalize = (value: string) =>
  value.toLowerCase().replace(/\s+/g, " ").trim();

export function diagnoseVocabularyExpansionPack3() {
  const difficulty = { Easy: 0, Medium: 0, Hard: 0 } as Record<string, number>;
  const answerPositions = { A: 0, B: 0, C: 0, D: 0 } as Record<string, number>;

  for (const question of vocabularyExpansionPack3) {
    difficulty[question.difficulty] += 1;
    const position = ["A", "B", "C", "D"][question.answer];
    if (position) answerPositions[position] += 1;
  }

  const correctWords = vocabularyExpansionPack3.map(
    (question) => question.choices[question.answer]?.text ?? "",
  );
  const missingWalkthroughs = vocabularyExpansionPack3.filter(
    (question) => !question.walkthrough?.length,
  ).length;
  const invalidQuestions = vocabularyExpansionPack3.filter(
    (question) =>
      question.choices.length !== 4 ||
      question.answer < 0 ||
      question.answer > 3 ||
      new Set(question.choices.map((choice) => normalize(choice.text))).size !== 4,
  ).length;
  const duplicatePassages =
    vocabularyExpansionPack3.length -
    new Set(vocabularyExpansionPack3.map((question) => normalize(question.passage))).size;
  const duplicateChoiceSets =
    vocabularyExpansionPack3.length -
    new Set(vocabularyExpansionPack3.map((question) =>
      question.choices.map((choice) => normalize(choice.text)).sort().join(" | "),
    )).size;

  const issues: string[] = [];
  if (vocabularyExpansionPack3.length !== 36) issues.push("Expected 36 questions.");
  if (new Set(correctWords.map(normalize)).size !== 36) issues.push("Expected 36 unique correct words.");
  for (const level of ["Easy", "Medium", "Hard"]) {
    if (difficulty[level] !== 12) issues.push(`${level}: expected 12; found ${difficulty[level]}.`);
  }
  if (missingWalkthroughs) issues.push(`${missingWalkthroughs} missing walkthrough(s).`);
  if (invalidQuestions) issues.push(`${invalidQuestions} invalid question(s).`);
  if (duplicatePassages) issues.push(`${duplicatePassages} duplicate passage(s).`);
  if (duplicateChoiceSets) issues.push(`${duplicateChoiceSets} duplicate choice set(s).`);

  return {
    passed: issues.length === 0,
    total: vocabularyExpansionPack3.length,
    uniqueWords: new Set(correctWords.map(normalize)).size,
    difficulty,
    answerPositions,
    missingWalkthroughs,
    duplicatePassages,
    duplicateChoiceSets,
    invalidQuestions,
    issues,
  };
}
