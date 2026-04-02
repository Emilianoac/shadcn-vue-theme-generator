import type { ColorType, MappedColorClass } from "./componentXRay.interface";
import { extractArbitraryVariant, validateArbitraryVariant } from "./componentXRayVariant.utils";
import { getThemeVariableLabel } from "./componentXRayTheme.utils";

export function mapColorClassToTheme(
  className: string,
  element?: HTMLElement,
): MappedColorClass | null {
  const segments = splitClassSegments(className);
  if (segments.length === 0) return null;

  const variants = segments.slice(0, -1).filter(Boolean);
  const arbitraryVariant = extractArbitraryVariant(className);

  const conditionMet =
    !element || !arbitraryVariant || validateArbitraryVariant(arbitraryVariant, element);

  const cleanedClass = className.replace(/\[[^\]]+\]/g, "");
  const cleanClass = splitClassSegments(cleanedClass).pop() || "";
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
    variants,
  };
}

function splitClassSegments(value: string): string[] {
  const segments: string[] = [];
  let current = "";
  let bracketDepth = 0;

  for (const char of value) {
    if (char === "[") {
      bracketDepth += 1;
      current += char;
      continue;
    }

    if (char === "]") {
      bracketDepth = Math.max(0, bracketDepth - 1);
      current += char;
      continue;
    }

    if (char === ":" && bracketDepth === 0) {
      segments.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  if (current) {
    segments.push(current);
  }

  return segments;
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
