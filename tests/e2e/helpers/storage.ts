import type { Page } from "@playwright/test";

export async function clearAdaptiveStorage(
  page: Page,
): Promise<void> {
  await page.goto("/");

  await page.evaluate(() => {
    sessionStorage.clear();
    localStorage.clear();
  });
}

export async function readSessionStorage<T>(
  page: Page,
  key: string,
): Promise<T | null> {
  return page.evaluate((storageKey) => {
    const raw = sessionStorage.getItem(storageKey);

    if (!raw) return null;

    return JSON.parse(raw) as T;
  }, key);
}

export async function readLocalStorage<T>(
  page: Page,
  key: string,
): Promise<T | null> {
  return page.evaluate((storageKey) => {
    const raw = localStorage.getItem(storageKey);

    if (!raw) return null;

    return JSON.parse(raw) as T;
  }, key);
}

export async function writeSessionStorage(
  page: Page,
  key: string,
  value: unknown,
): Promise<void> {
  await page.evaluate(
    ({ storageKey, storageValue }) => {
      sessionStorage.setItem(
        storageKey,
        JSON.stringify(storageValue),
      );
    },
    {
      storageKey: key,
      storageValue: value,
    },
  );
}

export async function writeLocalStorage(
  page: Page,
  key: string,
  value: unknown,
): Promise<void> {
  await page.evaluate(
    ({ storageKey, storageValue }) => {
      localStorage.setItem(
        storageKey,
        JSON.stringify(storageValue),
      );
    },
    {
      storageKey: key,
      storageValue: value,
    },
  );
}
