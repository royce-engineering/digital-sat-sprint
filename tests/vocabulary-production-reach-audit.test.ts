import { auditVocabularyProductionReach } from "@/lib/adaptive/vocabularyProductionReachAudit";

describe("Vocabulary production reachability", () => {
  it("reaches every production Vocabulary question", () => {
    const report = auditVocabularyProductionReach(1000);
    expect(report.passed).toBe(true);
    expect(report.totalVocabularyQuestions).toBe(100);
    expect(report.pack1).toBe(36);
    expect(report.pack2).toBe(36);
    expect(report.unreachableIds).toEqual([]);
  });
});
