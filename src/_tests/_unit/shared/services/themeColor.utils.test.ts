import { describe, it, expect } from "vitest";
import { colorToOklch, paletteToOklch } from "@/shared/services/theme/themeColor.utils";

describe("themeColor.utils - OKLCH Conversion", () => {
  it("should preserve valid OKLCH values without modification", () => {
    const input = "oklch(0.85 0.15 170)";
    const result = colorToOklch(input);

    expect(result).toBe(input);
  });

  it("should convert hex colors to OKLCH format", () => {
    const result = colorToOklch("#ff0000");

    expect(result).toMatch(/^oklch\(/);
  });

  it("should skip radius field when converting palettes", () => {
    const palette = {
      primary: "#ff0000",
      radius: "0.5rem",
    };

    const result = paletteToOklch(palette);

    expect(result.radius).toBe("0.5rem");
    expect(result.primary).toMatch(/^oklch\(/);
  });
});
