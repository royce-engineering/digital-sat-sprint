import {
  diagnoseDeadlineTimer,
} from "./deadlineTimerDiagnostics";
import {
  diagnoseFullTestRuntime,
} from "./diagnostics";
import {
  diagnoseModuleSubmissionGuard,
} from "./moduleSubmissionDiagnostics";
import {
  diagnoseSessionLease,
} from "./sessionLeaseDiagnostics";
import {
  diagnoseSessionRecovery,
} from "./sessionRecoveryDiagnostics";

export interface RuntimeReleaseCheck {
  category:
    | "Full-test runtime"
    | "Session recovery"
    | "Cross-tab lease"
    | "Deadline timer"
    | "Module submission";
  name: string;
  passed: boolean;
  details: string;
}

export interface RuntimeReleaseGateReport {
  passed: boolean;
  errors: number;
  checks: RuntimeReleaseCheck[];
}

export function diagnoseRuntimeReleaseGate(): RuntimeReleaseGateReport {
  const checks: RuntimeReleaseCheck[] = [];

  for (const item of diagnoseFullTestRuntime().checks) {
    checks.push({
      category: "Full-test runtime",
      ...item,
    });
  }

  for (const item of diagnoseSessionRecovery().checks) {
    checks.push({
      category: "Session recovery",
      ...item,
    });
  }

  for (const item of diagnoseSessionLease().checks) {
    checks.push({
      category: "Cross-tab lease",
      ...item,
    });
  }

  for (const item of diagnoseDeadlineTimer().checks) {
    checks.push({
      category: "Deadline timer",
      ...item,
    });
  }

  for (const item of diagnoseModuleSubmissionGuard().checks) {
    checks.push({
      category: "Module submission",
      ...item,
    });
  }

  const errors = checks.filter(
    (item) => !item.passed,
  ).length;

  return {
    passed: errors === 0,
    errors,
    checks,
  };
}
