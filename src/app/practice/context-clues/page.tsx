import type { Metadata } from "next";
import Link from "next/link";
import { contextClueTypes, contextQuiz, contextVocabulary } from "@/content/practice/contextClues";

export const metadata: Metadata = { title: "Context Clues Practice Module" };

export default function ContextCluesPage() {
  return (
    <main className="pageShell">
      <section className="pageHero contextCluesHero">
        <div className="container featureHeroGrid">
          <div>
            <p className="eyebrow">Practice Module 01</p>
            <h1>Context Clues</h1>
            <p>Infer meaning by noticing definitions, restatements, contrasts, examples, and cause-and-effect relationships.</p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="#strategy">Start module</a>
              <Link className="button buttonGhost" href="/practice">All modules</Link>
            </div>
          </div>
          <div className="featurePreviewCard">
            <span className="largeFeatureIcon">CC</span>
            <span className="statusPill">Available</span>
            <h2>10 vocabulary words · 5 questions</h2>
            <p>This first release establishes the complete module page. More vocabulary, examples, flashcards, and challenge questions can be added to the same data file.</p>
          </div>
        </div>
      </section>

      <div className="container pageContent practiceLessonContent">
        <section className="practiceStrategy" id="strategy">
          <div className="sectionHeader">
            <p className="sectionKicker">Five-step method</p>
            <h2>Predict before checking the choices</h2>
          </div>
          <div className="strategySteps">
            {["Read the full sentence", "Find signal words", "Identify the relationship", "Predict the meaning", "Verify the best choice"].map((step, index) => (
              <div key={step}><span>{index + 1}</span><strong>{step}</strong></div>
            ))}
          </div>
        </section>

        <section className="practiceLessonSection">
          <div className="sectionHeader"><p className="sectionKicker">Cheat sheet</p><h2>Five common clue types</h2></div>
          <div className="contextTypeGrid">
            {contextClueTypes.map((type) => (
              <article key={type.title}>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
                <div className="chipList">{type.signals.map((signal) => <span key={signal}>{signal}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="practiceLessonSection">
          <div className="sectionHeader"><p className="sectionKicker">Key vocabulary</p><h2>Words used throughout this module</h2></div>
          <div className="contextVocabularyGrid">
            {contextVocabulary.map((entry) => (
              <article key={entry.id}>
                <div className="contextWordHeading"><div><h3>{entry.word}</h3><span>{entry.partOfSpeech}</span></div><strong>{"★".repeat(entry.difficulty)}</strong></div>
                <p className="contextDefinition">{entry.definition}</p>
                <blockquote>{entry.example}</blockquote>
                <dl><div><dt>Synonyms</dt><dd>{entry.synonyms.join(", ")}</dd></div><div><dt>Antonyms</dt><dd>{entry.antonyms.join(", ")}</dd></div><div><dt>SAT tip</dt><dd>{entry.satTip}</dd></div></dl>
              </article>
            ))}
          </div>
        </section>

        <section className="practiceLessonSection">
          <div className="sectionHeader"><p className="sectionKicker">Mini quiz</p><h2>Check your context-clue reasoning</h2></div>
          <div className="contextQuizList">
            {contextQuiz.map((item, index) => (
              <details key={item.question}>
                <summary><span>{index + 1}</span>{item.question}</summary>
                <ol type="A">{item.choices.map((choice, choiceIndex) => <li className={choiceIndex === item.answer ? "contextCorrectAnswer" : ""} key={choice}>{choice}</li>)}</ol>
                <p><strong>Explanation:</strong> {item.explanation}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="practiceNextSteps">
          <div><p className="sectionKicker">Next expansion</p><h2>Flashcards, AI Tutor, and 50-word coverage</h2><p>The module now has a visible route and working content. Future Sprint 9A updates can extend this same page without changing the navigation or Lessons page.</p></div>
          <div className="heroActions"><Link className="button buttonPrimary" href="/flashcards">Open flashcards</Link><Link className="button buttonGhost" href="/tutor">Ask AI Tutor</Link></div>
        </section>
      </div>
    </main>
  );
}
