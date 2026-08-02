import {
  isChoiceBasedMathQuestion,
  isStudentResponseMathQuestion,
} from "./mathAuditCalibration";
import {
  mathBank,
} from "./questionBank";
import type {
  ExamQuestion,
} from "./types";

export type MathAuditSeverity =
  | "error"
  | "warning"
  | "info";

export interface MathAuditIssue {
  severity: MathAuditSeverity;
  code:
    | "duplicate-id"
    | "duplicate-exam-id"
    | "missing-field"
    | "wrong-section"
    | "choice-count"
    | "empty-choice"
    | "duplicate-choice"
    | "invalid-answer"
    | "invalid-student-response"
    | "missing-walkthrough"
    | "duplicate-prompt"
    | "duplicate-content";
  questionId?: string;
  message: string;
  relatedIds?: string[];
}

export interface MathCoverageRow {
  skill: string;
  easy: number;
  medium: number;
  hard: number;
  total: number;
  module1Eligible: number;
  module2Eligible: number;
}

export interface MathDomainRow {
  domain: string;
  total: number;
}

export interface MathAnswerPositionDistribution {
  A: number;
  B: number;
  C: number;
  D: number;
  total: number;
}

export interface MathBankProductionAuditReport {
  passed: boolean;
  totalQuestions: number;
  errors: number;
  warnings: number;
  infos: number;
  issues: MathAuditIssue[];
  coverage: MathCoverageRow[];
  domains: MathDomainRow[];
  answerPositions:
    MathAnswerPositionDistribution;
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

function skillOf(
  question: ExamQuestion,
): string | undefined {
  return question.skill?.trim();
}

function domainOf(
  question: ExamQuestion,
): string | undefined {
  return question.mathDomain?.trim();
}

function moduleOf(
  question: ExamQuestion,
): number | undefined {
  return question.blueprint?.module;
}

function duplicateGroups(
  questions: readonly ExamQuestion[],
  keyFor: (
    question: ExamQuestion,
  ) => string,
): Map<string, ExamQuestion[]> {
  const groups =
    new Map<string, ExamQuestion[]>();

  for (const question of questions) {
    const key = keyFor(question);

    if (!key) continue;

    const current =
      groups.get(key) ?? [];

    current.push(question);
    groups.set(key, current);
  }

  return groups;
}

function addDuplicateIssues(
  issues: MathAuditIssue[],
  groups: Map<
    string,
    ExamQuestion[]
  >,
  code:
    | "duplicate-id"
    | "duplicate-exam-id"
    | "duplicate-prompt"
    | "duplicate-content",
  severity: MathAuditSeverity,
  label: string,
): void {
  for (const group of groups.values()) {
    if (group.length < 2) continue;

    const ids =
      group.map(idOf);

    issues.push({
      severity,
      code,
      questionId: ids[0],
      relatedIds: ids,
      message: `${label}: ${ids.join(", ")}`,
    });
  }
}

function validateQuestion(
  question: ExamQuestion,
): MathAuditIssue[] {
  const issues: MathAuditIssue[] =
    [];
  const questionId =
    idOf(question);

  const requireField = (
    value: unknown,
    label: string,
  ): void => {
    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      issues.push({
        severity: "error",
        code: "missing-field",
        questionId,
        message: `Missing ${label}.`,
      });
    }
  };

  requireField(
    question.id,
    "id",
  );
  requireField(
    question.examId,
    "examId",
  );
  requireField(
    question.section,
    "section",
  );
  requireField(
    question.prompt,
    "prompt",
  );
  requireField(
    question.difficulty,
    "difficulty",
  );
  requireField(
    skillOf(question),
    "skill",
  );
  requireField(
    domainOf(question),
    "mathDomain",
  );
  requireField(
    question.questionType,
    "questionType",
  );

  if (
    question.section !== "Math"
  ) {
    issues.push({
      severity: "error",
      code: "wrong-section",
      questionId,
      message: `Expected Math section; found ${String(
        question.section,
      )}.`,
    });
  }

  if (
    isChoiceBasedMathQuestion(
      question,
    )
  ) {
    if (
      question.choices.length !== 4
    ) {
      issues.push({
        severity: "error",
        code: "choice-count",
        questionId,
        message: `Expected four choices; found ${question.choices.length}.`,
      });
    }

    question.choices.forEach(
      (choice, index) => {
        if (!choice.text.trim()) {
          issues.push({
            severity: "error",
            code: "empty-choice",
            questionId,
            message: `Choice ${index + 1} is empty.`,
          });
        }
      },
    );

    const normalizedChoices =
      question.choices.map(
        (choice) =>
          normalize(choice.text),
      );

    if (
      new Set(
        normalizedChoices,
      ).size !==
      normalizedChoices.length
    ) {
      issues.push({
        severity: "error",
        code: "duplicate-choice",
        questionId,
        message:
          "Question contains duplicate answer choices.",
      });
    }

    if (
      question.answer < 0 ||
      question.answer >=
        question.choices.length
    ) {
      issues.push({
        severity: "error",
        code: "invalid-answer",
        questionId,
        message: `Invalid answer index ${question.answer}.`,
      });
    }
  }

