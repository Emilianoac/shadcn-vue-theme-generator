import { getThemeVariableLabels } from "./componentXRayTheme.utils";

const colorPrefixes = [
  "bg-",
  "text-",
  "border-",
  "ring-",
  "outline-",
  "placeholder-",
  "divide-",
  "accent-",
  "caret-",
  "ring-offset-",
];

export function isColorClass(className: string): boolean {
  const cleanClass = className.split(":").pop() || "";
  const baseClass = cleanClass.split("/")[0];

  if (!baseClass) return false;

  const hasColorPrefix = colorPrefixes.some((prefix) => baseClass.startsWith(prefix));
  if (!hasColorPrefix) return false;

  let themeKey = "";
  if (baseClass.startsWith("bg-")) themeKey = baseClass.slice(3);
  else if (baseClass.startsWith("text-")) themeKey = baseClass.slice(5);
  else if (baseClass.startsWith("border-")) themeKey = baseClass.slice(7);
  else if (baseClass.startsWith("ring-offset-")) themeKey = baseClass.slice(12);
  else if (baseClass.startsWith("ring-")) themeKey = baseClass.slice(5);
  else if (baseClass.startsWith("outline-")) themeKey = baseClass.slice(8);
  else if (baseClass.startsWith("placeholder-")) themeKey = baseClass.slice(12);
  else if (baseClass.startsWith("divide-")) themeKey = baseClass.slice(7);
  else if (baseClass.startsWith("accent-")) themeKey = baseClass.slice(7);
  else if (baseClass.startsWith("caret-")) themeKey = baseClass.slice(6);

  const themeLabels = getThemeVariableLabels();
  return themeKey in themeLabels;
}

export function extractColorClasses(element: HTMLElement): string[] {
  return Array.from(element.classList).filter(isColorClass);
}
