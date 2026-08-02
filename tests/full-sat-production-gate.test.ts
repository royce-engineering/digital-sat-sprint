import {
  runFullSatProductionGate,
} from "@/lib/adaptive/fullSatProductionGate";

describe("Full SAT production gate", () => {
  it("passes every complete-system release check", () => {
    const report =
      runFullSatProductionGate({
        mathStressSeeds: 1000,
        assemblySeeds: 500,
      });

    expect(report.passed).toBe(
      true,
    );

    expect(
      report.checks.filter(
        (check) =>
          !check.passed,
      ),
    ).toEqual([]);
  });
});
