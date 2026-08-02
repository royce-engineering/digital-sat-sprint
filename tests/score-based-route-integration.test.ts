import {
  runScoreBasedRouteIntegration,
} from "@/lib/adaptive/scoreBasedRouteIntegration";

describe("Score-based adaptive routing", () => {
  it("routes Reading and Math correctly at every boundary", () => {
    const report =
      runScoreBasedRouteIntegration();

    expect(report.passed).toBe(
      true,
    );

    expect(
      report.issues,
    ).toEqual([]);

    expect(
      report.readingBoundary,
    ).toEqual({
      easyMax: 17,
      hardMin: 18,
      total: 27,
    });

    expect(
      report.mathBoundary,
    ).toEqual({
      easyMax: 14,
      hardMin: 15,
      total: 22,
    });
  });
});
