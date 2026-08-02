import { getBlueprint, selectByBlueprint, validateBlueprint } from "./blueprint";
import { mathBank } from "./questionBank";
import type { ExamDifficulty, ExamQuestion } from "./types";

export type MathStressRoute = "module1" | "module2-easy" | "module2-hard";

export interface MathStressFailure {
  route: MathStressRoute;
  seed: number;
  code:
    | "wrong-size"
    | "duplicate-id"
    | "cross-module-duplicate"
    | "blueprint-error"
    | "nondeterministic"
    | "insufficient-variation";
  message: string;
}

export interface MathStressRouteSummary {
  route: MathStressRoute;
  runs: number;
  failures: number;
  uniqueOrders: number;
  questionsReached: number;
  warningCount: number;
  maxWarningsPerRun: number;
}

export interface MathProductionSelectorStressReport {
  passed: boolean;
  seeds: number;
  totalRuns: number;
  failures: MathStressFailure[];
  routes: MathStressRouteSummary[];
}

const MODULE_SIZE = 22;
const idOf = (q: ExamQuestion) => q.examId || q.id;
const orderKey = (items: readonly ExamQuestion[]) => items.map(idOf).join("|");

function pathway(route: MathStressRoute): ExamDifficulty {
  if (route === "module2-easy") return "Easy";
  if (route === "module2-hard") return "Hard";
  return "Medium";
}

function selectRoute(
  route: MathStressRoute,
  seed: number,
  exclude: string[] = [],
): ExamQuestion[] {
  return selectByBlueprint(
    mathBank,
    getBlueprint("Math", pathway(route), MODULE_SIZE),
    seed,
    exclude,
  );
}

export function runMathProductionSelectorStress(
  seeds = 1000,
): MathProductionSelectorStressReport {
  const routes: MathStressRoute[] = [
    "module1",
    "module2-easy",
    "module2-hard",
  ];
  const failures: MathStressFailure[] = [];
  const orders = new Map(routes.map((r) => [r, new Set<string>()]));
  const reached = new Map(routes.map((r) => [r, new Set<string>()]));
  const failureCounts = new Map(routes.map((r) => [r, 0]));
  const warningCounts = new Map(routes.map((r) => [r, 0]));
  const maxWarnings = new Map(routes.map((r) => [r, 0]));

  const addFailure = (failure: MathStressFailure) => {
    failures.push(failure);
    failureCounts.set(
      failure.route,
      (failureCounts.get(failure.route) ?? 0) + 1,
    );
  };

  const validate = (
    route: MathStressRoute,
    seed: number,
    questions: ExamQuestion[],
    module1Ids: string[],
  ) => {
    const ids = questions.map(idOf);

    if (questions.length !== MODULE_SIZE) {
      addFailure({
        route,
        seed,
        code: "wrong-size",
        message: `Expected ${MODULE_SIZE}; found ${questions.length}.`,
      });
    }

    if (new Set(ids).size !== ids.length) {
      addFailure({
        route,
        seed,
        code: "duplicate-id",
        message: "Module contains duplicate question IDs.",
      });
    }

    if (route !== "module1") {
      const excluded = new Set(module1Ids);
      const repeated = ids.filter((id) => excluded.has(id));
      if (repeated.length > 0) {
        addFailure({
          route,
          seed,
          code: "cross-module-duplicate",
          message: `Module 2 reused ${repeated.length} Module 1 question(s).`,
        });
      }
    }

    const validation = validateBlueprint(
      questions,
      getBlueprint("Math", pathway(route), MODULE_SIZE),
    );

    for (const error of validation.errors) {
      addFailure({
        route,
        seed,
        code: "blueprint-error",
        message: error,
      });
    }

    warningCounts.set(
      route,
      (warningCounts.get(route) ?? 0) + validation.warnings.length,
    );
    maxWarnings.set(
      route,
      Math.max(maxWarnings.get(route) ?? 0, validation.warnings.length),
    );
  };

  for (let seed = 0; seed < seeds; seed += 1) {
    const module1 = selectRoute("module1", seed);
    const module1Again = selectRoute("module1", seed);
    const module1Ids = module1.map(idOf);

    validate("module1", seed, module1, []);

    if (orderKey(module1) !== orderKey(module1Again)) {
      addFailure({
        route: "module1",
        seed,
        code: "nondeterministic",
        message: "The same seed generated a different Module 1 order.",
      });
    }

    orders.get("module1")?.add(orderKey(module1));
    module1Ids.forEach((id) => reached.get("module1")?.add(id));

    for (const route of ["module2-easy", "module2-hard"] as const) {
      const module2 = selectRoute(route, seed, module1Ids);
      const module2Again = selectRoute(route, seed, module1Ids);

      validate(route, seed, module2, module1Ids);

      if (orderKey(module2) !== orderKey(module2Again)) {
        addFailure({
          route,
          seed,
          code: "nondeterministic",
          message: "The same seed and exclusions generated a different Module 2 order.",
        });
      }

      orders.get(route)?.add(orderKey(module2));
      module2.map(idOf).forEach((id) => reached.get(route)?.add(id));
    }
  }

  for (const route of routes) {
    const uniqueOrders = orders.get(route)?.size ?? 0;
    if (
      seeds >= 20 &&
      uniqueOrders < Math.max(10, Math.floor(seeds * 0.8))
    ) {
      addFailure({
        route,
        seed: -1,
        code: "insufficient-variation",
        message: `Only ${uniqueOrders} unique orders across ${seeds} seeds.`,
      });
    }
  }

  return {
    passed: failures.length === 0,
    seeds,
    totalRuns: seeds * routes.length,
    failures,
    routes: routes.map((route) => ({
      route,
      runs: seeds,
      failures: failureCounts.get(route) ?? 0,
      uniqueOrders: orders.get(route)?.size ?? 0,
      questionsReached: reached.get(route)?.size ?? 0,
      warningCount: warningCounts.get(route) ?? 0,
      maxWarningsPerRun: maxWarnings.get(route) ?? 0,
    })),
  };
}
