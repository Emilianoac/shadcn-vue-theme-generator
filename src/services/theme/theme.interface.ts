import type { Theme, ThemeId } from "@/data/themes";

export interface ThemeService {
  applyTheme(theme: Theme): void;
  loadTheme(): ThemeId;
  saveTheme(themeId: ThemeId): void;
}
