import {
  runVocabularyProductionQualityGate,
} from "@/lib/adaptive/vocabularyProductionQualityGate";

describe("Vocabulary production quality gate", () => {
  it("passes the complete 100-question Vocabulary bank", () => {
    const report =
      runVocabularyProductionQualityGate(
        1000,
      );

    expect(report.passed).toBe(
      true,
    );

    expect(
      report.vocabularyQuestions,
    ).toBe(100);

    expect(
      report.uniqueCorrectWords,
    ).toBe(100);

    expect(report.issues).toEqual(
      [],
    );

    expect(
      report.unreachableQuestions,
    ).toBe(0);
  });
});
