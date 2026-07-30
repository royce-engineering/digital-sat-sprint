export interface ReadingBlueprint {
  module: 1 | 2;

  domain:
    | "Information and Ideas"
    | "Craft and Structure"
    | "Expression of Ideas"
    | "Standard English Conventions";

  skill: string;

  passageType: "Science" | "History" | "Literature" | "Social Science";

  difficulty: "Easy" | "Medium" | "Hard";

  estimatedSeconds: number;
}
