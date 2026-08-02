import {
  diagnoseReadingBlueprint,
} from "./blueprintEngine";
import {
  readingWritingBank,
} from "./questionBank";
import {
  readingModule1Blueprint,
  readingModule2EasyBlueprint,
  readingModule2HardBlueprint,
  type ReadingBlueprintSlot,
} from "./readingModuleBlueprint";
import type {
  ExamQuestion,
} from "./types";

export interface BlueprintValidationRow {
  name: string;
  total: number;
  expectedTotal: number;
  shortages: number;
  slots: {
    slotIndex: number;
    requested: number;
    available: number;
    ready: boolean;
  }[];
}

export interface ReadingBlueprintValidationReport {
  passed: boolean;
  issues: string[];
  rows: BlueprintValidationRow[];
}

function validateBlueprint(
  name: string,
  blueprint: ReadingBlueprintSlot[],
  bank: ExamQuestion[],
): BlueprintValidationRow {
  /*
   * Deliberately omit the module filter. Production selection now treats
   * question-level module metadata as a hint rather than a hard restriction.
   */
  const diagnostics =
    diagnoseReadingBlueprint(
      bank,
      blueprint,
    );

  return {
    name,
    total: blueprint.reduce(
      (sum, slot) =>
        sum + slot.count,
      0,
    ),
    expectedTotal: 27,
    shortages:
      diagnostics.filter(
        (slot) =>
          slot.available <
          slot.requested,
      ).length,
    slots: diagnostics.map(
      (slot) => ({
        slotIndex:
          slot.slotIndex,
        requested:
          slot.requested,
        available:
          slot.available,
        ready:
          slot.available >=
          slot.requested,
      }),
    ),
  };
}

export function validateReadingBlueprints(
  bank: ExamQuestion[] =
    readingWritingBank,
): ReadingBlueprintValidationReport {
  const rows = [
    validateBlueprint(
      "Module 1",
      readingModule1Blueprint,
      bank,
    ),
    validateBlueprint(
      "Module 2 Easy",
      readingModule2EasyBlueprint,
      bank,
    ),
    validateBlueprint(
      "Module 2 Hard",
      readingModule2HardBlueprint,
      bank,
    ),
  ];

  const issues: string[] = [];

  for (const row of rows) {
    if (
      row.total !==
      row.expectedTotal
    ) {
      issues.push(
        `${row.name}: expected ${row.expectedTotal} questions; found ${row.total}.`,
      );
    }

    for (const slot of row.slots) {
      if (!slot.ready) {
        issues.push(
          `${row.name} slot ${slot.slotIndex}: requested ${slot.requested}; available ${slot.available}.`,
        );
      }
    }
  }

  return {
    passed:
      issues.length === 0,
    issues,
    rows,
  };
}
