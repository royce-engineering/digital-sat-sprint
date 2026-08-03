import fs from "node:fs";
import path from "node:path";

describe("Full SAT accessibility hardening", () => {
  const controller = fs.readFileSync(
    path.join(
      process.cwd(),
      "src/app/test/sat/full/page.tsx",
    ),
    "utf8",
  );

  const guard = fs.readFileSync(
    path.join(
      process.cwd(),
      "src/components/adaptive/SessionLeaseGuard.tsx",
    ),
    "utf8",
  );

  it("marks the break countdown as a live timer", () => {
    expect(controller).toContain('role="timer"');
    expect(controller).toContain('aria-live="polite"');
    expect(controller).toContain('aria-atomic="true"');
  });

  it("marks the active progress step semantically", () => {
    expect(controller).toContain('aria-label="Full SAT progress"');
    expect(controller).toContain('aria-current=');
    expect(controller).toContain("<ol");
    expect(controller).toContain("<li");
  });

  it("announces cross-tab conflicts as an alert", () => {
    expect(guard).toContain('role="alert"');
    expect(guard).toContain('aria-labelledby="session-conflict-title"');
    expect(guard).toContain('aria-describedby="session-conflict-description"');
  });
});
