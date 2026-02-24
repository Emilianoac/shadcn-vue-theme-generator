import { ref, watch } from "vue";
import { themes, type ThemeId, type Theme } from "@/data/themes";
import { themeService } from "@/services/theme/themeService";

const themeId = ref<ThemeId>(themeService.loadTheme());
const currentTheme = ref<Theme>({ ...themes[themeId.value] });

watch(
  currentTheme,
  (newTheme) => {
    themeService.saveTheme(themeId.value);
    themeService.applyTheme(newTheme);
  },
  { deep: true, immediate: true },
);

export function useTheme() {
  function setTheme(id: ThemeId) {
    themeId.value = id;
    currentTheme.value = JSON.parse(JSON.stringify(themes[id]));
  }

  return {
    setTheme,
    themeId,
    theme: currentTheme,
  };
}
