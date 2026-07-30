import type { Metadata } from "next";
import AITutor from "@/components/AITutor";
import { satDays } from "@/content/sat";

export const metadata: Metadata = {
  title: "AI Tutor",
};

export default function TutorPage() {
  return (
    <main className="pageShell">
      <section className="pageHero aiTutorPageHero">
        <div className="container featureHeroGrid">
          <div>
            <p className="eyebrow">Sprint 8 · AI tutor</p>
            <h1>Ask questions about every vocabulary word.</h1>
            <p>
              Get definitions, contextual examples, synonym guidance, SAT
              strategy, comparisons, and practice prompts using the course data.
            </p>
          </div>

          <div className="featurePreviewCard">
            <span className="largeFeatureIcon">AI</span>
            <span className="statusPill">Local mode</span>
            <h2>No API key required</h2>
            <p>
              The current tutor is deterministic and course-aware. Its interface
              can later connect to an external AI API without redesigning the page.
            </p>
          </div>
        </div>
      </section>

      <div className="container pageContent">
        <AITutor lessons={satDays} />
      </div>
    </main>
  );
}
