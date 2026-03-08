import type { MappedColorClass } from "./componentXRay.interface";
import { getThemeVariableLabel } from "./componentXRayTheme.utils";

const borderStructuralClasses = new Set([
  "border",
  "border-x",
  "border-y",
  "border-t",
  "border-r",
  "border-b",
  "border-l",
]);

const textElements = new Set([
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

export function inferBaseTokens(
  element: HTMLElement,
  explicitMapped: MappedColorClass[],
): MappedColorClass[] {
  const inferred: MappedColorClass[] = [];
  const classList = Array.from(element.classList);

  const hasBorderStructural = classList.some((cls) => {
    const baseClass = cls.split(":").pop()?.split("/")[0] || "";
    return borderStructuralClasses.has(baseClass);
  });

  if (hasBorderStructural) {
    const hasExplicitBorderColor = explicitMapped.some((mapped) => mapped.type === "border");

    if (!hasExplicitBorderColor) {
      const borderLabel = getThemeVariableLabel("border") || "Border";
      inferred.push({
        className: "border (inferred)",
        type: "border",
        themeKey: "border",
        label: borderLabel,
        conditionMet: true,
      });
    }
  }

  const tagName = element.tagName.toLowerCase();
  const isTextElement = textElements.has(tagName);
  const hasTextDescendants =
    element.querySelector(Array.from(textElements).join(", ")) instanceof HTMLElement;
  const shouldInferForeground = isTextElement || hasTextDescendants;

  if (shouldInferForeground) {
    const hasExplicitTextColor = explicitMapped.some(
      (mapped) => mapped.type === "text" || mapped.themeKey === "foreground",
    );

    if (!hasExplicitTextColor) {
      const foregroundLabel = getThemeVariableLabel("foreground") || "Foreground";
      inferred.push({
        className: "(inferred text color)",
        type: "text",
        themeKey: "foreground",
        label: foregroundLabel,
        conditionMet: true,
      });
    }
  }

  return inferred;
}
