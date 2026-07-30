import type { Metadata } from "next";
import VocabularySearch from "@/components/VocabularySearch";
import { satDays } from "@/content/sat";

export const metadata: Metadata = {
  title: "Vocabulary Search",
};

export default function SearchPage() {
  const totalWords = satDays.reduce(
    (total, lesson) => total + lesson.words.length,
    0,
  );

  return (
    <main className="pageShell">
      <section className="pageHero searchPageHero">
        <div className="container featureHeroGrid">
          <div>
            <p className="eyebrow">Sprint 4 · Vocabulary search</p>
            <h1>Find any word across the complete course.</h1>
            <p>
              Search words, meanings, examples, synonyms, collocations, and SAT
              tips. Narrow results by lesson or part of speech.
            </p>
          </div>

          <div className="featurePreviewCard">
            <span className="largeFeatureIcon">⌕</span>
            <span className="statusPill">Available now</span>
            <h2>{totalWords} searchable words</h2>
            <p>
              Search runs instantly in the browser and links directly to the
              selected vocabulary card inside its lesson.
            </p>
          </div>
        </div>
      </section>

      <div className="container pageContent">
        <VocabularySearch lessons={satDays} />
      </div>
    </main>
  );
}
