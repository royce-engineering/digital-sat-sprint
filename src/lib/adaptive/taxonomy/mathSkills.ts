/**
 * SAT Math Skill Taxonomy
 * Shared across Blueprint, Adaptive Engine, Analytics and Recommendation Engine.
 */

export const MathSkills = {
  Algebra: [
    "Linear Equations",
    "Systems of Equations",
    "Linear Functions",
    "Inequalities",
    "Absolute Value",
  ],

  AdvancedMath: [
    "Quadratic Functions",
    "Polynomial Equations",
    "Exponential Functions",
    "Radical Equations",
    "Function Composition",
  ],

  ProblemSolvingAndDataAnalysis: [
    "Ratios",
    "Percent",
    "Probability",
    "Statistics",
    "Two-way Tables",
  ],

  GeometryAndTrigonometry: [
    "Triangles",
    "Circles",
    "Area and Perimeter",
    "Volume",
    "Trigonometry",
  ],
} as const;

type Values<T> = T[keyof T];
type ArrayValues<T> = T extends readonly (infer U)[] ? U : never;

export type MathSkill = ArrayValues<Values<typeof MathSkills>>;
