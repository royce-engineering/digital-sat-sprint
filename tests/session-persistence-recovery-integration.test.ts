import {
  runSessionPersistenceRecoveryIntegration,
} from "@/lib/adaptive/sessionPersistenceRecoveryIntegration";

describe("Session persistence and recovery", () => {
  it("passes recovery, timer, and idempotency integration checks", () => {
    const report =
      runSessionPersistenceRecoveryIntegration();

    expect(report.passed).toBe(
      true,
    );

    expect(
      report.checks.filter(
        (item) =>
          !item.passed,
      ),
    ).toEqual([]);
  });
});
