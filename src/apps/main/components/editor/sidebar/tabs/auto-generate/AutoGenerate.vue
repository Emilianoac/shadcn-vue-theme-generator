<script setup lang="ts">
import { ImageIcon, PipetteIcon, Settings2Icon } from "lucide-vue-next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import GeneralOptions from "./GeneralOptions.vue";
import FromBaseColor from "./FromBaseColor.vue";
import FromImage from "./from-image/FromImage.vue";
import { backgroundStyleOptions, harmonyOptions, imageThemeModeOptions } from "./constants";
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
</script>

<template>
  <div>
    <Accordion type="single" default-value="generation-options" collapsible class="border-b">
      <AccordionItem value="generation-options" :unmount-on-hide="false" class="overflow-hidden">
        <AccordionTrigger
          class="p-4 py-3 text-xs font-semibold hover:bg-accent/30 cursor-pointer hover:no-underline rounded-none"
        >
          <span class="inline-flex items-center gap-2">
            <Settings2Icon class="h-4 w-4" />
            <span>General options</span>
          </span>
        </AccordionTrigger>
        <AccordionContent class="pt-2 pb-6 px-4">
          <GeneralOptions
            v-model:background-style="selectedBackgroundStyle"
            :background-style-options="backgroundStyleOptions"
            :show-title="false"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <Accordion type="single" default-value="base-color" collapsible>
      <AccordionItem value="base-color" :unmount-on-hide="false" class="border-b overflow-hidden">
        <AccordionTrigger
          class="p-4 py-3 text-xs font-semibold hover:bg-accent/30 cursor-pointer hover:no-underline rounded-none"
        >
          <span class="inline-flex items-center gap-2">
            <PipetteIcon class="h-4 w-4" />
            <span>From base color</span>
          </span>
        </AccordionTrigger>
        <AccordionContent class="pt-2 pb-6 px-4">
          <FromBaseColor
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
            <span>From image</span>
          </span>
        </AccordionTrigger>
        <AccordionContent class="pt-2 pb-6 px-4">
          <FromImage
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
