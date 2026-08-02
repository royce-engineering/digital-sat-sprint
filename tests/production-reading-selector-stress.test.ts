import {
  runProductionReadingSelectorStress,
} from "@/lib/adaptive/productionReadingSelectorStress";

describe("Production Reading selector stress test", () => {
  it("passes 1,000 seeds across all production routes", () => {
    const report =
      runProductionReadingSelectorStress(
        1000,
      );

    expect(report.failures).toEqual(
      [],
    );
    expect(report.passed).toBe(
      true,
    );
    expect(
      report.totalRuns,
    ).toBe(3000);
  });
});
