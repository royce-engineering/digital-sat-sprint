import type { Difficulty, ReadingDomain, ReadingPassageType } from "./types";

export interface ReadingBlueprintSlot {
  count: number;
  domain: ReadingDomain;
  skills?: string[];
  passageTypes?: ReadingPassageType[];
  difficulty?: Difficulty;
}

export const readingModule1Blueprint: ReadingBlueprintSlot[] = [
  {
    count: 3,
    domain: "Information and Ideas",
    skills: ["Central Ideas and Details", "Inference", "Command of Evidence"],
  },
  {
    count: 3,
    domain: "Craft and Structure",
    skills: ["Words in Context", "Text Structure and Purpose"],
  },
  {
    count: 2,
    domain: "Expression of Ideas",
  },
  {
    count: 2,
    domain: "Standard English Conventions",
  },
];

export const readingModule2HardBlueprint: ReadingBlueprintSlot[] = [
  {
    count: 4,
    domain: "Information and Ideas",
    skills: ["Central Ideas and Details", "Inference", "Command of Evidence"],
    difficulty: "Hard",
  },
  {
    count: 3,
    domain: "Craft and Structure",
    skills: ["Words in Context", "Text Structure and Purpose"],
    difficulty: "Hard",
  },
  {
    count: 2,
    domain: "Expression of Ideas",
    difficulty: "Hard",
  },
  {
    count: 2,
    domain: "Standard English Conventions",
    difficulty: "Hard",
  },
];

export const readingModule2EasyBlueprint: ReadingBlueprintSlot[] = [
  {
    count: 4,
    domain: "Information and Ideas",
    skills: ["Central Ideas and Details", "Inference", "Command of Evidence"],
    difficulty: "Easy",
  },
  {
    count: 3,
    domain: "Craft and Structure",
    skills: ["Words in Context", "Text Structure and Purpose"],
    difficulty: "Easy",
  },
  {
    count: 2,
    domain: "Expression of Ideas",
    difficulty: "Easy",
  },
  {
    count: 2,
    domain: "Standard English Conventions",
    difficulty: "Easy",
  },
];
