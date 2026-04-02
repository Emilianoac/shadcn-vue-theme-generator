import type { OklchColor } from "@/shared/services/theme/auto/generator.interface";
import { sameColor, hueDistance, normalizeHue } from "@/shared/services/theme/auto/color.utils";
import { dedupePaletteByDistance } from "@/shared/services/theme/auto/paletteExtractor.utils";

interface PaletteRoles {
  primary: OklchColor;
  accent: OklchColor;
  secondary: OklchColor;
  structural: OklchColor;
  chartPalette: OklchColor[];
}

export type ImageThemeMode = "conservative" | "expressive";

export function scorePrimaryCandidate(color: OklchColor, index: number): number {
  const chromaScore = Math.min(1, color.c / 0.18);
  const lightnessScore = 1 - Math.min(1, Math.abs(color.l - 0.58) / 0.58);
  const dominanceScore = 1 - Math.min(1, index / 10);

  const neutralPenalty = color.c < 0.045 ? 0.4 : 1;
  const shadowPenalty = color.l < 0.22 ? 0.35 : 1;
  const highlightPenalty = color.l > 0.92 ? 0.6 : 1;

  return (
    (0.5 * chromaScore + 0.3 * lightnessScore + 0.2 * dominanceScore) *
    neutralPenalty *
    shadowPenalty *
    highlightPenalty
  );
}

export function pickPrimaryColor(ordered: OklchColor[], fallback: OklchColor): OklchColor {
  const primaryCandidate = ordered
    .map((color, index) => ({ color, score: scorePrimaryCandidate(color, index) }))
    .sort((a, b) => b.score - a.score)[0]?.color;

  return primaryCandidate ?? fallback;
}

export function pickStructuralColor(
  ordered: OklchColor[],
  primary: OklchColor,
  fallback: OklchColor,
): OklchColor {
  const structuralCandidate = ordered
    .map((color) => {
      const neutralityScore = 1 - Math.min(1, color.c / 0.16);
      const lightnessScore = 1 - Math.min(1, Math.abs(color.l - 0.55) / 0.55);
      const tonePenalty = color.l < 0.18 || color.l > 0.95 ? 0.35 : 1;
      const score = (0.55 * neutralityScore + 0.45 * lightnessScore) * tonePenalty;
      return { color, score };
    })
    .sort((a, b) => b.score - a.score)
    .find((entry) => !sameColor(entry.color, primary))?.color;

  return structuralCandidate ?? primary ?? fallback;
}

export function pickAccentColor(ordered: OklchColor[], primary: OklchColor): OklchColor {
  const accentCandidate = ordered
    .map((color, index) => {
      const hueSeparation = hueDistance(color.h, primary.h) / 180;
      const chromaScore = Math.min(1, color.c / 0.18);
      const dominanceScore = 1 - Math.min(1, index / 10);
      const notPrimaryPenalty = sameColor(color, primary) ? 0 : 1;
      const tonePenalty = color.l < 0.2 || color.l > 0.94 ? 0.5 : 1;
      const score =
        (0.55 * hueSeparation + 0.3 * chromaScore + 0.15 * dominanceScore) * tonePenalty;
      return { color, score: score * notPrimaryPenalty };
    })
    .sort((a, b) => b.score - a.score)[0]?.color;

  return accentCandidate ?? primary;
}

export function pickSecondaryColor(
  ordered: OklchColor[],
  primary: OklchColor,
  accent: OklchColor,
): OklchColor {
  const secondaryCandidate = ordered
    .map((color, index) => {
      const chromaScore = Math.min(1, color.c / 0.16);
      const lightnessScore = 1 - Math.min(1, Math.abs(color.l - 0.6) / 0.6);
      const hueFromPrimary = hueDistance(color.h, primary.h) / 180;
      const hueFromAccent = hueDistance(color.h, accent.h) / 180;
      const diversityScore = Math.min(1, (hueFromPrimary + hueFromAccent) / 1.2);
      const dominanceScore = 1 - Math.min(1, index / 10);
      const isTaken = sameColor(color, primary) || sameColor(color, accent);
      const score =
        0.35 * chromaScore + 0.25 * lightnessScore + 0.25 * diversityScore + 0.15 * dominanceScore;
      return { color, score: isTaken ? 0 : score };
    })
    .sort((a, b) => b.score - a.score)[0]?.color;

  return secondaryCandidate ?? accent;
}

