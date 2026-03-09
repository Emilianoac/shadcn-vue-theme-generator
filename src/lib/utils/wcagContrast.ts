import { converter, parse } from "culori";

const toRgb = converter("rgb");

function toLinearRGB(value: number): number {
  const normalized = value / 255;
  return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4);
}

function getRelativeLuminance(color: string): number | null {
  const parsed = parse(color);
  if (!parsed) {
    return null;
  }

  const rgb = toRgb(parsed);
  if (!rgb) {
    return null;
  }

  const r = toLinearRGB((rgb.r ?? 0) * 255);
  const g = toLinearRGB((rgb.g ?? 0) * 255);
  const b = toLinearRGB((rgb.b ?? 0) * 255);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculate contrast ratio between two colors per WCAG 2.2
 */
export function getContrastRatio(foreground: string, background: string): number | null {
  const l1 = getRelativeLuminance(foreground);
  const l2 = getRelativeLuminance(background);

  if (l1 === null || l2 === null) {
    return null;
  }

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

export enum WCAGLevel {
  AAA = "AAA",
  AA = "AA",
  FAIL = "FAIL",
}

export interface ContrastResult {
  ratio: number;
  level: WCAGLevel;
  passAA: boolean;
  passAAA: boolean;
}

/**
 * Check WCAG conformance level for contrast ratio
 * @param isLargeText - true for 14pt bold or 18pt+ text, false for normal text
 */
export function checkContrast(
  foreground: string,
  background: string,
  isLargeText: boolean = false,
): ContrastResult | null {
  const ratio = getContrastRatio(foreground, background);

  if (ratio === null) {
    return null;
  }

  const aaThreshold = isLargeText ? 3 : 4.5;
  const aaaThreshold = isLargeText ? 4.5 : 7;

  const passAA = ratio >= aaThreshold;
  const passAAA = ratio >= aaaThreshold;

  let level: WCAGLevel;
  if (passAAA) {
    level = WCAGLevel.AAA;
  } else if (passAA) {
    level = WCAGLevel.AA;
  } else {
    level = WCAGLevel.FAIL;
  }

  return {
    ratio: Math.round(ratio * 100) / 100,
    level,
    passAA,
    passAAA,
  };
}

export function formatContrastRatio(ratio: number): string {
  return `${ratio.toFixed(2)}:1`;
}
