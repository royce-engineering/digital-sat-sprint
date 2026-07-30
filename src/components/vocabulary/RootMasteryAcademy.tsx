"use client";

import { useEffect, useMemo, useState } from "react";
import type { PracticeVocabularyEntry } from "@/content/practice/moduleContent";

const STORAGE_KEY = "digital-sat-root-mastery-v1";

type Props = { entries: PracticeVocabularyEntry[] };

export default function RootMasteryAcademy({ entries }: Props) {
  const [mastered, setMastered] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "learning" | "mastered">("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
      if (Array.isArray(saved)) setMastered(saved.filter((item): item is string => typeof item === "string"));
    } catch {
      setMastered([]);
    }
  }, []);

  const masteredSet = useMemo(() => new Set(mastered), [mastered]);
  const visible = useMemo(() => entries.filter((entry) => {
    const isMastered = masteredSet.has(entry.word);
    if (filter === "learning" && isMastered) return false;
    if (filter === "mastered" && !isMastered) return false;
    const haystack = `${entry.word} ${entry.definition} ${entry.example} ${entry.group ?? ""}`.toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  }), [entries, filter, masteredSet, query]);

  function toggle(word: string) {
    const next = masteredSet.has(word) ? mastered.filter((item) => item !== word) : [...mastered, word];
    setMastered(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  const percent = entries.length ? Math.round((mastered.length / entries.length) * 100) : 0;

  return (
    <section className="rootAcademy">
      <div className="panel rootProgressPanel">
        <div>
          <p className="sectionKicker">Root mastery</p>
          <h2>{mastered.length} of {entries.length} mastered</h2>
          <p>Mark a root mastered only when you can explain it and recognize it inside an unfamiliar word.</p>
        </div>
        <div className="rootProgressNumber">{percent}%</div>
        <div className="progressTrack"><span style={{ width: `${percent}%` }} /></div>
      </div>

      <div className="rootToolbar">
        <input aria-label="Search roots" placeholder="Search a root, meaning, or example…" value={query} onChange={(event) => setQuery(event.target.value)} />
        <div className="rootFilters">
          {(["all", "learning", "mastered"] as const).map((item) => (
            <button className={filter === item ? "button buttonPrimary" : "button buttonGhost"} key={item} onClick={() => setFilter(item)} type="button">
              {item === "all" ? "All" : item === "learning" ? "Still learning" : "Mastered"}
            </button>
          ))}
        </div>
      </div>

      <div className="contextVocabularyGrid">
        {visible.map((entry) => {
          const isMastered = masteredSet.has(entry.word);
          return (
            <article key={entry.word} className={isMastered ? "rootCard rootCardMastered" : "rootCard"}>
              <div className="contextWordHeading">
                <div><h3>{entry.word}</h3><span>{entry.group ?? "Root or affix"}</span></div>
                <button type="button" className={isMastered ? "statusPill" : "button compactButton"} onClick={() => toggle(entry.word)}>
                  {isMastered ? "Mastered ✓" : "Mark mastered"}
                </button>
              </div>
              <p className="contextDefinition">{entry.definition}</p>
              <blockquote>{entry.example}</blockquote>
              {entry.collocations?.length ? <p><strong>Example word:</strong> {entry.collocations.join(" · ")}</p> : null}
              {entry.usageNote ? <p><strong>SAT decoding tip:</strong> {entry.usageNote}</p> : null}
            </article>
          );
        })}
      </div>
      {!visible.length ? <div className="emptyState"><h3>No matching roots</h3><p>Try another search or filter.</p></div> : null}
    </section>
  );
}
