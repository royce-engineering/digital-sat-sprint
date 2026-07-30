"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  readFavorites,
  writeFavorites,
  type FavoriteWord,
} from "@/lib/favorites";

export default function FavoritesLibrary() {
  const [favorites, setFavorites] = useState<FavoriteWord[]>([]);
  const [query, setQuery] = useState("");
  const [selectedDay, setSelectedDay] = useState("all");
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState("all");

  useEffect(() => {
    const update = () => setFavorites(readFavorites());

    update();
    window.addEventListener("storage", update);
    window.addEventListener("sat-favorites-updated", update);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("sat-favorites-updated", update);
    };
  }, []);

  const days = useMemo(
    () => Array.from(new Set(favorites.map((item) => item.day))).sort((a, b) => a - b),
    [favorites],
  );

  const partsOfSpeech = useMemo(
    () => Array.from(new Set(favorites.map((item) => item.partOfSpeech))).sort(),
    [favorites],
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return favorites
      .filter((item) => selectedDay === "all" || item.day === Number(selectedDay))
      .filter(
        (item) =>
          selectedPartOfSpeech === "all" ||
          item.partOfSpeech === selectedPartOfSpeech,
      )
      .filter((item) => {
        if (!normalized) return true;

        return [
          item.word,
          item.definition,
          item.example,
          item.synonyms.join(" "),
          item.lessonTitle,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      })
      .sort((a, b) => a.day - b.day || a.wordIndex - b.wordIndex);
  }, [favorites, query, selectedDay, selectedPartOfSpeech]);

  function removeFavorite(key: string) {
    writeFavorites(favorites.filter((item) => item.key !== key));
  }

  function clearAll() {
    writeFavorites([]);
  }

  if (!favorites.length) {
    return (
      <div className="favoritesEmptyState">
        <span>☆</span>
        <h2>No favorite words yet</h2>
        <p>
          Save difficult or important words from lesson cards and search results.
          They will appear here automatically.
        </p>
        <div className="heroActions">
          <Link className="button buttonPrimary" href="/lessons">
            Browse lessons
          </Link>
          <Link className="button" href="/search">
            Search vocabulary
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="favoritesLibrary">
      <div className="favoritesToolbar">
        <div className="favoritesSearchWrap">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search saved words..."
          />
        </div>

        <select
          value={selectedDay}
          onChange={(event) => setSelectedDay(event.target.value)}
          aria-label="Filter favorites by lesson"
        >
          <option value="all">All lessons</option>
          {days.map((day) => (
            <option value={day} key={day}>
              Day {day}
            </option>
          ))}
        </select>

        <select
          value={selectedPartOfSpeech}
          onChange={(event) => setSelectedPartOfSpeech(event.target.value)}
          aria-label="Filter favorites by part of speech"
        >
          <option value="all">All parts of speech</option>
          {partsOfSpeech.map((part) => (
            <option value={part} key={part}>
              {part}
            </option>
          ))}
        </select>

        <button className="button" type="button" onClick={clearAll}>
          Clear all
        </button>
      </div>

      <div className="favoritesSummary">
        <div>
          <strong>{favorites.length}</strong>
          <span>Saved words</span>
        </div>
        <div>
          <strong>{filtered.length}</strong>
          <span>Visible results</span>
        </div>
        <div>
          <strong>{days.length}</strong>
          <span>Lessons represented</span>
        </div>
      </div>

      {filtered.length ? (
        <div className="favoritesGrid">
          {filtered.map((item) => (
            <article className="favoriteWordCard" key={item.key}>
              <div className="favoriteWordCardTop">
                <div>
                  <span className="searchLessonBadge">Day {item.day}</span>
                  <span className="searchPartBadge">{item.partOfSpeech}</span>
                </div>
                <button
                  className="favoriteRemoveButton"
                  type="button"
                  onClick={() => removeFavorite(item.key)}
                  aria-label={`Remove ${item.word}`}
                  title="Remove from favorites"
                >
                  ★
                </button>
              </div>

              <h3>{item.word}</h3>
              <p>{item.definition}</p>
              <blockquote>“{item.example}”</blockquote>

              <div className="searchTagRow">
                {item.synonyms.slice(0, 3).map((synonym) => (
                  <span key={synonym}>{synonym}</span>
                ))}
              </div>

              <div className="favoriteWordActions">
                <Link href={`/sat/day/${item.day}#word-${item.wordIndex}`}>
                  Open lesson →
                </Link>
                <Link href={`/flashcards?day=${item.day}`}>
                  Review deck
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="searchEmptyState">
          <span>⌕</span>
          <h3>No favorites match these filters</h3>
          <p>Clear the search or choose a different lesson or part of speech.</p>
        </div>
      )}
    </section>
  );
}
