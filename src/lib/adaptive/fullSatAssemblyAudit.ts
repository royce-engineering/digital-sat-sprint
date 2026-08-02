import {
  selectReadingModule,
  selectModule,
} from "./selectModule";
import type {
  ExamQuestion,
} from "./types";

export type AdaptiveRoute =
  | "Easy"
  | "Hard";

export interface FullSatAssembly {
  readingModule1: ExamQuestion[];
  readingModule2: ExamQuestion[];
  mathModule1: ExamQuestion[];
  mathModule2: ExamQuestion[];
}

export interface FullSatAssemblyIssue {
  seed: number;
  readingRoute: AdaptiveRoute;
  mathRoute: AdaptiveRoute;
  code:
    | "wrong-module-size"
    | "duplicate-within-module"
    | "cross-reading-duplicate"
    | "cross-math-duplicate"
    | "cross-section-id-collision"
    | "nondeterministic";
  message: string;
}

export interface FullSatAssemblyRouteSummary {
  readingRoute: AdaptiveRoute;
  mathRoute: AdaptiveRoute;
  runs: number;
  failures: number;
  uniqueFullTests: number;
  readingQuestionsReached: number;
  mathQuestionsReached: number;
}

export interface FullSatAssemblyAuditReport {
  passed: boolean;
  seeds: number;
  routeCombinations: number;
  totalAssemblies: number;
  failures: FullSatAssemblyIssue[];
  summaries: FullSatAssemblyRouteSummary[];
}

function idOf(
  question: ExamQuestion,
): string {
  return question.examId || question.id;
}

function moduleKey(
  questions: readonly ExamQuestion[],
): string {
  return questions
    .map(idOf)
    .join("|");
}

function assemblyKey(
  assembly: FullSatAssembly,
): string {
  return [
    moduleKey(
      assembly.readingModule1,
    ),
    moduleKey(
      assembly.readingModule2,
    ),
    moduleKey(
      assembly.mathModule1,
    ),
    moduleKey(
      assembly.mathModule2,
    ),
  ].join("::");
}

export function assembleFullSat(
  seed: number,
  readingRoute: AdaptiveRoute,
  mathRoute: AdaptiveRoute,
): FullSatAssembly {
  const readingModule1 =
    selectReadingModule({
      module: 1,
      seed,
    });

  const readingModule2 =
    selectReadingModule({
      module: 2,
      route: readingRoute,
      seed: seed + 10_000,
      exclude:
        readingModule1.map(idOf),
    });

  const mathModule1 =
    selectModule(
      "Math",
      "Medium",
      22,
      seed + 20_000,
    );

  const mathModule2 =
    selectModule(
      "Math",
      mathRoute,
      22,
      seed + 30_000,
      mathModule1.map(idOf),
    );

  return {
    readingModule1,
    readingModule2,
    mathModule1,
    mathModule2,
  };
}

function validateAssembly(
  seed: number,
  readingRoute: AdaptiveRoute,
  mathRoute: AdaptiveRoute,
  assembly: FullSatAssembly,
): FullSatAssemblyIssue[] {
  const issues:
    FullSatAssemblyIssue[] = [];

  const add = (
    code:
      FullSatAssemblyIssue["code"],
    message: string,
  ) => {
    issues.push({
      seed,
      readingRoute,
      mathRoute,
      code,
      message,
    });
  };

  const expectedSizes: Array<
    [
      keyof FullSatAssembly,
      number,
    ]
  > = [
    ["readingModule1", 27],
    ["readingModule2", 27],
    ["mathModule1", 22],
    ["mathModule2", 22],
  ];

  for (const [
    key,
    expected,
  ] of expectedSizes) {
    const questions =
      assembly[key];

    if (
      questions.length !==
      expected
    ) {
      add(
        "wrong-module-size",
        `${key}: expected ${expected}; found ${questions.length}.`,
      );
    }

    const ids =
      questions.map(idOf);

    if (
      new Set(ids).size !==
      ids.length
    ) {
      add(
        "duplicate-within-module",
        `${key} contains duplicate question IDs.`,
      );
    }
  }

  const reading1 =
    new Set(
      assembly.readingModule1.map(
        idOf,
      ),
    );

  const readingOverlap =
    assembly.readingModule2
      .map(idOf)
      .filter((id) =>
        reading1.has(id),
      );

  if (
    readingOverlap.length > 0
  ) {
    add(
      "cross-reading-duplicate",
      `Reading Module 2 reused ${readingOverlap.length} Module 1 question(s).`,
    );
  }

  const math1 =
    new Set(
      assembly.mathModule1.map(
        idOf,
      ),
    );

  const mathOverlap =
    assembly.mathModule2
      .map(idOf)
      .filter((id) =>
        math1.has(id),
      );

  if (
    mathOverlap.length > 0
  ) {
    add(
      "cross-math-duplicate",
      `Math Module 2 reused ${mathOverlap.length} Module 1 question(s).`,
    );
  }

  const readingIds =
    new Set([
      ...assembly.readingModule1.map(
        idOf,
      ),
      ...assembly.readingModule2.map(
        idOf,
      ),
    ]);

  const crossSection =
    [
      ...assembly.mathModule1,
      ...assembly.mathModule2,
    ]
      .map(idOf)
      .filter((id) =>
        readingIds.has(id),
      );

  if (
    crossSection.length > 0
  ) {
    add(
      "cross-section-id-collision",
      `${crossSection.length} ID collision(s) exist between Reading and Math.`,
    );
  }

  return issues;
}

