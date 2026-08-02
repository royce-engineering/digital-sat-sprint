import type { ExamDifficulty, ExamQuestion, ExamSection } from "./types";
import { readingWritingBank, mathBank } from "./questionBank";
import { getBlueprint, selectByBlueprint } from "./blueprint";
import { buildReadingModule } from "./blueprintEngine";
import {
  readingModule1Blueprint,
  readingModule2EasyBlueprint,
  readingModule2HardBlueprint,
} from "./readingModuleBlueprint";

export interface SelectReadingModuleOptions {
  module: 1 | 2;
  route?: "Easy" | "Hard";
  seed: number;
  exclude?: string[];
}

export function selectReadingModule({
  module,
  route = "Hard",
  seed,
  exclude = [],
}: SelectReadingModuleOptions): ExamQuestion[] {
  const blueprint =
    module === 1
      ? readingModule1Blueprint
      : route === "Hard"
        ? readingModule2HardBlueprint
        : readingModule2EasyBlueprint;

  /*
   * Do not filter candidates by question.blueprint.module.
   *
   * Difficulty, domain, skill, and the explicit exclusion list define
   * production eligibility. Historical question-level module tags were added
   * by content packs as placement hints, not as permanent hard restrictions.
   *
   * Keeping the hard module filter would make Module 2 Easy unable to use most
   * Easy questions because many older Easy records are tagged module 1.
   */
  return buildReadingModule(readingWritingBank, blueprint, {
    seed,
    excludeIds: exclude,
  });
}

export function selectModule(
  section: ExamSection,
  difficulty: ExamDifficulty,
  count: number,
  seed: number,
  exclude: string[] = [],
): ExamQuestion[] {
  const bank = section === "Math" ? mathBank : readingWritingBank;
  const blueprint = getBlueprint(section, difficulty, count);

  return selectByBlueprint(bank, blueprint, seed, exclude);
}
