import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  extractPaletteFromImage,
  dedupePaletteByDistance,
} from "@/shared/services/theme/auto/paletteExtractor.utils";

import type { OklchColor } from "@/shared/services/theme/auto/generator.interface";

import * as colorUtils from "@/shared/services/theme/auto/color.utils";

describe("paletteExtractor.utils", () => {
  describe("extractPaletteFromImage", () => {
    beforeEach(() => {
      vi.resetAllMocks();
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("throws if canvas context cannot be created", async () => {
      vi.stubGlobal("createImageBitmap", vi.fn().mockResolvedValue({ width: 10, height: 10 }));
      const fakeCanvas = {
        getContext: () => null,
      } as unknown as HTMLCanvasElement;

      vi.spyOn(document, "createElement").mockReturnValue(fakeCanvas);

      const file = new File([new Uint8Array([0])], "test.png");

      await expect(extractPaletteFromImage(file)).rejects.toThrow(
        "Unable to create 2D canvas context",
      );
    });

    it("throws if no valid colors are found", async () => {
      vi.stubGlobal("createImageBitmap", vi.fn().mockResolvedValue({ width: 1, height: 1 }));

      const fakeContext = {
        drawImage: vi.fn(),
        getImageData: () => ({
          data: new Uint8Array([0, 0, 0, 0]), // alpha 0 → ignored
        }),
      };

      const fakeCanvas = {
        width: 1,
        height: 1,
        getContext: () => fakeContext,
      } as unknown as HTMLCanvasElement;

      vi.spyOn(document, "createElement").mockReturnValue(fakeCanvas);

      const file = new File([new Uint8Array([0])], "test.png");

      await expect(extractPaletteFromImage(file)).rejects.toThrow("No valid colors found in image");
    });

    it("extracts a palette from a simple image", async () => {
      vi.stubGlobal("createImageBitmap", vi.fn().mockResolvedValue({ width: 1, height: 1 }));

      const pixelData = new Uint8Array([
        255,
        0,
        0,
        255, // red pixel
      ]);

      const fakeContext = {
        drawImage: vi.fn(),
        getImageData: () => ({
          data: pixelData,
        }),
      };

      const fakeCanvas = {
        width: 1,
        height: 1,
        getContext: () => fakeContext,
      } as unknown as HTMLCanvasElement;

      vi.spyOn(document, "createElement").mockReturnValue(fakeCanvas);

      const file = new File([new Uint8Array([0])], "test.png");

      const palette = await extractPaletteFromImage(file);

      expect(Array.isArray(palette)).toBe(true);
      expect(palette.length).toBeGreaterThan(0);
    });

    it("respects maxColors limit", async () => {
      vi.stubGlobal("createImageBitmap", vi.fn().mockResolvedValue({ width: 2, height: 2 }));

      const pixelData = new Uint8Array([
        255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 255, 255, 0, 255,
      ]);

      const fakeContext = {
        drawImage: vi.fn(),
        getImageData: () => ({
          data: pixelData,
        }),
      };

      const fakeCanvas = {
        width: 2,
        height: 2,
        getContext: () => fakeContext,
      } as unknown as HTMLCanvasElement;

      vi.spyOn(document, "createElement").mockReturnValue(fakeCanvas);

      const file = new File([new Uint8Array([0])], "test.png");

      const palette = await extractPaletteFromImage(file, 2);

      expect(palette.length).toBeLessThanOrEqual(2);
    });
  });

  describe("dedupePaletteByDistance", () => {
    beforeEach(() => {
      vi.restoreAllMocks();
    });

    it("returns empty array for empty palette", () => {
      const result = dedupePaletteByDistance([], 10);
      expect(result).toEqual([]);
    });

    it("removes identical colors", () => {
      const palette: OklchColor[] = [
        { l: 0.5, c: 0.15, h: 120 },
        { l: 0.5, c: 0.15, h: 120 },
      ];

      vi.spyOn(colorUtils, "oklchToHex")
        .mockReturnValueOnce("#00ff00")
        .mockReturnValueOnce("#00ff00");

      const result = dedupePaletteByDistance(palette, 5);

      expect(result).toHaveLength(1);
    });

    it("keeps colors that are farther than minDistance", () => {
      const palette: OklchColor[] = [
        { l: 0.5, c: 0.15, h: 120 },
        { l: 0.6, c: 0.2, h: 240 },
      ];

      vi.spyOn(colorUtils, "oklchToHex")
        .mockReturnValueOnce("#ff0000")
        .mockReturnValueOnce("#0000ff");

      vi.spyOn(colorUtils, "colorDistance").mockReturnValue(100);

      const result = dedupePaletteByDistance(palette, 10);

      expect(result).toHaveLength(2);
    });

    it("filters colors closer than minDistance", () => {
      const palette: OklchColor[] = [
        { l: 0.5, c: 0.15, h: 120 },
        { l: 0.51, c: 0.15, h: 121 },
      ];

      vi.spyOn(colorUtils, "oklchToHex")
        .mockReturnValueOnce("#00ff00")
        .mockReturnValueOnce("#01ff01");

      vi.spyOn(colorUtils, "colorDistance").mockReturnValue(3);

      const result = dedupePaletteByDistance(palette, 10);

      expect(result).toHaveLength(1);
    });
  });
});
