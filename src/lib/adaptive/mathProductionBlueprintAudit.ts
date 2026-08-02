import {
  getBlueprint,
  inferMathDomain,
  selectByBlueprint,
  validateBlueprint,
  type ModuleBlueprint,
} from "./blueprint";
import {
  mathBank,
} from "./questionBank";
import type {
  ExamDifficulty,
  ExamQuestion,
} from "./types";

export type MathProductionRoute =
  | "module1"
  | "module2-easy"
  | "module2-hard";

export interface MathDomainCapacityRow {
  domain: string;
  requested: number;
  available: number;
  availableAfterModule1: number;
  ready: boolean;
}

export interface MathTypeCapacityRow {
  questionType: string;
  target: number;
  available: number;
}

export interface MathBlueprintRouteReport {
  route: MathProductionRoute;
  pathway: ExamDifficulty;
  blueprintTotal: number;
  selectedTotal: number;
  validationPassed: boolean;
  errors: string[];
  warnings: string[];
  domainCapacity: MathDomainCapacityRow[];
  typeCapacity: MathTypeCapacityRow[];
  actualDomains: Record<string, number>;
  actualDifficulties: Record<string, number>;
  actualQuestionTypes: Record<string, number>;
}

export interface MathProductionBlueprintAuditReport {
  passed: boolean;
  totalQuestions: number;
  moduleSize: number;
  issues: string[];
  routes: MathBlueprintRouteReport[];
}

const MODULE_SIZE = 22;
const AUDIT_SEED = 5401;

function idOf(
  question: ExamQuestion,
): string {
  return question.examId || question.id;
}

function routeBlueprint(
  route: MathProductionRoute,
): {
  pathway: ExamDifficulty;
  blueprint: ModuleBlueprint;
} {
  const pathway: ExamDifficulty =
    route === "module2-easy"
      ? "Easy"
      : route === "module2-hard"
        ? "Hard"
        : "Medium";

  return {
    pathway,
    blueprint: getBlueprint(
      "Math",
      pathway,
      MODULE_SIZE,
    ),
  };
}

function domainCapacity(
  bank: readonly ExamQuestion[],
  blueprint: ModuleBlueprint,
  excludedIds: ReadonlySet<string>,
): MathDomainCapacityRow[] {
  return Object.entries(
    blueprint.domains,
  ).map(([domain, requested]) => {
    const available = bank.filter(
      (question) =>
        inferMathDomain(question) ===
        domain,
    ).length;

    const availableAfterModule1 =
      bank.filter(
        (question) =>
          !excludedIds.has(
            idOf(question),
          ) &&
          inferMathDomain(question) ===
            domain,
      ).length;

    return {
      domain,
      requested,
      available,
      availableAfterModule1,
      ready:
        availableAfterModule1 >=
        requested,
    };
  });
}

function typeCapacity(
  bank: readonly ExamQuestion[],
  blueprint: ModuleBlueprint,
): MathTypeCapacityRow[] {
  return Object.entries(
    blueprint.questionTypes,
  ).map(
    ([questionType, target]) => ({
      questionType,
      target: target ?? 0,
      available: bank.filter(
        (question) =>
          question.questionType ===
          questionType,
      ).length,
    }),
  );
}

function buildRouteReport(
  route: MathProductionRoute,
  module1: ExamQuestion[],
): MathBlueprintRouteReport {
  const { pathway, blueprint } =
    routeBlueprint(route);

  const excludedIds =
    route === "module1"
      ? new Set<string>()
      : new Set(
          module1.map(idOf),
        );

  const selected =
    selectByBlueprint(
      mathBank,
      blueprint,
      AUDIT_SEED +
        (route === "module1"
          ? 0
          : route ===
              "module2-easy"
            ? 1
            : 2),
      [...excludedIds],
    );

  const validation =
    validateBlueprint(
      selected,
      blueprint,
    );

  return {
    route,
    pathway,
    blueprintTotal:
      blueprint.count,
    selectedTotal:
      selected.length,
    validationPassed:
      validation.valid,
    errors:
      validation.errors,
    warnings:
      validation.warnings,
    domainCapacity:
      domainCapacity(
        mathBank,
        blueprint,
        excludedIds,
      ),
    typeCapacity:
      typeCapacity(
        mathBank.filter(
          (question) =>
            !excludedIds.has(
              idOf(question),
            ),
        ),
        blueprint,
      ),
    actualDomains:
      validation.actual.domains,
    actualDifficulties:
      validation.actual
        .difficulties,
    actualQuestionTypes:
      validation.actual
        .questionTypes,
  };
}

export function auditMathProductionBlueprint(): MathProductionBlueprintAuditReport {
  const module1Blueprint =
    routeBlueprint(
      "module1",
    ).blueprint;

  const module1 =
    selectByBlueprint(
      mathBank,
      module1Blueprint,
      AUDIT_SEED,
    );

  const routes = [
    buildRouteReport(
      "module1",
      module1,
    ),
    buildRouteReport(
      "module2-easy",
      module1,
    ),
    buildRouteReport(
      "module2-hard",
      module1,
    ),
  ];

  const issues: string[] = [];

  for (const route of routes) {
    if (
      route.blueprintTotal !==
      MODULE_SIZE
    ) {
      issues.push(
        `${route.route}: blueprint contains ${route.blueprintTotal} questions instead of ${MODULE_SIZE}.`,
      );
    }

    if (
      route.selectedTotal !==
      MODULE_SIZE
    ) {
      issues.push(
        `${route.route}: selector returned ${route.selectedTotal} questions instead of ${MODULE_SIZE}.`,
      );
    }

    for (const row of route.domainCapacity) {
      if (!row.ready) {
        issues.push(
          `${route.route}: ${row.domain} has ${row.availableAfterModule1} eligible questions after exclusions; ${row.requested} required.`,
        );
      }
    }

    for (const error of route.errors) {
      issues.push(
        `${route.route}: ${error}`,
      );
    }
  }

  return {
    passed:
      issues.length === 0,
    totalQuestions:
      mathBank.length,
    moduleSize:
      MODULE_SIZE,
    issues,
    routes,
  };
}
