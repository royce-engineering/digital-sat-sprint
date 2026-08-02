import type { ReadingBankAuditIssue, ReadingBankStaticAuditReport } from "./readingBankStaticAudit";

export interface AuditCountRow { key: string; count: number }
export interface ReadingBankAuditSummary {
  errorsByCode: AuditCountRow[];
  warningsByCode: AuditCountRow[];
  missingFields: AuditCountRow[];
  affectedQuestionIds: string[];
  affectedQuestionCount: number;
}

function countBy(
  issues: ReadingBankAuditIssue[],
  keyFor: (issue: ReadingBankAuditIssue) => string | undefined,
): AuditCountRow[] {
  const counts = new Map<string, number>();
  for (const issue of issues) {
    const key = keyFor(issue);
    if (key) counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([key, count]) => ({ key, count }))
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));
}

export function summarizeReadingBankAudit(
  report: ReadingBankStaticAuditReport,
): ReadingBankAuditSummary {
  const errors = report.issues.filter((x) => x.severity === "error");
  const warnings = report.issues.filter((x) => x.severity === "warning");

  const affectedQuestionIds = [...new Set(
    report.issues
      .map((x) => x.questionId)
      .filter((x): x is string => Boolean(x)),
  )].sort();

  return {
    errorsByCode: countBy(errors, (x) => x.code),
    warningsByCode: countBy(warnings, (x) => x.code),
    missingFields: countBy(errors, (x) => {
      if (x.code !== "missing-field") return undefined;
      return /^Missing (.+)\.$/.exec(x.message)?.[1];
    }),
    affectedQuestionIds,
    affectedQuestionCount: affectedQuestionIds.length,
  };
}
