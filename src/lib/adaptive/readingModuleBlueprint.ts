import type {
  Difficulty,
  ReadingDomain,
  ReadingPassageType,
} from "./types";

export interface ReadingBlueprintSlot {
  count: number;
  domain: ReadingDomain;
  skills?: string[];
  passageTypes?: ReadingPassageType[];
  difficulty?: Difficulty;
}

/**
 * Production Reading & Writing blueprint.
 *
 * Each module contains 27 questions.
 *
 * Domain distribution:
 *
 * Information and Ideas            10
 * Craft and Structure               7
 * Expression of Ideas               4
 * Standard English Conventions      6
 *                                  --
 *                                  27
 */
export const readingModule1Blueprint: ReadingBlueprintSlot[] = [
  {
    count: 4,
    domain: "Information and Ideas",
    skills: [
      "Central Ideas and Details",
      "Main Idea",
      "Inference",
    ],
  },
  {
    count: 3,
    domain: "Information and Ideas",
    skills: [
      "Command of Evidence",
      "Quantitative Evidence",
    ],
  },
  {
    count: 3,
    domain: "Information and Ideas",
    skills: [
      "Main Idea",
      "Inference",
      "Quantitative Evidence",
    ],
  },
  {
    count: 4,
    domain: "Craft and Structure",
    skills: [
      "Words in Context",
      "Text Structure and Purpose",
    ],
  },
  {
    count: 3,
    domain: "Craft and Structure",
    skills: [
      "Author's Purpose",
      "Cross-Text Connections",
    ],
  },
  {
    count: 2,
    domain: "Expression of Ideas",
    skills: ["Concision"],
  },
  {
    count: 2,
    domain: "Expression of Ideas",
    skills: ["Transitions"],
  },
  {
    count: 2,
    domain: "Standard English Conventions",
    skills: [
      "Sentence Boundaries",
      "Punctuation",
    ],
  },
  {
    count: 2,
    domain: "Standard English Conventions",
    skills: [
      "Verb Agreement",
      "Modifiers",
    ],
  },
  {
    count: 2,
    domain: "Standard English Conventions",
    skills: [
      "Parallel Structure",
      "Pronouns",
    ],
  },
];

function withDifficulty(
  difficulty: Difficulty,
): ReadingBlueprintSlot[] {
  return readingModule1Blueprint.map(
    (slot) => ({
      ...slot,
      skills: slot.skills
        ? [...slot.skills]
        : undefined,
      passageTypes:
        slot.passageTypes
          ? [...slot.passageTypes]
          : undefined,
      difficulty,
    }),
  );
}

export const readingModule2EasyBlueprint =
  withDifficulty("Easy");

export const readingModule2HardBlueprint =
  withDifficulty("Hard");
