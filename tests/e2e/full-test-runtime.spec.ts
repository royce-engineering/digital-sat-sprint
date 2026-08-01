import { expect, test } from "@playwright/test";
import {
  clearAdaptiveStorage,
  readLocalStorage,
  writeLocalStorage,
} from "./helpers/storage";
import { FULL_TEST_KEY } from "./helpers/constants";

test.beforeEach(async ({ page }) => {
  await clearAdaptiveStorage(page);
});

test("fresh full test starts in Reading", async ({ page }) => {
  await page.goto("/test/sat/full");

  await page
    .getByRole("button", {
      name: /begin full test/i,
    })
    .click();

  await expect(page.locator("main")).toContainText(/Reading & Writing/i);

  const state = await readLocalStorage<{
    phase: string;
    startedAt?: number;
  }>(page, FULL_TEST_KEY);

  expect(state?.phase).toBe("reading");
  expect(state?.startedAt).toBeTruthy();
});

test("corrupt full-test storage recovers to intro", async ({ page }) => {
  await page.goto("/");

  await page.evaluate((key) => {
    localStorage.setItem(key, "{invalid-json");
  }, FULL_TEST_KEY);

  await page.goto("/test/sat/full");

  await expect(page.locator("main")).toContainText(/Digital SAT Practice Test/i);
});

test("refresh preserves a saved break timestamp", async ({ page }) => {
  const breakStartedAt = Date.now() - 15_000;

  await page.goto("/");

  await writeLocalStorage(page, FULL_TEST_KEY, {
    version: 1,
    phase: "break",
    attemptId: "full-sat-test",
    startedAt: breakStartedAt - 5_000,
    readingStartedAt: breakStartedAt - 5_000,
    readingCompletedAt: breakStartedAt,
    breakStartedAt,
    updatedAt: breakStartedAt,
  });

  await page.goto("/test/sat/full");

  const before = await readLocalStorage<{
    breakStartedAt?: number;
  }>(page, FULL_TEST_KEY);

  await page.reload();

  const after = await readLocalStorage<{
    breakStartedAt?: number;
  }>(page, FULL_TEST_KEY);

  expect(after?.breakStartedAt).toBe(before?.breakStartedAt);
});
