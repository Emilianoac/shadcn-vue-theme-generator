import type {
  BackgroundStyle,
  ColorHarmony,
  ImageThemeMode,
} from "@/shared/services/theme/auto/generator.interface";

export interface HarmonyOption<T> {
  value: T;
  label: string;
  description: string;
  example: string[];
}

export const harmonyOptions: HarmonyOption<ColorHarmony>[] = [
  {
    value: "analogous",
    label: "Analogous",
    description: "Adjacent colors on the color wheel (harmonious)",
    example: ["#FF6B6B", "#FF8E72", "#FFA94D", "#FFD93D"],
  },
  {
    value: "complementary",
    label: "Complementary",
    description: "Opposite colors (high contrast)",
    example: ["#1E90FF", "#FF6347", "#87CEFA", "#FF4500"],
  },
  {
    value: "triadic",
    label: "Triadic",
    description: "Three evenly spaced colors (vibrant)",
    example: ["#FF5733", "#33FF57", "#3357FF", "#F0FF33"],
  },
  {
    value: "split-complementary",
    label: "Split Complementary",
    description: "Softer than complementary",
    example: ["#FF6347", "#FFD700", "#6A5ACD", "#00FA9A"],
  },
  {
    value: "monochromatic",
    label: "Monochromatic",
    description: "Variations of a single color (minimalist)",
    example: ["#4B0082", "#6A0DAD", "#8A2BE2", "#BA55D3"],
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
