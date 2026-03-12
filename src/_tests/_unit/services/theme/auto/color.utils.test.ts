import { describe, it, expect } from "vitest";
import {
  generateRandomColor,
  hexToOklch,
  oklchToHex,
  formatOklch,
  rgbToHex,
  colorDistance,
  normalizeHue,
  hueDistance,
  sameColor,
} from "@/services/theme/auto/color.utils";

describe("color.utils", () => {
  describe("generateRandomColor", () => {
    it("should return an object with l, c, h properties", () => {
      const color = generateRandomColor();
      expect(color).toHaveProperty("l");
      expect(color).toHaveProperty("c");
      expect(color).toHaveProperty("h");
    });

    it("should return l in range 0.5-0.8, c in range 0.1-0.25, h in range 0-360", () => {
      const color = generateRandomColor();
      expect(color.l).toBeGreaterThanOrEqual(0.5);
      expect(color.l).toBeLessThanOrEqual(0.8);
      expect(color.c).toBeGreaterThanOrEqual(0.1);
      expect(color.c).toBeLessThanOrEqual(0.25);
      expect(color.h).toBeGreaterThanOrEqual(0);
      expect(color.h).toBeLessThanOrEqual(360);
    });
  });

  describe("hexToOklch", () => {
    it("should parse valid hex color", () => {
      const color = hexToOklch("#ff0000");
      expect(color).toHaveProperty("l");
      expect(color).toHaveProperty("c");
      expect(color).toHaveProperty("h");
    });

    it("should throw for invalid hex", () => {
      expect(() => hexToOklch("not-a-color")).toThrow();
    });
  });

  describe("oklchToHex", () => {
    it("should return a hex string", () => {
      const color = generateRandomColor();
      const hex = oklchToHex(color);
      expect(hex).toMatch(/^#[0-9a-fA-F]{6}$/);
    });

    it("should return #000000 for invalid input", () => {
      const hex = oklchToHex({ l: 0, c: 0, h: 0 });
      expect(hex).toBe("#000000");
    });
  });

  describe("formatOklch", () => {
    it("should format OKLCH color to CSS string", () => {
      const color = { l: 0.5, c: 0.15, h: 120 };
      const str = formatOklch(color);
      expect(str).toBe("oklch(0.5000 0.1500 120.00)");
    });

    it("should handle decimals correctly", () => {
      const color = { l: 0.123456, c: 0.234567, h: 45.6789 };
      const str = formatOklch(color);
      expect(str).toBe("oklch(0.1235 0.2346 45.68)");
    });
  });

  describe("rgbToHex", () => {
    it("should convert RGB to hex", () => {
      expect(rgbToHex(255, 0, 0)).toBe("#ff0000");
      expect(rgbToHex(0, 255, 0)).toBe("#00ff00");
      expect(rgbToHex(0, 0, 255)).toBe("#0000ff");
    });

    it("should pad single digits", () => {
      expect(rgbToHex(1, 2, 3)).toBe("#010203");
    });
  });

  describe("colorDistance", () => {
    it("should return 0 for identical colors", () => {
      const a = { r: 10, g: 20, b: 30 };
      expect(colorDistance(a, a)).toBe(0);
    });

    it("should return correct Euclidean distance", () => {
      const a = { r: 0, g: 0, b: 0 };
      const b = { r: 3, g: 4, b: 0 };
      expect(colorDistance(a, b)).toBe(5);
    });
  });

  describe("normalizeHue", () => {
    it("should normalize positive hue", () => {
      expect(normalizeHue(370)).toBe(10);
    });

    it("should normalize negative hue", () => {
      expect(normalizeHue(-30)).toBe(330);
    });
  });

  describe("hueDistance", () => {
    it("should return minimal distance", () => {
      expect(hueDistance(10, 350)).toBe(20);
    });

    it("should return 0 for identical hues", () => {
      expect(hueDistance(120, 120)).toBe(0);
    });
  });

  describe("sameColor", () => {
    it("should return true for identical colors", () => {
      const a = { l: 0.5, c: 0.15, h: 120 };
      expect(sameColor(a, a)).toBe(true);
    });

    it("should return false for different colors", () => {
      const a = { l: 0.5, c: 0.15, h: 120 };
      const b = { l: 0.6, c: 0.15, h: 120 };
      expect(sameColor(a, b)).toBe(false);
    });
  });
});
