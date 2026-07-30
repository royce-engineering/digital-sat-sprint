import type {
  ExamQuestion,
  ReadingDomain,
  ReadingModule,
  ReadingPassageType,
} from "./types";

import type { ReadingBlueprintSlot } from "./readingModuleBlueprint";

export interface ReadingSelectionRequest {
  count: number;
  module?: ReadingModule;
  domain?: ReadingDomain;
  skill?: string;
  skills?: string[];
  passageType?: ReadingPassageType;
  passageTypes?: ReadingPassageType[];
  difficulty?: "Easy" | "Medium" | "Hard";
  excludeIds?: string[];
  seed?: number;
}

export interface BuildReadingModuleOptions {
  seed?: number;
  excludeIds?: string[];
  module?: ReadingModule;
}

function createSeededRandom(seed: number): () => number {
  let state = seed >>> 0;

  return () => {
    state += 0x6d2b79f5;

    let value = state;

    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));

    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function getDomain(question: ExamQuestion): ReadingDomain | undefined {
  return question.blueprint?.domain ?? question.domain;
}

function getSkill(question: ExamQuestion): string | undefined {
  return question.blueprint?.skill ?? question.skill;
}

function getPassageType(
  question: ExamQuestion,
): ReadingPassageType | undefined {
  return question.blueprint?.passageType ?? question.passageType;
}

function getDifficulty(question: ExamQuestion): "Easy" | "Medium" | "Hard" {
  return question.blueprint?.difficulty ?? question.difficulty;
}

function getModule(question: ExamQuestion): ReadingModule | undefined {
  return question.blueprint?.module;
}

export function selectReadingQuestions(
  bank: ExamQuestion[],
  request: ReadingSelectionRequest,
): ExamQuestion[] {
  const excluded = new Set(request.excludeIds ?? []);

  const eligible = bank.filter((question) => {
    if (excluded.has(question.id)) {
      return false;
    }

    const questionModule = getModule(question);
    const questionSkill = getSkill(question);
    const questionPassageType = getPassageType(question);

    /*
     * Questions without blueprint.module remain eligible.
     * This preserves compatibility with your older banks.
     */
    if (
      request.module !== undefined &&
      questionModule !== undefined &&
      questionModule !== request.module
    ) {
      return false;
    }

    if (
      request.domain !== undefined &&
      getDomain(question) !== request.domain
    ) {
      return false;
    }

    if (request.skill !== undefined && questionSkill !== request.skill) {
      return false;
    }

    if (
      request.skills?.length &&
      (!questionSkill || !request.skills.includes(questionSkill))
    ) {
      return false;
    }

    if (
      request.passageType !== undefined &&
      questionPassageType !== request.passageType
    ) {
      return false;
    }

    if (
      request.passageTypes?.length &&
      (!questionPassageType ||
        !request.passageTypes.includes(questionPassageType))
    ) {
      return false;
    }

    if (
      request.difficulty !== undefined &&
      getDifficulty(question) !== request.difficulty
    ) {
      return false;
    }

    return true;
  });

  const random = createSeededRandom(request.seed ?? Date.now());

  return shuffle(eligible, random).slice(0, request.count);
}

export function buildReadingModule(
  bank: ExamQuestion[],
  blueprint: ReadingBlueprintSlot[],
  options: BuildReadingModuleOptions = {},
): ExamQuestion[] {
  const selected: ExamQuestion[] = [];

  const usedIds = new Set<string>(options.excludeIds ?? []);

  const baseSeed = options.seed ?? Date.now();

  blueprint.forEach((slot, slotIndex) => {
    const slotQuestions = selectReadingQuestions(bank, {
      count: slot.count,
      module: options.module,
      domain: slot.domain,
      skills: slot.skills,
      passageTypes: slot.passageTypes,
      difficulty: slot.difficulty,
      excludeIds: [...usedIds],

      // Each slot receives a deterministic,
      // but different, seed.
      seed: baseSeed + slotIndex,
    });

    for (const question of slotQuestions) {
      selected.push(question);
      usedIds.add(question.id);
    }
  });

  return selected;
}

export interface ReadingSlotDiagnostic {
  slotIndex: number;
  requested: number;
  available: number;
  domain: ReadingDomain;
  skills?: string[];
  passageTypes?: ReadingPassageType[];
  difficulty?: "Easy" | "Medium" | "Hard";
}

export function diagnoseReadingBlueprint(
  bank: ExamQuestion[],
  blueprint: ReadingBlueprintSlot[],
  module?: ReadingModule,
): ReadingSlotDiagnostic[] {
  return blueprint.map((slot, slotIndex) => {
    const available = selectReadingQuestions(bank, {
      count: Number.MAX_SAFE_INTEGER,
      module,
      domain: slot.domain,
      skills: slot.skills,
      passageTypes: slot.passageTypes,
      difficulty: slot.difficulty,
      seed: 1,
    }).length;

    return {
      slotIndex,
      requested: slot.count,
      available,
      domain: slot.domain,
      skills: slot.skills,
      passageTypes: slot.passageTypes,
      difficulty: slot.difficulty,
    };
  });
}