export function runFullSatAssemblyAudit(
  seeds = 500,
): FullSatAssemblyAuditReport {
  const routePairs: Array<
    [AdaptiveRoute, AdaptiveRoute]
  > = [
    ["Easy", "Easy"],
    ["Easy", "Hard"],
    ["Hard", "Easy"],
    ["Hard", "Hard"],
  ];

  const failures:
    FullSatAssemblyIssue[] = [];

  const stats =
    new Map<
      string,
      {
        failures: number;
        assemblies: Set<string>;
        readingIds: Set<string>;
        mathIds: Set<string>;
      }
    >();

  for (const [
    readingRoute,
    mathRoute,
  ] of routePairs) {
    const key =
      `${readingRoute}-${mathRoute}`;

    stats.set(key, {
      failures: 0,
      assemblies:
        new Set<string>(),
      readingIds:
        new Set<string>(),
      mathIds:
        new Set<string>(),
    });

    for (
      let seed = 0;
      seed < seeds;
      seed += 1
    ) {
      const assembly =
        assembleFullSat(
          seed,
          readingRoute,
          mathRoute,
        );

      const repeated =
        assembleFullSat(
          seed,
          readingRoute,
          mathRoute,
        );

      const issues =
        validateAssembly(
          seed,
          readingRoute,
          mathRoute,
          assembly,
        );

      if (
        assemblyKey(assembly) !==
        assemblyKey(repeated)
      ) {
        issues.push({
          seed,
          readingRoute,
          mathRoute,
          code:
            "nondeterministic",
          message:
            "The same seed and route pair generated a different full test.",
        });
      }

      failures.push(...issues);

      const routeStats =
        stats.get(key);

      if (!routeStats) {
        continue;
      }

      routeStats.failures +=
        issues.length;

      routeStats.assemblies.add(
        assemblyKey(assembly),
      );

      [
        ...assembly.readingModule1,
        ...assembly.readingModule2,
      ]
        .map(idOf)
        .forEach((id) =>
          routeStats.readingIds.add(
            id,
          ),
        );

      [
        ...assembly.mathModule1,
        ...assembly.mathModule2,
      ]
        .map(idOf)
        .forEach((id) =>
          routeStats.mathIds.add(
            id,
          ),
        );
    }
  }

  return {
    passed:
      failures.length === 0,
    seeds,
    routeCombinations:
      routePairs.length,
    totalAssemblies:
      seeds *
      routePairs.length,
    failures,
    summaries:
      routePairs.map(
        ([
          readingRoute,
          mathRoute,
        ]) => {
          const key =
            `${readingRoute}-${mathRoute}`;
          const routeStats =
            stats.get(key);

          return {
            readingRoute,
            mathRoute,
            runs: seeds,
            failures:
              routeStats?.failures ??
              0,
            uniqueFullTests:
              routeStats
                ?.assemblies.size ??
              0,
            readingQuestionsReached:
              routeStats
                ?.readingIds.size ??
              0,
            mathQuestionsReached:
              routeStats
                ?.mathIds.size ??
              0,
          };
        },
      ),
  };
}
