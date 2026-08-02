import {
  diagnoseMathExpansionPack3,
} from "@/lib/adaptive/mathExpansionPack3Diagnostic";

describe("Math expansion pack 3", () => {
  it("contains the first 18 Phase-2 questions", () => {
    const report =
      diagnoseMathExpansionPack3();

    expect(report.passed).toBe(true);
    expect(report.total).toBe(18);
    expect(report.domainCounts).toEqual({
      Algebra: 10,
      "Advanced Math": 8,
    });
    expect(report.difficultyCounts).toEqual({
      Easy: 4,
      Medium: 8,
      Hard: 6,
    });
  });
});
