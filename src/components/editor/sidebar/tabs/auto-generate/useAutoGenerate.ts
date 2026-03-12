import type {
  BackgroundStyle,
  ColorHarmony,
  ImageThemeMode,
  OklchColor,
} from "@/services/theme/auto/generator.interface";
import { computed, onBeforeUnmount, ref } from "vue";
import { themeService } from "@/services/theme/themeService";
import { useTheme } from "@/composables/useTheme";

export function useAutoGenerate() {
  const { applyGeneratedTheme } = useTheme();

  const selectedColor = ref<string>("#3b82f6");
  const selectedHarmony = ref<ColorHarmony>("analogous");
  const selectedBackgroundStyle = ref<BackgroundStyle>("neutral");
  const imageThemeMode = ref<ImageThemeMode>("conservative");
  const isGeneratingFromColor = ref(false);
  const isGeneratingFromImage = ref(false);
  const isExtractingPalette = ref(false);
  const selectedImageName = ref("");
  const selectedImagePreviewUrl = ref("");
  const extractedPalette = ref<OklchColor[]>([]);

  const canGenerateFromImage = computed(
    () => !isExtractingPalette.value && extractedPalette.value.length > 0,
  );

  function revokePreviewUrl() {
    if (selectedImagePreviewUrl.value.startsWith("blob:")) {
      URL.revokeObjectURL(selectedImagePreviewUrl.value);
    }
  }

  function clearSelectedImage() {
    revokePreviewUrl();
    selectedImageName.value = "";
    selectedImagePreviewUrl.value = "";
    extractedPalette.value = [];
  }

  function resolveImageSource(source: Event): File | null {
    const target = source.target as HTMLInputElement | null;
    return target?.files?.[0] ?? null;
  }

  function buildThemeName(prefix: string): string {
    return `${prefix} (${selectedHarmony.value}, ${selectedBackgroundStyle.value})`;
  }

  function generateTheme() {
    isGeneratingFromColor.value = true;

    try {
      const theme = themeService.auto.generateFromHex(selectedColor.value, {
        harmony: selectedHarmony.value,
        backgroundStyle: selectedBackgroundStyle.value,
        name: buildThemeName("Color Theme"),
      });

      applyGeneratedTheme(theme);
    } catch (error) {
      console.error("Error generating theme:", error);
    } finally {
      isGeneratingFromColor.value = false;
    }
  }

  function generateRandomTheme() {
    isGeneratingFromColor.value = true;

    try {
      const { theme, hexColor } = themeService.auto.generateRandom({
        harmony: selectedHarmony.value,
        backgroundStyle: selectedBackgroundStyle.value,
        name: buildThemeName("Random Theme"),
      });

      selectedColor.value = hexColor;

      applyGeneratedTheme(theme);
    } catch (error) {
      console.error("Error generating random theme:", error);
    } finally {
      isGeneratingFromColor.value = false;
    }
  }

  async function handleImageSelected(source: Event) {
    clearSelectedImage();
    const file = resolveImageSource(source);
    selectedImageName.value = file?.name ?? "";

    if (!file) {
      return;
    }

    selectedImagePreviewUrl.value = URL.createObjectURL(file);

    isExtractingPalette.value = true;
    try {
      const palette = await themeService.auto.extractPaletteFromImage(file, 10);
      extractedPalette.value = palette;
    } catch (error) {
      console.error("Error extracting palette from image:", error);
    } finally {
      isExtractingPalette.value = false;
    }
  }

  onBeforeUnmount(() => {
    revokePreviewUrl();
  });

  function generateThemeFromImage() {
    if (!canGenerateFromImage.value) {
      return;
    }

    isGeneratingFromImage.value = true;
    try {
      const theme = themeService.auto.generateFromPalette(extractedPalette.value, {
        backgroundStyle: selectedBackgroundStyle.value,
        name: selectedImageName.value
          ? `Image Theme (${selectedImageName.value.length > 20 ? selectedImageName.value.slice(0, 20) + "…" : selectedImageName.value})`
          : "Image Theme",
        mode: imageThemeMode.value,
      });
      applyGeneratedTheme(theme);
    } catch (error) {
      console.error("Error generating theme from image:", error);
    } finally {
      isGeneratingFromImage.value = false;
    }
  }

  return {
    selectedColor,
    selectedHarmony,
    selectedBackgroundStyle,
    imageThemeMode,
    isGeneratingFromColor,
    isGeneratingFromImage,
    isExtractingPalette,
    selectedImageName,
    selectedImagePreviewUrl,
    extractedPalette,
    canGenerateFromImage,
    clearSelectedImage,
    generateTheme,
    generateRandomTheme,
    handleImageSelected,
    generateThemeFromImage,
  };
}
