import {
  mathBank,
} from "./questionBank";
import type {
  ExamQuestion,
} from "./types";

export interface MathWalkthroughIssue {
  questionId: string;
  mathDomain: string;
  skill: string;
  difficulty: string;
  questionType: string;
  passage: string;
  prompt: string;
  choices: string[];
  answer: number;
  numericAnswer: string;
}

export interface MathWalkthroughCountRow {
  key: string;
  count: number;
}

export interface MathWalkthroughDiagnosticReport {
  passed: boolean;
  totalQuestions: number;
  missingWalkthroughs: number;
  completeWalkthroughs: number;
  byDomain: MathWalkthroughCountRow[];
  bySkill: MathWalkthroughCountRow[];
  byDifficulty: MathWalkthroughCountRow[];
  byQuestionType: MathWalkthroughCountRow[];
  issues: MathWalkthroughIssue[];
}

function idOf(
  question: ExamQuestion,
): string {
  return (
    question.examId ||
    question.id
  );
}

function countBy(
  questions: readonly ExamQuestion[],
  keyFor: (
    question: ExamQuestion,
  ) => string,
): MathWalkthroughCountRow[] {
  const counts =
    new Map<string, number>();

  for (const question of questions) {
    const key =
      keyFor(question);

    counts.set(
      key,
      (counts.get(key) ?? 0) + 1,
    );
  }

  return [...counts.entries()]
    .map(([key, count]) => ({
      key,
      count,
    }))
    .sort(
      (left, right) =>
        right.count -
          left.count ||
        left.key.localeCompare(
          right.key,
        ),
    );
}

export function diagnoseMathWalkthroughs(
  questions: readonly ExamQuestion[] =
    mathBank,
): MathWalkthroughDiagnosticReport {
  const missing =
    questions.filter(
      (question) =>
        !question.walkthrough?.length,
    );

  const issues =
    missing
      .map(
        (
          question,
        ): MathWalkthroughIssue => ({
          questionId:
            idOf(question),
          mathDomain:
            question.mathDomain ??
            "(missing)",
          skill:
            question.skill,
          difficulty:
            question.difficulty,
          questionType:
            question.questionType ??
            "(missing)",
          passage:
            question.passage,
          prompt:
            question.prompt,
          choices:
            question.choices.map(
              (choice) =>
                choice.text,
            ),
          answer:
            question.answer,
          numericAnswer:
            question.numericAnswer ??
            "",
        }),
      )
      .sort(
        (left, right) =>
          left.mathDomain.localeCompare(
            right.mathDomain,
          ) ||
          left.skill.localeCompare(
            right.skill,
          ) ||
          left.difficulty.localeCompare(
            right.difficulty,
          ) ||
          left.questionId.localeCompare(
            right.questionId,
          ),
      );

  return {
    passed:
      missing.length === 0,
    totalQuestions:
      questions.length,
    missingWalkthroughs:
      missing.length,
    completeWalkthroughs:
      questions.length -
      missing.length,
    byDomain:
      countBy(
        missing,
        (question) =>
          question.mathDomain ??
          "(missing)",
      ),
    bySkill:
      countBy(
        missing,
        (question) =>
          question.skill,
      ),
    byDifficulty:
      countBy(
        missing,
        (question) =>
          question.difficulty,
      ),
    byQuestionType:
      countBy(
        missing,
        (question) =>
          question.questionType ??
          "(missing)",
      ),
    issues,
  };
}

export function mathWalkthroughDiagnosticJson(
  report:
    MathWalkthroughDiagnosticReport,
): string {
  return JSON.stringify(
    report,
    null,
    2,
  );
}
