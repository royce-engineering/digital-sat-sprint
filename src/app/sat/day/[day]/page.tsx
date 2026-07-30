import { notFound } from "next/navigation";
import Link from "next/link";
import VocabularyCard from "@/components/VocabularyCard";
import InteractiveQuiz from "@/components/InteractiveQuiz";
import LessonCompletionButton from "@/components/LessonCompletionButton";
import { getSatDay, satDays } from "@/content/sat";

type DayPageProps = {
  params: Promise<{
    day: string;
  }>;
};

export function generateStaticParams() {
  return satDays.map((item) => ({
    day: String(item.day),
  }));
}

export default async function DayPage({ params }: DayPageProps) {
  const { day } = await params;
  const lesson = getSatDay(Number(day));

  if (!lesson) {
    notFound();
  }

  return (
    <main>
      <section className="lessonHero">
        <div className="container">
          <Link className="backLink" href="/lessons">
            ← Course library
          </Link>

          <div className="lessonHeroGrid">
            <div>
              <p className="eyebrow">Digital SAT Sprint · Day {lesson.day}</p>
              <h1>{lesson.title}</h1>
              <p className="lessonDescription">{lesson.description}</p>

              <div className="lessonChips">
                <span className="lessonChip">{lesson.words.length} words</span>
                <span className="lessonChip">{lesson.questions.length} questions</span>
                <span className="lessonChip">Estimated 45–60 min</span>
              </div>
            </div>

            <div className="progressCard">
              <div className="progressTop">
                <span>Course progress</span>
                <strong>Day {lesson.day} of {satDays.length}</strong>
              </div>
              <div className="progressTrack">
                <span style={{ width: `${(lesson.day / satDays.length) * 100}%` }} />
              </div>
              <p>Study the lesson, then complete the interactive quiz.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container lessonLayout">
        <div className="lessonMain">
          <section>
            <div className="sectionHeader sectionHeaderRow">
              <div>
                <p className="sectionKicker">Part 1</p>
                <h2>Core vocabulary</h2>
                <p>Study the definition, context, collocations, and SAT usage.</p>
              </div>
              <a className="button compactButton" href="#interactive-practice">
                Skip to quiz
              </a>
            </div>

            <div className="lessonMain">
              {lesson.words.map((word, index) => (
                <VocabularyCard
                  key={word.word}
                  item={word}
                  number={index + 1}
                  day={lesson.day}
                  lessonTitle={lesson.title}
                />
              ))}
            </div>
          </section>

          <section id="interactive-practice">
            <InteractiveQuiz
              questions={lesson.questions}
              title={`Day ${lesson.day} Practice`}
              day={lesson.day}
            />
          </section>

          <section className="completionPanel">
            <div>
              <p className="sectionKicker">Lesson review</p>
              <h2>Return to the words you missed.</h2>
              <p>
                Use the explanations to identify whether the mistake came from
                meaning, context, or confusion with a related word.
              </p>
            </div>
            <div className="completionActions">
              <LessonCompletionButton day={lesson.day} />
              <Link className="button" href={`/tutor?day=${lesson.day}`}>
                Ask AI Tutor
              </Link>
              <Link className="button" href="/lessons">
                Return to course
              </Link>
            </div>
          </section>
        </div>

        <aside className="lessonSidebar">
          <div className="panel sidebarPanel">
            <div className="sidebarHeading">
              <span>Quick navigation</span>
              <strong>{lesson.words.length} words</strong>
            </div>
            <div className="sidebarList wordNavList">
              {lesson.words.map((word, index) => (
                <a
                  className="sidebarLink"
                  href={`#word-${index + 1}`}
                  key={word.word}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {word.word}
                </a>
              ))}
            </div>
            <a className="button sidebarButton" href="#interactive-practice">
              Interactive quiz
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
