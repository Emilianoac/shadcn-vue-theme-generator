import type { OklchColor } from "@/services/theme/auto/generator.interface";
import { oklchToHex } from "@/services/theme/auto/color.utils";

/**
 * Calculate WCAG contrast ratio (simplified approximation)
 */
export function calculateContrastRatio(color1: OklchColor, color2: OklchColor): number {
  const luminance1 = getRelativeLuminanceFromOklch(color1);
  const luminance2 = getRelativeLuminanceFromOklch(color2);
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Ensure WCAG contrast ratio between foreground and background
 */
export function ensureContrastRatio(
  foreground: OklchColor,
  background: OklchColor,
  targetRatio: number,
): OklchColor {
  const result = { ...foreground };
  let iterations = 0;
  const maxIterations = 20;

  while (iterations < maxIterations) {
    const contrast = calculateContrastRatio(result, background);

    if (contrast >= targetRatio) {
      break;
    }

    // Adjust lightness to increase contrast
    if (background.l > 0.5) {
      // Light background → darken foreground
      result.l = Math.max(0.1, result.l - 0.05);
    } else {
      // Dark background → lighten foreground
      result.l = Math.min(0.95, result.l + 0.05);
    }

    iterations++;
  }

  return result;
}

export function getRelativeLuminanceFromOklch(color: OklchColor): number {
  const hex = oklchToHex(color);
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const toLinear = (value: number): number =>
    value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);

  const rl = toLinear(r);
  const gl = toLinear(g);
  const bl = toLinear(b);

  return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
}
