import {
  selectReadingModule,
} from "./selectModule";
import {
  readingModule1Blueprint,
  readingModule2EasyBlueprint,
  readingModule2HardBlueprint,
  type ReadingBlueprintSlot,
} from "./readingModuleBlueprint";
import type {
  ExamQuestion,
} from "./types";

export type ProductionReadingRoute =
  | "module1"
  | "module2-easy"
  | "module2-hard";

export interface ProductionStressFailure {
  route: ProductionReadingRoute;
  seed: number;
  code:
    | "wrong-size"
    | "duplicate-id"
    | "cross-module-duplicate"
    | "nondeterministic"
    | "difficulty-profile"
    | "blueprint-slot-shortage"
    | "insufficient-variation";
  message: string;
}

export interface ProductionStressRouteSummary {
  route: ProductionReadingRoute;
  runs: number;
  failures: number;
  uniqueOrders: number;
  questionsReached: number;
}

export interface ProductionReadingStressReport {
  passed: boolean;
  seeds: number;
  totalRuns: number;
  failures: ProductionStressFailure[];
  routes: ProductionStressRouteSummary[];
}

function idOf(
  question: ExamQuestion,
): string {
  return (
    question.examId ||
    question.id
  );
}

function domainOf(
  question: ExamQuestion,
): string | undefined {
  return (
    question.blueprint?.domain ??
    question.domain
  );
}

function skillOf(
  question: ExamQuestion,
): string | undefined {
  return (
    question.blueprint?.skill ??
    question.skill
  );
}

function difficultyOf(
  question: ExamQuestion,
): string {
  return (
    question.blueprint?.difficulty ??
    question.difficulty
  );
}

function orderKey(
  questions: ExamQuestion[],
): string {
  return questions
    .map(idOf)
    .join("|");
}

function blueprintFor(
  route: ProductionReadingRoute,
): ReadingBlueprintSlot[] {
  if (
    route === "module2-easy"
  ) {
    return readingModule2EasyBlueprint;
  }

  if (
    route === "module2-hard"
  ) {
    return readingModule2HardBlueprint;
  }

  return readingModule1Blueprint;
}

function selectForRoute(
  route: ProductionReadingRoute,
  seed: number,
  module1Ids: string[] = [],
): ExamQuestion[] {
  if (
    route === "module1"
  ) {
    return selectReadingModule({
      module: 1,
      seed,
    });
  }

  return selectReadingModule({
    module: 2,
    route:
      route === "module2-easy"
        ? "Easy"
        : "Hard",
    seed,
    exclude: module1Ids,
  });
}

function validateBlueprintSlots(
  questions: ExamQuestion[],
  blueprint: ReadingBlueprintSlot[],
): string[] {
  const issues: string[] = [];
  let cursor = 0;

  blueprint.forEach(
    (slot, slotIndex) => {
      const slotQuestions =
        questions.slice(
          cursor,
          cursor + slot.count,
        );
      cursor += slot.count;

      if (
        slotQuestions.length !==
        slot.count
      ) {
        issues.push(
          `Slot ${slotIndex} expected ${slot.count} questions; found ${slotQuestions.length}.`,
        );
        return;
      }

      const invalid =
        slotQuestions.filter(
          (question) => {
            if (
              domainOf(question) !==
              slot.domain
            ) {
              return true;
            }

            if (
              slot.skills?.length &&
              !slot.skills.includes(
                skillOf(question) ??
                  "",
              )
            ) {
              return true;
            }

            if (
              slot.difficulty &&
              difficultyOf(
                question,
              ) !==
                slot.difficulty
            ) {
              return true;
            }

            return false;
          },
        );

      if (
        invalid.length > 0
      ) {
        issues.push(
          `Slot ${slotIndex} contains ${invalid.length} question(s) that do not satisfy the slot constraints.`,
        );
      }
    },
  );

  return issues;
}

