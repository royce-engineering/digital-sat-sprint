import {
  runFullTestPhaseBreakIntegration,
} from "@/lib/adaptive/fullTestPhaseBreakIntegration";

describe("Full-test phase and break integration", () => {
  it("passes every controller transition and recovery check", () => {
    const report =
      runFullTestPhaseBreakIntegration();

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
