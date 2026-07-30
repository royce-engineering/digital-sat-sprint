import type { ExamQuestion } from "../types";

export interface ValidationIssue {
  questionId: string;
  message: string;
}

export function validateReadingQuestion(question: ExamQuestion): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const id = question.id || "(missing id)";
  const add = (message: string) => issues.push({ questionId: id, message });

  if (!question.id?.trim()) add("Question id is missing.");
  if (!question.examId?.trim()) add("Exam id is missing.");
  if (question.examId !== question.id) add("examId should match id.");
  if (!question.passage?.trim()) add("Passage is empty.");
  if (!question.prompt?.trim()) add("Prompt is empty.");
  if (question.choices.length !== 4) add(`Expected 4 choices, found ${question.choices.length}.`);

  if (!Number.isInteger(question.answer) ||
      question.answer < 0 ||
      question.answer >= question.choices.length) {
    add(`Answer index ${question.answer} is invalid.`);
  }

  if (!question.skill?.trim()) add("Skill is missing.");
  if (!question.domain) add("Domain is missing.");
  if (!question.passageType) add("Passage type is missing.");
  if (!question.walkthrough?.length) add("Walkthrough is missing.");
  if (!question.tags?.includes("reading-hard-pack-1")) {
    add('Required tag "reading-hard-pack-1" is missing.');
  }

  if (!question.blueprint) {
    add("Blueprint metadata is missing.");
  } else {
    if (question.blueprint.domain !== question.domain) add("Blueprint domain does not match.");
    if (question.blueprint.skill !== question.skill) add("Blueprint skill does not match.");
    if (question.blueprint.passageType !== question.passageType) add("Blueprint passage type does not match.");
    if (question.blueprint.difficulty !== question.difficulty) add("Blueprint difficulty does not match.");
  }

  return issues;
}

export function validateReadingQuestionBank(
  questions: ExamQuestion[],
): ValidationIssue[] {
  const issues = questions.flatMap(validateReadingQuestion);
  const seen = new Set<string>();

  for (const question of questions) {
    if (seen.has(question.id)) {
      issues.push({ questionId: question.id, message: "Duplicate question id." });
    }
    seen.add(question.id);
  }

  return issues;
}
