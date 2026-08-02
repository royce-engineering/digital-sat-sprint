import type {
  MathAuditIssue,
  MathBankProductionAuditReport,
} from "./mathBankProductionAudit";

export interface MathAuditCountRow {
  key: string;
  count: number;
}

export interface MathBankAuditSummary {
  errorsByCode:
    MathAuditCountRow[];
  warningsByCode:
    MathAuditCountRow[];
  missingFields:
    MathAuditCountRow[];
  affectedQuestionIds:
    string[];
  affectedQuestionCount:
    number;
}

function countBy(
  issues: MathAuditIssue[],
  keyFor: (
    issue: MathAuditIssue,
  ) => string | undefined,
): MathAuditCountRow[] {
  const counts =
    new Map<string, number>();

  for (const issue of issues) {
    const key =
      keyFor(issue);

    if (!key) continue;

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

export function summarizeMathBankAudit(
  report: MathBankProductionAuditReport,
): MathBankAuditSummary {
  const errors =
    report.issues.filter(
      (issue) =>
        issue.severity ===
        "error",
    );
  const warnings =
    report.issues.filter(
      (issue) =>
        issue.severity ===
        "warning",
    );

  const affectedQuestionIds = [
    ...new Set(
      report.issues
        .map(
          (issue) =>
            issue.questionId,
        )
        .filter(
          (
            value,
          ): value is string =>
            Boolean(value),
        ),
    ),
  ].sort();

  return {
    errorsByCode:
      countBy(
        errors,
        (issue) =>
          issue.code,
      ),
    warningsByCode:
      countBy(
        warnings,
        (issue) =>
          issue.code,
      ),
    missingFields:
      countBy(
        errors,
        (issue) => {
          if (
            issue.code !==
            "missing-field"
          ) {
            return undefined;
          }

          return /^Missing (.+)\.$/.exec(
            issue.message,
          )?.[1];
        },
      ),
    affectedQuestionIds,
    affectedQuestionCount:
      affectedQuestionIds.length,
  };
}
