import type { ColorType, MappedColorClass } from "./componentXRay.interface";
import { extractArbitraryVariant, validateArbitraryVariant } from "./componentXRayVariant.utils";
import { getThemeVariableLabel } from "./componentXRayTheme.utils";

export function mapColorClassToTheme(
  className: string,
  element?: HTMLElement,
): MappedColorClass | null {
  const arbitraryVariant = extractArbitraryVariant(className);

  const conditionMet =
    !element || !arbitraryVariant || validateArbitraryVariant(arbitraryVariant, element);

  const cleanedClass = className.replace(/\[[^\]]+\]/g, "");
  const cleanClass = cleanedClass.split(":").pop() || "";
  const baseClass = cleanClass.split("/")[0];

  if (!baseClass) return null;

  const { type, themeKey } = classifyColorClass(baseClass);
  if (type === "other") return null;

  const label = getThemeVariableLabel(themeKey);
  if (!label) return null;

  return {
    className,
    type,
    themeKey,
    label,
    conditionMet,
    arbitraryVariant: arbitraryVariant || undefined,
  };
}

function classifyColorClass(baseClass: string): { type: ColorType; themeKey: string } {
  let type: ColorType = "other";
  let themeKey = "";

  if (baseClass.startsWith("bg-")) {
    type = "background";
    themeKey = baseClass.replace("bg-", "");
  } else if (baseClass.startsWith("text-")) {
    type = "text";
    themeKey = baseClass.replace("text-", "");
  } else if (baseClass.startsWith("border-")) {
    type = "border";
    themeKey = baseClass.replace("border-", "");
  } else if (baseClass.startsWith("ring-") || baseClass.startsWith("outline-")) {
    type = "ring";
    themeKey = baseClass.replace(/^(ring|outline)-/, "");
  } else if (baseClass.startsWith("placeholder-")) {
    type = "placeholder";
    themeKey = baseClass.replace("placeholder-", "");
  }

  return { type, themeKey };
}

export function mapMultipleColorClasses(
  classes: string[],
  element?: HTMLElement,
): MappedColorClass[] {
  return classes
    .map((cls) => mapColorClassToTheme(cls, element))
    .filter((mapped): mapped is MappedColorClass => mapped !== null);
}
