import { readingWritingBank } from "./questionBank";
import type { ExamDifficulty, ExamQuestion } from "./types";
import { isIntentionalBlankPunctuationChoice } from "./readingAuditSemantics";

export type AuditSeverity = "error" | "warning" | "info";

export interface ReadingBankAuditIssue {
  severity: AuditSeverity;
  code:
    | "duplicate-exam-id"
    | "duplicate-id"
    | "duplicate-prompt"
    | "duplicate-passage-prompt"
    | "missing-field"
    | "blueprint-mismatch"
    | "invalid-answer"
    | "choice-count"
    | "empty-choice"
    | "empty-rationale"
    | "missing-walkthrough"
    | "answer-position-imbalance"
    | "skill-difficulty-shortage"
    | "module-capacity-shortage";
  questionId?: string;
  message: string;
  relatedIds?: string[];
}

export interface AnswerPositionDistribution {
  A: number;
  B: number;
  C: number;
  D: number;
  total: number;
  maxShare: number;
  minShare: number;
}

export interface SkillDifficultyCoverage {
  skill: string;
  easy: number;
  medium: number;
  hard: number;
  total: number;
  module1Eligible: number;
  module2Eligible: number;
}

export interface ReadingBankStaticAuditReport {
  passed: boolean;
  generatedAt: number;
  totalQuestions: number;
  errors: number;
  warnings: number;
  infos: number;
  issues: ReadingBankAuditIssue[];
  answerPositions: AnswerPositionDistribution;
  coverage: SkillDifficultyCoverage[];
}

const TARGETS: Record<ExamDifficulty, number> = {
  Easy: 8,
  Medium: 10,
  Hard: 10,
};

