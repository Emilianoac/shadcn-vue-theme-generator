import { converter, formatHex, formatHex8, parse } from "culori";
import type { Theme } from "@/data/themes";

const toRgb = converter("rgb");
const toOklch = converter("oklch");

function parseColor(value: string) {
  return parse(value.trim());
}

function toHexValue(value: string, includeAlpha: boolean): string | null {
  const parsed = parseColor(value);
  if (!parsed) {
    return null;
  }

  const rgb = toRgb(parsed);
  if (!rgb) {
    return null;
  }

  const alpha = rgb.alpha ?? 1;
  if (includeAlpha && alpha < 1) {
    return formatHex8(rgb);
  }

  return formatHex(rgb);
}

function formatNumber(num: number | undefined, maxDecimals: number = 4): string {
  if (num === undefined || num === null) {
    return "0";
  }

  const rounded = Math.round(num * Math.pow(10, maxDecimals)) / Math.pow(10, maxDecimals);
  return rounded.toString();
}

function isValidOklch(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed.startsWith("oklch(")) {
    return false;
  }

  const parsed = parseColor(trimmed);
  return parsed !== undefined && parsed.mode === "oklch";
}

function toOklchValue(value: string): string | null {
  if (isValidOklch(value)) {
    return value;
  }

  const parsed = parseColor(value);
  if (!parsed) {
    return null;
  }

  const oklch = toOklch(parsed);
  if (!oklch) {
    return null;
  }

  const l = formatNumber(oklch.l);
  const c = formatNumber(oklch.c);
  const h = formatNumber(oklch.h);
  const alpha = oklch.alpha ?? 1;

  if (alpha < 1) {
    return `oklch(${l} ${c} ${h} / ${formatNumber(alpha)})`;
  }

  return `oklch(${l} ${c} ${h})`;
}

function mapPaletteValues(
  palette: Record<string, string>,
  transform: (value: string) => string,
): Record<string, string> {
  return Object.fromEntries(Object.entries(palette).map(([key, value]) => [key, transform(value)]));
}

function cloneTheme(theme: Theme): Theme {
  return structuredClone(theme) as Theme;
}

export function colorToHexForInput(value: string): string | null {
  return toHexValue(value, false);
}

export function colorToEditableHex(value: string): string {
  return toHexValue(value, true) ?? value;
}

export function colorToOklch(value: string): string {
  return toOklchValue(value) ?? value;
}

export function paletteToEditableHex(palette: Record<string, string>): Record<string, string> {
  return mapPaletteValues(palette, colorToEditableHex);
}

export function paletteToOklch(palette: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(palette).map(([key, value]) => {
      if (key === "radius") {
        return [key, value];
      }
      return [key, colorToOklch(value)];
    }),
  );
}

export function createEditableTheme(theme: Theme): Theme {
  const clonedTheme = cloneTheme(theme);
  const editableLight = paletteToEditableHex(clonedTheme.data.light);
  const editableDark = paletteToEditableHex(clonedTheme.data.dark);

  return {
    ...clonedTheme,
    data: {
      ...clonedTheme.data,
      light: editableLight,
      dark: editableDark,
    },
  } as Theme;
}
