import { auditMathBank } from "./mathBankProductionAudit";
import { inspectMathContentIssues } from "./mathContentIssueInspector";
import { diagnoseMathWalkthroughs } from "./mathWalkthroughDiagnostic";
import { auditMathProductionBlueprint } from "./mathProductionBlueprintAudit";
import { runMathProductionSelectorStress } from "./mathProductionSelectorStress";
import { mathBank } from "./questionBank";
import { isStudentResponseMathQuestion } from "./mathAuditCalibration";

export interface MathProductionGateCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface MathProductionGateReport {
  passed: boolean;
  generatedAt: number;
  totalQuestions: number;
  checks: MathProductionGateCheck[];
}

export function runMathProductionGate(
  stressSeeds = 1000,
): MathProductionGateReport {
  const staticAudit = auditMathBank(mathBank);
  const content = inspectMathContentIssues(mathBank);
  const walkthroughs = diagnoseMathWalkthroughs(mathBank);
  const blueprint = auditMathProductionBlueprint();
  const stress = runMathProductionSelectorStress(stressSeeds);

  let sprIssues = 0;
  for (const question of mathBank) {
    if (!isStudentResponseMathQuestion(question)) continue;
    if (question.choices.length !== 0) sprIssues += 1;
    if (question.answer !== -1) sprIssues += 1;
    if (!question.numericAnswer?.trim()) sprIssues += 1;
  }

  const checks: MathProductionGateCheck[] = [
    {
      name: "Question count",
      passed: mathBank.length === 216,
      details: `${mathBank.length} questions; expected 144.`,
    },
    {
      name: "Blocking static errors",
      passed: staticAudit.errors === 0,
      details: `${staticAudit.errors} blocking error(s), ${staticAudit.warnings} warning(s).`,
    },
    {
      name: "Exact duplicate content",
      passed: content.duplicateContentGroups.length === 0,
      details: `${content.duplicateContentGroups.length} duplicate group(s).`,
    },
    {
      name: "Duplicate choices",
      passed: content.duplicateChoiceIssues.length === 0,
      details: `${content.duplicateChoiceIssues.length} duplicate-choice question(s).`,
    },
    {
      name: "Walkthrough completeness",
      passed: walkthroughs.missingWalkthroughs === 0,
      details: `${walkthroughs.missingWalkthroughs} question(s) missing walkthroughs.`,
    },
    {
      name: "Student-response schema",
      passed: sprIssues === 0,
      details: `${sprIssues} student-response schema issue(s).`,
    },
    {
      name: "22-question blueprint",
      passed: blueprint.passed,
      details: blueprint.passed
        ? "All three Math routes pass hard blueprint checks."
        : `${blueprint.issues.length} blueprint issue(s).`,
    },
    {
      name: "Production selector stress",
      passed: stress.passed,
      details: `${stress.totalRuns} generations; ${stress.failures.length} blocking failure(s).`,
    },
    {
      name: "Seed diversity",
      passed: stress.routes.every(
        (route) => route.uniqueOrders >= Math.floor(stressSeeds * 0.8),
      ),
      details: stress.routes
        .map((route) => `${route.route}: ${route.uniqueOrders}/${route.runs}`)
        .join("; "),
    },
    {
      name: "Cross-module exclusion",
      passed: stress.failures.every(
        (failure) => failure.code !== "cross-module-duplicate",
      ),
      details: `${
        stress.failures.filter(
          (failure) => failure.code === "cross-module-duplicate",
        ).length
      } cross-module duplicate failure(s).`,
    },
  ];

  return {
    passed: checks.every((check) => check.passed),
    generatedAt: Date.now(),
    totalQuestions: mathBank.length,
    checks,
  };
}