  if (
    isStudentResponseMathQuestion(
      question,
    )
  ) {
    if (
      question.choices.length !== 0
    ) {
      issues.push({
        severity: "error",
        code:
          "invalid-student-response",
        questionId,
        message: `Student-response question has ${question.choices.length} choices; expected 0.`,
      });
    }

    if (
      question.answer !== -1
    ) {
      issues.push({
        severity: "error",
        code:
          "invalid-student-response",
        questionId,
        message: `Student-response answer index is ${question.answer}; expected -1.`,
      });
    }

    if (
      !question.numericAnswer?.trim()
    ) {
      issues.push({
        severity: "error",
        code:
          "invalid-student-response",
        questionId,
        message:
          "Student-response question is missing numericAnswer.",
      });
    }
  }

  if (
    !question.walkthrough?.length
  ) {
    issues.push({
      severity: "warning",
      code: "missing-walkthrough",
      questionId,
      message:
        "Question has no walkthrough.",
    });
  }

  return issues;
}

function buildCoverage(
  questions: readonly ExamQuestion[],
): MathCoverageRow[] {
  const skills = [
    ...new Set(
      questions
        .map(skillOf)
        .filter(
          (
            value,
          ): value is string =>
            Boolean(value),
        ),
    ),
  ];

  return skills
    .map((skill) => {
      const items =
        questions.filter(
          (question) =>
            skillOf(question) ===
            skill,
        );

      return {
        skill,
        easy:
          items.filter(
            (question) =>
              question.difficulty ===
              "Easy",
          ).length,
        medium:
          items.filter(
            (question) =>
              question.difficulty ===
              "Medium",
          ).length,
        hard:
          items.filter(
            (question) =>
              question.difficulty ===
              "Hard",
          ).length,
        total:
          items.length,
        module1Eligible:
          items.filter(
            (question) =>
              moduleOf(question) ===
                undefined ||
              moduleOf(question) === 1,
          ).length,
        module2Eligible:
          items.filter(
            (question) =>
              moduleOf(question) ===
                undefined ||
              moduleOf(question) === 2,
          ).length,
      };
    })
    .sort(
      (left, right) =>
        left.skill.localeCompare(
          right.skill,
        ),
    );
}

function buildDomains(
  questions: readonly ExamQuestion[],
): MathDomainRow[] {
  const counts =
    new Map<string, number>();

  for (const question of questions) {
    const domain =
      domainOf(question) ??
      "(missing)";

    counts.set(
      domain,
      (counts.get(domain) ?? 0) + 1,
    );
  }

  return [...counts.entries()]
    .map(([domain, total]) => ({
      domain,
      total,
    }))
    .sort(
      (left, right) =>
        right.total -
          left.total ||
        left.domain.localeCompare(
          right.domain,
        ),
    );
}

function answerPositions(
  questions: readonly ExamQuestion[],
): MathAnswerPositionDistribution {
  const counts = [0, 0, 0, 0];

  for (const question of questions) {
    if (
      !isChoiceBasedMathQuestion(
        question,
      )
    ) {
      continue;
    }

    if (
      question.answer >= 0 &&
      question.answer < 4
    ) {
      counts[
        question.answer
      ] += 1;
    }
  }

  return {
    A: counts[0],
    B: counts[1],
    C: counts[2],
    D: counts[3],
    total:
      counts.reduce(
        (sum, value) =>
          sum + value,
        0,
      ),
  };
}

export function auditMathBank(
  questions: readonly ExamQuestion[] =
    mathBank,
): MathBankProductionAuditReport {
  const issues =
    questions.flatMap(
      validateQuestion,
    );

  addDuplicateIssues(
    issues,
    duplicateGroups(
      questions,
      (question) =>
        question.id,
    ),
    "duplicate-id",
    "error",
    "Duplicate id",
  );

  addDuplicateIssues(
    issues,
    duplicateGroups(
      questions,
      (question) =>
        question.examId,
    ),
    "duplicate-exam-id",
    "error",
    "Duplicate examId",
  );

  addDuplicateIssues(
    issues,
    duplicateGroups(
      questions,
      (question) =>
        normalize(
          question.prompt,
        ),
    ),
    "duplicate-prompt",
    "warning",
    "Exact normalized prompt duplicate",
  );

  addDuplicateIssues(
    issues,
    duplicateGroups(
      questions,
      (question) =>
        [
          normalize(
            question.passage,
          ),
          normalize(
            question.prompt,
          ),
          question.choices
            .map(
              (choice) =>
                normalize(
                  choice.text,
                ),
            )
            .join("::"),
          question.numericAnswer ?? "",
        ].join("||"),
    ),
    "duplicate-content",
    "error",
    "Exact Math content duplicate",
  );

  const errors =
    issues.filter(
      (issue) =>
        issue.severity ===
        "error",
    ).length;
  const warnings =
    issues.filter(
      (issue) =>
        issue.severity ===
        "warning",
    ).length;
  const infos =
    issues.filter(
      (issue) =>
        issue.severity ===
        "info",
    ).length;

  return {
    passed:
      errors === 0,
    totalQuestions:
      questions.length,
    errors,
    warnings,
    infos,
    issues,
    coverage:
      buildCoverage(
        questions,
      ),
    domains:
      buildDomains(
        questions,
      ),
    answerPositions:
      answerPositions(
        questions,
      ),
  };
}
