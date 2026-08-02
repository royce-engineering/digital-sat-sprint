import {
  expect,
  test,
} from "@playwright/test";
import {
  clearAdaptiveStorage,
  readSessionStorage,
  writeSessionStorage,
} from "./helpers/storage";
import {
  READING_SESSION_KEY,
} from "./helpers/constants";

test("Reading loader repairs invalid index and timer", async ({
  page,
}) => {
  await clearAdaptiveStorage(page);

  await writeSessionStorage(
    page,
    READING_SESSION_KEY,
    {
      version: 1,
      phase: "module-1",
      module1Seed: 123,
      module2Seed: 456,
      hardRouteThreshold: 0.7,
      module1QuestionIds: [],
      module2QuestionIds: [],
      answers: {},
      currentIndex: 999,
      secondsRemaining: -1,
      startedAt: Date.now(),
      updatedAt: Date.now(),
    },
  );

  await page.goto("/test/adaptive");

  const recovered = await readSessionStorage<{
    phase: string;
    currentIndex: number;
    secondsRemaining: number;
  }>(page, READING_SESSION_KEY);

  expect(recovered?.phase).toBe("intro");
  expect(recovered?.currentIndex).toBe(0);
  expect(
    recovered?.secondsRemaining,
  ).toBeGreaterThan(0);
});
