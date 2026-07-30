"use client";

import { useEffect } from "react";
import { readSettings } from "@/lib/settings";

function applySettings() {
  const settings = readSettings();
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolvedTheme =
    settings.theme === "system"
      ? systemDark
        ? "dark"
        : "light"
      : settings.theme;

  root.dataset.theme = resolvedTheme;
  root.dataset.themePreference = settings.theme;
  root.dataset.reduceMotion = settings.reduceMotion ? "true" : "false";
}

export default function ThemeProvider() {
  useEffect(() => {
    applySettings();

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () => {
      if (readSettings().theme === "system") {
        applySettings();
      }
    };

    window.addEventListener("storage", applySettings);
    window.addEventListener("sat-settings-updated", applySettings);
    media.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("storage", applySettings);
      window.removeEventListener("sat-settings-updated", applySettings);
      media.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return null;
}
