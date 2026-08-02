import {
  getBlueprint,
  selectByBlueprint,
  validateBlueprint,
} from "./blueprint";
import { mathBank } from "./questionBank";
import type { ExamDifficulty, ExamQuestion } from "./types";

export type MathExpansionRoute = "module1" | "module2-easy" | "module2-hard";

export interface MathInventoryCell {
  domain: string;
  skill: string;
  difficulty: string;
  questionType: string;
  count: number;
}

export interface MathExpansionRouteTelemetry {
  route: MathExpansionRoute;
  runs: number;
  warningRuns: number;
  warningTotal: number;
  maxWarningsPerRun: number;
  uniqueQuestionsReached: number;
  questionUsage: {
    questionId: string;
    count: number;
    domain: string;
    skill: string;
    difficulty: string;
    questionType: string;
  }[];
  warningMessages: {
    message: string;
    count: number;
  }[];
}

export interface MathExpansionPriority {
  rank: number;
  domain: string;
  skill: string;
  difficulty: string;
  questionType: string;
  currentCount: number;
  priorityScore: number;
  reasons: string[];
  suggestedAdditions: number;
}

export interface MathExpansionGapAuditReport {
  passed: boolean;
  totalQuestions: number;
  seeds: number;
  inventory: MathInventoryCell[];
  domainTotals: {
    domain: string;
    count: number;
  }[];
  difficultyTotals: {
    difficulty: string;
    count: number;
  }[];
  questionTypeTotals: {
    questionType: string;
    count: number;
  }[];
  routes: MathExpansionRouteTelemetry[];
  priorities: MathExpansionPriority[];
  suggestedExpansionTotal: number;
}

const MODULE_SIZE = 22;

function idOf(question: ExamQuestion): string {
  return question.examId || question.id;
}

function routeDifficulty(route: MathExpansionRoute): ExamDifficulty {
  if (route === "module2-easy") {
    return "Easy";
  }

  if (route === "module2-hard") {
    return "Hard";
  }

  return "Medium";
}

function countRows(
  values: string[],
  label: string,
): {
  [key: string]: string | number;
}[] {
  const counts = new Map<string, number>();

  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([value, count]) => ({
      [label]: value,
      count,
    }))
    .sort(
      (left, right) =>
        Number(right.count) - Number(left.count) ||
        String(left[label]).localeCompare(String(right[label])),
    );
}

function buildInventory(): MathInventoryCell[] {
  const cells = new Map<string, MathInventoryCell>();

  for (const question of mathBank) {
    const domain = question.mathDomain ?? "(missing)";
    const skill = question.skill ?? "(missing)";
    const difficulty = question.difficulty ?? "(missing)";
    const questionType = question.questionType ?? "(missing)";

    const key = [domain, skill, difficulty, questionType].join("||");

    const current = cells.get(key) ?? {
      domain,
      skill,
      difficulty,
      questionType,
      count: 0,
    };

    current.count += 1;
    cells.set(key, current);
  }

  return [...cells.values()].sort(
    (left, right) =>
      left.domain.localeCompare(right.domain) ||
      left.skill.localeCompare(right.skill) ||
      left.difficulty.localeCompare(right.difficulty) ||
      left.questionType.localeCompare(right.questionType),
  );
}

function routeTelemetry(
  route: MathExpansionRoute,
  seeds: number,
): MathExpansionRouteTelemetry {
  const warningMessages = new Map<string, number>();
  const usage = new Map<string, number>();
  const reached = new Set<string>();

  let warningRuns = 0;
  let warningTotal = 0;
  let maxWarningsPerRun = 0;

  for (let seed = 0; seed < seeds; seed += 1) {
    const module1 = selectByBlueprint(
      mathBank,
      getBlueprint("Math", "Medium", MODULE_SIZE),
      seed,
    );

    const exclude = route === "module1" ? [] : module1.map(idOf);

    const selected =
      route === "module1"
        ? module1
        : selectByBlueprint(
            mathBank,
            getBlueprint("Math", routeDifficulty(route), MODULE_SIZE),
            seed,
            exclude,
          );

    const validation = validateBlueprint(
      selected,
      getBlueprint("Math", routeDifficulty(route), MODULE_SIZE),
    );

    if (validation.warnings.length > 0) {
      warningRuns += 1;
    }

    warningTotal += validation.warnings.length;

    maxWarningsPerRun = Math.max(maxWarningsPerRun, validation.warnings.length);

    for (const warning of validation.warnings) {
      warningMessages.set(warning, (warningMessages.get(warning) ?? 0) + 1);
    }

    for (const question of selected) {
      const id = idOf(question);
      reached.add(id);
      usage.set(id, (usage.get(id) ?? 0) + 1);
    }
  }

  const questionById = new Map(
    mathBank.map((question) => [idOf(question), question]),
  );

  return {
    route,
    runs: seeds,
    warningRuns,
    warningTotal,
    maxWarningsPerRun,
    uniqueQuestionsReached: reached.size,
    questionUsage: [...usage.entries()]
      .map(([questionId, count]) => {
        const question = questionById.get(questionId);

        return {
          questionId,
          count,
          domain: question?.mathDomain ?? "(missing)",
          skill: question?.skill ?? "(missing)",
          difficulty: question?.difficulty ?? "(missing)",
          questionType: question?.questionType ?? "(missing)",
        };
      })
      .sort(
        (left, right) =>
          right.count - left.count ||
          left.questionId.localeCompare(right.questionId),
      ),
    warningMessages: [...warningMessages.entries()]
      .map(([message, count]) => ({
        message,
        count,
      }))
      .sort(
        (left, right) =>
          right.count - left.count || left.message.localeCompare(right.message),
      ),
  };
}

