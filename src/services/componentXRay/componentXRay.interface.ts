export interface MappedColorClass {
  className: string;
  type: "background" | "text" | "border" | "ring" | "placeholder" | "other";
  themeKey: string;
  label: string;
  conditionMet?: boolean;
  arbitraryVariant?: string;
}

export type ElementType = "component" | "trigger" | "internal";

export interface HoveredElementInfo {
  element: HTMLElement;
  rect: DOMRect;
  isTrigger: boolean;
  elementType: ElementType;
}

export interface ResolvedMarkedElement {
  element: HTMLElement;
  isTrigger: boolean;
}

export type ColorType = "background" | "text" | "border" | "ring" | "placeholder" | "other";

export interface ComponentXRayService {
  extractColorClasses(element: HTMLElement): string[];
  resolveMarkedElement(target: EventTarget | null): ResolvedMarkedElement | null;
  getMarkedChain(startElement: HTMLElement): HTMLElement[];
  extractElementLabel(element: HTMLElement, defaultLabel?: string): string;
  mapColorClassToTheme(className: string, element?: HTMLElement): MappedColorClass | null;
  inferBaseTokens(element: HTMLElement, explicitMapped: MappedColorClass[]): MappedColorClass[];
  isTextElement(element: Element): boolean;
}
