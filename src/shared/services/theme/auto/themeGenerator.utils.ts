import type { Theme } from "@/shared/data/themes";
import type {
  OklchColor,
  ColorHarmony,
  BackgroundStyle,
  ImageThemeMode,
} from "@/shared/services/theme/auto/generator.interface";
import { formatOklch } from "@/shared/services/theme/auto/color.utils";
import {
  pickPaletteRoles,
  tuneRolesForExpressiveMode,
} from "@/shared/services/theme/auto/paletteRoles.utils";
import { ensureContrastRatio } from "@/shared/services/theme/auto/validation.utils";

interface ThemeGenerationTweaks {
  chartPalette?: OklchColor[];
  structuralColor?: OklchColor;
  expressive?: boolean;
}

/**
 * Generate harmonious colors based on color theory
 * Always returns exactly 3 colors: [primary, accent, secondary]
 */
export function generateHarmony(
  baseColor: OklchColor,
  harmony: ColorHarmony,
): [OklchColor, OklchColor, OklchColor] {
  const { h } = baseColor;

  switch (harmony) {
    case "complementary":
      return [
        baseColor,
        { ...baseColor, h: (h + 180) % 360 },
        { ...baseColor, h: (h + 90) % 360 }, // Add third color (square)
      ];

    case "analogous":
      return [
        { ...baseColor, h: (h - 30 + 360) % 360 },
        baseColor,
        { ...baseColor, h: (h + 30) % 360 },
      ];

    case "triadic":
      return [
        baseColor,
        { ...baseColor, h: (h + 120) % 360 },
        { ...baseColor, h: (h + 240) % 360 },
      ];

    case "split-complementary":
      return [
        baseColor,
        { ...baseColor, h: (h + 150) % 360 },
        { ...baseColor, h: (h + 210) % 360 },
      ];

    case "monochromatic":
      return [
        { ...baseColor, l: baseColor.l * 0.7 },
        baseColor,
        { ...baseColor, l: Math.min(1, baseColor.l * 1.3) },
      ];

    default:
      return [baseColor, baseColor, baseColor];
  }
}

/**
 * Generate complete shadcn theme from base color
 */
export function generateThemeFromColor(
  baseColor: OklchColor,
  options: {
    harmony?: ColorHarmony;
    backgroundStyle?: BackgroundStyle;
    name?: string;
  } = {},
): Theme {
  const { harmony = "analogous", backgroundStyle = "neutral", name = "Custom Theme" } = options;

  // Generate harmonious colors (always returns exactly 3 colors)
  const [primary, accent, secondary] = generateHarmony(baseColor, harmony);

  // Generate light theme
  const lightTheme = generateLightTheme(primary, accent, secondary, backgroundStyle);

  // Generate dark theme
  const darkTheme = generateDarkTheme(primary, accent, secondary, backgroundStyle);

  return {
    name,
    data: {
      light: lightTheme,
      dark: darkTheme,
    },
    externalFonts: [],
  } as unknown as Theme;
}

/**
 * Generate theme from an extracted palette.
 */
export function generateThemeFromPalette(
  palette: OklchColor[],
  options: {
    backgroundStyle?: BackgroundStyle;
    name?: string;
    mode?: ImageThemeMode;
  } = {},
): Theme {
  if (palette.length === 0) {
    throw new Error("Palette must contain at least one color");
  }

  const { backgroundStyle = "neutral", name = "Image Theme", mode = "conservative" } = options;
  const baseRoles = pickPaletteRoles(palette, mode);
  const roles = mode === "expressive" ? tuneRolesForExpressiveMode(baseRoles) : baseRoles;
  const { primary, accent, secondary, structural, chartPalette } = roles;

  const lightTheme = generateLightTheme(primary, accent, secondary, backgroundStyle, {
    chartPalette,
    structuralColor: structural,
    expressive: mode === "expressive",
  });
  const darkTheme = generateDarkTheme(primary, accent, secondary, backgroundStyle, {
    chartPalette,
    structuralColor: structural,
    expressive: mode === "expressive",
  });

  return {
    name,
    data: {
      light: lightTheme,
      dark: darkTheme,
    },
    externalFonts: [],
  } as unknown as Theme;
}

/**
 * Generate light theme variant
 */
