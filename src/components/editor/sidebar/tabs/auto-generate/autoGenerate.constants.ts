import type {
  BackgroundStyle,
  ColorHarmony,
  ImageThemeMode,
} from "@/services/theme/auto/generator.interface";

export const harmonyOptions: { value: ColorHarmony; label: string; description: string }[] = [
  {
    value: "analogous",
    label: "Analogous",
    description: "Adjacent colors on the color wheel (harmonious)",
  },
  {
    value: "complementary",
    label: "Complementary",
    description: "Opposite colors (high contrast)",
  },
  {
    value: "triadic",
    label: "Triadic",
    description: "Three evenly spaced colors (vibrant)",
  },
  {
    value: "split-complementary",
    label: "Split Complementary",
    description: "Softer than complementary",
  },
  {
    value: "monochromatic",
    label: "Monochromatic",
    description: "Variations of a single color (minimalist)",
  },
];

export const backgroundStyleOptions: {
  value: BackgroundStyle;
  label: string;
  description: string;
}[] = [
  {
    value: "neutral",
    label: "Neutral",
    description: "Almost neutral background (subtle)",
  },
  {
    value: "tinted",
    label: "Tinted",
    description: "Background with visible base color tint",
  },
  {
    value: "bold",
    label: "Bold",
    description: "Background with strong personality",
  },
];

export const imageThemeModeOptions: {
  value: ImageThemeMode;
  label: string;
  description: string;
}[] = [
  {
    value: "conservative",
    label: "Conservative",
    description: "Prioritizes readability and stable contrast",
  },
  {
    value: "expressive",
    label: "Expressive",
    description: "Uses more image colors and broader scene character",
  },
];
