import Link from "next/link";
import VocabularySearch from "@/components/VocabularySearch";
import DailyGoalMetric from "@/components/DailyGoalMetric";
import LearningCenters from "@/components/LearningCenters";
import { satDays } from "@/content/sat";

const completedDays = 0;
const totalDays = satDays.length;
const availableWords = satDays.reduce(
  (total, lesson) => total + lesson.words.length,
  0,
);
const availableQuestions = satDays.reduce(
  (total, lesson) => total + lesson.questions.length,
  0,
);

export default function HomePage() {
  const nextLesson = satDays[Math.min(completedDays, satDays.length - 1)];

  return (
    <main>
      <section className="dashboardHero">
        <div className="dashboardGlow dashboardGlowOne" />
        <div className="dashboardGlow dashboardGlowTwo" />

        <div className="container dashboardHeroGrid">
          <div className="dashboardIntro">
            <span className="statusPill">
              <span className="statusDot" />
              Version 0.3 · Learning Platform
            </span>

            <p className="eyebrow">Digital SAT vocabulary sprint</p>
            <h1>
              Learn {availableWords} essential words
              <span> in {totalDays} focused days.</span>
            </h1>
            <p className="heroText">
              Build the vocabulary needed to understand difficult passages,
              evaluate evidence, and answer Digital SAT questions with greater
              confidence.
            </p>

            <div className="heroActions">
              <Link
                className="button buttonPrimary buttonLarge"
                href={`/sat/day/${nextLesson.day}`}
              >
                Start learning
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="button buttonGhost buttonLarge" href="/lessons">
                Browse lessons
              </Link>
            </div>

            <div className="trustRow">
              <span>✓ 25 words per lesson</span>
              <span>✓ Contextual examples</span>
              <span>✓ Answer explanations</span>
            </div>
          </div>

          <aside className="todayCard">
            <div className="todayCardHeader">
              <div>
                <span className="cardEyebrow">Today’s lesson</span>
                <h2>Day {nextLesson.day}</h2>
              </div>
              <span className="lessonTime">45–60 min</span>
            </div>

            <div className="todayTopic">
              <span className="todayTopicNumber">
                {String(nextLesson.day).padStart(2, "0")}
              </span>
              <div>
                <strong>{nextLesson.title}</strong>
                <p>{nextLesson.description}</p>
              </div>
            </div>

            <div className="todayStats">
              <div>
                <strong>{nextLesson.words.length}</strong>
                <span>Words</span>
              </div>
              <div>
                <strong>{nextLesson.questions.length}</strong>
                <span>Questions</span>
              </div>
              <div>
                <strong>5★</strong>
                <span>Core level</span>
              </div>
            </div>

            <Link
              className="button buttonPrimary todayButton"
              href={`/sat/day/${nextLesson.day}`}
            >
              Open Day {nextLesson.day}
            </Link>
          </aside>
        </div>
      </section>

      <div className="container dashboardBody">
        <LearningCenters heading="Start with the subject you need today" />
        <section className="metricGrid" aria-label="Course overview">
          <article className="metricCard">
            <span className="metricIcon metricIconPurple">▤</span>
            <div>
              <span className="metricLabel">Available content</span>
              <strong>{availableWords} words</strong>
              <small>Across {satDays.length} complete lessons</small>
            </div>
          </article>

          <article className="metricCard">
            <span className="metricIcon metricIconGreen">✓</span>
            <div>
              <span className="metricLabel">Practice library</span>
              <strong>{availableQuestions} questions</strong>
              <small>With answers and explanations</small>
            </div>
          </article>

          <article className="metricCard">
            <span className="metricIcon metricIconBlue">↗</span>
            <div>
              <span className="metricLabel">Course progress</span>
              <strong>
                {completedDays} / {totalDays} days
              </strong>
              <small>Progress tracking arrives in Sprint 6</small>
            </div>
          </article>

          <article className="metricCard">
            <span className="metricIcon metricIconGold">★</span>
            <div>
              <span className="metricLabel">Daily target</span>
              <DailyGoalMetric />
              <small>One focused study session</small>
            </div>
          </article>
        </section>

        <section className="dashboardSection">
          <div className="sectionHeader sectionHeaderRow">
            <div>
              <p className="sectionKicker">Vocabulary finder</p>
              <h2>Search the course instantly</h2>
              <p>Type a word, definition, synonym, or contextual clue.</p>
            </div>
            <Link className="textLink" href="/search">
              Open advanced search →
            </Link>
          </div>

          <VocabularySearch lessons={satDays} compact />
        </section>

        <section className="dashboardSection">
          <div className="sectionHeader sectionHeaderRow">
            <div>
              <p className="sectionKicker">Learning path</p>
              <h2>Your available lessons</h2>
              <p>
                Complete each topic in order or open the lesson most relevant to
                your current reading practice.
              </p>
            </div>
            <Link className="textLink" href="/lessons">
              View all 20 days →
            </Link>
          </div>

          <div className="dashboardLessonGrid">
            {satDays.map((lesson, index) => (
              <Link
                className="dashboardLessonCard"
                href={`/sat/day/${lesson.day}`}
                key={lesson.day}
              >
                <div className="lessonCardAccent" />
                <div className="lessonCardTop">
                  <span className="lessonDayBadge">
                    Day {String(lesson.day).padStart(2, "0")}
                  </span>
                  <span className="lessonStatus">
                    {index === 0 ? "Start here" : "Available"}
                  </span>
                </div>
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
                <div className="lessonCardFooter">
                  <span>{lesson.words.length} words</span>
                  <span>{lesson.questions.length} questions</span>
                  <strong>Open →</strong>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="dashboardSection">
          <div className="sectionHeader">
            <p className="sectionKicker">Platform tools</p>
            <h2>One study system, several practice modes</h2>
            <p>
              The navigation and workspace are ready. Interactive features will
              be implemented one sprint at a time.
            </p>
          </div>

          <div className="featureGrid">
            <Link className="featureCard" href="/quiz">
              <span className="featureIcon">✓</span>
              <div>
                <h3>Interactive Quiz</h3>
                <p>Select answers, submit, and receive an immediate score.</p>
                <strong>Sprint 2 →</strong>
              </div>
            </Link>

            <Link className="featureCard" href="/flashcards">
              <span className="featureIcon">▱</span>
              <div>
                <h3>Flashcards</h3>
                <p>Flip cards and classify each word as Known or Again.</p>
                <strong>Sprint 3 →</strong>
              </div>
            </Link>

            <Link className="featureCard" href="/favorites">
              <span className="featureIcon">☆</span>
              <div>
                <h3>Favorites</h3>
                <p>Save difficult words for a personalized review list.</p>
                <strong>Sprint 5 →</strong>
              </div>
            </Link>
          </div>
        </section>

        <section className="dashboardSection">
          <div className="downloadPanel modernDownloadPanel">
            <div>
              <p className="sectionKicker">Offline study</p>
              <h2>Print English and Math cheat sheets</h2>
              <p>
                Review SAT reading, grammar, algebra, geometry, vocabulary, and
                exam-day essentials in a printer-friendly study center.
              </p>
            </div>
            <div className="downloadList">
              <Link className="button buttonPrimary" href="/offline-study">
                Open cheat sheets
              </Link>
              <Link className="button" href="/lessons">
                Open course library
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
