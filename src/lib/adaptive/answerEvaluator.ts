export function parseNumericAnswer(input: string): number | null {
  const normalized = input.trim().replace(/,/g, "");
  if (!normalized) return null;
  if (/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)\/[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(normalized)) {
    const [n, d] = normalized.split("/").map(Number);
    if (!Number.isFinite(n) || !Number.isFinite(d) || d === 0) return null;
    return n / d;
  }
  const value = Number(normalized);
  return Number.isFinite(value) ? value : null;
}

export function isEquivalentAnswer(userInput: string, expected: string | number, tolerance = 1e-6): boolean {
  const user = parseNumericAnswer(userInput);
  const target = typeof expected === "number" ? expected : parseNumericAnswer(expected);
  if (user === null || target === null) return false;
  return Math.abs(user - target) <= tolerance * Math.max(1, Math.abs(target));
}
