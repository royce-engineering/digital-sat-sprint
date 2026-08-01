import {
  diagnoseReadingBlueprint,
} from "./blueprintEngine";
import {
  readingModule1Blueprint,
  readingModule2EasyBlueprint,
  readingModule2HardBlueprint,
} from "./readingModuleBlueprint";
import {
  diagnoseReadingAdaptiveEngine,
} from "./readingAdaptiveDiagnostics";
import {
  diagnoseMathAdaptiveEngine,
} from "./mathAdaptiveDiagnostics";
import {
  diagnoseIdentifierMigration,
} from "./identifierDiagnostics";
import {
  fullQuestionBank,
  getQuestion,
  mathBank,
  readingWritingBank,
} from "./questionBank";
import type { ExamQuestion } from "./types";
import { diagnoseRuntimeReleaseGate } from "./runtime/runtimeReleaseGate";

export type DiagnosticSeverity = "error" | "warning" | "info";

export interface SystemDiagnosticCheck {
  id: string;
  category: string;
  label: string;
  passed: boolean;
  severity: DiagnosticSeverity;
  details: string;
}

export interface SystemDiagnosticReport {
  generatedAt: number;
  passed: boolean;
  errors: number;
  warnings: number;
  checks: SystemDiagnosticCheck[];
  stats: {
    readingQuestions: number;
    mathQuestions: number;
    totalQuestions: number;
    uniqueIds: number;
    uniqueExamIds: number;
  };
}

function check(
  id: string,
  category: string,
  label: string,
  passed: boolean,
  details: string,
  severity: DiagnosticSeverity = "error",
): SystemDiagnosticCheck {
  return {
    id,
    category,
    label,
    passed,
    severity,
    details,
  };
}

function slug(value: string): string {
  return value
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-+|-+$/g, "");
}

function uniqueCount(values: string[]): number {
  return new Set(values).size;
}

function duplicateValues(values: string[]): string[] {
  const counts = new Map<string, number>();

  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  return [...counts.entries()]
    .filter(([, count]) => count > 1)
    .map(([value]) => value)
    .sort();
}

function missingMetadata(
  bank: ExamQuestion[],
  field: "skill" | "difficulty" | "section",
): ExamQuestion[] {
  return bank.filter((question) => {
    const value = question[field];
    return value === undefined || value === null || value === "";
  });
}

function invalidAnswers(bank: ExamQuestion[]): ExamQuestion[] {
  return bank.filter((question) => {
    if (question.questionType === "student-response") {
      return !question.numericAnswer?.trim();
    }

    return (
      question.choices.length < 2 ||
      question.answer < 0 ||
      question.answer >= question.choices.length
    );
  });
}

function blueprintSummary(
  name: string,
  diagnostics: ReturnType<typeof diagnoseReadingBlueprint>,
): SystemDiagnosticCheck {
  const requested = diagnostics.reduce(
    (sum, item) => sum + item.requested,
    0,
  );
  const possible = diagnostics.reduce(
    (sum, item) => sum + Math.min(item.requested, item.available),
    0,
  );
  const shortages = diagnostics
    .filter((item) => item.available < item.requested)
    .map(
      (item) =>
        `${item.domain}: need ${item.requested}, have ${item.available}`,
    );

  return check(
    `reading-${slug(name)}`,
    "Reading blueprint",
    name,
    possible === requested,
    shortages.length
      ? shortages.join("; ")
      : `Can build all ${requested} requested questions.`,
  );
}

