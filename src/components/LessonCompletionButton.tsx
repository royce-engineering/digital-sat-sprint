"use client";

import { useEffect, useState } from "react";
import {
  markDayComplete,
  markDayIncomplete,
  readProgress,
} from "@/lib/progress";

type LessonCompletionButtonProps = {
  day: number;
};

export default function LessonCompletionButton({
  day,
}: LessonCompletionButtonProps) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const update = () => {
      setCompleted(readProgress().completedDays.includes(day));
    };

    update();
    window.addEventListener("storage", update);
    window.addEventListener("sat-progress-updated", update);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("sat-progress-updated", update);
    };
  }, [day]);

  function toggle() {
    if (completed) {
      markDayIncomplete(day);
    } else {
      markDayComplete(day);
    }
  }

  return (
    <button
      className={`button buttonPrimary ${
        completed ? "lessonCompleteButtonActive" : ""
      }`}
      type="button"
      onClick={toggle}
    >
      {completed ? "✓ Lesson completed" : "Mark lesson complete"}
    </button>
  );
}
