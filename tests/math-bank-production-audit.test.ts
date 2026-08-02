import {
  auditMathBank,
} from "@/lib/adaptive/mathBankProductionAudit";

describe("Math bank production audit", () => {
  it("produces a stable baseline report", () => {
    const report =
      auditMathBank();

    expect(
      report.totalQuestions,
    ).toBeGreaterThan(0);
    expect(
      report.coverage.length,
    ).toBeGreaterThan(0);
  });
});
