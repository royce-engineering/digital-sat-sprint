import type { ExamDifficulty, ExamQuestion, ExamSection } from "./types";
import { readingWritingBank } from "./questionBank";
import { mathBankV2 } from "./mathBankV2";
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

  return buildReadingModule(readingWritingBank, blueprint, {
    module,
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
  const bank = section === "Math" ? mathBankV2 : readingWritingBank;
  const blueprint = getBlueprint(section, difficulty, count);

  return selectByBlueprint(bank, blueprint, seed, exclude);
}
