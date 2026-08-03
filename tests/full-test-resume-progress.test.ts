import {
  createFullTestAttempt,
  reconcileFullTestState,
} from "@/lib/adaptive/runtime/fullTestRuntime";

describe("Full SAT resume progress", () => {
  it("resumes Math when Reading is complete and a Math session is in progress", () => {
    const now = 1_700_000_000_000;
    const state = createFullTestAttempt(now);

    const resumed =
      reconcileFullTestState(
        state,
        {
          readingComplete: true,
          mathComplete: false,
          mathStarted: true,
        },
        now + 1,
      );

    expect(resumed.phase).toBe(
      "math",
    );
    expect(
      resumed.readingCompletedAt,
    ).toBe(now + 1);
    expect(
      resumed.mathStartedAt,
    ).toBe(now + 1);
  });

  it("still enters break when Math has not started", () => {
    const now = 1_700_000_000_000;
    const state = createFullTestAttempt(now);

    const resumed =
      reconcileFullTestState(
        state,
        {
          readingComplete: true,
          mathComplete: false,
          mathStarted: false,
        },
        now + 1,
      );

    expect(resumed.phase).toBe(
      "break",
    );
  });

  it("still completes when Math is complete", () => {
    const now = 1_700_000_000_000;
    const state = createFullTestAttempt(now);

    const resumed =
      reconcileFullTestState(
        state,
        {
          readingComplete: true,
          mathComplete: true,
          mathStarted: true,
        },
        now + 1,
      );

    expect(resumed.phase).toBe(
      "complete",
    );
  });
});
