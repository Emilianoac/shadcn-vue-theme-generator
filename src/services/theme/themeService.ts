import { themes, type ThemeId } from "@/data/themes";
import type { ThemeService } from "./theme.interface";
import { fontService } from "@/services/font/fontService";
import { generateThemeCssCode, objectToCssVariables } from "./themeCode.utils";

const STORAGE_KEY = "current-theme";

export function createThemeService(): ThemeService {
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
  };
}

export const themeService = createThemeService();
