import {
  runFullSatAssemblyAudit,
} from "@/lib/adaptive/fullSatAssemblyAudit";

describe("Full SAT assembly audit", () => {
  it("assembles every adaptive route combination without conflicts", () => {
    const report =
      runFullSatAssemblyAudit(
        500,
      );

    expect(report.passed).toBe(
      true,
    );

    expect(
      report.failures,
    ).toEqual([]);

    expect(
      report.totalAssemblies,
    ).toBe(2000);
  });
});
