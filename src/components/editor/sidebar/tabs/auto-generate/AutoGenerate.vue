<script setup lang="ts">
import { ref } from "vue";
import { ImageIcon, PaletteIcon, Settings2Icon } from "lucide-vue-next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AutoGenerateFromBaseColor from "./AutoGenerateFromBaseColor.vue";
import AutoGenerateOptions from "./AutoGenerateOptions.vue";
import AutoGenerateFromImage from "./from-image/AutoGenerateFromImage.vue";
import {
  backgroundStyleOptions,
  harmonyOptions,
  imageThemeModeOptions,
} from "./autoGenerate.constants";
import { useAutoGenerate } from "./useAutoGenerate";

const {
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
} = useAutoGenerate();

const openItems = ref<string[]>(["generation-options", "base-color"]);
</script>

<template>
  <div>
    <Accordion v-model="openItems" type="multiple">
      <AccordionItem
        value="generation-options"
        :unmount-on-hide="false"
        class="border-b overflow-hidden"
      >
        <AccordionTrigger
          class="p-4 py-3 text-xs font-semibold hover:bg-accent/30 cursor-pointer hover:no-underline rounded-none"
        >
          <span class="inline-flex items-center gap-2">
            <Settings2Icon class="h-4 w-4" />
            <span>General options</span>
          </span>
        </AccordionTrigger>
        <AccordionContent class="pt-2 pb-6 px-4">
          <AutoGenerateOptions
            v-model:harmony="selectedHarmony"
            v-model:background-style="selectedBackgroundStyle"
            :harmony-options="harmonyOptions"
            :background-style-options="backgroundStyleOptions"
            :show-title="false"
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="base-color" :unmount-on-hide="false" class="border-b overflow-hidden">
        <AccordionTrigger
          class="p-4 py-3 text-xs font-semibold hover:bg-accent/30 cursor-pointer hover:no-underline rounded-none"
        >
          <span class="inline-flex items-center gap-2">
            <PaletteIcon class="h-4 w-4" />
            <span>Generate from base color</span>
          </span>
        </AccordionTrigger>
        <AccordionContent class="pt-2 pb-6 px-4">
          <AutoGenerateFromBaseColor
            v-model:selected-color="selectedColor"
            v-model:harmony="selectedHarmony"
            :harmony-options="harmonyOptions"
            :is-generating="isGeneratingFromColor"
            :has-base-color="Boolean(selectedColor)"
            :show-title="false"
            @generate="generateTheme"
            @random="generateRandomTheme"
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="image" :unmount-on-hide="false" class="border-b overflow-hidden">
        <AccordionTrigger
          class="p-4 py-3 text-xs font-semibold hover:bg-accent/30 cursor-pointer hover:no-underline rounded-none"
        >
          <span class="inline-flex items-center gap-2">
            <ImageIcon class="h-4 w-4" />
            <span>Generate from image</span>
          </span>
        </AccordionTrigger>
        <AccordionContent class="pt-2 pb-6 px-4">
          <AutoGenerateFromImage
            :is-generating="isGeneratingFromImage"
            :selected-image-name="selectedImageName"
            :selected-image-preview-url="selectedImagePreviewUrl"
            :is-extracting-palette="isExtractingPalette"
            :extracted-palette="extractedPalette"
            :can-generate-from-image="canGenerateFromImage"
            :image-theme-mode="imageThemeMode"
            :image-theme-mode-options="imageThemeModeOptions"
            :show-title="false"
            @image-selected="handleImageSelected"
            @clear-image="clearSelectedImage"
            @update:image-theme-mode="imageThemeMode = $event"
            @generate-from-image="generateThemeFromImage"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
