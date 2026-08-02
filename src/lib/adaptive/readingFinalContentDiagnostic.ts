import {
  readingWritingBank,
} from "./questionBank";
import {
  isIntentionalBlankPunctuationChoice,
} from "./readingAuditSemantics";
import {
  verifiedRetiredDuplicateIds,
} from "./readingDuplicateRetirement";

export interface ReadingFinalContentDiagnosticReport {
  passed: boolean;
  totalQuestions: number;
  expectedTotal: number;
  retiredIdsStillPresent: string[];
  intentionalBlankChoices: number;
  unexpectedBlankChoices: {
    questionId: string;
    choiceIndex: number;
  }[];
}

export function diagnoseReadingFinalContent(): ReadingFinalContentDiagnosticReport {
  const retiredIds =
    new Set(
      verifiedRetiredDuplicateIds(),
    );

  const retiredIdsStillPresent =
    readingWritingBank
      .filter((question) =>
        retiredIds.has(
          question.examId ||
            question.id,
        ),
      )
      .map(
        (question) =>
          question.examId ||
          question.id,
      );

  let intentionalBlankChoices = 0;
  const unexpectedBlankChoices: {
    questionId: string;
    choiceIndex: number;
  }[] = [];

  for (const question of readingWritingBank) {
    question.choices.forEach(
      (choice, choiceIndex) => {
        if (
          choice.text !== ""
        ) {
          return;
        }

        if (
          isIntentionalBlankPunctuationChoice(
            question,
            choice.text,
          )
        ) {
          intentionalBlankChoices += 1;
          return;
        }

        unexpectedBlankChoices.push({
          questionId:
            question.examId ||
            question.id,
          choiceIndex,
        });
      },
    );
  }

  return {
    passed:
      readingWritingBank.length ===
        457 &&
      retiredIdsStillPresent.length ===
        0 &&
      intentionalBlankChoices ===
        12 &&
      unexpectedBlankChoices.length ===
        0,
    totalQuestions:
      readingWritingBank.length,
    expectedTotal: 457,
    retiredIdsStillPresent,
    intentionalBlankChoices,
    unexpectedBlankChoices,
  };
}