export function diagnoseAdaptiveSystem(): SystemDiagnosticReport {
  const checks: SystemDiagnosticCheck[] = [];
  const ids = fullQuestionBank.map((question) => question.id);
  const examIds = fullQuestionBank.map(
    (question) => question.examId,
  );
  const duplicateIds = duplicateValues(ids);
  const duplicateExamIds = duplicateValues(examIds);

  checks.push(
    check(
      "bank-reading-not-empty",
      "Question bank",
      "Reading & Writing bank is not empty",
      readingWritingBank.length > 0,
      `${readingWritingBank.length} questions loaded.`,
    ),
    check(
      "bank-math-not-empty",
      "Question bank",
      "Math bank is not empty",
      mathBank.length > 0,
      `${mathBank.length} questions loaded.`,
    ),
    check(
      "bank-id-unique",
      "Question bank",
      "Question IDs are unique",
      duplicateIds.length === 0,
      duplicateIds.length
        ? `Duplicate IDs: ${duplicateIds.slice(0, 12).join(", ")}`
        : `${ids.length} unique IDs.`,
    ),
    check(
      "bank-exam-id-unique",
      "Question bank",
      "Exam IDs are unique",
      duplicateExamIds.length === 0,
      duplicateExamIds.length
        ? `Duplicate examIds: ${duplicateExamIds
            .slice(0, 12)
            .join(", ")}`
        : `${examIds.length} unique examIds.`,
    ),
  );

  const missingSkill = missingMetadata(fullQuestionBank, "skill");
  const missingDifficulty = missingMetadata(
    fullQuestionBank,
    "difficulty",
  );
  const missingSection = missingMetadata(
    fullQuestionBank,
    "section",
  );
  const badAnswers = invalidAnswers(fullQuestionBank);

  checks.push(
    check(
      "metadata-skill",
      "Question metadata",
      "Every question has a skill",
      missingSkill.length === 0,
      missingSkill.length
        ? `${missingSkill.length} questions are missing skill metadata.`
        : "All questions have skill metadata.",
    ),
    check(
      "metadata-difficulty",
      "Question metadata",
      "Every question has a difficulty",
      missingDifficulty.length === 0,
      missingDifficulty.length
        ? `${missingDifficulty.length} questions are missing difficulty metadata.`
        : "All questions have difficulty metadata.",
    ),
    check(
      "metadata-section",
      "Question metadata",
      "Every question has a section",
      missingSection.length === 0,
      missingSection.length
        ? `${missingSection.length} questions are missing section metadata.`
        : "All questions have section metadata.",
    ),
    check(
      "metadata-answer",
      "Question metadata",
      "Answers are structurally valid",
      badAnswers.length === 0,
      badAnswers.length
        ? `${badAnswers.length} questions have invalid answer data.`
        : "All answer structures are valid.",
    ),
  );

  const lookupFailures = fullQuestionBank.filter(
    (question) =>
      getQuestion(question.id)?.examId !== question.examId ||
      getQuestion(question.examId)?.id !== question.id,
  );

  checks.push(
    check(
      "lookup-both-identifiers",
      "Question lookup",
      "getQuestion supports id and examId",
      lookupFailures.length === 0,
      lookupFailures.length
        ? `${lookupFailures.length} questions failed lookup verification.`
        : `Verified ${fullQuestionBank.length} questions.`,
    ),
  );

  checks.push(
    blueprintSummary(
      "Module 1",
      diagnoseReadingBlueprint(
        readingWritingBank,
        readingModule1Blueprint,
        1,
      ),
    ),
    blueprintSummary(
      "Module 2 Easy",
      diagnoseReadingBlueprint(
        readingWritingBank,
        readingModule2EasyBlueprint,
        2,
      ),
    ),
    blueprintSummary(
      "Module 2 Hard",
      diagnoseReadingBlueprint(
        readingWritingBank,
        readingModule2HardBlueprint,
        2,
      ),
    ),
  );

  const readingReport = diagnoseReadingAdaptiveEngine(4711);

  for (const item of readingReport.checks) {
    checks.push(
      check(
        `reading-adaptive-${slug(item.name)}`,
        "Reading adaptive engine",
        item.name,
        item.passed,
        item.details,
      ),
    );
  }

  const mathReport = diagnoseMathAdaptiveEngine(4713);

  for (const item of mathReport.checks) {
    checks.push(
      check(
        `math-adaptive-${slug(item.name)}`,
        "Math adaptive engine",
        item.name,
        item.passed,
        item.details,
      ),
    );
  }

  const identifierReport = diagnoseIdentifierMigration();

  for (const item of identifierReport.checks) {
    checks.push(
      check(
        `identifier-${slug(item.label)}`,
        "Identifier migration",
        item.label,
        item.passed,
        item.details,
      ),
    );
  }

  const runtimeReport =
    diagnoseRuntimeReleaseGate();

  for (const item of runtimeReport.checks) {
    checks.push(
      check(
        `runtime-${slug(
          `${item.category}-${item.name}`,
        )}`,
        `Runtime · ${item.category}`,
        item.name,
        item.passed,
        item.details,
      ),
    );
  }

  const errors = checks.filter(
    (item) => !item.passed && item.severity === "error",
  ).length;
  const warnings = checks.filter(
    (item) => !item.passed && item.severity === "warning",
  ).length;

  return {
    generatedAt: Date.now(),
    passed: errors === 0,
    errors,
    warnings,
    checks,
    stats: {
      readingQuestions: readingWritingBank.length,
      mathQuestions: mathBank.length,
      totalQuestions: fullQuestionBank.length,
      uniqueIds: uniqueCount(ids),
      uniqueExamIds: uniqueCount(examIds),
    },
  };
}
