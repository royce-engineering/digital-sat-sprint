import type { Metadata } from "next";
import Link from "next/link";
import RootMasteryAcademy from "@/components/vocabulary/RootMasteryAcademy";
import { wordRootsAffixesContent } from "@/content/practice/wordRootsAffixes";

export const metadata: Metadata = { title: "SAT Word Roots Academy" };

export default function VocabularyRootsPage() {
  const groups = Array.from(new Set(wordRootsAffixesContent.vocabulary.map((entry) => entry.group ?? "Roots")));
  return (
    <main className="pageShell">
      <section className="pageHero">
        <div className="container featureHeroGrid">
          <div>
            <p className="eyebrow">Vocabulary foundation · Chapter 00</p>
            <h1>English Word Roots Academy</h1>
            <p>Learn 72 high-value Greek and Latin roots, prefixes, and suffixes, then track which ones you can actually decode in context.</p>
            <div className="heroActions"><a className="button buttonPrimary" href="#academy">Start learning</a><Link className="button buttonGhost" href="/practice/word-roots-affixes">Take the 20-question quiz</Link></div>
          </div>
          <div className="featurePreviewCard">
            <span className="largeFeatureIcon">72</span>
            <span className="statusPill">Mastery tracking</span>
            <h2>{groups.length} learning groups</h2>
            <p>Prefixes · central roots · suffixes · contextual decoding</p>
          </div>
        </div>
      </section>

      <div className="container pageContent" id="academy">
        <section className="practiceLessonSection">
          <div className="sectionHeader"><p className="sectionKicker">How to study</p><h2>Use the root, then verify with context</h2></div>
          <div className="strategySteps">
            {wordRootsAffixesContent.strategy.map((step, index) => <div key={step}><span>{index + 1}</span><strong>{step}</strong></div>)}
          </div>
        </section>
        <RootMasteryAcademy entries={wordRootsAffixesContent.vocabulary} />
        <section className="practiceNextSteps">
          <div><p className="sectionKicker">Apply the skill</p><h2>Test root recognition in complete questions</h2><p>After mastering a group, use the existing quiz to verify that you can decode unfamiliar academic vocabulary.</p></div>
          <div className="heroActions"><Link className="button buttonPrimary" href="/practice/word-roots-affixes">Open root quiz</Link><Link className="button buttonGhost" href="/lessons">Return to vocabulary</Link></div>
        </section>
      </div>
    </main>
  );
}
