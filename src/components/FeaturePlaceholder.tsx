import Link from "next/link";

type FeaturePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  sprint: string;
  icon: string;
  features: string[];
};

export default function FeaturePlaceholder({
  eyebrow,
  title,
  description,
  sprint,
  icon,
  features,
}: FeaturePlaceholderProps) {
  return (
    <main className="pageShell">
      <section className="pageHero featurePageHero">
        <div className="container featureHeroGrid">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="heroActions">
              <Link className="button buttonPrimary" href="/lessons">
                Study available lessons
              </Link>
              <Link className="button" href="/">
                Return to dashboard
              </Link>
            </div>
          </div>
          <div className="featurePreviewCard">
            <span className="largeFeatureIcon">{icon}</span>
            <span className="statusPill">{sprint}</span>
            <h2>Workspace prepared</h2>
            <p>
              The route, navigation, responsive layout, and visual system are
              ready for the interactive implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="container pageContent">
        <div className="sectionHeader">
          <p className="sectionKicker">Planned capabilities</p>
          <h2>What this feature will include</h2>
        </div>
        <div className="plannedGrid">
          {features.map((feature, index) => (
            <article className="plannedCard" key={feature}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