function validateModule(
  route: ProductionReadingRoute,
  seed: number,
  questions: ExamQuestion[],
  module1Ids: string[],
): ProductionStressFailure[] {
  const failures:
    ProductionStressFailure[] = [];
  const ids =
    questions.map(idOf);

  const add = (
    code:
      ProductionStressFailure["code"],
    message: string,
  ) => {
    failures.push({
      route,
      seed,
      code,
      message,
    });
  };

  if (
    questions.length !== 27
  ) {
    add(
      "wrong-size",
      `Expected 27 questions; found ${questions.length}.`,
    );
  }

  if (
    new Set(ids).size !==
    ids.length
  ) {
    add(
      "duplicate-id",
      "The module contains duplicate question IDs.",
    );
  }

  if (
    route !== "module1"
  ) {
    const excluded =
      new Set(module1Ids);
    const repeated =
      ids.filter(
        (id) =>
          excluded.has(id),
      );

    if (
      repeated.length > 0
    ) {
      add(
        "cross-module-duplicate",
        `Module 2 reused ${repeated.length} Module 1 question(s).`,
      );
    }
  }

  if (
    route === "module2-easy"
  ) {
    const invalid =
      questions.filter(
        (question) =>
          difficultyOf(
            question,
          ) !== "Easy",
      );

    if (
      invalid.length > 0
    ) {
      add(
        "difficulty-profile",
        `${invalid.length} question(s) are not Easy.`,
      );
    }
  }

  if (
    route === "module2-hard"
  ) {
    const invalid =
      questions.filter(
        (question) =>
          difficultyOf(
            question,
          ) !== "Hard",
      );

    if (
      invalid.length > 0
    ) {
      add(
        "difficulty-profile",
        `${invalid.length} question(s) are not Hard.`,
      );
    }
  }

  const slotIssues =
    validateBlueprintSlots(
      questions,
      blueprintFor(route),
    );

  for (const issue of slotIssues) {
    add(
      "blueprint-slot-shortage",
      issue,
    );
  }

  return failures;
}

export function runProductionReadingSelectorStress(
  seeds = 1000,
): ProductionReadingStressReport {
  const failures:
    ProductionStressFailure[] = [];
  const summaries:
    ProductionStressRouteSummary[] = [];

  const routeOrders = new Map<
    ProductionReadingRoute,
    Set<string>
  >();
  const routeReached = new Map<
    ProductionReadingRoute,
    Set<string>
  >();
  const routeFailures = new Map<
    ProductionReadingRoute,
    number
  >();

  const routes:
    ProductionReadingRoute[] = [
      "module1",
      "module2-easy",
      "module2-hard",
    ];

  for (const route of routes) {
    routeOrders.set(
      route,
      new Set<string>(),
    );
    routeReached.set(
      route,
      new Set<string>(),
    );
    routeFailures.set(
      route,
      0,
    );
  }

  const recordFailure = (
    failure:
      ProductionStressFailure,
  ) => {
    failures.push(failure);
    routeFailures.set(
      failure.route,
      (
        routeFailures.get(
          failure.route,
        ) ?? 0
      ) + 1,
    );
  };

  for (
    let seed = 0;
    seed < seeds;
    seed += 1
  ) {
    const module1 =
      selectForRoute(
        "module1",
        seed,
      );
    const module1Again =
      selectForRoute(
        "module1",
        seed,
      );
    const module1Ids =
      module1.map(idOf);

    for (const failure of validateModule(
      "module1",
      seed,
      module1,
      [],
    )) {
      recordFailure(failure);
    }

    if (
      orderKey(module1) !==
      orderKey(module1Again)
    ) {
      recordFailure({
        route:
          "module1",
        seed,
        code:
          "nondeterministic",
        message:
          "The same seed generated a different Module 1 order.",
      });
    }

    routeOrders
      .get("module1")
      ?.add(orderKey(module1));

    for (const id of module1Ids) {
      routeReached
        .get("module1")
        ?.add(id);
    }

    for (const route of [
      "module2-easy",
      "module2-hard",
    ] as const) {
      const module2 =
        selectForRoute(
          route,
          seed,
          module1Ids,
        );
      const module2Again =
        selectForRoute(
          route,
          seed,
          module1Ids,
        );

      for (const failure of validateModule(
        route,
        seed,
        module2,
        module1Ids,
      )) {
        recordFailure(failure);
      }

      if (
        orderKey(module2) !==
        orderKey(
          module2Again,
        )
      ) {
        recordFailure({
          route,
          seed,
          code:
            "nondeterministic",
          message:
            "The same seed and exclusion set generated a different Module 2 order.",
        });
      }

      routeOrders
        .get(route)
        ?.add(
          orderKey(module2),
        );

      for (const id of module2.map(idOf)) {
        routeReached
          .get(route)
          ?.add(id);
      }
    }
  }

  for (const route of routes) {
    const uniqueOrders =
      routeOrders.get(route)
        ?.size ?? 0;

    if (
      seeds >= 20 &&
      uniqueOrders <
        Math.max(
          10,
          Math.floor(
            seeds * 0.8,
          ),
        )
    ) {
      recordFailure({
        route,
        seed: -1,
        code:
          "insufficient-variation",
        message: `Only ${uniqueOrders} unique orders were generated across ${seeds} seeds.`,
      });
    }

    summaries.push({
      route,
      runs: seeds,
      failures:
        routeFailures.get(
          route,
        ) ?? 0,
      uniqueOrders,
      questionsReached:
        routeReached.get(
          route,
        )?.size ?? 0,
    });
  }

  return {
    passed:
      failures.length === 0,
    seeds,
    totalRuns:
      seeds * 3,
    failures,
    routes: summaries,
  };
}
