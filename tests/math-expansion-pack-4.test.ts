import {
  diagnoseMathExpansionPack4,
} from "@/lib/adaptive/mathExpansionPack4Diagnostic";

describe("Math expansion pack 4", () => {
  it("contains the final 18 expansion questions", () => {
    const report =
      diagnoseMathExpansionPack4();

    expect(report.passed).toBe(
      true,
    );

    expect(report.total).toBe(
      18,
    );

    expect(
      report.domainCounts,
    ).toEqual({
      "Advanced Math": 10,
      "Problem Solving and Data Analysis": 8,
    });

    expect(
      report.difficultyCounts,
    ).toEqual({
      Easy: 5,
      Medium: 4,
      Hard: 9,
    });

    expect(
      report.questionTypeCounts,
    ).toEqual({
      "multiple-choice": 6,
      "student-response": 6,
      table: 2,
      modeling: 4,
    });
  });
});
