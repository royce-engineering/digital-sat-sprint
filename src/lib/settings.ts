export type ThemePreference = "system" | "light" | "dark";

export type AppSettings = {
  theme: ThemePreference;
  dailyWordGoal: number;
  reduceMotion: boolean;
};

const STORAGE_KEY = "digital-sat-sprint-settings";

export const defaultSettings: AppSettings = {
  theme: "system",
  dailyWordGoal: 25,
  reduceMotion: false,
};

export function readSettings(): AppSettings {
  if (typeof window === "undefined") return defaultSettings;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultSettings;

    const parsed = JSON.parse(stored);

    return {
      theme:
        parsed.theme === "light" || parsed.theme === "dark"
          ? parsed.theme
          : "system",
      dailyWordGoal:
        typeof parsed.dailyWordGoal === "number"
          ? parsed.dailyWordGoal
          : defaultSettings.dailyWordGoal,
      reduceMotion:
        typeof parsed.reduceMotion === "boolean"
          ? parsed.reduceMotion
          : defaultSettings.reduceMotion,
    };
  } catch {
    return defaultSettings;
  }
}

export function writeSettings(settings: AppSettings) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  window.dispatchEvent(new Event("sat-settings-updated"));
}

export function resetSettings() {
  writeSettings(defaultSettings);
}
