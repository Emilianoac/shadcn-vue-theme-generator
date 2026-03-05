import { describe, it, expect, beforeEach } from "vitest";
import { createThemeService } from "@/services/theme/themeService";
import { themes } from "@/data/themes";

describe("themeService - Custom Theme Persistence", () => {
  let themeService: ReturnType<typeof createThemeService>;

  beforeEach(() => {
    localStorage.clear();
    themeService = createThemeService();
  });

  it("should save and load custom theme modifications", () => {
    const themeId = "default-theme";
    const customTheme = {
      ...themes[themeId],
      data: {
        light: { ...themes[themeId].data.light, primary: "#ff0000" },
        dark: { ...themes[themeId].data.dark, primary: "#00ff00" },
      },
    };

    themeService.saveCustomTheme(themeId, customTheme);
    const loaded = themeService.loadCustomTheme(themeId);

    expect(loaded).toEqual(customTheme);
  });

  it("should clear custom theme on reset", () => {
    const themeId = "default-theme";
    const customTheme = {
      ...themes[themeId],
      data: {
        light: { ...themes[themeId].data.light, primary: "#ff0000" },
        dark: { ...themes[themeId].data.dark, primary: "#00ff00" },
      },
    };

    themeService.saveCustomTheme(themeId, customTheme);
    themeService.clearCustomTheme();
    const loaded = themeService.loadCustomTheme(themeId);

    expect(loaded).toBeNull();
  });
});
