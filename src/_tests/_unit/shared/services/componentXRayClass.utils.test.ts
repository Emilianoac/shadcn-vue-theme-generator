import { describe, it, expect } from "vitest";
import {
  isColorClass,
  extractColorClasses,
} from "@/shared/services/componentXRay/componentXRayClass.utils";

describe("componentXRayClass.utils", () => {
  describe("isColorClass", () => {
    it("detects theme color classes", () => {
      expect(isColorClass("bg-primary")).toBe(true);
      expect(isColorClass("text-foreground")).toBe(true);
      expect(isColorClass("border-input")).toBe(true);
      expect(isColorClass("ring-ring")).toBe(true);
      expect(isColorClass("placeholder-muted-foreground")).toBe(true);
    });

    it("supports modifiers and opacity variants", () => {
      expect(isColorClass("hover:bg-primary/90")).toBe(true);
      expect(isColorClass("dark:text-foreground/80")).toBe(true);
      expect(isColorClass("focus:ring-ring/50")).toBe(true);
    });

    it("ignores non-theme classes", () => {
      expect(isColorClass("p-4")).toBe(false);
      expect(isColorClass("flex")).toBe(false);
      expect(isColorClass("text-red-500")).toBe(false);
      expect(isColorClass("border-blue-300")).toBe(false);
    });
  });

  describe("extractColorClasses", () => {
    it("returns only color classes from element", () => {
      const el = document.createElement("div");
      el.className =
        "bg-primary text-foreground p-4 border-input flex hover:bg-primary/90 ring-ring";

      const classes = extractColorClasses(el);

      expect(classes).toEqual(
        expect.arrayContaining([
          "bg-primary",
          "text-foreground",
          "border-input",
          "hover:bg-primary/90",
          "ring-ring",
        ]),
      );
      expect(classes).not.toContain("p-4");
      expect(classes).not.toContain("flex");
    });
  });
});