export function buildChartPalette(
  ordered: OklchColor[],
  primary: OklchColor,
  accent: OklchColor,
  secondary: OklchColor,
): OklchColor[] {
  const seed = [primary, accent, secondary];

  for (const color of ordered) {
    const isDistinct = seed.every(
      (existing) => hueDistance(existing.h, color.h) > 18 || Math.abs(existing.l - color.l) > 0.08,
    );
    if (isDistinct) {
      seed.push(color);
    }
    if (seed.length >= 5) {
      break;
    }
  }

  return seed.slice(0, 5);
}

export function pickPaletteRoles(palette: OklchColor[], mode: ImageThemeMode): PaletteRoles {
  const distinctPalette = dedupePaletteByDistance(palette, mode === "expressive" ? 14 : 22);
  const ordered = distinctPalette.length > 0 ? distinctPalette : palette;
  const fallback = ordered[0] ?? palette[palette.length - 1]!;

  if (mode === "conservative") {
    const primary = pickPrimaryColor(ordered, fallback);
    const accent = pickAccentColor(ordered, primary);
    const secondary = pickSecondaryColor(ordered, primary, accent);
    const structural = pickStructuralColor(ordered, primary, fallback);
    return {
      primary,
      accent,
      secondary,
      structural,
      chartPalette: buildChartPalette(ordered, primary, accent, secondary).slice(0, 3),
    };
  }

  const primary = pickPrimaryColor(ordered, fallback);
  const accent = pickAccentColor(ordered, primary);
  const secondary = pickSecondaryColor(ordered, primary, accent);
  const structural = pickStructuralColor(ordered, primary, fallback);

  return {
    primary,
    accent,
    secondary,
    structural,
    chartPalette: buildChartPalette(ordered, primary, accent, secondary),
  };
}

export function tuneRolesForExpressiveMode(roles: PaletteRoles): PaletteRoles {
  const direction = (roles.accent.h - roles.primary.h + 360) % 360 > 180 ? -1 : 1;

  const primary: OklchColor = {
    ...roles.primary,
    l: Math.min(0.78, Math.max(0.45, roles.primary.l + 0.04)),
    c: Math.min(0.3, Math.max(0.12, roles.primary.c * 1.2)),
  };

  const accent: OklchColor = {
    ...roles.accent,
    h: normalizeHue(roles.accent.h + direction * 20),
    l: Math.min(0.82, Math.max(0.42, roles.accent.l + 0.03)),
    c: Math.min(0.32, Math.max(0.12, roles.accent.c * 1.28)),
  };

  const secondary: OklchColor = {
    ...roles.secondary,
    h: normalizeHue(roles.secondary.h - direction * 14),
    l: Math.min(0.8, Math.max(0.4, roles.secondary.l + 0.02)),
    c: Math.min(0.28, Math.max(0.1, roles.secondary.c * 1.18)),
  };

  const structural: OklchColor = {
    ...roles.structural,
    l: Math.min(0.68, Math.max(0.3, roles.structural.l + 0.04)),
    c: Math.max(0.03, roles.structural.c * 0.95),
  };

  const chartPalette = roles.chartPalette.map((color, index) => ({
    ...color,
    h: normalizeHue(color.h + (index % 2 === 0 ? 10 : -12)),
    c: Math.min(0.34, Math.max(0.1, color.c * 1.3)),
    l: Math.min(0.82, Math.max(0.38, color.l + (index % 2 === 0 ? 0.04 : -0.02))),
  }));

  return {
    primary,
    accent,
    secondary,
    structural,
    chartPalette,
  };
}
