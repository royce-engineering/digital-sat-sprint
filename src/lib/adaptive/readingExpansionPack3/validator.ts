import type { ExamQuestion } from "../types";
import { readingExpansionPack3 } from "./index";

const expected = {
  "Command of Evidence": { Easy: 6, Medium: 8, Hard: 5 },
  "Author's Purpose": { Easy: 7, Medium: 5, Hard: 4 },
  "Inference": { Easy: 4, Medium: 6, Hard: 2 },
} as const;

export function validateReadingExpansionPack3(
  questions: ExamQuestion[] = readingExpansionPack3,
) {
  const issues: string[] = [];
  const seen = new Set<string>();

  for (const q of questions) {
    if (seen.has(q.examId)) issues.push(`Duplicate examId: ${q.examId}`);
    seen.add(q.examId);
    if (q.id !== q.examId) issues.push(`id/examId mismatch: ${q.examId}`);
    if (q.choices.length !== 4) issues.push(`Expected 4 choices: ${q.examId}`);
    if (!q.blueprint) issues.push(`Missing blueprint: ${q.examId}`);
    if (!q.walkthrough?.length) issues.push(`Missing walkthrough: ${q.examId}`);
  }

  for (const [skill, target] of Object.entries(expected)) {
    const items = questions.filter((q) => q.skill === skill);
    for (const difficulty of ["Easy", "Medium", "Hard"] as const) {
      const count = items.filter((q) => q.difficulty === difficulty).length;
      if (count !== target[difficulty]) {
        issues.push(`${skill} ${difficulty}: expected ${target[difficulty]}, found ${count}`);
      }
    }
  }

  if (questions.length !== 47) {
    issues.push(`Expected 47 questions; found ${questions.length}`);
  }

  return {
    passed: issues.length === 0,
    issues,
    total: questions.length,
  };
}
