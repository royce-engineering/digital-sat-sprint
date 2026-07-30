"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { SatDay, VocabularyWord } from "@/content/sat/types";
import FavoriteButton from "@/components/FavoriteButton";

type SearchEntry = VocabularyWord & {
  day: number;
  lessonTitle: string;
  wordIndex: number;
};

type VocabularySearchProps = {
  lessons: SatDay[];
  compact?: boolean;
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function highlight(text: string, query: string) {
  const normalizedQuery = query.trim();

  if (!normalizedQuery) return text;

  const escaped = normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "ig"));

  return parts.map((part, index) =>
    part.toLowerCase() === normalizedQuery.toLowerCase() ? (
      <mark key={`${part}-${index}`}>{part}</mark>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

export default function VocabularySearch({
  lessons,
  compact = false,
}: VocabularySearchProps) {
  const entries = useMemo<SearchEntry[]>(
    () =>
      lessons.flatMap((lesson) =>
        lesson.words.map((word, index) => ({
          ...word,
          day: lesson.day,
          lessonTitle: lesson.title,
          wordIndex: index + 1,
        })),
      ),
    [lessons],
  );

  const partOfSpeechOptions = useMemo(
    () => Array.from(new Set(entries.map((entry) => entry.partOfSpeech))).sort(),
    [entries],
  );

  const [query, setQuery] = useState("");
  const [selectedDay, setSelectedDay] = useState("all");
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState("all");
  const [sortMode, setSortMode] = useState("relevance");

  const filteredEntries = useMemo(() => {
    const normalizedQuery = normalize(query);

    const results = entries.filter((entry) => {
      const matchesDay =
        selectedDay === "all" || entry.day === Number(selectedDay);
      const matchesPartOfSpeech =
        selectedPartOfSpeech === "all" ||
        entry.partOfSpeech === selectedPartOfSpeech;

      if (!matchesDay || !matchesPartOfSpeech) return false;
      if (!normalizedQuery) return true;

      const searchable = [
        entry.word,
        entry.definition,
        entry.example,
        entry.partOfSpeech,
        entry.synonyms.join(" "),
        entry.collocations.join(" "),
        entry.wordFamily.join(" "),
        entry.satTip ?? "",
        entry.lessonTitle,
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });

    return [...results].sort((first, second) => {
      if (sortMode === "alphabetical") {
        return first.word.localeCompare(second.word);
      }

      if (sortMode === "lesson") {
        return first.day - second.day || first.wordIndex - second.wordIndex;
      }

      if (normalizedQuery) {
        const firstExact = first.word.toLowerCase() === normalizedQuery;
        const secondExact = second.word.toLowerCase() === normalizedQuery;

        if (firstExact !== secondExact) return firstExact ? -1 : 1;

        const firstStarts = first.word.toLowerCase().startsWith(normalizedQuery);
        const secondStarts = second.word.toLowerCase().startsWith(normalizedQuery);

        if (firstStarts !== secondStarts) return firstStarts ? -1 : 1;
      }

      return first.day - second.day || first.wordIndex - second.wordIndex;
    });
  }, [entries, query, selectedDay, selectedPartOfSpeech, sortMode]);

  const visibleEntries = compact ? filteredEntries.slice(0, 6) : filteredEntries;

  function clearFilters() {
    setQuery("");
    setSelectedDay("all");
    setSelectedPartOfSpeech("all");
    setSortMode("relevance");
  }

  return (
    <section className={`vocabularySearch ${compact ? "vocabularySearchCompact" : ""}`}>
      <div className="searchControlPanel">
        <div className="searchInputWrap">
          <span className="searchInputIcon" aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search words, definitions, examples, synonyms..."
            aria-label="Search vocabulary"
          />
          {query ? (
            <button
              className="searchClearButton"
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              ×
            </button>
          ) : null}
        </div>

        {!compact ? (
          <div className="searchFilterGrid">
            <label>
              <span>Lesson</span>
              <select
                value={selectedDay}
                onChange={(event) => setSelectedDay(event.target.value)}
              >
                <option value="all">All lessons</option>
                {lessons.map((lesson) => (
                  <option value={lesson.day} key={lesson.day}>
                    Day {lesson.day}: {lesson.title}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Part of speech</span>
              <select
                value={selectedPartOfSpeech}
                onChange={(event) => setSelectedPartOfSpeech(event.target.value)}
              >
                <option value="all">All parts of speech</option>
                {partOfSpeechOptions.map((partOfSpeech) => (
                  <option value={partOfSpeech} key={partOfSpeech}>
                    {partOfSpeech}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Sort</span>
              <select
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value)}
              >
                <option value="relevance">Best match</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="lesson">Lesson order</option>
              </select>
            </label>

            <button className="button searchResetButton" type="button" onClick={clearFilters}>
              Reset filters
            </button>
          </div>
        ) : null}
      </div>

      <div className="searchResultsHeader">
        <div>
          <span className="searchCount">{filteredEntries.length}</span>
          <span>{filteredEntries.length === 1 ? " result" : " results"}</span>
        </div>
        {query ? (
          <p>Matching <strong>“{query}”</strong></p>
        ) : (
          <p>Browse the complete vocabulary library.</p>
        )}
      </div>

      {visibleEntries.length ? (
        <div className="searchResultGrid">
          {visibleEntries.map((entry) => (
            <article className="searchResultCard" key={`${entry.day}-${entry.word}`}>
              <div className="searchResultTop">
                <div>
                  <span className="searchLessonBadge">Day {entry.day}</span>
                  <span className="searchPartBadge">{entry.partOfSpeech}</span>
                </div>
                <div className="searchCardActions">
                  <span className="searchRating">{"★".repeat(entry.rating)}</span>
                  <FavoriteButton
                    day={entry.day}
                    wordIndex={entry.wordIndex}
                    lessonTitle={entry.lessonTitle}
                    word={entry.word}
                    partOfSpeech={entry.partOfSpeech}
                    definition={entry.definition}
                    example={entry.example}
                    synonyms={entry.synonyms}
                    compact
                  />
                </div>
              </div>

              <h3>{highlight(entry.word, query)}</h3>
              <p className="searchDefinition">{highlight(entry.definition, query)}</p>

              <blockquote>“{highlight(entry.example, query)}”</blockquote>

              <div className="searchTagRow">
                {entry.synonyms.slice(0, 3).map((synonym) => (
                  <span key={synonym}>{highlight(synonym, query)}</span>
                ))}
              </div>

              <div className="searchResultFooter">
                <span>{entry.lessonTitle}</span>
                <Link href={`/sat/day/${entry.day}#word-${entry.wordIndex}`}>
                  Open word →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="searchEmptyState">
          <span>⌕</span>
          <h3>No matching vocabulary</h3>
          <p>Try a shorter keyword, another lesson, or a different part of speech.</p>
          <button className="button buttonPrimary" type="button" onClick={clearFilters}>
            Clear search
          </button>
        </div>
      )}

      {compact && filteredEntries.length > visibleEntries.length ? (
        <div className="compactSearchFooter">
          <Link className="button buttonPrimary" href="/search">
            View all {filteredEntries.length} words
          </Link>
        </div>
      ) : null}
    </section>
  );
}
