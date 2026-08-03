import {
  auditFullSatFinalizationAndLock,
} from "@/lib/adaptive/fullSatFinalizationAndLockAudit";

describe("Full SAT finalization and lock audit", () => {
  it("passes deterministic finalization and lease checks", () => {
    const report =
      auditFullSatFinalizationAndLock();

    expect(report.passed).toBe(
      true,
    );

    expect(report.failures).toEqual(
      [],
    );

    expect(
      report.checks.length,
    ).toBeGreaterThanOrEqual(
      16,
    );
  });
});
