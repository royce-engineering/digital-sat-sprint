import { diagnoseVocabularyExpansionPack3 } from "@/lib/adaptive/vocabularyExpansionPack3Diagnostic";

describe("Vocabulary expansion pack 3", () => {
  it("contains 36 balanced contextual questions", () => {
    const report = diagnoseVocabularyExpansionPack3();
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
