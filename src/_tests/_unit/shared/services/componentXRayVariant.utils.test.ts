import { describe, it, expect } from "vitest";
import {
  extractArbitraryVariant,
  validateArbitraryVariant,
} from "@/shared/services/componentXRay/componentXRayVariant.utils";

describe("componentXRayVariant.utils", () => {
  describe("extractArbitraryVariant", () => {
    it("extracts arbitrary variant from className", () => {
      expect(extractArbitraryVariant("[a&]:hover:bg-accent")).toBe("a&");
      expect(extractArbitraryVariant("[&>*]:text-foreground")).toBe("&>*");
    });

    it("returns null when no arbitrary variant is present", () => {
      expect(extractArbitraryVariant("hover:bg-accent")).toBeNull();
    });
  });

  describe("validateArbitraryVariant", () => {
    it("validates a& selector depending on ancestor", () => {
      const link = document.createElement("a");
      const child = document.createElement("span");
      link.appendChild(child);

      const orphan = document.createElement("span");

      expect(validateArbitraryVariant("a&", child)).toBe(true);
      expect(validateArbitraryVariant("a&", orphan)).toBe(false);
    });

    it("validates &:checked state", () => {
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = true;

      expect(validateArbitraryVariant("&:checked", input)).toBe(true);

      input.checked = false;
      expect(validateArbitraryVariant("&:checked", input)).toBe(false);
    });

    it("returns true for selectors without &", () => {
      const el = document.createElement("div");
      expect(validateArbitraryVariant("hover", el)).toBe(true);
      expect(validateArbitraryVariant("", el)).toBe(true);
    });
  });
});
