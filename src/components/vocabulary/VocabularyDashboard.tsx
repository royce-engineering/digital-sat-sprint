"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { SatDay } from "@/content/sat/types";
import { readVocabularyMastery, type VocabularyMasteryStatus } from "@/lib/vocabularyMastery";

type Filter = "all" | VocabularyMasteryStatus;

export default function VocabularyDashboard({ days }: { days: SatDay[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [mastery, setMastery] = useState<Record<string, VocabularyMasteryStatus>>({});

  useEffect(() => {
    const sync = () => setMastery(readVocabularyMastery());
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("sat-vocabulary-mastery-updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("sat-vocabulary-mastery-updated", sync);
    };
  }, []);

  const words = useMemo(() => days.flatMap(day => day.words.map((word, index) => ({ ...word, day: day.day, lessonTitle: day.title, index }))), [days]);
  const counts = words.reduce((acc, item) => {
    const status = mastery[item.word.toLowerCase()] || "new";
    acc[status] += 1;
    return acc;
  }, { new: 0, learning: 0, mastered: 0 });

  const visible = words.filter(item => {
    const status = mastery[item.word.toLowerCase()] || "new";
    const text = `${item.word} ${item.definition} ${item.synonyms.join(" ")} ${item.root || ""}`.toLowerCase();
    return (filter === "all" || status === filter) && text.includes(query.toLowerCase().trim());
  });

  return (
    <>
      <section className="vocabularyStats">
        <div><strong>{words.length}</strong><span>Total words</span></div>
        <div><strong>{counts.learning}</strong><span>Learning</span></div>
        <div><strong>{counts.mastered}</strong><span>Mastered</span></div>
        <div><strong>{Math.round((counts.mastered / Math.max(words.length, 1)) * 100)}%</strong><span>Mastery</span></div>
      </section>

      <section className="vocabularyToolbar panel">
        <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search word, definition, synonym, or root" aria-label="Search vocabulary" />
        <div className="filterTabs">
          {(["all", "new", "learning", "mastered"] as Filter[]).map(value => (
            <button type="button" key={value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)}>{value}</button>
          ))}
        </div>
      </section>

      <section className="vocabularyTable" aria-live="polite">
        {visible.slice(0, 120).map(item => {
          const status = mastery[item.word.toLowerCase()] || "new";
          return (
            <Link className="vocabularyRow" href={`/sat/day/${item.day}#word-${item.index + 1}`} key={`${item.day}-${item.word}`}>
              <div><strong>{item.word}</strong><span>{item.partOfSpeech || "word"} · Day {item.day}</span></div>
              <p>{item.definition}</p>
              <div className="vocabularyRowMeta"><span>{item.difficulty || "Core"}</span><span>{item.frequency || "High"}</span><span className={`status-${status}`}>{status}</span></div>
            </Link>
          );
        })}
        {visible.length > 120 ? <p className="tableNote">Showing the first 120 matches. Narrow the search to see more.</p> : null}
        {!visible.length ? <p className="emptyState">No vocabulary matches this filter.</p> : null}
      </section>
    </>
  );
}
