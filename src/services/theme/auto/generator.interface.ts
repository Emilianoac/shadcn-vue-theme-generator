import type { Theme } from "@/data/themes";

export interface OklchColor {
  l: number; // 0-1
  c: number; // 0-0.4
  h: number; // 0-360
}

export type ColorHarmony =
  | "complementary"
  | "analogous"
  | "triadic"
  | "split-complementary"
  | "monochromatic";

export type BackgroundStyle = "neutral" | "tinted" | "bold";
export type ImageThemeMode = "conservative" | "expressive";

export interface GenerateThemeOptions {
  harmony: ColorHarmony;
  backgroundStyle: BackgroundStyle;
  name: string;
}

export interface GenerateThemeFromPaletteOptions {
  backgroundStyle: BackgroundStyle;
  name: string;
  mode?: ImageThemeMode;
}

export interface AutoGeneratorService {
  generateFromHex(hexColor: string, options: GenerateThemeOptions): Theme;
  generateRandom(options: GenerateThemeOptions): { theme: Theme; hexColor: string };
  extractPaletteFromImage(file: File, maxColors?: number): Promise<OklchColor[]>;
  generateFromPalette(palette: OklchColor[], options: GenerateThemeFromPaletteOptions): Theme;
}
