import {
  diagnoseMathWalkthroughs,
} from "@/lib/adaptive/mathWalkthroughDiagnostic";

describe("Math walkthrough diagnostic", () => {
  it("reports the current Math walkthrough baseline", () => {
    const report =
      diagnoseMathWalkthroughs();

    expect(
      report.totalQuestions,
    ).toBe(144);

    expect(
      report.completeWalkthroughs +
        report.missingWalkthroughs,
    ).toBe(
      report.totalQuestions,
    );
  });
});
