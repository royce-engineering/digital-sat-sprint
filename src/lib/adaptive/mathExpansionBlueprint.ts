export type MathExpansionDifficulty =
  | "Easy"
  | "Medium"
  | "Hard";

export type MathExpansionQuestionType =
  | "multiple-choice"
  | "student-response"
  | "table"
  | "graph"
  | "modeling";

export interface MathExpansionBlueprintCell {
  phase: 1 | 2;
  domain: string;
  skill: string;
  difficulty: MathExpansionDifficulty;
  questionType: MathExpansionQuestionType;
  count: number;
  rationale: string;
}

export interface MathExpansionBlueprintSummary {
  currentQuestions: number;
  additions: number;
  projectedQuestions: number;
  phase1Additions: number;
  phase2Additions: number;
  byDomain: Record<string, number>;
  byDifficulty: Record<string, number>;
  byQuestionType: Record<string, number>;
  newSkills: string[];
  cells: MathExpansionBlueprintCell[];
}

export const mathExpansionBlueprintCells:
  MathExpansionBlueprintCell[] = [
    // Phase 1 — Geometry breadth + the exact Module 1 graph shortage.
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Circles",
      difficulty: "Easy",
      questionType: "student-response",
      count: 2,
      rationale:
        "Current Geometry Easy inventory has only 3 Circles SPR questions.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Circles",
      difficulty: "Medium",
      questionType: "student-response",
      count: 2,
      rationale:
        "Current Geometry Medium inventory has only 3 Circles SPR questions.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Circles",
      difficulty: "Hard",
      questionType: "student-response",
      count: 2,
      rationale:
        "Current Geometry Hard inventory has only 4 Circles SPR questions.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Triangles",
      difficulty: "Easy",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Adds a missing SAT Geometry content family.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Triangles",
      difficulty: "Medium",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Adds a missing SAT Geometry content family.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Triangles",
      difficulty: "Hard",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Adds a missing SAT Geometry content family.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Right Triangle Trigonometry",
      difficulty: "Easy",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Adds direct sine, cosine, tangent, and special-triangle coverage.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Right Triangle Trigonometry",
      difficulty: "Medium",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Adds direct sine, cosine, tangent, and special-triangle coverage.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Right Triangle Trigonometry",
      difficulty: "Hard",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Adds direct sine, cosine, tangent, and special-triangle coverage.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Area and Volume",
      difficulty: "Easy",
      questionType: "student-response",
      count: 2,
      rationale:
        "Adds missing measurement and three-dimensional geometry coverage.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Area and Volume",
      difficulty: "Medium",
      questionType: "student-response",
      count: 2,
      rationale:
        "Adds missing measurement and three-dimensional geometry coverage.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Area and Volume",
      difficulty: "Hard",
      questionType: "student-response",
      count: 2,
      rationale:
        "Adds missing measurement and three-dimensional geometry coverage.",
    },
    {
      phase: 1,
      domain: "Algebra",
      skill: "Slope and Graphs",
      difficulty: "Medium",
      questionType: "graph",
      count: 4,
      rationale:
        "Directly addresses all 403 Module 1 graph soft-target warnings.",
    },
    {
      phase: 1,
      domain: "Algebra",
      skill: "Slope and Graphs",
      difficulty: "Hard",
      questionType: "graph",
      count: 2,
      rationale:
        "Improves graph variety for the hard route.",
    },

    // Phase 2 — high-reuse Algebra/Advanced Math cells and selective PSDA growth.
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Angles and Parallel Lines",
      difficulty: "Easy",
      questionType: "multiple-choice",
      count: 1,
      rationale:
        "Adds another missing Geometry family while improving Easy coverage.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Angles and Parallel Lines",
      difficulty: "Hard",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Adds another missing Geometry family with hard-route emphasis.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Coordinate Geometry",
      difficulty: "Easy",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Adds distance, midpoint, and coordinate-shape coverage while improving Easy inventory.",
    },
    {
      phase: 1,
      domain: "Geometry and Trigonometry",
      skill: "Coordinate Geometry",
      difficulty: "Hard",
      questionType: "multiple-choice",
      count: 1,
      rationale:
        "Adds harder distance, midpoint, and coordinate-shape coverage.",
    },
    {
      phase: 2,
      domain: "Algebra",
      skill: "Linear Equations",
      difficulty: "Easy",
      questionType: "student-response",
      count: 1,
      rationale:
        "Reduces repeated exposure in a small SPR cell.",
    },
    {
      phase: 2,
      domain: "Algebra",
      skill: "Linear Equations",
      difficulty: "Medium",
      questionType: "student-response",
      count: 3,
      rationale:
        "Three existing Medium SPR questions appeared in every Module 1 run.",
    },
    {
      phase: 2,
      domain: "Algebra",
      skill: "Linear Equations",
      difficulty: "Hard",
      questionType: "student-response",
      count: 2,
      rationale:
        "Improves route flexibility and SPR freshness.",
    },
    {
      phase: 2,
      domain: "Algebra",
      skill: "Linear Functions",
      difficulty: "Medium",
      questionType: "table",
      count: 2,
      rationale:
        "Adds variety to a frequently selected table cell.",
    },
    {
      phase: 2,
      domain: "Algebra",
      skill: "Linear Modeling",
      difficulty: "Medium",
      questionType: "modeling",
      count: 1,
      rationale:
        "Broadens Module 1 modeling contexts.",
    },
    {
      phase: 2,
      domain: "Algebra",
      skill: "Linear Modeling",
      difficulty: "Hard",
      questionType: "modeling",
      count: 1,
      rationale:
        "Broadens hard-route modeling contexts.",
    },
    {
      phase: 2,
      domain: "Advanced Math",
      skill: "Exponential Functions",
      difficulty: "Easy",
      questionType: "multiple-choice",
      count: 1,
      rationale:
        "Current exact cell contains only 2 questions.",
    },
    {
      phase: 2,
      domain: "Advanced Math",
      skill: "Exponential Functions",
      difficulty: "Medium",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Current exact cell contains only 2 questions and is heavily reused.",
    },
    {
      phase: 2,
      domain: "Advanced Math",
      skill: "Exponential Functions",
      difficulty: "Hard",
      questionType: "multiple-choice",
      count: 3,
      rationale:
        "Expands a small hard-route cell.",
    },
    {
      phase: 2,
      domain: "Advanced Math",
      skill: "Polynomial Operations",
      difficulty: "Easy",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Current Easy cell contains only 2 questions; this also restores the intended Easy expansion balance.",
    },
    {
      phase: 2,
      domain: "Advanced Math",
      skill: "Polynomial Operations",
      difficulty: "Hard",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Expands a small hard-route cell.",
    },
    {
      phase: 2,
      domain: "Advanced Math",
      skill: "Radical Equations",
      difficulty: "Easy",
      questionType: "multiple-choice",
      count: 2,
      rationale:
        "Current Easy cell contains only 2 questions; one planned Hard item is reassigned here to restore the target difficulty distribution.",
    },
    {
      phase: 2,
      domain: "Advanced Math",
      skill: "Radical Equations",
      difficulty: "Medium",
      questionType: "multiple-choice",
      count: 1,
      rationale:
        "Current exact cell contains only 2 questions.",
    },
    {
      phase: 2,
      domain: "Advanced Math",
      skill: "Radical Equations",
      difficulty: "Hard",
      questionType: "multiple-choice",
      count: 1,
      rationale:
        "Expands a small hard-route cell.",
    },
    {
      phase: 2,
      domain: "Advanced Math",
      skill: "Quadratic Equations",
      difficulty: "Easy",
      questionType: "student-response",
      count: 1,
      rationale:
        "Adds SPR variety without over-expanding the existing quadratic bank.",
    },
    {
      phase: 2,
      domain: "Advanced Math",
      skill: "Quadratic Equations",
      difficulty: "Medium",
      questionType: "student-response",
      count: 1,
      rationale:
        "Reduces high reuse among the three existing Medium SPR questions.",
    },
    {
      phase: 2,
      domain: "Advanced Math",
      skill: "Quadratic Equations",
      difficulty: "Hard",
      questionType: "student-response",
      count: 2,
      rationale:
        "Adds hard-route SPR variety.",
    },
    {
      phase: 2,
      domain: "Problem Solving and Data Analysis",
      skill: "Data Modeling",
      difficulty: "Medium",
      questionType: "table",
      count: 1,
      rationale:
        "Adds selective table variety without expanding a healthy cell excessively.",
    },
    {
      phase: 2,
      domain: "Problem Solving and Data Analysis",
      skill: "Data Modeling",
      difficulty: "Hard",
      questionType: "table",
      count: 1,
      rationale:
        "Adds selective hard-route table variety.",
    },
    {
      phase: 2,
      domain: "Problem Solving and Data Analysis",
      skill: "Ratios",
      difficulty: "Easy",
      questionType: "student-response",
      count: 1,
      rationale:
        "Adds contextual ratio and percent variety.",
    },
    {
      phase: 2,
      domain: "Problem Solving and Data Analysis",
      skill: "Ratios",
      difficulty: "Hard",
      questionType: "student-response",
      count: 1,
      rationale:
        "Adds hard-route ratio and percent variety.",
    },
    {
      phase: 2,
      domain: "Problem Solving and Data Analysis",
      skill: "Linear Modeling",
      difficulty: "Easy",
      questionType: "modeling",
      count: 1,
      rationale:
        "Introduces Easy PSDA modeling, which is absent from the current inventory.",
    },
    {
      phase: 2,
      domain: "Problem Solving and Data Analysis",
      skill: "Linear Modeling",
      difficulty: "Medium",
      questionType: "modeling",
      count: 1,
      rationale:
        "Adds a new real-world modeling context.",
    },
    {
      phase: 2,
      domain: "Problem Solving and Data Analysis",
      skill: "Linear Modeling",
      difficulty: "Hard",
      questionType: "modeling",
      count: 2,
      rationale:
        "Adds hard-route real-world modeling variety.",
    },
  ];

