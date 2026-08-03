import { diagnoseVocabularyExpansionPack1 } from "@/lib/adaptive/vocabularyExpansionPack1Diagnostic";
describe("Vocabulary expansion pack 1", () => {
  it("has 36 balanced unique questions", () => {
    const r = diagnoseVocabularyExpansionPack1();
    expect(r.passed).toBe(true);
    expect(r.total).toBe(36);
    expect(r.uniqueWords).toBe(36);
    expect(r.difficulty).toEqual({ Easy: 12, Medium: 12, Hard: 12 });
    expect(r.answerPositions).toEqual({ A: 9, B: 9, C: 9, D: 9 });
  });
});
