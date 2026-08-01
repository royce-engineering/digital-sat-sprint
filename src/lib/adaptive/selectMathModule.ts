import type { ExamQuestion } from "./types";
import { getBlueprint, selectByBlueprint } from "./blueprint";
import { mathBankV2 } from "./mathBankV2";

export type MathAdaptiveRoute = "Easy" | "Hard";

export interface SelectMathModuleOptions {
  module: 1 | 2;
  route?: MathAdaptiveRoute;
  seed: number;
  exclude?: string[];
}

/**
 * Builds one 22-question Digital SAT Math module.
 *
 * Module 1 uses the balanced Medium pathway. Module 2 uses the adaptive
 * Easy or Hard pathway selected from Module 1 performance.
 */
export function selectMathModule({
  module,
  route = "Hard",
  seed,
  exclude = [],
}: SelectMathModuleOptions): ExamQuestion[] {
  const pathway = module === 1 ? "Medium" : route;
  const blueprint = getBlueprint("Math", pathway, 22);

  return selectByBlueprint(mathBankV2, blueprint, seed, exclude);
}
