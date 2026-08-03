import { diagnoseVocabularyExpansionPack2 } from "@/lib/adaptive/vocabularyExpansionPack2Diagnostic";

describe("Vocabulary expansion pack 2", () => {
  it("contains 36 balanced contextual questions", () => {
    const report = diagnoseVocabularyExpansionPack2();
    expect(report.passed).toBe(true);
    expect(report.total).toBe(36);
    expect(report.uniqueWords).toBe(36);
    expect(report.difficulty).toEqual({
      Easy: 12,
      Medium: 12,
      Hard: 12,
    });
  });
});
