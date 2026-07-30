"use client";

import { useEffect, useState } from "react";
import {
  defaultSettings,
  readSettings,
  resetSettings,
  writeSettings,
  type AppSettings,
  type ThemePreference,
} from "@/lib/settings";
import { resetProgress } from "@/lib/progress";
import { writeFavorites } from "@/lib/favorites";

const themeOptions: Array<{
  value: ThemePreference;
  label: string;
  description: string;
  icon: string;
}> = [
  {
    value: "system",
    label: "System",
    description: "Follow your device appearance.",
    icon: "◐",
  },
  {
    value: "light",
    label: "Light",
    description: "Always use the light interface.",
    icon: "☀",
  },
  {
    value: "dark",
    label: "Dark",
    description: "Always use the dark interface.",
    icon: "☾",
  },
];

export default function SettingsPanel() {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    const update = () => setSettings(readSettings());

    update();
    window.addEventListener("storage", update);
    window.addEventListener("sat-settings-updated", update);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("sat-settings-updated", update);
    };
  }, []);

  function updateSettings(next: AppSettings) {
    setSettings(next);
    writeSettings(next);
    setSavedMessage("Settings saved");
    window.setTimeout(() => setSavedMessage(""), 1600);
  }

  function updateTheme(theme: ThemePreference) {
    updateSettings({ ...settings, theme });
  }

  function updateGoal(goal: number) {
    updateSettings({ ...settings, dailyWordGoal: goal });
  }

  function toggleReduceMotion() {
    updateSettings({
      ...settings,
      reduceMotion: !settings.reduceMotion,
    });
  }

  function handleResetSettings() {
    resetSettings();
    setSavedMessage("Settings restored");
    window.setTimeout(() => setSavedMessage(""), 1600);
  }

  function handleClearProgress() {
    resetProgress();
    setSavedMessage("Progress cleared");
    window.setTimeout(() => setSavedMessage(""), 1600);
  }

  function handleClearFavorites() {
    writeFavorites([]);
    setSavedMessage("Favorites cleared");
    window.setTimeout(() => setSavedMessage(""), 1600);
  }

  function handleClearAll() {
    resetSettings();
    resetProgress();
    writeFavorites([]);
    setSavedMessage("All local data cleared");
    window.setTimeout(() => setSavedMessage(""), 1800);
  }

  return (
    <section className="settingsPanel">
      {savedMessage ? (
        <div className="settingsToast" role="status">
          ✓ {savedMessage}
        </div>
      ) : null}

      <article className="settingsSection">
        <div className="settingsSectionHeader">
          <div>
            <p className="sectionKicker">Appearance</p>
            <h2>Choose your theme</h2>
            <p>
              Select a fixed theme or let the application follow your device.
            </p>
          </div>
        </div>

        <div className="themeOptionGrid">
          {themeOptions.map((option) => (
            <button
              className={`themeOptionCard ${
                settings.theme === option.value ? "themeOptionCardActive" : ""
              }`}
              type="button"
              key={option.value}
              onClick={() => updateTheme(option.value)}
              aria-pressed={settings.theme === option.value}
            >
              <span className="themeOptionIcon">{option.icon}</span>
              <div>
                <strong>{option.label}</strong>
                <span>{option.description}</span>
              </div>
              <span className="themeOptionCheck">
                {settings.theme === option.value ? "✓" : ""}
              </span>
            </button>
          ))}
        </div>
      </article>

      <article className="settingsSection">
        <div className="settingsSectionHeader">
          <div>
            <p className="sectionKicker">Study target</p>
            <h2>Daily vocabulary goal</h2>
            <p>
              This target is shown in your dashboard and helps define a focused
              daily study session.
            </p>
          </div>
          <strong className="goalValue">{settings.dailyWordGoal} words</strong>
        </div>

        <div className="goalOptionGrid">
          {[10, 15, 20, 25, 30, 40].map((goal) => (
            <button
              className={`goalOption ${
                settings.dailyWordGoal === goal ? "goalOptionActive" : ""
              }`}
              type="button"
              key={goal}
              onClick={() => updateGoal(goal)}
            >
              <strong>{goal}</strong>
              <span>words</span>
            </button>
          ))}
        </div>
      </article>

      <article className="settingsSection">
        <div className="settingsSectionHeader">
          <div>
            <p className="sectionKicker">Accessibility</p>
            <h2>Reduce motion</h2>
            <p>
              Minimize card flips, hover movement, smooth scrolling, and other
              interface animations.
            </p>
          </div>

          <button
            className={`toggleSwitch ${
              settings.reduceMotion ? "toggleSwitchActive" : ""
            }`}
            type="button"
            role="switch"
            aria-checked={settings.reduceMotion}
            onClick={toggleReduceMotion}
          >
            <span />
          </button>
        </div>
      </article>

      <article className="settingsSection">
        <div className="settingsSectionHeader">
          <div>
            <p className="sectionKicker">Local storage</p>
            <h2>Manage browser data</h2>
            <p>
              The current version stores settings, progress, and favorites only
              in this browser.
            </p>
          </div>
        </div>

        <div className="dataActionGrid">
          <button className="dataActionCard" type="button" onClick={handleResetSettings}>
            <span>⚙</span>
            <div>
              <strong>Reset settings</strong>
              <small>Restore theme, goal, and motion defaults.</small>
            </div>
          </button>

          <button className="dataActionCard" type="button" onClick={handleClearProgress}>
            <span>↗</span>
            <div>
              <strong>Clear progress</strong>
              <small>Remove lessons, quiz scores, and study streaks.</small>
            </div>
          </button>

          <button className="dataActionCard" type="button" onClick={handleClearFavorites}>
            <span>☆</span>
            <div>
              <strong>Clear favorites</strong>
              <small>Remove every saved vocabulary word.</small>
            </div>
          </button>

          <button
            className="dataActionCard dataActionDanger"
            type="button"
            onClick={handleClearAll}
          >
            <span>×</span>
            <div>
              <strong>Clear all local data</strong>
              <small>Reset settings, progress, and favorites together.</small>
            </div>
          </button>
        </div>
      </article>
    </section>
  );
}
