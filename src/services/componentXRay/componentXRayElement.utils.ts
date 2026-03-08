import type { ResolvedMarkedElement } from "./componentXRay.interface";

export const MARKED_ELEMENT_ATTRIBUTES = {
  MARKED: "data-component-x-ray",
  TRIGGER: "data-component-x-ray-trigger",
} as const;

const TEXT_ELEMENTS = new Set([
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "span",
  "a",
  "small",
  "strong",
  "em",
  "b",
  "i",
  "u",
  "code",
  "pre",
  "cite",
  "q",
  "abbr",
  "time",
  "li",
  "td",
  "th",
  "label",
  "button",
]);

export function isTextElement(element: Element): boolean {
  return TEXT_ELEMENTS.has(element.tagName.toLowerCase());
}

export function resolveMarkedElement(target: EventTarget | null): ResolvedMarkedElement | null {
  let sourceElement: Element | null = null;

  if (target instanceof Element) {
    sourceElement = target;
  } else if (target instanceof Node) {
    sourceElement = target.parentElement;
  }

  if (!sourceElement) return null;

  if (sourceElement.hasAttribute(MARKED_ELEMENT_ATTRIBUTES.TRIGGER)) {
    return { element: sourceElement as HTMLElement, isTrigger: true };
  }

  if (sourceElement.hasAttribute(MARKED_ELEMENT_ATTRIBUTES.MARKED)) {
    return { element: sourceElement as HTMLElement, isTrigger: false };
  }

  const trigger = sourceElement.closest(`[${MARKED_ELEMENT_ATTRIBUTES.TRIGGER}]`);
  if (trigger instanceof HTMLElement) {
    return { element: trigger, isTrigger: true };
  }

  const marked = sourceElement.closest(`[${MARKED_ELEMENT_ATTRIBUTES.MARKED}]`);
  if (!(marked instanceof HTMLElement)) return null;

  if (sourceElement instanceof HTMLElement && sourceElement !== marked) {
    return { element: sourceElement, isTrigger: false };
  }

  return { element: marked, isTrigger: false };
}

export function getMarkedChain(startElement: HTMLElement): HTMLElement[] {
  const chain: HTMLElement[] = [];
  let current: HTMLElement | null = startElement;

  while (current) {
    if (
      current.hasAttribute(MARKED_ELEMENT_ATTRIBUTES.MARKED) ||
      current.hasAttribute(MARKED_ELEMENT_ATTRIBUTES.TRIGGER)
    ) {
      chain.push(current);
    }

    current = current.parentElement;
  }

  return chain;
}

export function extractElementLabel(
  element: HTMLElement,
  defaultLabel: string = "Element",
): string {
  const markedLabel = element.getAttribute(MARKED_ELEMENT_ATTRIBUTES.MARKED);
  if (markedLabel) return markedLabel;

  const triggerLabel = element.getAttribute(MARKED_ELEMENT_ATTRIBUTES.TRIGGER);
  if (triggerLabel) return triggerLabel;

  return defaultLabel;
}
