import { describe, it, expect } from "vitest";
import {
  resolveMarkedElement,
  getMarkedChain,
  extractElementLabel,
  isTextElement,
} from "@/services/componentXRay/componentXRayElement.utils";

describe("componentXRayElement.utils", () => {
  it("resolveMarkedElement prioritizes trigger over marked container", () => {
    const parent = document.createElement("div");
    parent.setAttribute("data-component-x-ray", "Container");

    const trigger = document.createElement("button");
    trigger.setAttribute("data-component-x-ray-trigger", "Trigger");
    parent.appendChild(trigger);

    const resolved = resolveMarkedElement(trigger);
    expect(resolved?.element).toBe(trigger);
    expect(resolved?.isTrigger).toBe(true);
  });

  it("resolveMarkedElement returns internal element when hovering inside marked container", () => {
    const parent = document.createElement("div");
    parent.setAttribute("data-component-x-ray", "Container");

    const child = document.createElement("span");
    parent.appendChild(child);

    const resolved = resolveMarkedElement(child);
    expect(resolved?.element).toBe(child);
    expect(resolved?.isTrigger).toBe(false);
  });

  it("resolveMarkedElement returns the element itself when it has the marked attribute", () => {
    const parent = document.createElement("div");
    parent.setAttribute("data-component-x-ray", "Container");

    const child = document.createElement("div");
    child.setAttribute("data-component-x-ray", "ChildComponent");
    parent.appendChild(child);

    const resolved = resolveMarkedElement(child);
    expect(resolved?.element).toBe(child);
    expect(resolved?.isTrigger).toBe(false);
  });

  it("getMarkedChain returns marked elements from closest to outer", () => {
    const outer = document.createElement("div");
    outer.setAttribute("data-component-x-ray", "Outer");

    const middle = document.createElement("div");
    middle.setAttribute("data-component-x-ray", "Middle");

    const inner = document.createElement("div");
    inner.setAttribute("data-component-x-ray", "Inner");

    middle.appendChild(inner);
    outer.appendChild(middle);

    const chain = getMarkedChain(inner);
    expect(chain).toEqual([inner, middle, outer]);
  });

  it("extractElementLabel uses marked label, then trigger label, then default", () => {
    const marked = document.createElement("div");
    marked.setAttribute("data-component-x-ray", "Card");
    expect(extractElementLabel(marked)).toBe("Card");

    const trigger = document.createElement("button");
    trigger.setAttribute("data-component-x-ray-trigger", "Popover Trigger");
    expect(extractElementLabel(trigger)).toBe("Popover Trigger");

    const plain = document.createElement("span");
    expect(extractElementLabel(plain)).toBe("Element");
    expect(extractElementLabel(plain, "Fallback")).toBe("Fallback");
  });

  it("isTextElement returns true for text-like elements", () => {
    const textElements = ["p", "h1", "h2", "h3", "span", "a", "strong", "em", "label"];
    textElements.forEach((tag) => {
      const el = document.createElement(tag);
      expect(isTextElement(el)).toBe(true);
    });
  });

  it("isTextElement returns false for non-text elements", () => {
    const nonTextElements = ["div", "section", "article", "form", "input"];
    nonTextElements.forEach((tag) => {
      const el = document.createElement(tag);
      expect(isTextElement(el)).toBe(false);
    });
  });

  it("isTextElement includes button as text element", () => {
    const button = document.createElement("button");
    expect(isTextElement(button)).toBe(true);
  });
});
