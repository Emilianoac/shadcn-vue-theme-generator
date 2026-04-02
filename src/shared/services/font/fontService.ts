import WebFont from "webfontloader";
import type { FontService } from "./font.interface";

const loadedFonts = new Set<string>();

export function createFontService(): FontService {
  return {
    loadFonts(fonts) {
      const fontsToLoad = fonts.filter((font) => !loadedFonts.has(font));

      if (fontsToLoad.length === 0) {
        return;
      }

      const familiesWithWeights = fontsToLoad.map((font) => `${font}:400,600,700`);

      WebFont.load({
        google: {
          families: familiesWithWeights,
        },
        active() {
          fontsToLoad.forEach((font) => loadedFonts.add(font));
        },
        inactive() {
          console.log("Unable to load fonts:", fontsToLoad);
        },
      });
    },
  };
}

export const fontService = createFontService();
