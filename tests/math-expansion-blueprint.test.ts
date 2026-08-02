import {
  summarizeMathExpansionBlueprint,
  validateMathExpansionBlueprint,
} from "@/lib/adaptive/mathExpansionBlueprint";

describe("Exact Math expansion blueprint", () => {
  it("defines a valid 72-question two-phase expansion", () => {
    const summary = summarizeMathExpansionBlueprint();

    expect(validateMathExpansionBlueprint()).toEqual([]);
    expect(summary.additions).toBe(72);
    expect(summary.projectedQuestions).toBe(216);
    expect(summary.phase1Additions).toBe(36);
    expect(summary.phase2Additions).toBe(36);
    expect(summary.byDomain).toEqual({
      "Geometry and Trigonometry": 30,
      Algebra: 16,
      "Advanced Math": 18,
      "Problem Solving and Data Analysis": 8,
    });
  });
});
