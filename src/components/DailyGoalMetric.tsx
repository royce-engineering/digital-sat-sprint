"use client";

import { useEffect, useState } from "react";
import { readSettings } from "@/lib/settings";

export default function DailyGoalMetric() {
  const [goal, setGoal] = useState(25);

  useEffect(() => {
    const update = () => setGoal(readSettings().dailyWordGoal);

    update();
    window.addEventListener("storage", update);
    window.addEventListener("sat-settings-updated", update);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("sat-settings-updated", update);
    };
  }, []);

  return <strong>{goal} words</strong>;
}
