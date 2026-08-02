import {
  runReadingProductionGate,
} from "@/lib/adaptive/readingProductionGate";

describe("Reading production gate", () => {
  it("passes every production readiness check", () => {
    const report =
      runReadingProductionGate({
        stressSeeds: 1000,
      });

    expect(report.passed).toBe(true);
    expect(
      report.checks.filter(
        (check) =>
          !check.passed,
      ),
    ).toEqual([]);
  });
});
