import { describe, it, expect } from "vitest";
import { inferBaseTokens } from "@/shared/services/componentXRay/componentXRayInference.utils";
import type { MappedColorClass } from "@/shared/services/componentXRay/componentXRay.interface";

describe("componentXRayInference.utils", () => {
  describe("border inference", () => {
    it("infers border token when structural border class exists without explicit border color", () => {
      const el = document.createElement("div");
      el.className = "border bg-card";

      const inferred = inferBaseTokens(el, []);

      expect(inferred).toHaveLength(1);
      expect(inferred[0]).toEqual(
        expect.objectContaining({
          className: "border (inferred)",
          type: "border",
          themeKey: "border",
        }),
      );
    });

    it("does not infer border token if explicit border color already exists", () => {
      const el = document.createElement("div");
      el.className = "border border-input";

      const explicit: MappedColorClass[] = [
        {
          className: "border-input",
          type: "border",
          themeKey: "input",
          label: "Input",
        },
      ];

      const inferred = inferBaseTokens(el, explicit);
      expect(inferred).toEqual([]);
    });

    it("supports directional border utilities", () => {
      const el = document.createElement("div");
      el.className = "border-b";

      const inferred = inferBaseTokens(el, []);
      expect(inferred).toHaveLength(1);
      expect(inferred[0]?.themeKey).toBe("border");
    });
  });

  describe("foreground inference for text elements", () => {
    it("infers foreground token for paragraph without explicit text color", () => {
      const el = document.createElement("p");

      const inferred = inferBaseTokens(el, []);

      expect(inferred).toHaveLength(1);
      expect(inferred[0]).toEqual(
        expect.objectContaining({
          type: "text",
          themeKey: "foreground",
        }),
      );
    });

    it("infers foreground token for h1 without explicit text color", () => {
      const el = document.createElement("h1");

      const inferred = inferBaseTokens(el, []);

      expect(inferred).toHaveLength(1);
      expect(inferred[0]?.themeKey).toBe("foreground");
    });

    it("does not infer foreground if explicit text color already exists", () => {
      const el = document.createElement("p");

      const explicit: MappedColorClass[] = [
        {
          className: "text-primary",
          type: "text",
          themeKey: "primary",
          label: "Primary",
        },
      ];

      const inferred = inferBaseTokens(el, explicit);
      expect(inferred).toEqual([]);
    });

    it("does not infer foreground for non-text elements without color", () => {
      const el = document.createElement("div");

      const inferred = inferBaseTokens(el, []);
      expect(inferred).toEqual([]);
    });

    it("infers foreground for container elements that include text descendants", () => {
      const el = document.createElement("div");
      const paragraph = document.createElement("p");
      paragraph.textContent = "Container text";
      el.appendChild(paragraph);

      const inferred = inferBaseTokens(el, []);

      expect(inferred).toHaveLength(1);
      expect(inferred[0]).toEqual(
        expect.objectContaining({
          type: "text",
          themeKey: "foreground",
        }),
      );
    });

    it("infers both border and foreground when applicable", () => {
      const el = document.createElement("p");
      el.className = "border";

      const inferred = inferBaseTokens(el, []);

      expect(inferred).toHaveLength(2);
      const types = inferred.map((i) => i.type);
      expect(types).toContain("border");
      expect(types).toContain("text");
    });

    it("works with various text element types", () => {
      const textTags = ["span", "a", "h2", "h3", "strong", "em", "small"];

      textTags.forEach((tag) => {
        const el = document.createElement(tag);
        const inferred = inferBaseTokens(el, []);

        expect(inferred).toHaveLength(1);
        expect(inferred[0]?.themeKey).toBe("foreground");
      });
    });
  });
});
