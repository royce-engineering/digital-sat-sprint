import type {
  ExamQuestion,
  ReadingDomain,
} from "./types";

export interface LegacyMetadataMigrationResult {
  questions: ExamQuestion[];
  migratedIds: string[];
}

const VOCAB_PREFIX = "rw-vocab-";
const VOCAB_DOMAIN: ReadingDomain =
  "Craft and Structure";

/**
 * Adds the missing Reading domain to the legacy rw-vocab-* bank.
 *
 * The migration is intentionally narrow:
 * - only examIds beginning with rw-vocab-;
 * - only questions whose direct domain is missing;
 * - no prompt, passage, choices, answer, skill, difficulty, or id changes.
 */
export function migrateLegacyVocabularyDomains(
  questions: readonly ExamQuestion[],
): LegacyMetadataMigrationResult {
  const migratedIds: string[] = [];

  const migrated = questions.map(
    (question): ExamQuestion => {
      if (
        !question.examId.startsWith(
          VOCAB_PREFIX,
        ) ||
        question.domain
      ) {
        return question;
      }

      migratedIds.push(question.examId);

      return {
        ...question,
        domain: VOCAB_DOMAIN,
        blueprint:
          question.blueprint
            ? {
                ...question.blueprint,
                domain:
                  question.blueprint
                    .domain ??
                  VOCAB_DOMAIN,
              }
            : question.blueprint,
      };
    },
  );

  return {
    questions: migrated,
    migratedIds,
  };
}
