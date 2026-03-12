import type {
  OklchColor,
  GenerateThemeFromPaletteOptions,
  GenerateThemeOptions,
  AutoGeneratorService,
} from "./generator.interface";

import { extractPaletteFromImage } from "./paletteExtractor.utils";
import { generateRandomColor, hexToOklch, oklchToHex } from "./color.utils";
import { generateThemeFromColor, generateThemeFromPalette } from "./themeGenerator.utils";

export function createAutoGeneratorService(): AutoGeneratorService {
  return {
    generateFromHex(hexColor: string, options: GenerateThemeOptions) {
      const baseColor = hexToOklch(hexColor);
      return generateThemeFromColor(baseColor, options);
    },

    generateRandom(options: GenerateThemeOptions) {
      const randomColor = generateRandomColor();
      const theme = generateThemeFromColor(randomColor, options);
      return {
        theme,
        hexColor: oklchToHex(randomColor),
      };
    },

    extractPaletteFromImage(file: File, maxColors: number = 6): Promise<OklchColor[]> {
      return extractPaletteFromImage(file, maxColors);
    },

    generateFromPalette(palette: OklchColor[], options: GenerateThemeFromPaletteOptions) {
      return generateThemeFromPalette(palette, options);
    },
  };
}

export const autoGeneratorService = createAutoGeneratorService();
