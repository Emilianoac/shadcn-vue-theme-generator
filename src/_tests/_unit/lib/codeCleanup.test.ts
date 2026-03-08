import { describe, it, expect } from "vitest";
import { removeXRayAttributes } from "@/lib/utils/codeCleanup";

describe("removeXRayAttributes", () => {
  it("removes data-component-x-ray attributes with values", () => {
    const code = `<div data-component-x-ray="Card" class="p-4">Content</div>`;
    const result = removeXRayAttributes(code);
    expect(result).toBe(`<div class="p-4">Content</div>`);
  });

  it("removes data-component-x-ray-trigger attributes with values", () => {
    const code = `<button data-component-x-ray-trigger="ButtonTrigger">Click</button>`;
    const result = removeXRayAttributes(code);
    expect(result).toBe(`<button>Click</button>`);
  });

  it("removes both types of attributes in complex markup", () => {
    const code = `
      <Accordion data-component-x-ray="Accordion" class="p-4">
        <AccordionItem data-component-x-ray="accordion-item" value="item-1">
          <AccordionTrigger data-component-x-ray-trigger="AccordionTrigger">
            Title
          </AccordionTrigger>
          <AccordionContent data-component-x-ray="AccordionContent">
            Content
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `;

    const result = removeXRayAttributes(code);

    expect(result).not.toContain("data-component-x-ray");
    expect(result).not.toContain("data-component-x-ray-trigger");
    expect(result).toContain('class="p-4"');
    expect(result).toContain('value="item-1"');
  });

  it("preserves other attributes and structure", () => {
    const code = `
      <div
        data-component-x-ray="Card"
        class="flex items-center"
        id="main-card"
      >
        <span>Text</span>
      </div>
    `;

    const result = removeXRayAttributes(code);

    expect(result).toContain('class="flex items-center"');
    expect(result).toContain('id="main-card"');
    expect(result).not.toContain("data-component-x-ray");
  });

  it("handles attributes without values", () => {
    const code = `<div data-component-x-ray class="test">Content</div>`;
    const result = removeXRayAttributes(code);
    expect(result).not.toContain("data-component-x-ray");
    expect(result).toContain('class="test"');
  });

  it("removes excessive blank lines after cleanup", () => {
    const code = `
      <div data-component-x-ray="Card">


        Content


      </div>
    `;

    const result = removeXRayAttributes(code);
    // Should not have more than 2 consecutive newlines
    expect(result).not.toContain("\n\n\n");
  });

  it("returns empty string trimmed for empty input", () => {
    expect(removeXRayAttributes("")).toBe("");
    expect(removeXRayAttributes("   ")).toBe("");
  });
});
