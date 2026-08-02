import {
  auditReadingBank,
} from "@/lib/adaptive/readingBankStaticAudit";
import {
  readingWritingBank,
} from "@/lib/adaptive/questionBank";

describe("Reading bank static audit", () => {
  it("has no blocking errors", () => {
    const report = auditReadingBank(
      readingWritingBank,
    );

    expect(report.errors).toBe(0);
    expect(report.passed).toBe(true);
  });

  it("meets all skill difficulty targets", () => {
    const report = auditReadingBank(
      readingWritingBank,
    );

    for (const row of report.coverage) {
      expect(row.easy).toBeGreaterThanOrEqual(
        8,
      );
      expect(
        row.medium,
      ).toBeGreaterThanOrEqual(10);
      expect(row.hard).toBeGreaterThanOrEqual(
        10,
      );
    }
  });
});
