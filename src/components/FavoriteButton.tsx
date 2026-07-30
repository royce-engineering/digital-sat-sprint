"use client";

import { useEffect, useState } from "react";
import {
  makeFavoriteKey,
  readFavorites,
  toggleFavorite,
  type FavoriteWord,
} from "@/lib/favorites";

type FavoriteButtonProps = Omit<FavoriteWord, "key"> & {
  compact?: boolean;
};

export default function FavoriteButton({
  day,
  wordIndex,
  lessonTitle,
  word,
  partOfSpeech,
  definition,
  example,
  synonyms,
  compact = false,
}: FavoriteButtonProps) {
  const key = makeFavoriteKey(day, word);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const update = () => {
      setFavorite(readFavorites().some((item) => item.key === key));
    };

    update();
    window.addEventListener("storage", update);
    window.addEventListener("sat-favorites-updated", update);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("sat-favorites-updated", update);
    };
  }, [key]);

  function handleToggle() {
    const next = toggleFavorite({
      key,
      day,
      wordIndex,
      lessonTitle,
      word,
      partOfSpeech,
      definition,
      example,
      synonyms,
    });

    setFavorite(next);
  }

  return (
    <button
      className={`favoriteButton ${favorite ? "favoriteButtonActive" : ""} ${
        compact ? "favoriteButtonCompact" : ""
      }`}
      type="button"
      onClick={handleToggle}
      aria-pressed={favorite}
      aria-label={favorite ? `Remove ${word} from favorites` : `Add ${word} to favorites`}
      title={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      <span aria-hidden="true">{favorite ? "★" : "☆"}</span>
      {!compact ? <span>{favorite ? "Saved" : "Favorite"}</span> : null}
    </button>
  );
}
