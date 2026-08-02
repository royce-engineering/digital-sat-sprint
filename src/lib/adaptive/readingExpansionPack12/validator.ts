import type { ExamQuestion } from "../types";
import { readingExpansionPack12 } from "./index";

const expected = {
  Concision: { Easy: 0, Medium: 2, Hard: 3 },
  "Parallel Structure": { Easy: 0, Medium: 1, Hard: 1 },
  Pronouns: { Easy: 1, Medium: 2, Hard: 4 },
  Transitions: { Easy: 1, Medium: 3, Hard: 0 },
  "Verb Agreement": { Easy: 0, Medium: 0, Hard: 1 },
} as const;

const norm = (value: string) =>
  value.toLowerCase().replace(/\s+/g, " ").trim();

export function validateReadingExpansionPack12(
  questions: ExamQuestion[] = readingExpansionPack12,
) {
  const issues: string[] = [];
  const ids = new Set<string>();
  const content = new Set<string>();

  for (const q of questions) {
    if (ids.has(q.examId)) issues.push(`Duplicate examId: ${q.examId}`);
    ids.add(q.examId);

    const key = `${norm(q.passage)}::${norm(q.prompt)}`;
    if (content.has(key)) issues.push(`Duplicate passage and prompt: ${q.examId}`);
    content.add(key);

    if (q.choices.length !== 4) issues.push(`Expected four choices: ${q.examId}`);
    if (q.choices.some((choice) => !choice.text.trim())) issues.push(`Empty choice: ${q.examId}`);
    if (q.answer < 0 || q.answer >= q.choices.length) issues.push(`Invalid answer: ${q.examId}`);
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

  if (questions.length !== 19) {
    issues.push(`Expected 19 questions; found ${questions.length}`);
  }

  return { passed: issues.length === 0, issues, total: questions.length };
}
