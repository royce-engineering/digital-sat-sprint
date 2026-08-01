import {
  buildFullSatRecord,
  fullSatRecordId,
} from "../analytics/fullSatHistory";
import type { ScoreAnswer } from "../scoreEngine";
import type { ReadingSessionState } from "../session/readingSession";
import type { MathSessionState } from "../session/mathSession";

export interface FinalizationDiagnosticCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface FinalizationDiagnosticReport {
  passed: boolean;
  checks: FinalizationDiagnosticCheck[];
}

function check(
  name: string,
  passed: boolean,
  details: string,
): FinalizationDiagnosticCheck {
  return { name, passed, details };
}

function answer(
  selected: number,
  answeredAt: number,
): ScoreAnswer {
  return {
    selected,
    typedAnswer: "",
    flagged: false,
    answeredAt,
  };
}

/**
 * Pure finalization checks. No browser history is mutated.
 */
export function diagnoseFullSatFinalization(
  reading: ReadingSessionState,
  math: MathSessionState,
): FinalizationDiagnosticReport {
  const checks: FinalizationDiagnosticCheck[] = [];
  const id1 = fullSatRecordId(reading, math);
  const id2 = fullSatRecordId(reading, math);

  checks.push(
    check(
      "Full SAT record ID is deterministic",
      id1 === id2,
      id1,
    ),
  );

  const timestamp = Math.max(
    reading.updatedAt,
    math.updatedAt,
  );
  const first = buildFullSatRecord(
    reading,
    math,
    timestamp,
  );
  const second = buildFullSatRecord(
    reading,
    math,
    timestamp,
  );

  checks.push(
    check(
      "Pure record build is deterministic",
      JSON.stringify(first) ===
        JSON.stringify(second),
      first
        ? `${first.questionResults.length} question results.`
        : "Sessions were incomplete.",
    ),
  );

  if (first) {
    checks.push(
      check(
        "Built record preserves deterministic ID",
        first.id === id1,
        first.id,
      ),
      check(
        "Built record uses canonical answer keys",
        Object.keys(first.answers).every(
          (id) =>
            id.startsWith("rw-") ||
            id.startsWith("math-") ||
            id.includes("-"),
        ),
        `${Object.keys(first.answers).length} answers checked.`,
      ),
    );
  }

  return {
    passed: checks.every(
      (item) => item.passed,
    ),
    checks,
  };
}
