import { describe, it, expect } from "vitest";
import {
  generateHarmony,
  generateThemeFromColor,
} from "@/shared/services/theme/auto/themeGenerator.utils";

const base = { l: 0.6, c: 0.2, h: 100 };

describe("themeGenerator.utils", () => {
  describe("generateHarmony", () => {
    it("triadic generates tree colors separated by 120°°", () => {
      const [p, a, s] = generateHarmony(base, "triadic");

      expect(p.h).toBe(100);
      expect(a.h).toBe((100 + 120) % 360);
      expect(s.h).toBe((100 + 240) % 360);
    });

    it("analogous maintains the base color in the center", () => {
      const [, center] = generateHarmony(base, "analogous");

      expect(center.h).toBe(base.h);
    });

    it("always returns 3 colors", () => {
      const result = generateHarmony(base, "complementary");

      expect(result).toHaveLength(3);
    });
  });

  describe("generateThemeFromColor", () => {
    const base = { l: 0.6, c: 0.2, h: 200 };

    it("generate light and dark themes", () => {
      const theme = generateThemeFromColor(base);

      expect(theme.data.light).toBeDefined();
      expect(theme.data.dark).toBeDefined();
    });

    it("include general tokens", () => {
      const theme = generateThemeFromColor(base);

      expect(theme.data.light["background"]).toBeDefined();
      expect(theme.data.light["primary"]).toBeDefined();
      expect(theme.data.light["accent"]).toBeDefined();
    });

    it("primary has a foreground color", () => {
      const theme = generateThemeFromColor({
        l: 0.6,
        c: 0.2,
        h: 210,
      });

      const light = theme.data.light;

      expect(light["primary"]).toBeDefined();
      expect(light["primary-foreground"]).toBeDefined();
    });

    it("always includes 5 chart colors", () => {
      const theme = generateThemeFromColor({
        l: 0.7,
        c: 0.25,
        h: 140,
      });

      const light = theme.data.light;

      expect(light["chart-1"]).toBeTruthy();
      expect(light["chart-5"]).toBeTruthy();
    });
  });
});
