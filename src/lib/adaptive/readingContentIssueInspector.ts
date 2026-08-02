import { readingWritingBank } from "./questionBank";
import type { ExamQuestion, ExamDifficulty } from "./types";

export interface DuplicatePassagePromptGroup {
  key: string;
  questionIds: string[];
  passage: string;
  prompt: string;
  choices: string[][];
  answers: number[];
  skills: string[];
  difficulties: string[];
}

export interface EmptyChoiceIssue {
  questionId: string;
  passage: string;
  prompt: string;
  emptyChoiceIndexes: number[];
  choices: string[];
  answer: number;
  skill: string;
  difficulty: ExamDifficulty;
}

export interface ReadingContentIssueInspection {
  duplicateGroups: DuplicatePassagePromptGroup[];
  emptyChoiceIssues: EmptyChoiceIssue[];
  duplicateQuestionCount: number;
  emptyChoiceQuestionCount: number;
}

function normalize(value: string | undefined): string {
  return (value ?? "")
    .toLowerCase()
    .replace(/[“”"'’‘]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function questionId(question: ExamQuestion): string {
  return question.examId || question.id;
}

export function inspectReadingContentIssues(
  questions: ExamQuestion[] = readingWritingBank,
): ReadingContentIssueInspection {
  const groups = new Map<string, ExamQuestion[]>();

  for (const question of questions) {
    const key = `${normalize(question.passage)}::${normalize(question.prompt)}`;

    const current = groups.get(key) ?? [];

    current.push(question);
    groups.set(key, current);
  }

  const duplicateGroups = [...groups.entries()]
    .filter(([, items]) => items.length > 1)
    .map(([key, items]) => ({
      key,
      questionIds: items.map(questionId),
      passage: items[0].passage,
      prompt: items[0].prompt,
      choices: items.map((item) => item.choices.map((choice) => choice.text)),
      answers: items.map((item) => item.answer),
      skills: items.map((item) => item.skill ?? ""),
      difficulties: items.map((item) => item.difficulty),
    }))
    .sort((left, right) =>
      left.questionIds[0].localeCompare(right.questionIds[0]),
    );

  const emptyChoiceIssues = questions
    .map((question) => {
      const emptyChoiceIndexes = question.choices
        .map((choice, index) => ({
          index,
          empty: !choice.text.trim(),
        }))
        .filter((item) => item.empty)
        .map((item) => item.index);

      if (emptyChoiceIndexes.length === 0) {
        return null;
      }

      return {
        questionId: questionId(question),
        passage: question.passage,
        prompt: question.prompt,
        emptyChoiceIndexes,
        choices: question.choices.map((choice) => choice.text),
        answer: question.answer,
        skill: question.skill,
        difficulty: question.difficulty,
      } satisfies EmptyChoiceIssue;
    })
    .filter((value): value is EmptyChoiceIssue => Boolean(value));

  return {
    duplicateGroups,
    emptyChoiceIssues,
    duplicateQuestionCount: duplicateGroups.reduce(
      (sum, group) => sum + group.questionIds.length,
      0,
    ),
    emptyChoiceQuestionCount: emptyChoiceIssues.length,
  };
}

export function readingContentIssueJson(
  inspection: ReadingContentIssueInspection,
): string {
  return JSON.stringify(inspection, null, 2);
}
