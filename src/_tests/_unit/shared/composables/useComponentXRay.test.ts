import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { nextTick } from "vue";
import { useComponentXRay } from "@/shared/composables/useComponentXRay";

describe("useComponentXRay", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    const state = useComponentXRay();
    state.deactivate();
    state.isActive.value = false;
    state.isDialogOpen.value = false;
    state.dialogMappedClasses.value = [];
    state.elementLabel.value = "";
    state.hoveredElement.value = null;
  });

  afterEach(() => {
    const state = useComponentXRay();
    state.deactivate();

    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  });

  it("starts inactive with empty state", () => {
    const { isActive, hoveredElement, isDialogOpen, dialogMappedClasses } = useComponentXRay();

    expect(isActive.value).toBe(false);
    expect(hoveredElement.value).toBeNull();
    expect(isDialogOpen.value).toBe(false);
    expect(dialogMappedClasses.value).toEqual([]);
  });

  it("toggles active state", () => {
    const { isActive, toggle } = useComponentXRay();

    toggle();
    expect(isActive.value).toBe(true);

    toggle();
    expect(isActive.value).toBe(false);
  });

  it("tracks hovered marked element on mousemove", () => {
    const { activate, isActive, hoveredElement } = useComponentXRay();
    isActive.value = true;
    activate();

    const el = document.createElement("div");
    el.setAttribute("data-component-x-ray", "Card");
    container.appendChild(el);

    const event = new MouseEvent("mousemove", { bubbles: true, cancelable: true });
    Object.defineProperty(event, "target", { value: el, enumerable: true });
    document.dispatchEvent(event);

    expect(hoveredElement.value?.element).toBe(el);
    expect(hoveredElement.value?.isTrigger).toBe(false);
  });

  it("opens dialog and maps classes when clicking a marked element", () => {
    const { activate, isActive, isDialogOpen, dialogMappedClasses, elementLabel } =
      useComponentXRay();
    isActive.value = true;
    activate();

    const el = document.createElement("div");
    el.setAttribute("data-component-x-ray", "Test Card");
    el.className = "bg-primary text-primary-foreground border-input";
    container.appendChild(el);

    const click = new MouseEvent("click", { bubbles: true, cancelable: true });
    Object.defineProperty(click, "target", { value: el, enumerable: true });
    document.dispatchEvent(click);

    expect(isDialogOpen.value).toBe(true);
    expect(elementLabel.value).toBe("Test Card");
    expect(dialogMappedClasses.value.map((x) => x.themeKey)).toEqual(
      expect.arrayContaining(["primary", "primary-foreground", "input"]),
    );
  });

  it("inspects trigger only with Ctrl+Click", () => {
    const { activate, isActive, isDialogOpen, elementLabel } = useComponentXRay();
    isActive.value = true;
    activate();

    const trigger = document.createElement("button");
    trigger.setAttribute("data-component-x-ray-trigger", "Popover Trigger");
    trigger.className = "bg-accent";
    container.appendChild(trigger);

    const normalClick = new MouseEvent("click", { bubbles: true, cancelable: true });
    Object.defineProperty(normalClick, "target", { value: trigger, enumerable: true });
    document.dispatchEvent(normalClick);
    expect(isDialogOpen.value).toBe(false);

    const ctrlClick = new MouseEvent("click", { bubbles: true, cancelable: true, ctrlKey: true });
    Object.defineProperty(ctrlClick, "target", { value: trigger, enumerable: true });
    document.dispatchEvent(ctrlClick);

    expect(isDialogOpen.value).toBe(true);
    expect(elementLabel.value).toBe("Popover Trigger");
  });

  it("supports marked chain selection shortcuts", () => {
    const { activate, isActive, elementLabel } = useComponentXRay();
    isActive.value = true;
    activate();

    const outer = document.createElement("div");
    outer.setAttribute("data-component-x-ray", "Outer");

    const inner = document.createElement("div");
    inner.setAttribute("data-component-x-ray", "Inner");

    outer.appendChild(inner);
    container.appendChild(outer);

    const normalClick = new MouseEvent("click", { bubbles: true, cancelable: true });
    Object.defineProperty(normalClick, "target", { value: inner, enumerable: true });
    document.dispatchEvent(normalClick);
    expect(elementLabel.value).toBe("Inner");

    const ctrlClick = new MouseEvent("click", { bubbles: true, cancelable: true, ctrlKey: true });
    Object.defineProperty(ctrlClick, "target", { value: inner, enumerable: true });
    document.dispatchEvent(ctrlClick);
    expect(elementLabel.value).toBe("Outer");
  });

  it("clears hover state when dialog opens", async () => {
    const { isActive, hoveredElement, isDialogOpen, activate } = useComponentXRay();
    isActive.value = true;
    activate();

    const el = document.createElement("div");
    el.setAttribute("data-component-x-ray", "Card");
    container.appendChild(el);

    // Simulate hover
    const hoverEvent = new MouseEvent("mousemove", { bubbles: true, cancelable: true });
    Object.defineProperty(hoverEvent, "target", { value: el, enumerable: true });
    document.dispatchEvent(hoverEvent);

    expect(hoveredElement.value).not.toBeNull();

    // Open dialog
    isDialogOpen.value = true;
    await nextTick();

    // Hover state should be cleared
    expect(hoveredElement.value).toBeNull();
  });

  it("clears hover state on scroll event", () => {
    const { isActive, hoveredElement, activate } = useComponentXRay();
    isActive.value = true;
    activate();

    const el = document.createElement("div");
    el.setAttribute("data-component-x-ray", "Card");
    container.appendChild(el);

    // Simulate hover
    const hoverEvent = new MouseEvent("mousemove", { bubbles: true, cancelable: true });
    Object.defineProperty(hoverEvent, "target", { value: el, enumerable: true });
    document.dispatchEvent(hoverEvent);

    expect(hoveredElement.value).not.toBeNull();

    // Trigger scroll event
    const scrollEvent = new Event("scroll", { bubbles: true });
    document.dispatchEvent(scrollEvent);

    // Hover state should be cleared
    expect(hoveredElement.value).toBeNull();
  });

  it("removes scroll listener on deactivate", () => {
    const removeEventListenerSpy = vi.spyOn(document, "removeEventListener");
    const { activate, deactivate, hoveredElement, isActive } = useComponentXRay();

    isActive.value = true;
    activate();

    const el = document.createElement("div");
    hoveredElement.value = {
      element: el,
      rect: el.getBoundingClientRect(),
      isTrigger: false,
      elementType: "component",
    };

    deactivate();

    expect(hoveredElement.value).toBeNull();
    expect(removeEventListenerSpy).toHaveBeenCalledWith("mousemove", expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith("mouseleave", expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith("click", expect.any(Function), true);
    expect(removeEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function), true);

    removeEventListenerSpy.mockRestore();
  });

  it("inspects text element directly without marked container", () => {
    const { activate, isActive, isDialogOpen } = useComponentXRay();
    isActive.value = true;
    activate();

    const paragraph = document.createElement("p");
    paragraph.className = "text-sm";
    paragraph.textContent = "Sample text";
    container.appendChild(paragraph);

    const click = new MouseEvent("click", { bubbles: true, cancelable: true });
    Object.defineProperty(click, "target", { value: paragraph, enumerable: true });
    document.dispatchEvent(click);

    // Should NOT open dialog since text element is not inside a marked container
    expect(isDialogOpen.value).toBe(false);
  });

  it("inspects text element inside marked container", () => {
    const { activate, isActive, isDialogOpen, dialogMappedClasses } = useComponentXRay();
    isActive.value = true;
    activate();

    const markedContainer = document.createElement("div");
    markedContainer.setAttribute("data-component-x-ray", "Card");
    markedContainer.className = "bg-card";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Sample text";

    markedContainer.appendChild(paragraph);
    container.appendChild(markedContainer);

    const click = new MouseEvent("click", { bubbles: true, cancelable: true });
    Object.defineProperty(click, "target", { value: paragraph, enumerable: true });
    document.dispatchEvent(click);

    expect(isDialogOpen.value).toBe(true);
    // Should infer foreground since no explicit text color
    expect(dialogMappedClasses.value.some((c) => c.themeKey === "foreground")).toBe(true);
  });

  it("inspects text element with explicit color classes inside marked container", () => {
    const { activate, isActive, isDialogOpen, dialogMappedClasses } = useComponentXRay();
    isActive.value = true;
    activate();

    const markedContainer = document.createElement("div");
    markedContainer.setAttribute("data-component-x-ray", "Card");

    const heading = document.createElement("h1");
    heading.className = "text-primary";
    heading.textContent = "Main Title";

    markedContainer.appendChild(heading);
    container.appendChild(markedContainer);

    const click = new MouseEvent("click", { bubbles: true, cancelable: true });
    Object.defineProperty(click, "target", { value: heading, enumerable: true });
    document.dispatchEvent(click);

    expect(isDialogOpen.value).toBe(true);
    expect(dialogMappedClasses.value.some((c) => c.themeKey === "primary")).toBe(true);
    // Should NOT infer foreground if explicit text color exists
    expect(dialogMappedClasses.value.some((c) => c.themeKey === "foreground")).toBe(false);
  });

  it("inspects marked container when Ctrl+Click on text element inside", () => {
    const { activate, isActive, elementLabel } = useComponentXRay();
    isActive.value = true;
    activate();

    const container_marked = document.createElement("div");
    container_marked.setAttribute("data-component-x-ray", "Accordion Content");
    container_marked.className = "bg-card";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Paragraph inside container";

    container_marked.appendChild(paragraph);
    container.appendChild(container_marked);

    const ctrlClick = new MouseEvent("click", { bubbles: true, cancelable: true, ctrlKey: true });
    Object.defineProperty(ctrlClick, "target", { value: paragraph, enumerable: true });
    document.dispatchEvent(ctrlClick);

    expect(elementLabel.value).toBe("Accordion Content");
  });

  it("infers foreground when inspecting a marked container with text descendants", () => {
    const { activate, isActive, isDialogOpen, dialogMappedClasses, elementLabel } =
      useComponentXRay();
    isActive.value = true;
    activate();

    const content = document.createElement("div");
    content.setAttribute("data-component-x-ray", "accordion-content");

    const paragraph = document.createElement("p");
    paragraph.textContent = "Container body";
    content.appendChild(paragraph);
    container.appendChild(content);

    const click = new MouseEvent("click", { bubbles: true, cancelable: true });
    Object.defineProperty(click, "target", { value: content, enumerable: true });
    document.dispatchEvent(click);

    expect(isDialogOpen.value).toBe(true);
    expect(elementLabel.value).toBe("accordion-content");
    expect(dialogMappedClasses.value.some((c) => c.themeKey === "foreground")).toBe(true);
  });
});
