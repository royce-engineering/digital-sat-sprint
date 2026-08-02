import {
  readingWritingBank,
} from "./questionBank";
import {
  migrateLegacyReadingWalkthroughs,
} from "./legacyWalkthroughMigration";

export interface LegacyWalkthroughDiagnosticReport {
  passed: boolean;
  totalQuestions: number;
  migratedCount: number;
  remainingMissingWalkthroughs: number;
  changedExistingWalkthroughs: number;
}

export function diagnoseLegacyWalkthroughMigration(): LegacyWalkthroughDiagnosticReport {
  const result =
    migrateLegacyReadingWalkthroughs(
      readingWritingBank,
    );

  const remainingMissingWalkthroughs =
    result.questions.filter(
      (question) =>
        !question.walkthrough?.length,
    ).length;

  const changedExistingWalkthroughs =
    result.questions.filter(
      (question, index) => {
        const source =
          readingWritingBank[index];

        if (
          !source.walkthrough?.length
        ) {
          return false;
        }

        return (
          JSON.stringify(
            question.walkthrough,
          ) !==
          JSON.stringify(
            source.walkthrough,
          )
        );
      },
    ).length;

  return {
    passed:
      remainingMissingWalkthroughs ===
        0 &&
      changedExistingWalkthroughs ===
        0,
    totalQuestions:
      result.questions.length,
    migratedCount:
      result.migratedIds.length,
    remainingMissingWalkthroughs,
    changedExistingWalkthroughs,
  };
}
