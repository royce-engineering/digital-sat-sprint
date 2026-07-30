import type { Metadata } from "next";
import Link from "next/link";
import LearningCenters from "@/components/LearningCenters";
import PracticeModuleCard from "@/components/practice/PracticeModuleCard";
import { practiceModules } from "@/content/practice/modules";

export const metadata: Metadata = { title: "Practice Hub" };
const categories = ["Reading Skills", "Subject Reading", "Review Center"] as const;

export default function PracticeModulesPage() {
  return (
    <main className="pageShell">
      <section className="pageHero practicePageHero"><div className="container featureHeroGrid"><div><p className="eyebrow">Unified Practice Hub</p><h1>All Digital SAT learning centers in one place.</h1><p>Move directly into Reading, Grammar, Math, Vocabulary, or a focused practice module. No hidden routes and no manual URL entry.</p><div className="heroActions"><Link className="button buttonPrimary" href="/practice/math">Open Math Center</Link><Link className="button buttonGhost" href="/practice/reading-skills">Open Reading Center</Link></div></div><div className="featurePreviewCard"><span className="largeFeatureIcon">4</span><span className="statusPill">Connected learning centers</span><h2>One clear starting point</h2><p>Use this page whenever you are unsure where to study next.</p></div><div className="heroActions"><a className="button buttonPrimary" href="/adaptive">Take Adaptive SAT</a></div></div></section>
      <div className="container pageContent">
        <LearningCenters heading="Select a complete subject center" />
        <section className="dashboardSection"><div className="sectionHeader"><p className="sectionKicker">Focused practice</p><h2>Target a specific reading or review skill</h2><p>These shorter modules complement the full subject courses above.</p></div></section>
        <section className="dashboardSection"><div className="sectionHeader"><p className="sectionKicker">Subject reading shortcuts</p><h2>Science, Biology, History, and more</h2><p>Biology is included inside the Science module; the remaining subject areas have their own focused modules.</p></div><div className="heroActions"><Link className="button buttonPrimary" href="/practice/science">Science & Biology</Link><Link className="button buttonGhost" href="/practice/history">History</Link><Link className="button buttonGhost" href="/practice/social-science">Social Science</Link><Link className="button buttonGhost" href="/practice/humanities">Humanities</Link></div></section><div className="librarySummary"><div><strong>{practiceModules.length}</strong><span>Practice modules</span></div><div><strong>5</strong><span>Learning centers</span></div><div><strong>{practiceModules.filter((module) => module.status === "available").length}</strong><span>Available modules</span></div><div><strong>26</strong><span>Complete courses</span></div></div>
        {categories.map((category) => <section className="practiceCategory" key={category}><div className="sectionHeader"><p className="sectionKicker">Practice Modules</p><h2>{category}</h2></div><div className="practiceModuleGrid">{practiceModules.filter((module) => module.category === category).map((module) => <PracticeModuleCard key={module.id} module={module} />)}</div></section>)}
      </div>
    </main>
  );
}
