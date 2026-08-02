import { runReadingSelectionStressTest } from "@/lib/adaptive/readingSelectionStressTest";

describe("Reading selection stress test", () => {
  it("passes 1,000 seeds for all three routes", () => {
    const report = runReadingSelectionStressTest(1000, 27);
    expect(report.failures).toEqual([]);
    expect(report.passed).toBe(true);
    expect(report.totalRuns).toBe(3000);
  });
});
