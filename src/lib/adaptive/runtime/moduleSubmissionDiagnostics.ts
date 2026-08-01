import {
  claimModuleSubmission,
  createModuleSubmissionState,
  hasModuleSubmission,
  resetModuleSubmission,
} from "./moduleSubmissionGuard";

export interface SubmissionDiagnosticCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface SubmissionDiagnosticReport {
  passed: boolean;
  checks: SubmissionDiagnosticCheck[];
}

function check(
  name: string,
  passed: boolean,
  details: string,
): SubmissionDiagnosticCheck {
  return { name, passed, details };
}

export function diagnoseModuleSubmissionGuard(): SubmissionDiagnosticReport {
  const checks: SubmissionDiagnosticCheck[] = [];
  const initial = createModuleSubmissionState();

  const first = claimModuleSubmission(
    initial,
    "reading-module-1",
    1000,
  );

  checks.push(
    check(
      "First submission is allowed",
      first.allowed &&
        first.submittedAt === 1000 &&
        hasModuleSubmission(
          first.state,
          "reading-module-1",
        ),
      `submittedAt=${first.submittedAt}`,
    ),
  );

  const second = claimModuleSubmission(
    first.state,
    "reading-module-1",
    2000,
  );

  checks.push(
    check(
      "Repeated submission is blocked",
      !second.allowed &&
        second.submittedAt === 1000,
      `original submittedAt=${second.submittedAt}`,
    ),
  );

  const otherModule = claimModuleSubmission(
    first.state,
    "reading-module-2",
    3000,
  );

  checks.push(
    check(
      "Different module can still submit",
      otherModule.allowed &&
        hasModuleSubmission(
          otherModule.state,
          "reading-module-2",
        ),
      "Module 2 claim accepted.",
    ),
  );

  const reset = resetModuleSubmission(
    otherModule.state,
    "reading-module-1",
  );
  const afterReset = claimModuleSubmission(
    reset,
    "reading-module-1",
    4000,
  );

  checks.push(
    check(
      "Explicit reset allows a new attempt",
      afterReset.allowed &&
        afterReset.submittedAt === 4000,
      `submittedAt=${afterReset.submittedAt}`,
    ),
  );

  return {
    passed: checks.every((item) => item.passed),
    checks,
  };
}
