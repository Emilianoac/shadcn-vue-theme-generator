const themeVariableLabels: Record<string, string> = {
  "primary": "Primary",
  "primary-foreground": "Primary Foreground",
  "secondary": "Secondary",
  "secondary-foreground": "Secondary Foreground",
  "accent": "Accent",
  "accent-foreground": "Accent Foreground",
  "background": "Background",
  "foreground": "Foreground",
  "card": "Card",
  "card-foreground": "Card Foreground",
  "muted": "Muted",
  "muted-foreground": "Muted Foreground",
  "destructive": "Destructive",
  "destructive-foreground": "Destructive Foreground",
  "popover": "Popover",
  "popover-foreground": "Popover Foreground",
  "border": "Border",
  "input": "Input",
  "ring": "Ring",
  "sidebar": "Sidebar Background",
  "sidebar-foreground": "Sidebar Foreground",
  "sidebar-primary": "Sidebar Primary",
  "sidebar-primary-foreground": "Sidebar Primary Foreground",
  "sidebar-accent": "Sidebar Accent",
  "sidebar-accent-foreground": "Sidebar Accent Foreground",
  "sidebar-border": "Sidebar Border",
  "sidebar-ring": "Sidebar Ring",
  "chart-1": "Chart 1",
  "chart-2": "Chart 2",
  "chart-3": "Chart 3",
  "chart-4": "Chart 4",
  "chart-5": "Chart 5",
};

export function getThemeVariableLabels(): Record<string, string> {
  return themeVariableLabels;
}

export function getThemeVariableLabel(themeKey: string): string | undefined {
  return themeVariableLabels[themeKey];
}
