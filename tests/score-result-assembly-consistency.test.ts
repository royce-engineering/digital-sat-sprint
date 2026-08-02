import {
  runScoreResultAssemblyConsistency,
} from "@/lib/adaptive/scoreResultAssemblyConsistency";

describe("Score and result assembly consistency", () => {
  it("keeps standalone and full-test score results aligned", () => {
    const report =
      runScoreResultAssemblyConsistency();

    expect(report.passed).toBe(
      true,
    );

    expect(
      report.checks.filter(
        (item) =>
          !item.passed,
      ),
    ).toEqual([]);
  });
});
