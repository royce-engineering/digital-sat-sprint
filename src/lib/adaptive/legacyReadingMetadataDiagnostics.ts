import {
  vocabularyExamBank,
} from "./supplementalBank";
import {
  migrateLegacyVocabularyDomains,
} from "./legacyReadingMetadata";

export interface LegacyMetadataDiagnosticReport {
  passed: boolean;
  sourceCount: number;
  migratedCount: number;
  remainingMissingDomainIds: string[];
  unexpectedChangedIds: string[];
}

export function diagnoseLegacyVocabularyDomains(): LegacyMetadataDiagnosticReport {
  const result =
    migrateLegacyVocabularyDomains(
      vocabularyExamBank,
    );

  const remainingMissingDomainIds =
    result.questions
      .filter(
        (question) =>
          question.examId.startsWith(
            "rw-vocab-",
          ) &&
          !question.domain,
      )
      .map(
        (question) =>
          question.examId,
      );

  const unexpectedChangedIds =
    result.questions
      .filter(
        (question, index) => {
          const source =
            vocabularyExamBank[index];

          if (
            !question.examId.startsWith(
              "rw-vocab-",
            )
          ) {
            return (
              JSON.stringify(question) !==
              JSON.stringify(source)
            );
          }

          const {
            domain:
              _questionDomain,
            blueprint:
              questionBlueprint,
            ...questionRest
          } = question;
          const {
            domain:
              _sourceDomain,
            blueprint:
              sourceBlueprint,
            ...sourceRest
          } = source;

          const blueprintChangedOnlyByDomain =
            JSON.stringify({
              ...questionBlueprint,
              domain: undefined,
            }) ===
            JSON.stringify({
              ...sourceBlueprint,
              domain: undefined,
            });

          return (
            JSON.stringify(questionRest) !==
              JSON.stringify(sourceRest) ||
            !blueprintChangedOnlyByDomain
          );
        },
      )
      .map(
        (question) =>
          question.examId,
      );

  return {
    passed:
      result.migratedIds.length ===
        120 &&
      remainingMissingDomainIds
        .length === 0 &&
      unexpectedChangedIds.length === 0,
    sourceCount:
      vocabularyExamBank.length,
    migratedCount:
      result.migratedIds.length,
    remainingMissingDomainIds,
    unexpectedChangedIds,
  };
}
