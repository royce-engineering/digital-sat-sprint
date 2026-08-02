import {
  diagnoseMathExpansionPack1,
} from "@/lib/adaptive/mathExpansionPack1Diagnostic";

describe("Math expansion pack 1", () => {
  it("contains 18 valid Geometry questions", () => {
    const report =
      diagnoseMathExpansionPack1();

    expect(report.passed).toBe(
      true,
    );
    expect(report.total).toBe(18);
    expect(
      report.skillCounts,
    ).toEqual({
      Circles: 6,
      Triangles: 6,
      "Right Triangle Trigonometry": 6,
    });
    expect(
      report.difficultyCounts,
    ).toEqual({
      Easy: 6,
      Medium: 6,
      Hard: 6,
    });
  });
});
