import { expect, test } from "@playwright/test";

const diagnosticRoutes = [
  "/test/core-diagnostic",
  "/test/identifier-diagnostic",
  "/test/session-recovery-diagnostic",
  "/test/session-lock-diagnostic",
  "/test/timer-diagnostic",
  "/test/submission-diagnostic",
  "/test/runtime-diagnostic",
  "/test/runtime-release-gate",
  "/test/system-diagnostic",
];

for (const route of diagnosticRoutes) {
  test(`${route} reports PASS`, async ({ page }) => {
    await page.goto(route);

    await expect(page.locator("main")).toBeVisible();

    const body = page.locator("body");

    await expect(body).not.toContainText(
      /failed|FAIL|Errors:\s*[1-9]/i,
    );

    await expect(body).toContainText(
      /PASS|passed|All .* checks passed/i,
    );
  });
}