function generateLightTheme(
  primary: OklchColor,
  accent: OklchColor,
  secondary: OklchColor,
  backgroundStyle: BackgroundStyle,
  tweaks: ThemeGenerationTweaks = {},
): Record<string, string> {
  const structuralColor = tweaks.structuralColor ?? primary;
  const isExpressive = tweaks.expressive ?? false;
  const lightBackgroundPresets: Record<
    BackgroundStyle,
    { bgL: number; bgCScale: number; cardL: number; mutedL: number; borderL: number }
  > = {
    neutral: { bgL: 0.98, bgCScale: 0.05, cardL: 0.96, mutedL: 0.94, borderL: 0.88 },
    tinted: { bgL: 0.96, bgCScale: 0.14, cardL: 0.93, mutedL: 0.9, borderL: 0.84 },
    bold: { bgL: 0.92, bgCScale: 0.24, cardL: 0.88, mutedL: 0.85, borderL: 0.78 },
  };
  const preset = lightBackgroundPresets[backgroundStyle];

  // Background (light with configurable tint)
  const background: OklchColor = {
    l: preset.bgL,
    c: structuralColor.c * preset.bgCScale * (isExpressive ? 1.2 : 1),
    h: structuralColor.h,
  };

  // Foreground (dark, high contrast)
  let foreground: OklchColor = { l: 0.15, c: structuralColor.c * 0.1, h: structuralColor.h };
  foreground = ensureContrastRatio(foreground, background, 8.0);

  // Card
  const card: OklchColor = {
    l: preset.cardL,
    c: structuralColor.c * (preset.bgCScale + 0.03),
    h: structuralColor.h,
  };

  // Primary (saturated, readable)
  const primaryColor: OklchColor = {
    l: primary.l < 0.6 ? primary.l + 0.1 : primary.l,
    c: Math.min(isExpressive ? 0.31 : 0.25, primary.c * (isExpressive ? 1.8 : 1.5)),
    h: primary.h,
  };
  const primaryForeground = ensureContrastRatio(
    { l: 0.98, c: 0.02, h: primary.h },
    primaryColor,
    4.5,
  );

  // Secondary (muted)
  const secondaryColor: OklchColor = {
    l: 0.92,
    c: secondary.c * 0.5,
    h: secondary.h,
  };
  const secondaryForeground: OklchColor = { l: 0.2, c: secondary.c * 0.3, h: secondary.h };

  // Muted
  const muted: OklchColor = {
    l: preset.mutedL,
    c: Math.max(0.02, structuralColor.c * preset.bgCScale * 0.6),
    h: structuralColor.h,
  };
  const mutedForeground: OklchColor = { l: 0.4, c: 0.03, h: structuralColor.h };

  // Destructive (red)
  const destructive: OklchColor = { l: 0.55, c: 0.22, h: 25 };
  const destructiveForeground = ensureContrastRatio({ l: 0.98, c: 0.02, h: 25 }, destructive, 4.5);

  // Borders
  const border: OklchColor = {
    l: preset.borderL,
    c: Math.max(0.02, structuralColor.c * preset.bgCScale * 0.4),
    h: structuralColor.h,
  };
  const ring: OklchColor = primaryColor;

  // Accent (dark theme)
  // accent should live near border/input range like shadcn default
  const accentColor: OklchColor = {
    l: border.l - 0.01,
    c: Math.min(0.04, accent.c * 0.25),
    h: accent.h,
  };

  // Accent foreground (text over accent)
  let accentForeground: OklchColor = {
    l: 0.95,
    c: 0.02,
    h: accent.h,
  };

  accentForeground = ensureContrastRatio(accentForeground, accentColor, 4.5);

  const chartSource = tweaks.chartPalette?.length
    ? tweaks.chartPalette
    : [primary, accent, secondary];
  const chartColors = chartSource.slice(0, 5).map((color, index) =>
    formatOklch({
      ...color,
      l: Math.min(
        isExpressive ? 0.82 : 0.75,
        Math.max(0.4, color.l + (index % 2 === 0 ? (isExpressive ? 0.06 : 0.02) : -0.03)),
      ),
      c: Math.min(
        isExpressive ? 0.34 : 0.28,
        Math.max(0.06, color.c * (isExpressive ? 1.5 : 1.25)),
      ),
    }),
  );
  while (chartColors.length < 5) {
    const fallback = generateHarmony(primary, "triadic")[chartColors.length % 3] ?? primary;
    chartColors.push(formatOklch({ ...fallback, l: 0.6, c: Math.min(0.25, fallback.c * 1.5) }));
  }

  // Sidebar colors
  const sidebarBackground = card;
  const sidebarForeground = foreground;
  const sidebarPrimary: OklchColor = { l: 0.25, c: primary.c * 0.5, h: primary.h };
  const sidebarAccent: OklchColor = { l: 0.93, c: primary.c * 0.1, h: primary.h };
  const sidebarBorder: OklchColor = { l: 0.9, c: 0.02, h: primary.h };
  const sidebarRing: OklchColor = primaryColor;

  return {
    "background": formatOklch(background),
    "foreground": formatOklch(foreground),

    "card": formatOklch(card),
    "card-foreground": formatOklch(foreground),

    "popover": formatOklch(background),
    "popover-foreground": formatOklch(foreground),

    "primary": formatOklch(primaryColor),
    "primary-foreground": formatOklch(primaryForeground),

    "secondary": formatOklch(secondaryColor),
    "secondary-foreground": formatOklch(secondaryForeground),

    "muted": formatOklch(muted),
    "muted-foreground": formatOklch(mutedForeground),

    "accent": formatOklch(accentColor),
    "accent-foreground": formatOklch(accentForeground),

    "destructive": formatOklch(destructive),
    "destructive-foreground": formatOklch(destructiveForeground),

    "border": formatOklch(border),
    "input": formatOklch(border),
    "ring": formatOklch(ring),

    "chart-1": chartColors[0] ?? "",
    "chart-2": chartColors[1] ?? "",
    "chart-3": chartColors[2] ?? "",
    "chart-4": chartColors[3] ?? "",
    "chart-5": chartColors[4] ?? "",

    "sidebar": formatOklch(sidebarBackground),
    "sidebar-foreground": formatOklch(sidebarForeground),
    "sidebar-primary": formatOklch(sidebarPrimary),
    "sidebar-primary-foreground": formatOklch(primaryForeground),
    "sidebar-accent": formatOklch(sidebarAccent),
    "sidebar-accent-foreground": formatOklch(foreground),
    "sidebar-border": formatOklch(sidebarBorder),
    "sidebar-ring": formatOklch(sidebarRing),

    "radius": "0.5rem",
  };
}

