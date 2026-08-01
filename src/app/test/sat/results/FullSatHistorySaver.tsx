"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  fullSatRecordId,
  saveFullSatAttemptOnce,
  type FullSatSaveStatus,
} from "@/lib/adaptive/analytics/fullSatHistory";
import type { MathSessionState } from "@/lib/adaptive/session/mathSession";
import type { ReadingSessionState } from "@/lib/adaptive/session/readingSession";

export function FullSatHistorySaver({
  reading,
  math,
}: {
  reading: ReadingSessionState;
  math: MathSessionState;
}) {
  const attemptId = fullSatRecordId(
    reading,
    math,
  );
  const attemptedId = useRef<string | null>(
    null,
  );
  const [status, setStatus] =
    useState<FullSatSaveStatus | null>(null);

  useEffect(() => {
    if (attemptedId.current === attemptId) {
      return;
    }

    attemptedId.current = attemptId;

    const result = saveFullSatAttemptOnce(
      reading,
      math,
    );

    setStatus(result.status);
  }, [attemptId, reading, math]);

  if (status === "created") {
    return (
      <p className="text-sm text-green-700">
        Combined attempt saved to exam history.
      </p>
    );
  }

  if (status === "existing") {
    return (
      <p className="text-sm text-slate-600">
        This attempt is already saved in exam
        history.
      </p>
    );
  }

  return null;
}
