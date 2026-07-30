import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { practiceModules } from "@/content/practice/modules";
import { practiceModuleContent } from "@/content/practice/moduleContent";

export function generateStaticParams() {
  return Object.keys(practiceModuleContent).map((module) => ({ module }));
}

export async function generateMetadata({ params }: { params: Promise<{ module: string }> }): Promise<Metadata> {
  const { module } = await params;
  const content = practiceModuleContent[module];
  return { title: content ? `${content.title} Practice Module` : "Practice Module" };
}

export default async function PracticeModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module } = await params;
  const content = practiceModuleContent[module];
  if (!content) notFound();
  const summary = practiceModules.find((item) => item.id === module);

  return (
    <main className="pageShell">
      <section className="pageHero contextCluesHero">
        <div className="container featureHeroGrid">
          <div>
            <p className="eyebrow">Practice Module {content.number}</p>
            <h1>{content.title}</h1>
            <p>{content.tagline}</p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="#strategy">Start module</a>
              <Link className="button buttonGhost" href="/practice">All modules</Link>
            </div>
          </div>
          <div className="featurePreviewCard">
            <span className="largeFeatureIcon">{content.number}</span>
            <span className="statusPill">Available</span>
            <h2>{content.vocabulary.length} vocabulary words · {content.quiz.length} questions</h2>
            <p>{summary?.estimatedMinutes ?? 45} minutes · {summary?.difficulty ?? "Medium"} difficulty</p>
          </div>
        </div>
      </section>

      <div className="container pageContent practiceLessonContent">
        <section className="practiceStrategy" id="strategy">
          <div className="sectionHeader"><p className="sectionKicker">Five-step method</p><h2>Use a repeatable strategy</h2></div>
          <div className="strategySteps">
            {content.strategy.map((step, index) => <div key={step}><span>{index + 1}</span><strong>{step}</strong></div>)}
          </div>
        </section>

        <section className="practiceLessonSection">
          <div className="sectionHeader"><p className="sectionKicker">Cheat sheet</p><h2>Core concepts</h2></div>
          <div className="contextTypeGrid">
            {content.concepts.map((concept) => <article key={concept.title}><h3>{concept.title}</h3><p>{concept.description}</p></article>)}
          </div>
        </section>

        <section className="practiceLessonSection">
          <div className="sectionHeader"><p className="sectionKicker">Key vocabulary</p><h2>Essential words for this module</h2></div>
          <div className="contextVocabularyGrid">
            {content.vocabulary.map((entry) => (
              <article key={entry.word}>
                <div className="contextWordHeading"><div><h3>{entry.word}</h3><span>{entry.partOfSpeech ?? "Academic vocabulary"}{entry.group ? ` · ${entry.group}` : ""}</span></div></div>
                <p className="contextDefinition">{entry.definition}</p>
                <blockquote>{entry.example}</blockquote>
                {entry.synonyms?.length ? <p><strong>Synonyms:</strong> {entry.synonyms.join(", ")}</p> : null}
                {entry.collocations?.length ? <p><strong>Common collocations:</strong> {entry.collocations.join(" · ")}</p> : null}
                {entry.usageNote ? <p><strong>Usage note:</strong> {entry.usageNote}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="practiceLessonSection">
          <div className="sectionHeader"><p className="sectionKicker">Mini quiz</p><h2>Check your understanding</h2></div>
          <div className="contextQuizList">
            {content.quiz.map((item, index) => (
              <details key={item.question}>
                <summary><span>{index + 1}</span>{item.question}</summary>
                <ol type="A">{item.choices.map((choice, choiceIndex) => <li className={choiceIndex === item.answer ? "contextCorrectAnswer" : ""} key={`${item.question}-choice-${choiceIndex}`}>{choice}</li>)}</ol>
                <p><strong>Explanation:</strong> {item.explanation}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="practiceNextSteps">
          <div><p className="sectionKicker">Keep studying</p><h2>Review with Flashcards or AI Tutor</h2><p>Use the module vocabulary in your existing study tools, then return for another targeted module.</p></div>
          <div className="heroActions"><Link className="button buttonPrimary" href="/flashcards">Open flashcards</Link><Link className="button buttonGhost" href="/tutor">Ask AI Tutor</Link></div>
        </section>
      </div>
    </main>
  );
}
