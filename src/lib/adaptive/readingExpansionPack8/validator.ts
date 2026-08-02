import type { ExamQuestion } from "../types";
import { readingExpansionPack8 } from "./index";

const expected = {
  "Sentence Boundaries": { Easy: 4, Medium: 4, Hard: 4 },
  Punctuation: { Easy: 4, Medium: 4, Hard: 4 },
} as const;

function normalize(value: string): string {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

export function validateReadingExpansionPack8(
  questions: ExamQuestion[] = readingExpansionPack8,
) {
  const issues: string[] = [];
  const seenIds = new Set<string>();
  const seenContent = new Set<string>();

  for (const q of questions) {
    if (seenIds.has(q.examId)) issues.push(`Duplicate examId: ${q.examId}`);
    seenIds.add(q.examId);

    const key = `${normalize(q.passage)}::${normalize(q.prompt)}`;
    if (seenContent.has(key)) issues.push(`Duplicate passage and prompt: ${q.examId}`);
    seenContent.add(key);

    if (q.choices.length !== 4) issues.push(`Expected four choices: ${q.examId}`);
    if (q.choices.some(choice => !choice.text.trim())) issues.push(`Empty choice: ${q.examId}`);
    if (q.answer < 0 || q.answer >= q.choices.length) issues.push(`Invalid answer: ${q.examId}`);
    if (!q.walkthrough?.length) issues.push(`Missing walkthrough: ${q.examId}`);
  }

  for (const [skill, target] of Object.entries(expected)) {
    const items = questions.filter(q => q.skill === skill);
    for (const difficulty of ["Easy", "Medium", "Hard"] as const) {
      const count = items.filter(q => q.difficulty === difficulty).length;
      if (count !== target[difficulty]) {
        issues.push(`${skill} ${difficulty}: expected ${target[difficulty]}, found ${count}`);
      }
    }
  }

  if (questions.length !== 24) {
    issues.push(`Expected 24 questions; found ${questions.length}`);
  }

  return {
    passed: issues.length === 0,
    issues,
    total: questions.length,
  };
}
