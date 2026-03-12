import type { OklchColor } from "@/services/theme/auto/generator.interface";
import { oklch, formatHex } from "culori";

/**
 * Generate random OKLCH color with good defaults
 */
export function generateRandomColor(): OklchColor {
  return {
    l: 0.5 + Math.random() * 0.3, // 0.5-0.8 (avoid too dark/light)
    c: 0.1 + Math.random() * 0.15, // 0.1-0.25 (good saturation)
    h: Math.random() * 360, // Full hue range
  };
}

/**
 * Converts a HEX color string to an OKLCH color object.
 *
 * This function is used as the entry point for colors in the theme
 * generator, converting standard HEX colors into the OKLCH color
 * space used internally by the system.
 *
 * Example:
 * hexToOklch("#ff0000")
 * → { l: 0.63, c: 0.26, h: 29 }
 *
 * Throws:
 * - Error if the input is not a valid color.
 */
export function hexToOklch(hex: string): OklchColor {
  const parsed = oklch(hex);

  if (!parsed) throw new Error(`Invalid hex color: ${hex}`);

  const { l, c, h } = parsed;

  return {
    l: l ?? 0.5,
    c: c ?? 0.15,
    h: h ?? 0,
  };
}

/**
 * Convert OKLCH to hex for display
 */
export function oklchToHex(color: OklchColor): string {
  const hex = formatHex({
    mode: "oklch",
    l: color.l,
    c: color.c,
    h: color.h,
  });
  return hex ?? "#000000";
}

/**
 * Format OKLCH to CSS string
 */
export function formatOklch(color: OklchColor): string {
  return `oklch(${color.l.toFixed(4)} ${color.c.toFixed(4)} ${color.h.toFixed(2)})`;
}

export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (value: number) => value.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function colorDistance(
  a: { r: number; g: number; b: number },
  b: { r: number; g: number; b: number },
) {
  const dr = a.r - b.r;
  const dg = a.g - b.g;
  const db = a.b - b.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

export function normalizeHue(h: number): number {
  const normalized = h % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

export function hueDistance(a: number, b: number): number {
  const diff = Math.abs(a - b) % 360;
  return Math.min(diff, 360 - diff);
}

export function sameColor(a: OklchColor, b: OklchColor): boolean {
  return a.l === b.l && a.c === b.c && a.h === b.h;
}
