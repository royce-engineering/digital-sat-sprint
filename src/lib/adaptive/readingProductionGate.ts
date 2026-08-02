import {
  auditReadingBank,
} from "./readingBankStaticAudit";
import {
  validateReadingBlueprints,
} from "./readingBlueprintValidation";
import {
  runProductionReadingSelectorStress,
} from "./productionReadingSelectorStress";
import {
  auditDuplicateReadingBank,
} from "./duplicateBankDeepAudit";
import {
  readingWritingBank,
} from "./questionBank";

export interface ReadingProductionGateCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface ReadingProductionGateReport {
  passed: boolean;
  generatedAt: number;
  totalQuestions: number;
  checks: ReadingProductionGateCheck[];
}

export interface ReadingProductionGateOptions {
  stressSeeds?: number;
}

export function runReadingProductionGate(
  options: ReadingProductionGateOptions = {},
): ReadingProductionGateReport {
  const stressSeeds =
    options.stressSeeds ?? 1000;

  const staticAudit =
    auditReadingBank(
      readingWritingBank,
    );
  const blueprintAudit =
    validateReadingBlueprints(
      readingWritingBank,
    );
  const duplicateAudit =
    auditDuplicateReadingBank(
      readingWritingBank,
    );
  const stressAudit =
    runProductionReadingSelectorStress(
      stressSeeds,
    );

  const checks: ReadingProductionGateCheck[] = [
    {
      name: "Question count",
      passed:
        readingWritingBank.length ===
        476,
      details: `${readingWritingBank.length} questions; expected 476.`,
    },
    {
      name: "Blocking static errors",
      passed:
        staticAudit.errors === 0,
      details: `${staticAudit.errors} blocking error(s), ${staticAudit.warnings} warning(s).`,
    },
    {
      name: "Unique content",
      passed:
        duplicateAudit.duplicateCopies ===
        0,
      details: `${duplicateAudit.duplicateCopies} duplicate copy/copies across ${duplicateAudit.rawQuestions} questions.`,
    },
    {
      name: "27-question blueprints",
      passed:
        blueprintAudit.passed,
      details: blueprintAudit.passed
        ? "Module 1, Module 2 Easy, and Module 2 Hard have 27 questions with no slot shortages."
        : `${blueprintAudit.issues.length} blueprint issue(s).`,
    },
    {
      name: "Production selector stress",
      passed:
        stressAudit.passed,
      details: `${stressAudit.totalRuns} production module generations; ${stressAudit.failures.length} failure(s).`,
    },
    {
      name: "Walkthrough completeness",
      passed:
        staticAudit.issues.every(
          (issue) =>
            issue.code !==
            "missing-walkthrough",
        ),
      details: `${
        staticAudit.issues.filter(
          (issue) =>
            issue.code ===
            "missing-walkthrough",
        ).length
      } question(s) missing walkthroughs.`,
    },
    {
      name: "Required metadata",
      passed:
        staticAudit.issues.every(
          (issue) =>
            issue.code !==
            "missing-field",
        ),
      details: `${
        staticAudit.issues.filter(
          (issue) =>
            issue.code ===
            "missing-field",
        ).length
      } missing-field issue(s).`,
    },
  ];

  return {
    passed:
      checks.every(
        (check) =>
          check.passed,
      ),
    generatedAt: Date.now(),
    totalQuestions:
      readingWritingBank.length,
    checks,
  };
}
