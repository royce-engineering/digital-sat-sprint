import {
  auditVocabularyExpansionGaps,
} from "@/lib/adaptive/vocabularyExpansionGapAudit";

describe("Vocabulary expansion gap audit", () => {
  it("detects production vocabulary inventory and route usage", () => {
    const report = auditVocabularyExpansionGaps(100);
    expect(report.passed).toBe(true);
    expect(report.vocabularyQuestions).toBeGreaterThan(0);
    expect(report.uniqueCorrectWords).toBeGreaterThan(0);
    expect(report.routes).toHaveLength(3);
  });
});