/**
 * Generate dark theme variant
 */
function generateDarkTheme(
  primary: OklchColor,
  accent: OklchColor,
  secondary: OklchColor,
  backgroundStyle: BackgroundStyle,
  tweaks: ThemeGenerationTweaks = {},
): Record<string, string> {
  const structuralColor = tweaks.structuralColor ?? primary;
  const isExpressive = tweaks.expressive ?? false;
  const darkBackgroundPresets: Record<
    BackgroundStyle,
    { bgL: number; bgCScale: number; cardL: number; mutedL: number; borderL: number }
  > = {
    neutral: { bgL: 0.12, bgCScale: 0.1, cardL: 0.15, mutedL: 0.2, borderL: 0.25 },
    tinted: { bgL: 0.14, bgCScale: 0.18, cardL: 0.18, mutedL: 0.24, borderL: 0.3 },
    bold: { bgL: 0.17, bgCScale: 0.26, cardL: 0.22, mutedL: 0.28, borderL: 0.36 },
  };
  const preset = darkBackgroundPresets[backgroundStyle];

  // Background (dark with configurable tint)
  const background: OklchColor = {
    l: preset.bgL,
    c: structuralColor.c * preset.bgCScale * (isExpressive ? 1.24 : 1),
    h: structuralColor.h,
  };

  // Foreground (light, high contrast)
  let foreground: OklchColor = { l: 0.92, c: structuralColor.c * 0.05, h: structuralColor.h };
  foreground = ensureContrastRatio(foreground, background, 7.0);

  // Card
  const card: OklchColor = {
    l: preset.cardL,
    c: structuralColor.c * (preset.bgCScale + 0.02),
    h: structuralColor.h,
  };

  // Primary (bright, saturated)
  const primaryColor: OklchColor = {
    l: Math.max(0.6, primary.l),
    c: Math.min(isExpressive ? 0.34 : 0.28, primary.c * (isExpressive ? 1.95 : 1.6)),
    h: primary.h,
  };
  const primaryForeground: OklchColor = { l: 0.12, c: primary.c * 0.15, h: primary.h };

  // Secondary
  const secondaryColor: OklchColor = {
    l: 0.22,
    c: secondary.c * 0.5,
    h: secondary.h,
  };
  const secondaryForeground: OklchColor = { l: 0.95, c: secondary.c * 0.1, h: secondary.h };

  // Muted
  const muted: OklchColor = {
    l: preset.mutedL,
    c: Math.max(0.02, structuralColor.c * preset.bgCScale * 0.5),
    h: structuralColor.h,
  };
  const mutedForeground: OklchColor = { l: 0.65, c: 0.03, h: structuralColor.h };

  // Destructive (red)
  const destructive: OklchColor = { l: 0.55, c: 0.25, h: 25 };
  const destructiveForeground: OklchColor = { l: 0.95, c: 0.02, h: 25 };

  // Borders
  const border: OklchColor = {
    l: preset.borderL,
    c: Math.max(0.02, structuralColor.c * preset.bgCScale * 0.35),
    h: structuralColor.h,
  };
  const ring: OklchColor = primaryColor;

  // Accent (dark theme)
  // accent should live near border/input range like shadcn default
  const accentColor: OklchColor = {
    l: border.l - 0.01,
    c: Math.min(0.04, accent.c * 0.25),
    h: accent.h,
  };

  // Accent foreground (text over accent)
  let accentForeground: OklchColor = {
    l: 0.95,
    c: 0.02,
    h: accent.h,
  };

  accentForeground = ensureContrastRatio(accentForeground, accentColor, 4.5);

  const chartSource = tweaks.chartPalette?.length
    ? tweaks.chartPalette
    : [primary, accent, secondary];
  const chartColors = chartSource.slice(0, 5).map((color, index) =>
    formatOklch({
      ...color,
      l: Math.min(
        isExpressive ? 0.86 : 0.8,
        Math.max(0.42, color.l + (index % 2 === 0 ? (isExpressive ? 0.12 : 0.08) : 0.02)),
      ),
      c: Math.min(isExpressive ? 0.36 : 0.3, Math.max(0.06, color.c * (isExpressive ? 1.55 : 1.3))),
    }),
  );
  while (chartColors.length < 5) {
    const fallback = generateHarmony(primary, "triadic")[chartColors.length % 3] ?? primary;
    chartColors.push(formatOklch({ ...fallback, l: 0.65, c: Math.min(0.28, fallback.c * 1.6) }));
  }

  // Sidebar
  const sidebarBackground = card;
  const sidebarForeground = foreground;
  const sidebarPrimary: OklchColor = { l: 0.85, c: primary.c * 0.4, h: primary.h };
  const sidebarAccent: OklchColor = { l: 0.22, c: primary.c * 0.15, h: primary.h };
  const sidebarBorder: OklchColor = { l: 0.25, c: 0.02, h: primary.h };
  const sidebarRing: OklchColor = primaryColor;

  return {
    "background": formatOklch(background),
    "foreground": formatOklch(foreground),

    "card": formatOklch(card),
    "card-foreground": formatOklch(foreground),

    "popover": formatOklch(background),
    "popover-foreground": formatOklch(foreground),

    "primary": formatOklch(primaryColor),
    "primary-foreground": formatOklch(primaryForeground),

    "secondary": formatOklch(secondaryColor),
    "secondary-foreground": formatOklch(secondaryForeground),

    "muted": formatOklch(muted),
    "muted-foreground": formatOklch(mutedForeground),

    "accent": formatOklch(accentColor),
    "accent-foreground": formatOklch(accentForeground),

    "destructive": formatOklch(destructive),
    "destructive-foreground": formatOklch(destructiveForeground),

    "border": formatOklch(border),
    "input": formatOklch(border),
    "ring": formatOklch(ring),

    "chart-1": chartColors[0] ?? "",
    "chart-2": chartColors[1] ?? "",
    "chart-3": chartColors[2] ?? "",
    "chart-4": chartColors[3] ?? "",
    "chart-5": chartColors[4] ?? "",

    "sidebar": formatOklch(sidebarBackground),
    "sidebar-foreground": formatOklch(sidebarForeground),
    "sidebar-primary": formatOklch(sidebarPrimary),
    "sidebar-primary-foreground": formatOklch(primaryForeground),
    "sidebar-accent": formatOklch(sidebarAccent),
    "sidebar-accent-foreground": formatOklch(foreground),
    "sidebar-border": formatOklch(sidebarBorder),
    "sidebar-ring": formatOklch(sidebarRing),

    "radius": "0.5rem",
  };
}
