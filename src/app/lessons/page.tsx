import type { Metadata } from "next";
import Link from "next/link";
import { satDays } from "@/content/sat";

export const metadata: Metadata = {
  title: "Lessons",
};

export default function LessonsPage() {
  const totalWords = satDays.reduce((sum, lesson) => sum + lesson.words.length, 0);
  const totalQuestions = satDays.reduce(
    (sum, lesson) => sum + lesson.questions.length,
    0,
  );

  return (
    <main className="pageShell">
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Course library</p>
          <h1>Vocabulary, word roots, and twenty-five days of structured practice.</h1>
          <p>
            Begin with the Word Roots foundation chapter, then complete Days 1–25 in order or open any lesson to review its
            vocabulary, examples, and practice questions.
          </p>
        </div>
      </section>

      <div className="container pageContent">
        <div className="librarySummary">
          <div>
            <strong>{satDays.length + 1}</strong>
            <span>Lessons available</span>
          </div>
          <div>
            <strong>{totalWords}</strong>
            <span>Words available</span>
          </div>
          <div>
            <strong>{totalQuestions}</strong>
            <span>Practice questions</span>
          </div>
          <div>
            <strong>{satDays.length}</strong>
            <span>Course days</span>
          </div>
        </div>

        <section className="courseList">
          <Link className="courseRow courseRowAvailable" href="/vocabulary/roots">
            <span className="courseNumber">00</span>
            <div className="courseRowBody">
              <div>
                <span className="availableBadge">Foundation chapter</span>
                <h2>English Word Roots & Affixes</h2>
                <p>Decode unfamiliar SAT vocabulary through 72 high-value Greek and Latin roots, prefixes, and suffixes.</p>
              </div>
              <div className="courseMeta">
                <span>72 roots & affixes</span>
                <span>20 questions</span>
                <strong>Open academy →</strong>
              </div>
            </div>
          </Link>
          {satDays.map((lesson) => (
            <Link
              className="courseRow courseRowAvailable"
              href={`/sat/day/${lesson.day}`}
              key={lesson.day}
            >
              <span className="courseNumber">
                {String(lesson.day).padStart(2, "0")}
              </span>
              <div className="courseRowBody">
                <div>
                  <span className="availableBadge">Available</span>
                  <h2>{lesson.title}</h2>
                  <p>{lesson.description}</p>
                </div>
                <div className="courseMeta">
                  <span>{lesson.words.length} words</span>
                  <span>{lesson.questions.length} questions</span>
                  <strong>Open lesson →</strong>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
