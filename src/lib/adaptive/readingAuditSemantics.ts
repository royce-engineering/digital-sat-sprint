import type {
  ExamQuestion,
} from "./types";

const BLANK_CHOICE_SKILLS =
  new Set<string>([
    "Sentence Boundaries",
    "Punctuation",
  ]);

/**
 * In punctuation-completion questions, an empty choice intentionally means
 * “insert no punctuation.” It is not missing content.
 */
export function isIntentionalBlankPunctuationChoice(
  question: ExamQuestion,
  choiceText: string,
): boolean {
  if (choiceText !== "") {
    return false;
  }

  const skill =
    question.blueprint?.skill ??
    question.skill;

  return Boolean(
    skill &&
      BLANK_CHOICE_SKILLS.has(
        skill,
      ),
  );
}
