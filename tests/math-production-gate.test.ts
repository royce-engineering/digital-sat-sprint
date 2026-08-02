import { runMathProductionGate } from "@/lib/adaptive/mathProductionGate";

describe("Math production gate", () => {
  it("passes every Math production readiness check", () => {
    const report = runMathProductionGate(1000);
    expect(report.passed).toBe(true);
    expect(report.checks.filter((check) => !check.passed)).toEqual([]);
  });
});
