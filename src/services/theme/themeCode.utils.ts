import type { Theme } from "@/data/themes";
import { paletteToOklch } from "./themeColor.utils";

const THEME_INLINE_MAPPINGS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
];

export function objectToCssVariables(cssObject: Record<string, string>, prefix = "--"): string {
  return Object.entries(cssObject)
    .map(([key, value]) => `${prefix}${key}: ${value};`)
    .join("\n");
}

function getInlineThemeMappings(): string {
  return THEME_INLINE_MAPPINGS.map((token) => `  --color-${token}: var(--${token});`).join("\n");
}

export function generateThemeCssCode(theme: Theme): string {
  const cssVariablesLight = objectToCssVariables(paletteToOklch(theme.data.light));
  const cssVariablesDark = objectToCssVariables(paletteToOklch(theme.data.dark));

  return `@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
${cssVariablesLight}
}

.dark {
${cssVariablesDark}
}

@theme inline {
${getInlineThemeMappings()}
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}`;
}
