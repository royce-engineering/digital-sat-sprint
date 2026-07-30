import type { Metadata } from "next";
import FavoritesLibrary from "@/components/FavoritesLibrary";

export const metadata: Metadata = {
  title: "Favorites",
};

export default function FavoritesPage() {
  return (
    <main className="pageShell">
      <section className="pageHero favoritesPageHero">
        <div className="container featureHeroGrid">
          <div>
            <p className="eyebrow">Sprint 5 · Personal review</p>
            <h1>Keep difficult words in one focused collection.</h1>
            <p>
              Favorite words are saved in this browser, so they remain available
              after refreshing or returning later on the same device.
            </p>
          </div>

          <div className="featurePreviewCard">
            <span className="largeFeatureIcon">★</span>
            <span className="statusPill">Available now</span>
            <h2>Browser-based persistence</h2>
            <p>
              Favorites use localStorage. No account, sign-in, or database is
              required for this version.
            </p>
          </div>
        </div>
      </section>

      <div className="container pageContent">
        <FavoritesLibrary />
      </div>
    </main>
  );
}
