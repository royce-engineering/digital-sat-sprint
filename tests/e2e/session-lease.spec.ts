import { expect, test } from "@playwright/test";
import { clearAdaptiveStorage } from "./helpers/storage";

test("second Reading tab is blocked", async ({ context, page }) => {
  await clearAdaptiveStorage(page);

  await page.goto("/test/adaptive");
  await expect(page.locator("main")).toBeVisible();

  const secondPage = await context.newPage();
  await secondPage.goto("/test/adaptive");

  await expect(secondPage.locator("main")).toContainText(
    /Session already open/i,
  );
});

test("second Math tab is blocked", async ({ context, page }) => {
  await clearAdaptiveStorage(page);

  await page.goto("/test/adaptive-math");
  await expect(page.locator("main")).toBeVisible();

  const secondPage = await context.newPage();
  await secondPage.goto("/test/adaptive-math");

  await expect(secondPage.locator("main")).toContainText(/Session already open/i);
});

test("takeover transfers ownership", async ({ context, page }) => {
  await clearAdaptiveStorage(page);

  await page.goto("/test/adaptive");

  const secondPage = await context.newPage();
  await secondPage.goto("/test/adaptive");

  await secondPage
    .getByRole("button", {
      name: /take over/i,
    })
    .click();

  await expect(secondPage.locator("main")).not.toContainText(/Session already open/i);

  await expect(page.locator("main")).toContainText(/Session already open/i);
});
