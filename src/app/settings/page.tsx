import type { Metadata } from "next";
import SettingsPanel from "@/components/SettingsPanel";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <main className="pageShell">
      <section className="pageHero settingsPageHero">
        <div className="container featureHeroGrid">
          <div>
            <p className="eyebrow">Sprint 7 · Personal settings</p>
            <h1>Adjust the interface to match your study habits.</h1>
            <p>
              Choose an appearance, set a daily vocabulary target, reduce motion,
              and manage data saved in this browser.
            </p>
          </div>

          <div className="featurePreviewCard">
            <span className="largeFeatureIcon">⚙</span>
            <span className="statusPill">Available now</span>
            <h2>Personalized locally</h2>
            <p>
              Settings are applied instantly and remain available after
              refreshing or reopening the application.
            </p>
          </div>
        </div>
      </section>

      <div className="container pageContent">
        <SettingsPanel />
      </div>
    </main>
  );
}