function buildPriorities(
  inventory: MathInventoryCell[],
  routes: MathExpansionRouteTelemetry[],
): MathExpansionPriority[] {
  const usageByCell = new Map<string, number>();
  const maxUsageByCell = new Map<string, number>();

  for (const route of routes) {
    for (const item of route.questionUsage) {
      const key = [
        item.domain,
        item.skill,
        item.difficulty,
        item.questionType,
      ].join("||");

      usageByCell.set(key, (usageByCell.get(key) ?? 0) + item.count);

      maxUsageByCell.set(
        key,
        Math.max(maxUsageByCell.get(key) ?? 0, item.count),
      );
    }
  }

  const priorities = inventory
    .map((cell) => {
      const key = [
        cell.domain,
        cell.skill,
        cell.difficulty,
        cell.questionType,
      ].join("||");

      const totalUsage = usageByCell.get(key) ?? 0;
      const maxUsage = maxUsageByCell.get(key) ?? 0;

      const reasons: string[] = [];
      let priorityScore = 0;

      if (cell.domain === "Geometry and Trigonometry") {
        priorityScore += 40;
        reasons.push(
          "Geometry is the smallest Math domain and supplies 3 questions per module.",
        );
      }

      if (cell.difficulty === "Hard") {
        priorityScore += 25;
        reasons.push("Module 2 Hard produced persistent soft-target warnings.");
      }

      if (cell.difficulty === "Medium") {
        priorityScore += 18;
        reasons.push("Module 1 produced the highest warning count.");
      }

      if (cell.count <= 2) {
        priorityScore += 25;
        reasons.push(
          `Only ${cell.count} question(s) exist in this exact inventory cell.`,
        );
      } else if (cell.count <= 4) {
        priorityScore += 12;
        reasons.push(
          `Only ${cell.count} questions exist in this exact inventory cell.`,
        );
      }

      if (maxUsage >= 300) {
        priorityScore += 20;
        reasons.push(
          "At least one question in this cell was selected very frequently.",
        );
      } else if (maxUsage >= 150) {
        priorityScore += 10;
        reasons.push("Questions in this cell have relatively high reuse.");
      }

      if (totalUsage > 0 && cell.count > 0) {
        const average = totalUsage / cell.count;

        if (average >= 300) {
          priorityScore += 15;
          reasons.push("Average selection frequency per question is high.");
        }
      }

      const suggestedAdditions =
        priorityScore >= 75
          ? 6
          : priorityScore >= 55
            ? 4
            : priorityScore >= 35
              ? 2
              : 0;

      return {
        rank: 0,
        domain: cell.domain,
        skill: cell.skill,
        difficulty: cell.difficulty,
        questionType: cell.questionType,
        currentCount: cell.count,
        priorityScore,
        reasons,
        suggestedAdditions,
      };
    })
    .filter((item) => item.suggestedAdditions > 0)
    .sort(
      (left, right) =>
        right.priorityScore - left.priorityScore ||
        left.domain.localeCompare(right.domain) ||
        left.skill.localeCompare(right.skill),
    )
    .map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

  return priorities;
}

export function auditMathExpansionGaps(
  seeds = 1000,
): MathExpansionGapAuditReport {
  const inventory = buildInventory();

  const routes = [
    routeTelemetry("module1", seeds),
    routeTelemetry("module2-easy", seeds),
    routeTelemetry("module2-hard", seeds),
  ];

  const priorities = buildPriorities(inventory, routes);

  return {
    passed: mathBank.length === 144,
    totalQuestions: mathBank.length,
    seeds,
    inventory,
    domainTotals: countRows(
      mathBank.map((question) => question.mathDomain ?? "(missing)"),
      "domain",
    ) as {
      domain: string;
      count: number;
    }[],
    difficultyTotals: countRows(
      mathBank.map((question) => question.difficulty),
      "difficulty",
    ) as {
      difficulty: string;
      count: number;
    }[],
    questionTypeTotals: countRows(
      mathBank.map((question) => question.questionType ?? "(missing)"),
      "questionType",
    ) as {
      questionType: string;
      count: number;
    }[],
    routes,
    priorities,
    suggestedExpansionTotal: priorities.reduce(
      (sum, item) => sum + item.suggestedAdditions,
      0,
    ),
  };
}

export function mathExpansionGapAuditJson(
  report: MathExpansionGapAuditReport,
): string {
  return JSON.stringify(report, null, 2);
}
