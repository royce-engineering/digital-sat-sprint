import {
  auditFullSatStudentJourney,
} from "@/lib/adaptive/fullSatStudentJourneyAudit";

describe("Full SAT student journey", () => {
  it("reports the modeled controller journey", () => {
    const report = auditFullSatStudentJourney();
    expect(report.checks.length).toBeGreaterThan(0);
  });
});
