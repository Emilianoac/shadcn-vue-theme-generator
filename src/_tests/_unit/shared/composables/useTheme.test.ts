import { describe, it, expect, beforeEach, vi } from "vitest";
import { nextTick } from "vue";
import { useTheme } from "@/shared/composables/useTheme";
import * as themeServiceModule from "@/shared/services/theme/themeService";

vi.mock("@/shared/services/theme/themeService", () => ({
  themeService: {
    loadTheme: vi.fn(() => "default-theme"),
    saveTheme: vi.fn(),
    applyTheme: vi.fn(),
    loadCustomTheme: vi.fn(() => null),
    saveCustomTheme: vi.fn(),
    clearCustomTheme: vi.fn(),
  },
}));

describe("useTheme - Custom Theme Workflow", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should mark theme as custom after editing", async () => {
    const { theme, isCustomTheme } = useTheme();

    vi.clearAllMocks();

    theme.value.data.light.primary = "#ff0000";
    await nextTick();

    expect(themeServiceModule.themeService.saveCustomTheme).toHaveBeenCalled();
    expect(isCustomTheme.value).toBe(true);
  });

  it("should reset theme to base and clear custom flag", async () => {
    const { theme, resetTheme, isCustomTheme } = useTheme();

    theme.value.data.light.primary = "#ff0000";
    await nextTick();

    expect(isCustomTheme.value).toBe(true);

    resetTheme();
    await nextTick();

    expect(themeServiceModule.themeService.clearCustomTheme).toHaveBeenCalled();
    expect(isCustomTheme.value).toBe(false);
  });
});
