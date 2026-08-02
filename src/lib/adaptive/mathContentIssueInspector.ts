import { mathBank } from "./questionBank";
import { isChoiceBasedMathQuestion } from "./mathAuditCalibration";
import type { ExamDifficulty, ExamQuestion } from "./types";

export interface MathDuplicateContentGroup {
  key: string;
  questionIds: string[];
  questionTypes: string[];
  domains: string[];
  skills: string[];
  difficulties: string[];
  passage: string;
  prompt: string;
  choices: string[][];
  answers: number[];
  numericAnswers: string[];
}

export interface MathDuplicateChoiceIssue {
  questionId: string;
  questionType: string;
  domain: string;
  skill: string;
  difficulty: ExamDifficulty;
  passage: string;
  prompt: string;
  choices: string[];
  duplicateChoiceGroups: {
    normalizedValue: string;
    indexes: number[];
  }[];
  answer: number;
}

export interface MathContentIssueInspection {
  duplicateContentGroups: MathDuplicateContentGroup[];
  duplicateChoiceIssues: MathDuplicateChoiceIssue[];
  duplicateContentQuestionCount: number;
  duplicateChoiceQuestionCount: number;
}

function idOf(question: ExamQuestion): string {
  return question.examId || question.id;
}

function normalize(value: string | undefined): string {
  return (value ?? "")
    .toLowerCase()
    .replace(/[“”"'’‘]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function contentKey(question: ExamQuestion): string {
  return [
    normalize(question.passage),
    normalize(question.prompt),
    question.choices.map((choice) => normalize(choice.text)).join("::"),
    normalize(question.numericAnswer),
  ].join("||");
}

function duplicateChoiceGroups(question: ExamQuestion): {
  normalizedValue: string;
  indexes: number[];
}[] {
  const groups = new Map<string, number[]>();

  question.choices.forEach((choice, index) => {
    const key = normalize(choice.text);
    const indexes = groups.get(key) ?? [];

    indexes.push(index);
    groups.set(key, indexes);
  });

  return [...groups.entries()]
    .filter(([, indexes]) => indexes.length > 1)
    .map(([normalizedValue, indexes]) => ({
      normalizedValue,
      indexes,
    }));
}

export function inspectMathContentIssues(
  questions: readonly ExamQuestion[] = mathBank,
): MathContentIssueInspection {
  const contentGroups = new Map<string, ExamQuestion[]>();

  for (const question of questions) {
    const key = contentKey(question);
    const current = contentGroups.get(key) ?? [];

    current.push(question);
    contentGroups.set(key, current);
  }

  const duplicateContentGroups = [...contentGroups.entries()]
    .filter(([, items]) => items.length > 1)
    .map(([key, items]) => ({
      key,
      questionIds: items.map(idOf),
      questionTypes: items.map((item) => item.questionType ?? "(missing)"),
      domains: items.map((item) => item.mathDomain ?? "(missing)"),
      skills: items.map((item) => item.skill),
      difficulties: items.map((item) => item.difficulty),
      passage: items[0].passage,
      prompt: items[0].prompt,
      choices: items.map((item) => item.choices.map((choice) => choice.text)),
      answers: items.map((item) => item.answer),
      numericAnswers: items.map((item) => item.numericAnswer ?? ""),
    }))
    .sort((left, right) =>
      left.questionIds[0].localeCompare(right.questionIds[0]),
    );

  const duplicateChoiceIssues = questions
    .filter(isChoiceBasedMathQuestion)
    .map((question) => {
      const groups = duplicateChoiceGroups(question);

      if (groups.length === 0) {
        return null;
      }

      return {
        questionId: idOf(question),
        questionType: question.questionType ?? "(missing)",
        domain: question.mathDomain ?? "(missing)",
        skill: question.skill,
        difficulty: question.difficulty,
        passage: question.passage,
        prompt: question.prompt,
        choices: question.choices.map((choice) => choice.text),
        duplicateChoiceGroups: groups,
        answer: question.answer,
      } satisfies MathDuplicateChoiceIssue;
    })
    .filter((value): value is MathDuplicateChoiceIssue => Boolean(value));

  return {
    duplicateContentGroups,
    duplicateChoiceIssues,
    duplicateContentQuestionCount: duplicateContentGroups.reduce(
      (sum, group) => sum + group.questionIds.length,
      0,
    ),
    duplicateChoiceQuestionCount: duplicateChoiceIssues.length,
  };
}

export function mathContentIssueJson(
  inspection: MathContentIssueInspection,
): string {
  return JSON.stringify(inspection, null, 2);
}
