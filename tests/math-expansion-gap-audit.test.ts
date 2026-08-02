import {
  auditMathExpansionGaps,
} from "@/lib/adaptive/mathExpansionGapAudit";

describe("Math expansion gap audit", () => {
  it("produces expansion priorities from production telemetry", () => {
    const report =
      auditMathExpansionGaps(
        1000,
      );

    expect(
      report.totalQuestions,
    ).toBe(144);

    expect(
      report.routes,
    ).toHaveLength(3);

    expect(
      report.suggestedExpansionTotal,
    ).toBeGreaterThan(0);
  });
});
