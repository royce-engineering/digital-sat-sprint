import {
  mathBank,
} from "./questionBank";
import type {
  ExamQuestion,
} from "./types";

export type MathQuestionFormat =
  | "choice-based"
  | "student-response";

export interface MathFormatSummary {
  format: MathQuestionFormat;
  count: number;
}

export interface MathCalibrationIssue {
  questionId: string;
  code:
    | "duplicate-content"
    | "duplicate-choice"
    | "spr-unexpected-choices"
    | "spr-invalid-answer-index"
    | "spr-missing-numeric-answer"
    | "choice-count"
    | "choice-invalid-answer";
  message: string;
  relatedIds?: string[];
}

export interface MathDomainPreviewRow {
  domain: string;
  skills: string[];
  questions: number;
}

export interface MathAuditCalibrationReport {
  totalQuestions: number;
  formats: MathFormatSummary[];
  choiceBasedCount: number;
  studentResponseCount: number;
  choiceCountErrors: number;
  choiceAnswerErrors: number;
  studentResponseSchemaErrors: number;
  duplicateContentGroups: MathCalibrationIssue[];
  duplicateChoiceQuestions: MathCalibrationIssue[];
  domainPreview: MathDomainPreviewRow[];
}

function idOf(
  question: ExamQuestion,
): string {
  return (
    question.examId ||
    question.id
  );
}

function normalize(
  value: string | undefined,
): string {
  return (value ?? "")
    .toLowerCase()
    .replace(/[“”"'’‘]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function isStudentResponseMathQuestion(
  question: ExamQuestion,
): boolean {
  return (
    question.questionType ===
    "student-response"
  );
}

export function isChoiceBasedMathQuestion(
  question: ExamQuestion,
): boolean {
  return !isStudentResponseMathQuestion(
    question,
  );
}

export function detectMathQuestionFormat(
  question: ExamQuestion,
): MathQuestionFormat {
  return isStudentResponseMathQuestion(
    question,
  )
    ? "student-response"
    : "choice-based";
}

function duplicateContentIssues(
  questions: readonly ExamQuestion[],
): MathCalibrationIssue[] {
  const groups = new Map<
    string,
    ExamQuestion[]
  >();

  for (const question of questions) {
    const key = [
      normalize(question.passage),
      normalize(question.prompt),
      question.choices
        .map((choice) =>
          normalize(choice.text),
        )
        .join("::"),
      question.numericAnswer ?? "",
    ].join("||");

    const current =
      groups.get(key) ?? [];

    current.push(question);
    groups.set(key, current);
  }

  return [...groups.values()]
    .filter(
      (group) =>
        group.length > 1,
    )
    .map((group) => {
      const ids =
        group.map(idOf);

      return {
        questionId: ids[0],
        code: "duplicate-content" as const,
        message: `Exact duplicate content: ${ids.join(", ")}`,
        relatedIds: ids,
      };
    });
}

function duplicateChoiceIssues(
  questions: readonly ExamQuestion[],
): MathCalibrationIssue[] {
  return questions
    .filter(
      isChoiceBasedMathQuestion,
    )
    .filter((question) => {
      const choices =
        question.choices.map(
          (choice) =>
            normalize(choice.text),
        );

      return (
        new Set(choices).size !==
        choices.length
      );
    })
    .map((question) => ({
      questionId:
        idOf(question),
      code:
        "duplicate-choice" as const,
      message:
        "Choice-based Math question contains duplicate normalized choices.",
    }));
}

function buildDomainPreview(
  questions: readonly ExamQuestion[],
): MathDomainPreviewRow[] {
  const rows = new Map<
    string,
    {
      skills: Set<string>;
      questions: number;
    }
  >();

  for (const question of questions) {
    const skill =
      question.skill;
    const domain =
      question.mathDomain ??
      "(missing)";

    const row =
      rows.get(domain) ?? {
        skills: new Set<string>(),
        questions: 0,
      };

    if (skill) {
      row.skills.add(skill);
    }

    row.questions += 1;
    rows.set(domain, row);
  }

  return [...rows.entries()]
    .map(
      ([domain, value]) => ({
        domain,
        skills: [
          ...value.skills,
        ].sort(),
        questions:
          value.questions,
      }),
    )
    .sort(
      (left, right) =>
        right.questions -
          left.questions ||
        left.domain.localeCompare(
          right.domain,
        ),
    );
}

function studentResponseSchemaIssues(
  questions: readonly ExamQuestion[],
): MathCalibrationIssue[] {
  const issues: MathCalibrationIssue[] =
    [];

  for (const question of questions.filter(
    isStudentResponseMathQuestion,
  )) {
    const questionId =
      idOf(question);

    if (
      question.choices.length !== 0
    ) {
      issues.push({
        questionId,
        code:
          "spr-unexpected-choices",
        message: `Student-response question has ${question.choices.length} choices; expected 0.`,
      });
    }

    if (
      question.answer !== -1
    ) {
      issues.push({
        questionId,
        code:
          "spr-invalid-answer-index",
        message: `Student-response question has answer index ${question.answer}; expected -1.`,
      });
    }

    if (
      !question.numericAnswer?.trim()
    ) {
      issues.push({
        questionId,
        code:
          "spr-missing-numeric-answer",
        message:
          "Student-response question is missing numericAnswer.",
      });
    }
  }

  return issues;
}

export function calibrateMathAudit(
  questions: readonly ExamQuestion[] =
    mathBank,
): MathAuditCalibrationReport {
  const choiceBased =
    questions.filter(
      isChoiceBasedMathQuestion,
    );
  const studentResponse =
    questions.filter(
      isStudentResponseMathQuestion,
    );

  const choiceCountErrors =
    choiceBased.filter(
      (question) =>
        question.choices.length !== 4,
    ).length;

  const choiceAnswerErrors =
    choiceBased.filter(
      (question) =>
        question.answer < 0 ||
        question.answer >=
          question.choices.length,
    ).length;

  const sprIssues =
    studentResponseSchemaIssues(
      questions,
    );

  return {
    totalQuestions:
      questions.length,
    formats: [
      {
        format:
          "choice-based",
        count:
          choiceBased.length,
      },
      {
        format:
          "student-response",
        count:
          studentResponse.length,
      },
    ],
    choiceBasedCount:
      choiceBased.length,
    studentResponseCount:
      studentResponse.length,
    choiceCountErrors,
    choiceAnswerErrors,
    studentResponseSchemaErrors:
      sprIssues.length,
    duplicateContentGroups:
      duplicateContentIssues(
        questions,
      ),
    duplicateChoiceQuestions:
      duplicateChoiceIssues(
        questions,
      ),
    domainPreview:
      buildDomainPreview(
        questions,
      ),
  };
}
