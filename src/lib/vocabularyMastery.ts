export type VocabularyMasteryStatus = "new" | "learning" | "mastered";

const STORAGE_KEY = "digital-sat-vocabulary-mastery-v1";

export function readVocabularyMastery(): Record<string, VocabularyMasteryStatus> {
  if (typeof window === "undefined") return {};
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function setVocabularyMastery(word: string, status: VocabularyMasteryStatus) {
  if (typeof window === "undefined") return;
  const data = readVocabularyMastery();
  data[word.toLowerCase()] = status;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event("sat-vocabulary-mastery-updated"));
}
