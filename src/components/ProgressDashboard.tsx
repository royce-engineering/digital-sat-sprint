"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { SatDay } from "@/content/sat/types";
import {
  calculateStreak,
  markDayComplete,
  markDayIncomplete,
  readProgress,
  resetProgress,
  type LearningProgress,
} from "@/lib/progress";

type ProgressDashboardProps = {
  lessons: SatDay[];
};

export default function ProgressDashboard({
  lessons,
}: ProgressDashboardProps) {
  const [progress, setProgress] = useState<LearningProgress | null>(null);

  useEffect(() => {
    const update = () => setProgress(readProgress());

    update();
    window.addEventListener("storage", update);
    window.addEventListener("sat-progress-updated", update);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("sat-progress-updated", update);
    };
  }, []);

  const statistics = useMemo(() => {
    if (!progress) {
      return {
        completedWords: 0,
        quizAverage: 0,
        quizzesTaken: 0,
        flashcardsReviewed: 0,
        streak: { current: 0, longest: 0 },
      };
    }

    const completedWords = lessons
      .filter((lesson) => progress.completedDays.includes(lesson.day))
      .reduce((total, lesson) => total + lesson.words.length, 0);

    const quizResults = Object.values(progress.quizResults);
    const quizAverage = quizResults.length
      ? Math.round(
          quizResults.reduce((total, result) => total + result.percentage, 0) /
            quizResults.length,
        )
      : 0;

    const flashcardsReviewed = Object.values(progress.flashcards).reduce(
      (total, result) => total + result.reviewed,
      0,
    );

    return {
      completedWords,
      quizAverage,
      quizzesTaken: quizResults.length,
      flashcardsReviewed,
      streak: calculateStreak(progress.studyDates),
    };
  }, [lessons, progress]);

  if (!progress) {
    return <p>Loading progress...</p>;
  }

  const nextLesson =
    lessons.find((lesson) => !progress.completedDays.includes(lesson.day)) ??
    lessons[lessons.length - 1];

  function toggleDay(day: number) {
    if (progress.completedDays.includes(day)) {
      markDayIncomplete(day);
    } else {
      markDayComplete(day);
    }
  }

  function handleReset() {
    resetProgress();
  }

  return (
    <section className="progressDashboard">
      <div className="progressStatGrid">
        <article>
          <span className="progressStatIcon">▤</span>
          <div>
            <span>Completed lessons</span>
            <strong>{progress.completedDays.length} / {lessons.length}</strong>
          </div>
        </article>

        <article>
          <span className="progressStatIcon">A</span>
          <div>
            <span>Words completed</span>
            <strong>{statistics.completedWords}</strong>
          </div>
        </article>

        <article>
          <span className="progressStatIcon">✓</span>
          <div>
            <span>Quiz average</span>
            <strong>
              {statistics.quizzesTaken ? `${statistics.quizAverage}%` : "—"}
            </strong>
          </div>
        </article>

        <article>
          <span className="progressStatIcon">↗</span>
          <div>
            <span>Current streak</span>
            <strong>{statistics.streak.current} days</strong>
          </div>
        </article>
      </div>

      <div className="progressOverviewGrid">
        <article className="progressOverviewCard">
          <div className="progressOverviewTop">
            <div>
              <p className="sectionKicker">Course completion</p>
              <h2>
                {progress.completedDays.length} of {lessons.length} available days
              </h2>
            </div>
            <strong>
              {Math.round(
                (progress.completedDays.length / lessons.length) * 100,
              )}
              %
            </strong>
          </div>

          <div className="largeProgressTrack">
            <span
              style={{
                width: `${Math.round(
                  (progress.completedDays.length / lessons.length) * 100,
                )}%`,
              }}
            />
          </div>

          <p>
            Completed days are counted as {statistics.completedWords} studied
            vocabulary words.
          </p>
        </article>

        <article className="progressOverviewCard nextLessonCard">
          <p className="sectionKicker">Recommended next step</p>
          <h2>
            Day {nextLesson.day}: {nextLesson.title}
          </h2>
          <p>{nextLesson.description}</p>
          <Link
            className="button buttonPrimary"
            href={`/sat/day/${nextLesson.day}`}
          >
            Continue learning
          </Link>
        </article>
      </div>

      <div className="progressDetailGrid">
        <section className="progressPanel">
          <div className="sectionHeader sectionHeaderRow">
            <div>
              <p className="sectionKicker">Lesson checklist</p>
              <h2>Available course days</h2>
              <p>
                Mark a lesson complete after studying its vocabulary and practice.
              </p>
            </div>
          </div>

          <div className="progressLessonList">
            {lessons.map((lesson) => {
              const completed = progress.completedDays.includes(lesson.day);
              const quiz = progress.quizResults[String(lesson.day)];
              const flashcards = progress.flashcards[String(lesson.day)];

              return (
                <article
                  className={`progressLessonRow ${
                    completed ? "progressLessonRowComplete" : ""
                  }`}
                  key={lesson.day}
                >
                  <button
                    className={`progressCheckButton ${
                      completed ? "progressCheckButtonComplete" : ""
                    }`}
                    type="button"
                    onClick={() => toggleDay(lesson.day)}
                    aria-label={
                      completed
                        ? `Mark Day ${lesson.day} incomplete`
                        : `Mark Day ${lesson.day} complete`
                    }
                  >
                    {completed ? "✓" : ""}
                  </button>

                  <div className="progressLessonMain">
                    <div>
                      <span>Day {lesson.day}</span>
                      <h3>{lesson.title}</h3>
                    </div>
                    <div className="progressLessonMeta">
                      <span>{lesson.words.length} words</span>
                      <span>
                        Quiz: {quiz ? `${quiz.percentage}%` : "Not taken"}
                      </span>
                      <span>
                        Cards: {flashcards ? flashcards.reviewed : 0} reviewed
                      </span>
                    </div>
                  </div>

                  <Link href={`/sat/day/${lesson.day}`}>Open →</Link>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="progressSideColumn">
          <article className="progressPanel">
            <p className="sectionKicker">Study activity</p>
            <h2>Streak summary</h2>

            <div className="streakStat">
              <strong>{statistics.streak.current}</strong>
              <span>Current streak</span>
            </div>

            <div className="streakStat">
              <strong>{statistics.streak.longest}</strong>
              <span>Longest streak</span>
            </div>

            <div className="streakStat">
              <strong>{progress.studyDates.length}</strong>
              <span>Active study days</span>
            </div>
          </article>

          <article className="progressPanel">
            <p className="sectionKicker">Practice totals</p>
            <h2>Review activity</h2>

            <div className="practiceSummaryList">
              <div>
                <span>Quizzes taken</span>
                <strong>{statistics.quizzesTaken}</strong>
              </div>
              <div>
                <span>Average score</span>
                <strong>
                  {statistics.quizzesTaken
                    ? `${statistics.quizAverage}%`
                    : "—"}
                </strong>
              </div>
              <div>
                <span>Flashcards reviewed</span>
                <strong>{statistics.flashcardsReviewed}</strong>
              </div>
            </div>
          </article>

          <article className="progressPanel resetProgressPanel">
            <p className="sectionKicker">Local data</p>
            <h2>Reset progress</h2>
            <p>
              This removes lesson completion, quiz results, flashcard activity,
              and study dates from this browser.
            </p>
            <button className="button" type="button" onClick={handleReset}>
              Reset all progress
            </button>
          </article>
        </aside>
      </div>
    </section>
  );
}