function sumBy(
  cells: readonly MathExpansionBlueprintCell[],
  keyFor: (cell: MathExpansionBlueprintCell) => string,
): Record<string, number> {
  const output: Record<string, number> = {};

  for (const cell of cells) {
    const key = keyFor(cell);
    output[key] = (output[key] ?? 0) + cell.count;
  }

  return output;
}

export function summarizeMathExpansionBlueprint():
  MathExpansionBlueprintSummary {
  const additions =
    mathExpansionBlueprintCells.reduce(
      (sum, cell) => sum + cell.count,
      0,
    );

  const phase1Additions =
    mathExpansionBlueprintCells
      .filter((cell) => cell.phase === 1)
      .reduce((sum, cell) => sum + cell.count, 0);

  const phase2Additions =
    additions - phase1Additions;

  const currentSkills = new Set([
    "Circles",
    "Exponential Functions",
    "Polynomial Operations",
    "Quadratic Equations",
    "Radical Equations",
    "Linear Equations",
    "Linear Functions",
    "Linear Modeling",
    "Slope and Graphs",
    "Data Modeling",
    "Ratios",
  ]);

  return {
    currentQuestions: 144,
    additions,
    projectedQuestions: 144 + additions,
    phase1Additions,
    phase2Additions,
    byDomain: sumBy(
      mathExpansionBlueprintCells,
      (cell) => cell.domain,
    ),
    byDifficulty: sumBy(
      mathExpansionBlueprintCells,
      (cell) => cell.difficulty,
    ),
    byQuestionType: sumBy(
      mathExpansionBlueprintCells,
      (cell) => cell.questionType,
    ),
    newSkills: [
      ...new Set(
        mathExpansionBlueprintCells
          .map((cell) => cell.skill)
          .filter((skill) => !currentSkills.has(skill)),
      ),
    ].sort(),
    cells: mathExpansionBlueprintCells,
  };
}

