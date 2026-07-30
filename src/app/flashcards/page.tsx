import type { Metadata } from "next";
import Link from "next/link";
import FlashcardDeck from "@/components/FlashcardDeck";
import { satDays } from "@/content/sat";

export const metadata: Metadata = {
  title: "Flashcards",
};

export default function FlashcardsPage() {
  return (
    <main className="pageShell">
      <section className="pageHero flashcardPageHero">
        <div className="container featureHeroGrid">
          <div>
            <p className="eyebrow">Sprint 3 · Flashcard review</p>
            <h1>Turn every lesson into a focused review deck.</h1>
            <p>
              Flip cards, mark words as Known or Again, switch between lessons,
              and review the full deck in order or shuffled.
            </p>
            <div className="heroActions">
              <Link className="button" href="/lessons">
                Browse vocabulary lessons
              </Link>
              <Link className="button buttonGhost" href="/quiz">
                Open interactive quiz
              </Link>
            </div>
          </div>

          <div className="featurePreviewCard">
            <span className="largeFeatureIcon">▱</span>
            <span className="statusPill">Available now</span>
            <h2>Five complete decks</h2>
            <p>
              Days 1–5 provide 125 vocabulary cards with definitions,
              contextual examples, synonyms, and review controls.
            </p>
          </div>
        </div>
      </section>

      <div className="container pageContent">
        <FlashcardDeck lessons={satDays} />
      </div>
    </main>
  );
}
