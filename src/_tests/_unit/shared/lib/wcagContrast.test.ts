import { describe, it, expect } from "vitest";
import {
  getContrastRatio,
  checkContrast,
  WCAGLevel,
  formatContrastRatio,
} from "@/shared/lib/utils/wcagContrast";

describe("wcagContrast", () => {
  describe("getContrastRatio", () => {
    it("calcula el ratio correcto entre negro y blanco", () => {
      const ratio = getContrastRatio("#000000", "#FFFFFF");
      expect(ratio).toBeCloseTo(21, 1);
    });

    it("calcula el ratio correcto entre blanco y negro (invertido)", () => {
      const ratio = getContrastRatio("#FFFFFF", "#000000");
      expect(ratio).toBeCloseTo(21, 1);
    });

    it("calcula el ratio entre el mismo color (debe ser 1)", () => {
      const ratio = getContrastRatio("#FF0000", "#FF0000");
      expect(ratio).toBeCloseTo(1, 1);
    });

    it("calcula el ratio con colores en HSL", () => {
      const ratio = getContrastRatio("hsl(0, 0%, 0%)", "hsl(0, 0%, 100%)");
      expect(ratio).toBeCloseTo(21, 1);
    });

    it("calcula el ratio con colores en OKLCH", () => {
      const ratio = getContrastRatio("oklch(0 0 0)", "oklch(1 0 0)");
      expect(ratio).toBeCloseTo(21, 1);
    });

    it("retorna null para colores inválidos", () => {
      const ratio = getContrastRatio("invalid", "#FFFFFF");
      expect(ratio).toBeNull();
    });

    it("calcula ratios conocidos correctamente", () => {
      // Casos de ejemplo de WCAG
      const ratio1 = getContrastRatio("#767676", "#FFFFFF");
      expect(ratio1).toBeCloseTo(4.54, 0.5);

      const ratio2 = getContrastRatio("#595959", "#FFFFFF");
      expect(ratio2).toBeCloseTo(7.0, 0.5);
    });
  });

  describe("checkContrast", () => {
    it("identifica AAA para texto normal con alto contraste", () => {
      const result = checkContrast("#000000", "#FFFFFF", false);
      expect(result).not.toBeNull();
      expect(result!.level).toBe(WCAGLevel.AAA);
      expect(result!.passAA).toBe(true);
      expect(result!.passAAA).toBe(true);
      expect(result!.ratio).toBeCloseTo(21, 1);
    });

    it("identifica AA para contraste medio en texto normal", () => {
      const result = checkContrast("#767676", "#FFFFFF", false);
      expect(result).not.toBeNull();
      expect(result!.level).toBe(WCAGLevel.AA);
      expect(result!.passAA).toBe(true);
      expect(result!.passAAA).toBe(false);
    });

    it("identifica FAIL para contraste bajo", () => {
      const result = checkContrast("#AAAAAA", "#FFFFFF", false);
      expect(result).not.toBeNull();
      expect(result!.level).toBe(WCAGLevel.FAIL);
      expect(result!.passAA).toBe(false);
      expect(result!.passAAA).toBe(false);
    });

    it("aplica umbrales diferentes para texto grande", () => {
      // #888888 tiene aproximadamente 3.7:1 con blanco
      const color1 = "#888888";
      const color2 = "#FFFFFF";

      // Para texto normal, debe fallar AA (requiere 4.5:1)
      const normalResult = checkContrast(color1, color2, false);
      expect(normalResult!.passAA).toBe(false);

      // Para texto grande, debe pasar AA (requiere 3:1)
      const largeResult = checkContrast(color1, color2, true);
      expect(largeResult!.passAA).toBe(true);
    });

    it("retorna null para colores inválidos", () => {
      const result = checkContrast("invalid", "#FFFFFF");
      expect(result).toBeNull();
    });
  });

  describe("formatContrastRatio", () => {
    it("formatea el ratio correctamente", () => {
      expect(formatContrastRatio(4.5)).toBe("4.50:1");
      expect(formatContrastRatio(21)).toBe("21.00:1");
      expect(formatContrastRatio(1.23)).toBe("1.23:1");
    });

    it("redondea a 2 decimales", () => {
      expect(formatContrastRatio(4.567)).toBe("4.57:1");
      expect(formatContrastRatio(7.123)).toBe("7.12:1");
    });
  });
});