function normalizeText(value: string | undefined): string {
  return (value ?? "")
    .toLowerCase()
    .replace(/[“”"'’‘]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function groupDuplicates(
  questions: ExamQuestion[],
  keyFor: (question: ExamQuestion) => string,
): ExamQuestion[][] {
  const groups = new Map<string, ExamQuestion[]>();

  for (const question of questions) {
    const key = keyFor(question);

    if (!key) continue;

    const current = groups.get(key) ?? [];

    current.push(question);
    groups.set(key, current);
  }

  return [...groups.values()].filter((group) => group.length > 1);
}

function pushDuplicateIssues(
  issues: ReadingBankAuditIssue[],
  groups: ExamQuestion[][],
  code:
    | "duplicate-exam-id"
    | "duplicate-id"
    | "duplicate-prompt"
    | "duplicate-passage-prompt",
  severity: AuditSeverity,
  label: string,
): void {
  for (const group of groups) {
    const ids = group.map((question) => question.examId || question.id);

    issues.push({
      severity,
      code,
      questionId: ids[0],
      relatedIds: ids,
      message: `${label}: ${ids.join(", ")}`,
    });
  }
}

function answerPositionDistribution(
  questions: ExamQuestion[],
): AnswerPositionDistribution {
  const counts = [0, 0, 0, 0];

  for (const question of questions) {
    if (question.answer >= 0 && question.answer < 4) {
      counts[question.answer] += 1;
    }
  }

  const total = counts.reduce((sum, value) => sum + value, 0);
  const shares = counts.map((value) => (total > 0 ? value / total : 0));

  return {
    A: counts[0],
    B: counts[1],
    C: counts[2],
    D: counts[3],
    total,
    maxShare: Math.max(...shares),
    minShare: Math.min(...shares),
  };
}

function skillCoverage(questions: ExamQuestion[]): SkillDifficultyCoverage[] {
  const skills = [
    ...new Set(
      questions
        .map((question) => question.blueprint?.skill ?? question.skill)
        .filter((value): value is string => Boolean(value?.trim())),
    ),
  ];

  return skills
    .map((skill) => {
      const items = questions.filter(
        (question) => (question.blueprint?.skill ?? question.skill) === skill,
      );

      return {
        skill,
        easy: items.filter((question) => question.difficulty === "Easy").length,
        medium: items.filter((question) => question.difficulty === "Medium")
          .length,
        hard: items.filter((question) => question.difficulty === "Hard").length,
        total: items.length,
        module1Eligible: items.filter(
          (question) =>
            question.blueprint?.module === undefined ||
            question.blueprint?.module === 1,
        ).length,
        module2Eligible: items.filter(
          (question) =>
            question.blueprint?.module === undefined ||
            question.blueprint?.module === 2,
        ).length,
      };
    })
    .sort((left, right) => left.skill.localeCompare(right.skill));
}

function validateQuestion(question: ExamQuestion): ReadingBankAuditIssue[] {
  const issues: ReadingBankAuditIssue[] = [];
  const questionId = question.examId || question.id;

  const requireField = (value: unknown, label: string) => {
    if (value === undefined || value === null || value === "") {
      issues.push({
        severity: "error",
        code: "missing-field",
        questionId,
        message: `Missing ${label}.`,
      });
    }
  };

  requireField(question.id, "id");
  requireField(question.examId, "examId");
  requireField(question.section, "section");
  requireField(question.passage, "passage");
  requireField(question.prompt, "prompt");
  requireField(question.difficulty, "difficulty");
  requireField(question.skill, "skill");
  requireField(question.domain, "domain");

  if (question.choices.length !== 4) {
    issues.push({
      severity: "error",
      code: "choice-count",
      questionId,
      message: `Expected 4 choices; found ${question.choices.length}.`,
    });
  }

  if (question.answer < 0 || question.answer >= question.choices.length) {
    issues.push({
      severity: "error",
      code: "invalid-answer",
      questionId,
      message: `Invalid answer index ${question.answer}.`,
    });
  }

  question.choices.forEach((choice, index) => {
    if (
      !choice.text.trim() &&
      !isIntentionalBlankPunctuationChoice(question, choice.text)
    ) {
      issues.push({
        severity: "error",
        code: "empty-choice",
        questionId,
        message: `Choice ${index + 1} is empty.`,
      });
    }

    if (!choice.rationale?.trim()) {
      issues.push({
        severity: "warning",
        code: "empty-rationale",
        questionId,
        message: `Choice ${index + 1} has no rationale.`,
      });
    }
  });

  if (!question.walkthrough?.length) {
    issues.push({
      severity: "warning",
      code: "missing-walkthrough",
      questionId,
      message: "Question has no walkthrough.",
    });
  }

  if (question.blueprint) {
    const comparisons = [
      ["domain", question.domain, question.blueprint.domain],
      ["skill", question.skill, question.blueprint.skill],
      ["difficulty", question.difficulty, question.blueprint.difficulty],
      ["passageType", question.passageType, question.blueprint.passageType],
    ] as const;

    for (const [label, direct, blueprint] of comparisons) {
      if (
        direct !== undefined &&
        blueprint !== undefined &&
        direct !== blueprint
      ) {
        issues.push({
          severity: "error",
          code: "blueprint-mismatch",
          questionId,
          message: `${label} differs from blueprint (${String(
            direct,
          )} vs ${String(blueprint)}).`,
        });
      }
    }
  }

  return issues;
}

export function auditReadingBank(
  questions: ExamQuestion[] = readingWritingBank,
): ReadingBankStaticAuditReport {
  const issues = questions.flatMap(validateQuestion);

  pushDuplicateIssues(
    issues,
    groupDuplicates(questions, (question) => question.examId),
    "duplicate-exam-id",
    "error",
    "Duplicate examId",
  );

  pushDuplicateIssues(
    issues,
    groupDuplicates(questions, (question) => question.id),
    "duplicate-id",
    "error",
    "Duplicate id",
  );

  pushDuplicateIssues(
    issues,
    groupDuplicates(questions, (question) => normalizeText(question.prompt)),
    "duplicate-prompt",
    "warning",
    "Exact normalized prompt duplicate",
  );

  pushDuplicateIssues(
    issues,
    groupDuplicates(
      questions,
      (question) =>
        `${normalizeText(question.passage)}::${normalizeText(question.prompt)}`,
    ),
    "duplicate-passage-prompt",
    "error",
    "Exact passage + prompt duplicate",
  );

  const answerPositions = answerPositionDistribution(questions);

  if (answerPositions.maxShare > 0.32 || answerPositions.minShare < 0.18) {
    issues.push({
      severity: "warning",
      code: "answer-position-imbalance",
      message: `Answer positions are imbalanced: A=${answerPositions.A}, B=${answerPositions.B}, C=${answerPositions.C}, D=${answerPositions.D}.`,
    });
  }

  const coverage = skillCoverage(questions);

  for (const row of coverage) {
    if (
      row.easy < TARGETS.Easy ||
      row.medium < TARGETS.Medium ||
      row.hard < TARGETS.Hard
    ) {
      issues.push({
        severity: "error",
        code: "skill-difficulty-shortage",
        message: `${row.skill} is below target: ${row.easy}/${row.medium}/${row.hard}.`,
      });
    }

    if (row.module1Eligible < 8 || row.module2Eligible < 8) {
      issues.push({
        severity: "warning",
        code: "module-capacity-shortage",
        message: `${row.skill} has limited module capacity: M1=${row.module1Eligible}, M2=${row.module2Eligible}.`,
      });
    }
  }

  const errors = issues.filter((issue) => issue.severity === "error").length;
  const warnings = issues.filter(
    (issue) => issue.severity === "warning",
  ).length;
  const infos = issues.filter((issue) => issue.severity === "info").length;

  return {
    passed: errors === 0,
    generatedAt: Date.now(),
    totalQuestions: questions.length,
    errors,
    warnings,
    infos,
    issues,
    answerPositions,
    coverage,
  };
}
