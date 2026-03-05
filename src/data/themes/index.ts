import { defaultTheme } from "./default";
import { neonDrive } from "./neon-drive";
import { networkPro } from "./network-pro";
import { enterPrise98 } from "./enterprise-98";

export const themes = {
  "default-theme": {
    name: "Default",
    data: defaultTheme,
    externalFonts: [],
  },
  "neon-drive": {
    name: "Neon Drive",
    data: neonDrive,
    externalFonts: [],
  },
  "network-pro": {
    name: "Network Pro",
    data: networkPro,
    externalFonts: [],
  },
  "enterprise-98": {
    name: "Enterprise 98",
    data: enterPrise98,
    externalFonts: [],
  },
} as const;

export type ThemeId = keyof typeof themes;
export type Theme = (typeof themes)[ThemeId];

export const themesList = Object.entries(themes).map(([id, theme]) => ({
  id: id as ThemeId,
  name: theme.name,
  palette: {
    light: {
      primary: theme.data.light.primary,
      accent: theme.data.light.accent,
      base: theme.data.light.background,
      secondary: theme.data.light.secondary,
    },
    dark: {
      primary: theme.data.dark.primary,
      accent: theme.data.dark.accent,
      base: theme.data.dark.background,
      secondary: theme.data.dark.secondary,
    },
  },
}));
