import type { Theme, ThemeId } from "@/data/themes";

export interface ThemeService {
  applyTheme(theme: Theme): void;
  generateThemeCssCode(theme: Theme): string;
  loadTheme(): ThemeId;
  saveTheme(themeId: ThemeId): void;
}
