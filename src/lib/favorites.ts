export type FavoriteWord = {
  key: string;
  day: number;
  wordIndex: number;
  lessonTitle: string;
  word: string;
  partOfSpeech: string;
  definition: string;
  example: string;
  synonyms: string[];
};

const STORAGE_KEY = "digital-sat-sprint-favorites";

export function makeFavoriteKey(day: number, word: string) {
  return `${day}:${word.toLowerCase()}`;
}

export function readFavorites(): FavoriteWord[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeFavorites(items: FavoriteWord[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("sat-favorites-updated"));
}

export function toggleFavorite(item: FavoriteWord) {
  const current = readFavorites();
  const exists = current.some((favorite) => favorite.key === item.key);

  const next = exists
    ? current.filter((favorite) => favorite.key !== item.key)
    : [...current, item];

  writeFavorites(next);
  return !exists;
}