export function validateMathExpansionBlueprint(): string[] {
  const summary = summarizeMathExpansionBlueprint();
  const issues: string[] = [];

  if (summary.additions !== 72) {
    issues.push(`Expected 72 additions; found ${summary.additions}.`);
  }

  if (summary.projectedQuestions !== 216) {
    issues.push(
      `Expected 216 projected questions; found ${summary.projectedQuestions}.`,
    );
  }

  if (summary.phase1Additions !== 36 || summary.phase2Additions !== 36) {
    issues.push(
      `Expected 36 questions per phase; found ${summary.phase1Additions} and ${summary.phase2Additions}.`,
    );
  }

  const expectedDomains: Record<string, number> = {
    Algebra: 16,
    "Advanced Math": 18,
    "Problem Solving and Data Analysis": 8,
    "Geometry and Trigonometry": 30,
  };

  for (const [domain, expected] of Object.entries(expectedDomains)) {
    if ((summary.byDomain[domain] ?? 0) !== expected) {
      issues.push(
        `${domain}: expected ${expected}; found ${summary.byDomain[domain] ?? 0}.`,
      );
    }
  }

  const expectedDifficulty: Record<string, number> = {
    Easy: 20,
    Medium: 24,
    Hard: 28,
  };

  for (const [difficulty, expected] of Object.entries(expectedDifficulty)) {
    if ((summary.byDifficulty[difficulty] ?? 0) !== expected) {
      issues.push(
        `${difficulty}: expected ${expected}; found ${summary.byDifficulty[difficulty] ?? 0}.`,
      );
    }
  }

  return issues;
}
