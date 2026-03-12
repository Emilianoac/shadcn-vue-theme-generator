import { themes, type ThemeId } from "@/data/themes";
import type { ThemeService } from "./theme.interface";
import { fontService } from "@/services/font/fontService";
import { generateThemeCssCode, objectToCssVariables } from "./themeCode.utils";
import { createAutoGeneratorService } from "./auto/generator.service";

const STORAGE_KEY = "current-theme";
const CUSTOM_THEME_STORAGE_KEY = "current-theme-custom";

type StoredCustomTheme = {
  themeId: ThemeId;
  theme: ReturnType<typeof structuredClone>;
};

export function createThemeService(): ThemeService {
  const autoGeneratorService = createAutoGeneratorService();

  return {
    applyTheme(theme) {
      if (theme.externalFonts.length) {
        fontService.loadFonts(theme.externalFonts);
      }

      const styleId = "theme-vars";
      let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
      }

      styleEl.textContent = `
        :root {
          ${objectToCssVariables(theme.data.light)}
        }

        :root.dark {
          ${objectToCssVariables(theme.data.dark)}
        }
      `;
    },

    generateThemeCssCode(theme) {
      return generateThemeCssCode(theme);
    },

    loadTheme() {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved && saved in themes) {
        return saved as ThemeId;
      }

      return "default-theme";
    },

    saveTheme(themeId) {
      localStorage.setItem(STORAGE_KEY, themeId);
    },

    loadCustomTheme(themeId) {
      const saved = localStorage.getItem(CUSTOM_THEME_STORAGE_KEY);
      if (!saved) {
        return null;
      }

      try {
        const parsed = JSON.parse(saved) as StoredCustomTheme;
        if (parsed?.themeId === themeId && parsed?.theme) {
          return parsed.theme as never;
        }
      } catch {
        localStorage.removeItem(CUSTOM_THEME_STORAGE_KEY);
      }

      return null;
    },

    saveCustomTheme(themeId, theme) {
      const payload = {
        themeId,
        theme,
      };

      localStorage.setItem(CUSTOM_THEME_STORAGE_KEY, JSON.stringify(payload));
    },

    clearCustomTheme() {
      localStorage.removeItem(CUSTOM_THEME_STORAGE_KEY);
    },

    auto: autoGeneratorService,
  };
}

export const themeService = createThemeService();
