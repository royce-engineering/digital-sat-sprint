import {
  diagnoseMathExpansionPack2,
} from "@/lib/adaptive/mathExpansionPack2Diagnostic";

describe("Math expansion pack 2", () => {
  it("contains the remaining 18 Phase 1 questions", () => {
    const report =
      diagnoseMathExpansionPack2();

    expect(report.passed).toBe(true);
    expect(report.total).toBe(18);
    expect(report.skillCounts).toEqual({
      "Area and Volume": 6,
      "Angles and Parallel Lines": 3,
      "Coordinate Geometry": 3,
      "Slope and Graphs": 6,
    });
    expect(report.difficultyCounts).toEqual({
      Easy: 5,
      Medium: 6,
      Hard: 7,
    });
  });
});
