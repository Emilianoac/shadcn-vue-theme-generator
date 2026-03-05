import { ref, watch } from "vue";
import { themes, type ThemeId, type Theme } from "@/data/themes";
import { themeService } from "@/services/theme/themeService";
import { createEditableTheme } from "@/services/theme/themeColor.utils";

const themeId = ref<ThemeId>(themeService.loadTheme());

function getInitialTheme(id: ThemeId): Theme {
  const customTheme = themeService.loadCustomTheme(id);
  if (customTheme) {
    return customTheme;
  }

  return createEditableTheme(themes[id]);
}

const currentTheme = ref<Theme>(getInitialTheme(themeId.value));
const isCustomTheme = ref(themeService.loadCustomTheme(themeId.value) !== null);
let isInitialLoad = true;

watch(
  currentTheme,
  (newTheme) => {
    themeService.saveTheme(themeId.value);
    themeService.applyTheme(newTheme);

    if (!isInitialLoad) {
      themeService.saveCustomTheme(themeId.value, newTheme);
      isCustomTheme.value = true;
    }

    isInitialLoad = false;
  },
  { deep: true, immediate: true },
);

export function useTheme() {
  function setTheme(id: ThemeId) {
    if (id !== themeId.value) {
      themeService.clearCustomTheme();
      isCustomTheme.value = false;
    }

    themeId.value = id;
    isInitialLoad = true;
    currentTheme.value = createEditableTheme(themes[id]);
  }

  function resetTheme() {
    themeService.clearCustomTheme();
    isCustomTheme.value = false;
    isInitialLoad = true;
    currentTheme.value = createEditableTheme(themes[themeId.value]);
  }

  return {
    setTheme,
    resetTheme,
    themeId,
    theme: currentTheme,
    isCustomTheme,
  };
}
