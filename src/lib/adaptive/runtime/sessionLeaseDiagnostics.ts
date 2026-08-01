import {
  buildSessionLease,
  canAcquireSessionLease,
  parseSessionLease,
  sessionLeaseIsExpired,
} from "./sessionLease";

export interface SessionLeaseDiagnosticCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface SessionLeaseDiagnosticReport {
  passed: boolean;
  checks: SessionLeaseDiagnosticCheck[];
}

function check(
  name: string,
  passed: boolean,
  details: string,
): SessionLeaseDiagnosticCheck {
  return { name, passed, details };
}

export function diagnoseSessionLease(): SessionLeaseDiagnosticReport {
  const checks: SessionLeaseDiagnosticCheck[] = [];
  const now = 1_000_000;
  const lease = buildSessionLease(
    "reading",
    "owner-a",
    now,
  );

  checks.push(
    check(
      "Lease parses correctly",
      parseSessionLease(
        JSON.stringify(lease),
      )?.ownerId === "owner-a",
      JSON.stringify(lease),
    ),
    check(
      "Current owner can reacquire",
      canAcquireSessionLease(
        lease,
        "owner-a",
        now + 1_000,
      ),
      "Same owner accepted.",
    ),
    check(
      "Different owner is blocked",
      !canAcquireSessionLease(
        lease,
        "owner-b",
        now + 1_000,
      ),
      "Different owner rejected.",
    ),
    check(
      "Expired lease can be acquired",
      canAcquireSessionLease(
        lease,
        "owner-b",
        now + 20_000,
        15_000,
      ),
      "Expired lease accepted.",
    ),
    check(
      "Expiration calculation is correct",
      !sessionLeaseIsExpired(
        lease,
        now + 10_000,
        15_000,
      ) &&
        sessionLeaseIsExpired(
          lease,
          now + 16_000,
          15_000,
        ),
      "TTL boundary verified.",
    ),
    check(
      "Corrupt lease is rejected",
      parseSessionLease(
        "{not-json",
      ) === null,
      "Invalid JSON returned null.",
    ),
  );

  return {
    passed: checks.every(
      (item) => item.passed,
    ),
    checks,
  };
}
