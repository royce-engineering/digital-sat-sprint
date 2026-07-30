import type { Metadata } from "next";
import ProgressDashboard from "@/components/ProgressDashboard";
import { satDays } from "@/content/sat";

export const metadata: Metadata = {
  title: "Progress",
};

export default function ProgressPage() {
  return (
    <main className="pageShell">
      <section className="pageHero progressPageHero">
        <div className="container featureHeroGrid">
          <div>
            <p className="eyebrow">Sprint 6 · Learning progress</p>
            <h1>See what you completed and what comes next.</h1>
            <p>
              Track completed lessons, quiz scores, flashcard reviews, study
              streaks, and total vocabulary progress in this browser.
            </p>
          </div>

          <div className="featurePreviewCard">
            <span className="largeFeatureIcon">↗</span>
            <span className="statusPill">Available now</span>
            <h2>Persistent local tracking</h2>
            <p>
              Progress is saved automatically using localStorage, without
              requiring an account or database.
            </p>
          </div>
        </div>
      </section>

      <div className="container pageContent">
        <ProgressDashboard lessons={satDays} />
      </div>
    </main>
  );
}
