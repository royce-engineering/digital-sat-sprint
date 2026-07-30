export type QuizResult = {
  day: number;
  score: number;
  total: number;
  percentage: number;
  completedAt: string;
};

export type FlashcardProgress = {
  day: number;
  reviewed: number;
  known: number;
  again: number;
  completedAt: string;
};

export type LearningProgress = {
  completedDays: number[];
  quizResults: Record<string, QuizResult>;
  flashcards: Record<string, FlashcardProgress>;
  studyDates: string[];
};

const STORAGE_KEY = "digital-sat-sprint-progress";

export const emptyProgress: LearningProgress = {
  completedDays: [],
  quizResults: {},
  flashcards: {},
  studyDates: [],
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function readProgress(): LearningProgress {
  if (typeof window === "undefined") return emptyProgress;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return emptyProgress;

    const parsed = JSON.parse(stored);

    return {
      completedDays: Array.isArray(parsed.completedDays)
        ? parsed.completedDays
        : [],
      quizResults:
        parsed.quizResults && typeof parsed.quizResults === "object"
          ? parsed.quizResults
          : {},
      flashcards:
        parsed.flashcards && typeof parsed.flashcards === "object"
          ? parsed.flashcards
          : {},
      studyDates: Array.isArray(parsed.studyDates) ? parsed.studyDates : [],
    };
  } catch {
    return emptyProgress;
  }
}

export function writeProgress(progress: LearningProgress) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("sat-progress-updated"));
}

export function recordStudyActivity(progress: LearningProgress) {
  const today = todayKey();
  const studyDates = progress.studyDates.includes(today)
    ? progress.studyDates
    : [...progress.studyDates, today].sort();

  return {
    ...progress,
    studyDates,
  };
}

export function markDayComplete(day: number) {
  const current = readProgress();
  const completedDays = current.completedDays.includes(day)
    ? current.completedDays
    : [...current.completedDays, day].sort((a, b) => a - b);

  writeProgress(
    recordStudyActivity({
      ...current,
      completedDays,
    }),
  );
}

export function markDayIncomplete(day: number) {
  const current = readProgress();

  writeProgress({
    ...current,
    completedDays: current.completedDays.filter((item) => item !== day),
  });
}

export function saveQuizResult(result: QuizResult) {
  const current = readProgress();

  writeProgress(
    recordStudyActivity({
      ...current,
      quizResults: {
        ...current.quizResults,
        [String(result.day)]: result,
      },
    }),
  );
}

export function saveFlashcardProgress(result: FlashcardProgress) {
  const current = readProgress();

  writeProgress(
    recordStudyActivity({
      ...current,
      flashcards: {
        ...current.flashcards,
        [String(result.day)]: result,
      },
    }),
  );
}

export function resetProgress() {
  writeProgress(emptyProgress);
}

export function calculateStreak(studyDates: string[]) {
  if (!studyDates.length) {
    return { current: 0, longest: 0 };
  }

  const uniqueDates = Array.from(new Set(studyDates)).sort();
  const dayMs = 24 * 60 * 60 * 1000;

  let longest = 1;
  let running = 1;

  for (let index = 1; index < uniqueDates.length; index += 1) {
    const previous = new Date(`${uniqueDates[index - 1]}T00:00:00`);
    const current = new Date(`${uniqueDates[index]}T00:00:00`);
    const difference = Math.round(
      (current.getTime() - previous.getTime()) / dayMs,
    );

    if (difference === 1) {
      running += 1;
      longest = Math.max(longest, running);
    } else {
      running = 1;
    }
  }

  const today = new Date(`${todayKey()}T00:00:00`);
  const latest = new Date(`${uniqueDates[uniqueDates.length - 1]}T00:00:00`);
  const daysSinceLatest = Math.round(
    (today.getTime() - latest.getTime()) / dayMs,
  );

  let currentStreak = 0;

  if (daysSinceLatest <= 1) {
    currentStreak = 1;

    for (let index = uniqueDates.length - 1; index > 0; index -= 1) {
      const current = new Date(`${uniqueDates[index]}T00:00:00`);
      const previous = new Date(`${uniqueDates[index - 1]}T00:00:00`);
      const difference = Math.round(
        (current.getTime() - previous.getTime()) / dayMs,
      );

      if (difference !== 1) break;
      currentStreak += 1;
    }
  }

  return {
    current: currentStreak,
    longest,
  };
}
