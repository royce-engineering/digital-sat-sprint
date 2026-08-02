import {
  auditMathProductionBlueprint,
} from "@/lib/adaptive/mathProductionBlueprintAudit";

describe("Math production blueprint audit", () => {
  it("supports all 22-question production routes", () => {
    const report =
      auditMathProductionBlueprint();

    expect(report.passed).toBe(
      true,
    );
    expect(
      report.totalQuestions,
    ).toBe(144);
    expect(report.moduleSize).toBe(
      22,
    );
  });
});
