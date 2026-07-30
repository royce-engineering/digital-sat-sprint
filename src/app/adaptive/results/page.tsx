"use client";
import Link from "next/link";
import { getQuestion } from "@/lib/adaptive/questionBank";
import { isScoreAnswerCorrect } from "@/lib/adaptive/scoreEngine";
import { attemptQuestionIds, useAdaptiveExamStore } from "@/store/adaptiveExamStore";

function Percent({ value }: { value: number }) {
  return <>{Math.round(value * 100)}%</>;
}

export default function ResultsPage() {
  const store = useAdaptiveExamStore();
  const attempt = store.attempts[0];
  if (!attempt) return <main className="pageShell"><div className="container pageContent examStart"><h1>No completed simulation yet.</h1><Link className="button buttonPrimary" href="/adaptive/exam">Start adaptive test</Link></div></main>;

  const ids = attemptQuestionIds(attempt);
  const score = attempt.scoreEstimate;
  const skills = new Map<string, { c: number; n: number; courseId: string }>();
  ids.forEach(id => {
    const q = getQuestion(id);
    if (!q) return;
    const v = skills.get(q.skill) || { c: 0, n: 0, courseId: q.courseId };
    v.n++;
    if (isScoreAnswerCorrect(q, attempt.answers[id])) v.c++;
    skills.set(q.skill, v);
  });
  const weak = [...skills].map(([skill, v]) => ({ skill, p: Math.round(v.c / v.n * 100), ...v })).sort((a, b) => a.p - b.p).slice(0, 6);

  return <main className="pageShell">
    <section className="pageHero adaptiveHero"><div className="container">
      <p className="eyebrow">Adaptive SAT report</p>
      <h1>Estimated total: {score.bestTotal}</h1>
      <p>Likely range {score.lowTotal}–{score.highTotal} · {score.confidence} confidence</p>
      <p><strong>{score.disclaimer}</strong> The official scoring model and item parameters are proprietary.</p>
    </div></section>

    <div className="container pageContent">
      <section className="resultScoreGrid">
        <article><span>Estimated total</span><strong>{score.bestTotal}</strong><p>{score.lowTotal}–{score.highTotal}</p></article>
        <article><span>Reading & Writing</span><strong>{score.readingWriting.bestEstimate}</strong><p>{score.readingWriting.lowEstimate}–{score.readingWriting.highEstimate}</p></article>
        <article><span>Math</span><strong>{score.math.bestEstimate}</strong><p>{score.math.lowEstimate}–{score.math.highEstimate}</p></article>
      </section>

      <section className="practiceLessonSection">
        <div className="sectionHeader"><p className="sectionKicker">Score diagnostics</p><h2>How this estimate was produced</h2></div>
        <div className="courseSectionGrid">
          {[score.readingWriting, score.math].map(section => <article key={section.section}>
            <span className="statusPill">Module 2: {section.module2Path}</span>
            <h3>{section.section}</h3>
            <p><strong>{section.correct}/{section.total}</strong> correct · <Percent value={section.accuracy} /> raw accuracy</p>
            <p><Percent value={section.weightedAccuracy} /> difficulty-weighted performance</p>
            <p>{section.unanswered} unanswered · {section.confidence} confidence</p>
            {section.studentResponse && <p>Student response: {section.studentResponse.correct}/{section.studentResponse.total}</p>}
          </article>)}
        </div>
      </section>

      <section className="practiceLessonSection">
        <div className="sectionHeader"><p className="sectionKicker">Domain performance</p><h2>Accuracy by official reporting area</h2></div>
        <div className="courseSectionGrid">
          {[...score.readingWriting.domainBreakdown, ...score.math.domainBreakdown].map(item => <article key={item.label}>
            <span className="statusPill"><Percent value={item.accuracy} /></span>
            <h3>{item.label}</h3>
            <p>{item.correct} correct across {item.total} questions.</p>
          </article>)}
        </div>
      </section>

      <section className="practiceLessonSection">
        <div className="sectionHeader"><p className="sectionKicker">Difficulty profile</p><h2>Easy, medium, and hard performance</h2></div>
        <div className="courseSectionGrid">
          {[score.readingWriting, score.math].flatMap(section => section.difficultyBreakdown.map(item => <article key={`${section.section}-${item.label}`}>
            <span className="statusPill">{section.section}</span>
            <h3>{item.label}</h3>
            <p><Percent value={item.accuracy} /> · {item.correct}/{item.total} correct</p>
          </article>))}
        </div>
      </section>

      <section className="practiceLessonSection"><div className="sectionHeader"><p className="sectionKicker">Priority review</p><h2>Lowest-performing sampled skills</h2></div><div className="courseSectionGrid">{weak.map(x => <article key={x.skill}><span className="statusPill">{x.p}% sampled mastery</span><h3>{x.skill}</h3><p>{x.c} correct across {x.n} questions.</p><Link href={`/review?skill=${encodeURIComponent(x.skill)}`}>Review mistakes →</Link></article>)}</div></section>
      <div className="heroActions"><Link className="button buttonPrimary" href="/review">Review wrong answers</Link><Link className="button buttonGhost" href="/analytics">Learning analytics</Link><Link className="button buttonGhost" href="/adaptive/history">Test history</Link><button className="button buttonGhost" onClick={() => { store.resetExam(); location.href = "/adaptive/exam"; }}>Start a new test</button></div>
    </div>
  </main>;
}
