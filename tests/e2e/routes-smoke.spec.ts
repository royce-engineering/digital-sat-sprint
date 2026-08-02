import {
  expect,
  test,
} from "@playwright/test";

const routes = [
  "/test/sat",
  "/test/sat/full",
  "/test/history",
  "/test/dashboard",
  "/test/practice/recommended",
];

for (const route of routes) {
  test(`${route} renders without a fatal error`, async ({
    page,
  }) => {
    await page.goto(route);

    await expect(page.locator("main")).toBeVisible();

    await expect(page.locator("body")).not.toContainText(
      /Application error|Unhandled Runtime Error/i,
    );
  });
}
