"use client";

import { useMemo, useState } from "react";
import type { SatDay, VocabularyWord } from "@/content/sat/types";
import { saveFlashcardProgress } from "@/lib/progress";

type FlashcardDeckProps = {
  lessons: SatDay[];
};

type CardStatus = "known" | "again";

function makeDeck(lesson: SatDay): VocabularyWord[] {
  return lesson.words.map((word) => ({ ...word }));
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

export default function FlashcardDeck({ lessons }: FlashcardDeckProps) {
  const [selectedDay, setSelectedDay] = useState(lessons[0]?.day ?? 1);
  const selectedLesson =
    lessons.find((lesson) => lesson.day === selectedDay) ?? lessons[0];

  const [deck, setDeck] = useState<VocabularyWord[]>(
    selectedLesson ? makeDeck(selectedLesson) : [],
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [statuses, setStatuses] = useState<Record<string, CardStatus>>({});
  const [shuffled, setShuffled] = useState(false);

  const currentCard = deck[currentIndex];

  const knownCount = useMemo(
    () =>
      deck.reduce(
        (total, card) => total + (statuses[card.word] === "known" ? 1 : 0),
        0,
      ),
    [deck, statuses],
  );

  const againCount = useMemo(
    () =>
      deck.reduce(
        (total, card) => total + (statuses[card.word] === "again" ? 1 : 0),
        0,
      ),
    [deck, statuses],
  );

  const reviewedCount = knownCount + againCount;
  const progressPercentage = deck.length
    ? Math.round((reviewedCount / deck.length) * 100)
    : 0;

  function loadLesson(day: number) {
    const lesson = lessons.find((item) => item.day === day);

    if (!lesson) return;

    setSelectedDay(day);
    setDeck(makeDeck(lesson));
    setCurrentIndex(0);
    setFlipped(false);
    setStatuses({});
    setShuffled(false);
  }

  function moveTo(index: number) {
    if (!deck.length) return;
    setCurrentIndex((index + deck.length) % deck.length);
    setFlipped(false);
  }

  function markCard(status: CardStatus) {
    if (!currentCard) return;

    const nextStatuses = {
      ...statuses,
      [currentCard.word]: status,
    };

    setStatuses(nextStatuses);

    const reviewed = deck.reduce(
      (total, card) => total + (nextStatuses[card.word] ? 1 : 0),
      0,
    );
    const known = deck.reduce(
      (total, card) => total + (nextStatuses[card.word] === "known" ? 1 : 0),
      0,
    );
    const again = deck.reduce(
      (total, card) => total + (nextStatuses[card.word] === "again" ? 1 : 0),
      0,
    );

    saveFlashcardProgress({
      day: selectedLesson.day,
      reviewed,
      known,
      again,
      completedAt: new Date().toISOString(),
    });

    if (currentIndex < deck.length - 1) {
      moveTo(currentIndex + 1);
    } else {
      setFlipped(false);
    }
  }

  function toggleShuffle() {
    if (!selectedLesson) return;

    if (shuffled) {
      setDeck(makeDeck(selectedLesson));
      setShuffled(false);
    } else {
      setDeck(shuffle(selectedLesson.words));
      setShuffled(true);
    }

    setCurrentIndex(0);
    setFlipped(false);
  }

  function restartDeck() {
    if (!selectedLesson) return;

    setDeck(shuffled ? shuffle(selectedLesson.words) : makeDeck(selectedLesson));
    setCurrentIndex(0);
    setFlipped(false);
    setStatuses({});
  }

  if (!selectedLesson || !currentCard) {
    return <p>No flashcards are available.</p>;
  }

  const currentStatus = statuses[currentCard.word];

  return (
    <section className="flashcardWorkspace">
      <div className="flashcardControlsPanel">
        <div className="flashcardSelectorGroup">
          <label htmlFor="flashcard-lesson">Lesson deck</label>
          <select
            id="flashcard-lesson"
            value={selectedDay}
            onChange={(event) => loadLesson(Number(event.target.value))}
          >
            {lessons.map((lesson) => (
              <option value={lesson.day} key={lesson.day}>
                Day {lesson.day}: {lesson.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flashcardControlButtons">
          <button className="button" type="button" onClick={toggleShuffle}>
            {shuffled ? "Restore order" : "Shuffle deck"}
          </button>
          <button className="button" type="button" onClick={restartDeck}>
            Restart
          </button>
        </div>
      </div>

      <div className="flashcardStatsGrid">
        <article>
          <span>Progress</span>
          <strong>{reviewedCount} / {deck.length}</strong>
        </article>
        <article>
          <span>Known</span>
          <strong>{knownCount}</strong>
        </article>
        <article>
          <span>Again</span>
          <strong>{againCount}</strong>
        </article>
        <article>
          <span>Current card</span>
          <strong>{currentIndex + 1} / {deck.length}</strong>
        </article>
      </div>

      <div className="flashcardProgressTrack" aria-hidden="true">
        <span style={{ width: `${progressPercentage}%` }} />
      </div>

      <div className="flashcardStage">
        <button
          className={`flashcard ${flipped ? "flashcardFlipped" : ""}`}
          type="button"
          onClick={() => setFlipped((current) => !current)}
          aria-label={flipped ? "Show word" : "Show definition"}
        >
          <span className="flashcardFace flashcardFront">
            <span className="flashcardTopline">
              <span>
                Day {selectedLesson.day} · Card {currentIndex + 1}
              </span>
              <span>{currentCard.partOfSpeech}</span>
            </span>

            <span className="flashcardWord">{currentCard.word}</span>
            <span className="flashcardStars">
              {"★".repeat(currentCard.rating)}
            </span>

            <span className="flashcardPrompt">
              Click the card to reveal the definition
            </span>
          </span>

          <span className="flashcardFace flashcardBack">
            <span className="flashcardTopline">
              <span>{currentCard.word}</span>
              <span>{currentCard.partOfSpeech}</span>
            </span>

            <span className="flashcardDefinition">
              {currentCard.definition}
            </span>

            <span className="flashcardExample">
              “{currentCard.example}”
            </span>

            <span className="flashcardBackMeta">
              <strong>Synonyms</strong>
              {currentCard.synonyms.join(" · ")}
            </span>

            <span className="flashcardPrompt">
              Click again to return to the word
            </span>
          </span>
        </button>

        <div className="flashcardStatusLine">
          <span>
            Current status:
            <strong>
              {currentStatus === "known"
                ? " Known"
                : currentStatus === "again"
                  ? " Review again"
                  : " Not reviewed"}
            </strong>
          </span>
        </div>

        <div className="flashcardNavigation">
          <button
            className="button"
            type="button"
            onClick={() => moveTo(currentIndex - 1)}
          >
            ← Previous
          </button>

          <div className="flashcardRatingButtons">
            <button
              className="button flashcardAgainButton"
              type="button"
              onClick={() => markCard("again")}
            >
              Again
            </button>
            <button
              className="button buttonPrimary flashcardKnownButton"
              type="button"
              onClick={() => markCard("known")}
            >
              Known
            </button>
          </div>

          <button
            className="button"
            type="button"
            onClick={() => moveTo(currentIndex + 1)}
          >
            Next →
          </button>
        </div>
      </div>

      <div className="flashcardMiniIndex">
        {deck.map((card, index) => {
          const status = statuses[card.word];

          return (
            <button
              className={`flashcardMiniButton ${
                index === currentIndex ? "flashcardMiniButtonActive" : ""
              } ${
                status === "known"
                  ? "flashcardMiniKnown"
                  : status === "again"
                    ? "flashcardMiniAgain"
                    : ""
              }`}
              type="button"
              key={`${card.word}-${index}`}
              onClick={() => moveTo(index)}
              aria-label={`Open ${card.word}`}
              title={card.word}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      {reviewedCount === deck.length ? (
        <div className="flashcardCompletionPanel">
          <span>✓</span>
          <div>
            <h3>Deck complete</h3>
            <p>
              You marked {knownCount} words as known and {againCount} for
              additional review.
            </p>
          </div>
          <button className="button buttonPrimary" type="button" onClick={restartDeck}>
            Study again
          </button>
        </div>
      ) : null}
    </section>
  );
}
