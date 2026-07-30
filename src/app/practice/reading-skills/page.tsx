import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata={title:"Reading Skills Center"};
const skills=[
["main-idea","Main Idea & Central Claim","Medium","90 min"],
["inference","Inference","Medium","80 min"],
["textual-evidence","Textual Evidence","Medium","80 min"],
["vocabulary-in-context","Vocabulary in Context","Medium","75 min"],
["authors-purpose","Author’s Purpose","Medium","75 min"],
["tone-attitude","Tone & Attitude","Medium","75 min"],
["organization","Organization & Structure","Hard","80 min"],
["cross-text","Cross-Text Connections","Hard","85 min"],
["rhetorical-synthesis","Rhetorical Synthesis","Hard","85 min"],
["reading-workflow","Complete Reading Workflow","Medium","70 min"]
];
export default function ReadingSkillsPage(){return <main className="pageShell"><section className="pageHero readingSkillsHero"><div className="container featureHeroGrid"><div><p className="eyebrow">Sprint 22 · Reading Center Complete</p><h1>Reading Skills Center</h1><p>Master all ten core Digital SAT reading skills through complete lessons, strategies, worked examples, guided practice, and review.</p><div className="heroActions"><Link className="button buttonPrimary" href="/practice/reading-skills/main-idea">Start learning path</Link><Link className="button buttonGhost" href="/practice/reading-skills/reading-workflow">Integrated workflow</Link></div></div><div className="featurePreviewCard"><span className="largeFeatureIcon">10</span><span className="statusPill">Complete Courses</span><h2>The full reading path is ready</h2><p>100 worked examples · 200 interactive questions · 300 flashcards across ten courses.</p></div></div></section><div className="container pageContent"><section><div className="sectionHeader"><p className="sectionKicker">Complete learning path</p><h2>Choose a reading skill</h2></div><div className="readingSkillGrid">{skills.map(([id,title,difficulty,time],i)=><article key={id} className="readingSkillCard"><div className="courseQuestionMeta"><span>Level {Math.floor(i/2)+1}</span><span>Complete</span></div><h3>{title}</h3><p>{difficulty} · {time}</p><Link className="button buttonPrimary" href={`/practice/reading-skills/${id}`}>Open course</Link></article>)}</div></section></div></main>}
