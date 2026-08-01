import type { Difficulty, MathDomain } from "./types";

export interface MathBlueprintSlot {
  count: number;
  domain: MathDomain;
  skills?: string[];
  difficulty?: Difficulty;
}

/** Domain distribution for a 22-question Math module: 7 / 7 / 5 / 3. */
export const mathModule1Blueprint: MathBlueprintSlot[] = [
  { count: 7, domain: "Algebra" },
  { count: 7, domain: "Advanced Math" },
  { count: 5, domain: "Problem Solving and Data Analysis" },
  { count: 3, domain: "Geometry and Trigonometry" },
];

export const mathModule2HardBlueprint: MathBlueprintSlot[] = [
  { count: 7, domain: "Algebra", difficulty: "Hard" },
  { count: 7, domain: "Advanced Math", difficulty: "Hard" },
  { count: 5, domain: "Problem Solving and Data Analysis", difficulty: "Hard" },
  { count: 3, domain: "Geometry and Trigonometry", difficulty: "Hard" },
];

export const mathModule2EasyBlueprint: MathBlueprintSlot[] = [
  { count: 7, domain: "Algebra", difficulty: "Easy" },
  { count: 7, domain: "Advanced Math", difficulty: "Easy" },
  { count: 5, domain: "Problem Solving and Data Analysis", difficulty: "Easy" },
  { count: 3, domain: "Geometry and Trigonometry", difficulty: "Easy" },
];
