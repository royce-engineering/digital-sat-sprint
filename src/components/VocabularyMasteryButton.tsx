"use client";

import { useEffect, useState } from "react";
import {
  readVocabularyMastery,
  setVocabularyMastery,
  type VocabularyMasteryStatus,
} from "@/lib/vocabularyMastery";

const order: VocabularyMasteryStatus[] = ["new", "learning", "mastered"];
const labels: Record<VocabularyMasteryStatus, string> = {
  new: "New",
  learning: "Learning",
  mastered: "Mastered",
};

export default function VocabularyMasteryButton({ word }: { word: string }) {
  const [status, setStatus] = useState<VocabularyMasteryStatus>("new");

  useEffect(() => {
    const sync = () => setStatus(readVocabularyMastery()[word.toLowerCase()] || "new");
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("sat-vocabulary-mastery-updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("sat-vocabulary-mastery-updated", sync);
    };
  }, [word]);

  function advance() {
    const next = order[(order.indexOf(status) + 1) % order.length];
    setVocabularyMastery(word, next);
    setStatus(next);
  }

  return (
    <button
      type="button"
      className={`masteryButton masteryButton-${status}`}
      onClick={advance}
      aria-label={`Vocabulary status for ${word}: ${labels[status]}. Click to change.`}
    >
      {labels[status]}
    </button>
  );
}
