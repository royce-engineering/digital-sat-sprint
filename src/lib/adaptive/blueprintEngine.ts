import type {
  ExamQuestion,
  ReadingDomain,
  ReadingModule,
  ReadingPassageType,
} from "./types";
import type { ReadingBlueprintSlot } from "./readingModuleBlueprint";
import { toExamId } from "./identifiers";
import {
  createSeededRandom,
  shuffleWithRandom,
} from "./core/random";

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

function getDomain(
  question: ExamQuestion,
): ReadingDomain | undefined {
  return question.blueprint?.domain ?? question.domain;
}

function getSkill(
  question: ExamQuestion,
): string | undefined {
  return question.blueprint?.skill ?? question.skill;
}

function getPassageType(
  question: ExamQuestion,
): ReadingPassageType | undefined {
  return (
    question.blueprint?.passageType ??
    question.passageType
  );
}

function getDifficulty(
  question: ExamQuestion,
): "Easy" | "Medium" | "Hard" {
  return (
    question.blueprint?.difficulty ??
    question.difficulty
  );
}

function getModule(
  question: ExamQuestion,
): ReadingModule | undefined {
  return question.blueprint?.module;
}

export function selectReadingQuestions(
  bank: ExamQuestion[],
  request: ReadingSelectionRequest,
): ExamQuestion[] {
  const excluded = new Set(
    (request.excludeIds ?? []).map(toExamId),
  );

  const eligible = bank.filter((question) => {
    if (excluded.has(question.examId)) {
      return false;
    }

    const questionModule = getModule(question);
    const questionSkill = getSkill(question);
    const questionPassageType =
      getPassageType(question);

    /*
     * Questions without blueprint.module remain eligible.
     * This preserves compatibility with older banks.
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

    if (
      request.skill !== undefined &&
      questionSkill !== request.skill
    ) {
      return false;
    }

    if (
      request.skills?.length &&
      (!questionSkill ||
        !request.skills.includes(questionSkill))
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
        !request.passageTypes.includes(
          questionPassageType,
        ))
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

  const random = createSeededRandom(
    request.seed ?? Date.now(),
  );

  return shuffleWithRandom(
    eligible,
    random,
  ).slice(0, request.count);
}

export function buildReadingModule(
  bank: ExamQuestion[],
  blueprint: ReadingBlueprintSlot[],
  options: BuildReadingModuleOptions = {},
): ExamQuestion[] {
  const selected: ExamQuestion[] = [];
  const usedIds = new Set<string>(
    (options.excludeIds ?? []).map(toExamId),
  );
  const baseSeed = options.seed ?? Date.now();

  blueprint.forEach((slot, slotIndex) => {
    const slotQuestions = selectReadingQuestions(
      bank,
      {
        count: slot.count,
        module: options.module,
        domain: slot.domain,
        skills: slot.skills,
        passageTypes: slot.passageTypes,
        difficulty: slot.difficulty,
        excludeIds: [...usedIds],

        // Preserve the pre-migration slot-seed rule exactly.
        seed: baseSeed + slotIndex,
      },
    );

    for (const question of slotQuestions) {
      selected.push(question);
      usedIds.add(question.examId);
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
