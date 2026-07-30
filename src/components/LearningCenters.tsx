import Link from "next/link";

const centers = [
  { href: "/practice/reading-skills", icon: "R", title: "Reading Skills", detail: "10 courses · 200 questions", description: "Master main idea, inference, evidence, purpose, tone, structure, synthesis, and workflow." },
  { href: "/practice/grammar", icon: "G", title: "Grammar & Writing", detail: "8 courses · 160 questions", description: "Practice sentence boundaries, punctuation, verbs, pronouns, modifiers, transitions, and concision." },
  { href: "/practice/math", icon: "M", title: "Math", detail: "8 courses · 160 questions", description: "Study Algebra and Advanced Math with worked examples, guided practice, and review cards." },
  { href: "/vocabulary", icon: "V", title: "Vocabulary", detail: "25 lessons · 600 words", description: "Build academic vocabulary through definitions, contextual examples, quizzes, and flashcards." },
  { href: "/practice/science", icon: "S", title: "Subject Reading", detail: "Science · Biology · History", description: "Practice SAT passages and vocabulary from science, biology, history, economics, government, and the humanities." },
];

export default function LearningCenters({ heading = "Choose a learning center" }: { heading?: string }) {
  return (
    <section className="learningCentersSection">
      <div className="sectionHeader sectionHeaderRow"><div><p className="sectionKicker">Learning centers</p><h2>{heading}</h2><p>Every major subject area is now reachable without typing a URL.</p></div><Link className="textLink" href="/practice">View practice hub →</Link></div>
      <div className="learningCenterGrid">
        {centers.map((center) => <Link className="learningCenterCard" href={center.href} key={center.href}><span className="learningCenterIcon">{center.icon}</span><div><span className="learningCenterDetail">{center.detail}</span><h3>{center.title}</h3><p>{center.description}</p><strong>Open center →</strong></div></Link>)}
      </div>
    </section>
  );
}
