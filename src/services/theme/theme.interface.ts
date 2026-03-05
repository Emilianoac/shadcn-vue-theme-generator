import type { Theme, ThemeId } from "@/data/themes";

export interface ThemeService {
  applyTheme(theme: Theme): void;
  generateThemeCssCode(theme: Theme): string;
  loadTheme(): ThemeId;
  saveTheme(themeId: ThemeId): void;
  loadCustomTheme(themeId: ThemeId): Theme | null;
  saveCustomTheme(themeId: ThemeId, theme: Theme): void;
  clearCustomTheme(): void;
}
