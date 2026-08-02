import { readingWritingBank } from "./questionBank";
import type { ExamDifficulty, ExamQuestion } from "./types";

export type ReadingStressRoute =
  | "module1"
  | "module2-easy"
  | "module2-hard";

export interface ReadingStressFailure {
  route: ReadingStressRoute;
  seed: string;
  code:
    | "wrong-size"
    | "duplicate-id"
    | "nondeterministic"
    | "difficulty-profile"
    | "insufficient-variation";
  message: string;
}

export interface ReadingStressRouteSummary {
  route: ReadingStressRoute;
  runs: number;
  failures: number;
  uniqueOrders: number;
  questionsReached: number;
}

export interface ReadingSelectionStressReport {
  passed: boolean;
  seeds: number;
  moduleSize: number;
  totalRuns: number;
  failures: ReadingStressFailure[];
  routes: ReadingStressRouteSummary[];
}

const ROUTES: ReadingStressRoute[] = [
  "module1",
  "module2-easy",
  "module2-hard",
];

const idOf = (q: ExamQuestion) => q.examId || q.id;

function hashSeed(value: string): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function randomGenerator(seed: number): () => number {
  let state = seed || 1;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled<T>(values: readonly T[], seed: string): T[] {
  const output = [...values];
  const random = randomGenerator(hashSeed(seed));

  for (let i = output.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }

  return output;
}

function allowedDifficulties(
  route: ReadingStressRoute,
): ExamDifficulty[] {
  if (route === "module2-easy") return ["Easy", "Medium"];
  if (route === "module2-hard") return ["Medium", "Hard"];
  return ["Easy", "Medium", "Hard"];
}

export function buildStressReadingModule(
  route: ReadingStressRoute,
  seed: string,
  moduleSize = 27,
): ExamQuestion[] {
  const allowed = new Set(allowedDifficulties(route));
  const pool = readingWritingBank.filter((q) =>
    allowed.has(q.difficulty),
  );

  return shuffled(pool, `${route}:${seed}`).slice(0, moduleSize);
}

function orderKey(questions: ExamQuestion[]): string {
  return questions.map(idOf).join("|");
}

export function runReadingSelectionStressTest(
  seeds = 1000,
  moduleSize = 27,
): ReadingSelectionStressReport {
  const failures: ReadingStressFailure[] = [];
  const routes: ReadingStressRouteSummary[] = [];

  for (const route of ROUTES) {
    const orders = new Set<string>();
    const reached = new Set<string>();
    let routeFailures = 0;
    const allowed = new Set(allowedDifficulties(route));

    for (let i = 0; i < seeds; i += 1) {
      const seed = `stress-${i}`;
      const first = buildStressReadingModule(route, seed, moduleSize);
      const second = buildStressReadingModule(route, seed, moduleSize);
      const ids = first.map(idOf);

      const add = (
        code: ReadingStressFailure["code"],
        message: string,
      ) => {
        failures.push({ route, seed, code, message });
        routeFailures += 1;
      };

      if (first.length !== moduleSize) {
        add("wrong-size", `Expected ${moduleSize}; found ${first.length}.`);
      }

      if (new Set(ids).size !== ids.length) {
        add("duplicate-id", "Module contains duplicate question IDs.");
      }

      if (orderKey(first) !== orderKey(second)) {
        add("nondeterministic", "The same route and seed produced different orders.");
      }

      const invalid = first.filter((q) => !allowed.has(q.difficulty));
      if (invalid.length > 0) {
        add("difficulty-profile", `${invalid.length} questions violate the route profile.`);
      }

      orders.add(orderKey(first));
      ids.forEach((id) => reached.add(id));
    }

    const requiredOrders = Math.max(10, Math.floor(seeds * 0.8));
    if (orders.size < requiredOrders) {
      failures.push({
        route,
        seed: "(aggregate)",
        code: "insufficient-variation",
        message: `Only ${orders.size} unique orders across ${seeds} seeds.`,
      });
      routeFailures += 1;
    }

    routes.push({
      route,
      runs: seeds,
      failures: routeFailures,
      uniqueOrders: orders.size,
      questionsReached: reached.size,
    });
  }

  return {
    passed: failures.length === 0,
    seeds,
    moduleSize,
    totalRuns: seeds * ROUTES.length,
    failures,
    routes,
  };
}
