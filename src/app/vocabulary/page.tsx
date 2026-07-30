import type { Metadata } from "next";
import Link from "next/link";
import VocabularyDashboard from "@/components/vocabulary/VocabularyDashboard";
import { satDays } from "@/content/sat";

export const metadata: Metadata = { title: "Vocabulary Center" };

export default function VocabularyPage() {
  return (
    <main className="pageShell">
      <section className="pageHero"><div className="container"><p className="eyebrow">Vocabulary Center</p><h1>Build, track, and review your SAT vocabulary.</h1><p>Search the full course, monitor mastery, and jump directly to any word in its lesson.</p><div className="heroActions"><Link className="button primaryButton" href="/lessons">Open course</Link><Link className="button" href="/vocabulary/roots">Word Roots Academy</Link></div></div></section>
      <div className="container pageContent"><VocabularyDashboard days={satDays} /></div>
    </main>
  );
}
