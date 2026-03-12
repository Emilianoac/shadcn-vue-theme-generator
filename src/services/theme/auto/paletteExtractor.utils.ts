import type { OklchColor } from "@/services/theme/auto/generator.interface";
import { hexToOklch, rgbToHex, colorDistance, oklchToHex } from "@/services/theme/auto/color.utils";

/**
 * Extract dominant palette from an image file in the browser.
 */
export async function extractPaletteFromImage(
  file: File,
  maxColors: number = 6,
): Promise<OklchColor[]> {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context) {
    throw new Error("Unable to create 2D canvas context");
  }

  // Downsample for faster extraction while preserving palette distribution
  const maxSize = 180;
  const scale = Math.min(maxSize / bitmap.width, maxSize / bitmap.height, 1);
  const width = Math.max(1, Math.floor(bitmap.width * scale));
  const height = Math.max(1, Math.floor(bitmap.height * scale));

  canvas.width = width;
  canvas.height = height;
  context.drawImage(bitmap, 0, 0, width, height);

  const { data } = context.getImageData(0, 0, width, height);

  // Quantize into fine buckets and aggregate averages for better dominant color capture.
  const buckets = new Map<
    string,
    { count: number; sumR: number; sumG: number; sumB: number; satSum: number }
  >();
  const step = 16;

  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3] ?? 0;
    if (alpha < 140) {
      continue;
    }

    const r = data[i] ?? 0;
    const g = data[i + 1] ?? 0;
    const b = data[i + 2] ?? 0;

    const qr = Math.floor(r / step) * step;
    const qg = Math.floor(g / step) * step;
    const qb = Math.floor(b / step) * step;
    const key = `${qr}-${qg}-${qb}`;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;

    const existing = buckets.get(key);
    if (existing) {
      existing.count += 1;
      existing.sumR += r;
      existing.sumG += g;
      existing.sumB += b;
      existing.satSum += saturation;
    } else {
      buckets.set(key, {
        count: 1,
        sumR: r,
        sumG: g,
        sumB: b,
        satSum: saturation,
      });
    }
  }

  const ranked = Array.from(buckets.values())
    .map((entry) => {
      const r = Math.round(entry.sumR / entry.count);
      const g = Math.round(entry.sumG / entry.count);
      const b = Math.round(entry.sumB / entry.count);
      const saturation = entry.satSum / entry.count;
      // Keep dominance as first signal and add a small saturation bonus.
      const score = entry.count * (1 + saturation * 0.25);
      return { count: entry.count, r, g, b, saturation, score };
    })
    .sort((a, b) => b.score - a.score);

  const selectedBuckets: Array<{ r: number; g: number; b: number }> = [];
  const initialCandidates = ranked.slice(0, Math.max(maxColors * 6, 24));

  for (const candidate of initialCandidates) {
    const isDistinct = selectedBuckets.every((picked) => colorDistance(candidate, picked) >= 28);
    if (isDistinct) {
      selectedBuckets.push(candidate);
    }
    if (selectedBuckets.length >= maxColors) {
      break;
    }
  }

  if (selectedBuckets.length < maxColors) {
    for (const candidate of ranked) {
      const alreadyPicked = selectedBuckets.some((picked) => colorDistance(candidate, picked) < 10);
      if (!alreadyPicked) {
        selectedBuckets.push(candidate);
      }
      if (selectedBuckets.length >= maxColors) {
        break;
      }
    }
  }

  const selected = selectedBuckets.map((entry) => hexToOklch(rgbToHex(entry.r, entry.g, entry.b)));

  if (selected.length === 0) {
    throw new Error("No valid colors found in image");
  }

  return selected;
}

export function dedupePaletteByDistance(palette: OklchColor[], minDistance: number): OklchColor[] {
  const result: OklchColor[] = [];

  for (const color of palette) {
    const rgbA = {
      r: parseInt(oklchToHex(color).slice(1, 3), 16),
      g: parseInt(oklchToHex(color).slice(3, 5), 16),
      b: parseInt(oklchToHex(color).slice(5, 7), 16),
    };
    const isDistinct = result.every((picked) => {
      const pickedHex = oklchToHex(picked);
      const rgbB = {
        r: parseInt(pickedHex.slice(1, 3), 16),
        g: parseInt(pickedHex.slice(3, 5), 16),
        b: parseInt(pickedHex.slice(5, 7), 16),
      };
      return colorDistance(rgbA, rgbB) >= minDistance;
    });

    if (isDistinct) {
      result.push(color);
    }
  }

  return result;
}
