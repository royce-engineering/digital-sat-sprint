import {
  mathBank,
} from "./questionBank";
import {
  inspectMathContentIssues,
} from "./mathContentIssueInspector";

export interface MathContentRepairDiagnosticReport {
  passed: boolean;
  totalQuestions: number;
  duplicateContentGroups: number;
  duplicateChoiceQuestions: number;
}

export function diagnoseMathContentRepair(): MathContentRepairDiagnosticReport {
  const inspection =
    inspectMathContentIssues(
      mathBank,
    );

  return {
    passed:
      mathBank.length === 144 &&
      inspection
        .duplicateContentGroups
        .length === 0 &&
      inspection
        .duplicateChoiceIssues
        .length === 0,
    totalQuestions:
      mathBank.length,
    duplicateContentGroups:
      inspection
        .duplicateContentGroups
        .length,
    duplicateChoiceQuestions:
      inspection
        .duplicateChoiceIssues
        .length,
  };
}
