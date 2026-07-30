import type { Metadata } from "next";
import Link from "next/link";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import { satDays } from "@/content/sat";

export const metadata: Metadata = {
  title: "Quiz",
};

export default function QuizPage() {
  const defaultLesson = satDays[0];

  return (
    <main className="pageShell">
      <section className="pageHero quizPageHero">
        <div className="container">
          <p className="eyebrow">Sprint 2 · Interactive quiz</p>
          <h1>Choose, submit, score, and review.</h1>
          <p>
            Day 1 now includes a fully interactive quiz experience. Additional
            lesson selectors can be added in a later sprint.
          </p>
          <div className="heroActions">
            <Link className="button" href={`/sat/day/${defaultLesson.day}`}>
              Review Day {defaultLesson.day} vocabulary
            </Link>
            <Link className="button buttonGhost" href="/lessons">
              Browse lessons
            </Link>
          </div>
        </div>
      </section>

      <div className="container pageContent">
        <InteractiveQuiz
          questions={defaultLesson.questions}
          title={`Day ${defaultLesson.day}: ${defaultLesson.title}`}
          day={defaultLesson.day}
        />
      </div>
    </main>
  );
}
