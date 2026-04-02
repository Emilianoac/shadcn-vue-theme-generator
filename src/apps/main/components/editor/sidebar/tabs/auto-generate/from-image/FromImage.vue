<script setup lang="ts">
import { computed } from "vue";
import { ImageIcon } from "lucide-vue-next";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/shared/components/ui/toggle-group";
import type { OklchColor, ImageThemeMode } from "@/shared/services/theme/auto/generator.interface";
import Dropzone from "./FromImageDropzone.vue";
import FromImageExamples from "./FromImageExamples.vue";

interface Option<T> {
  value: T;
  label: string;
  description: string;
}

const props = withDefaults(
  defineProps<{
    selectedImageName: string;
    selectedImagePreviewUrl: string;
    isExtractingPalette: boolean;
    extractedPalette: OklchColor[];
    isGenerating: boolean;
    canGenerateFromImage: boolean;
    imageThemeMode: ImageThemeMode;
    imageThemeModeOptions: Option<ImageThemeMode>[];
    showTitle?: boolean;
  }>(),
  {
    showTitle: true,
  },
);

const emit = defineEmits<{
  "imageSelected": [source: Event];
  "clearImage": [];
  "generateFromImage": [];
  "update:imageThemeMode": [value: ImageThemeMode];
}>();

const hasPalette = computed(() => props.extractedPalette.length > 0);
const selectedModeDescription = computed(
  () =>
    props.imageThemeModeOptions.find((option) => option.value === props.imageThemeMode)
      ?.description,
);
</script>

<template>
  <div class="space-y-2">
    <Label v-if="props.showTitle" class="text-sm font-semibold">
      <ImageIcon class="inline-block h-4 w-4" />
      Generate from image
    </Label>

    <!-- Mode selection -->
    <section class="space-y-2">
      <Label class="text-xs">Mode</Label>
      <ToggleGroup
        type="single"
        :model-value="imageThemeMode"
        class="w-full"
        @update:model-value="(v) => v && emit('update:imageThemeMode', v as ImageThemeMode)"
      >
        <ToggleGroupItem
          v-for="option in imageThemeModeOptions"
          :key="option.value"
          size="sm"
          :value="option.value"
          class="flex-1 text-xs h-auto p-2"
        >
          {{ option.label }}
        </ToggleGroupItem>
      </ToggleGroup>
      <p v-if="selectedModeDescription" class="text-xs text-muted-foreground">
        {{ selectedModeDescription }}
      </p>
    </section>

    <!-- Image selection -->
    <section class="space-y-2">
      <Label class="text-xs">Image Source</Label>
      <Dropzone
        :preview-url="selectedImagePreviewUrl"
        :image-name="selectedImageName"
        @image-selected="emit('imageSelected', $event)"
        @clear="emit('clearImage')"
      />
      <p v-if="selectedImageName" class="text-xs line-clamp-1" :title="selectedImageName">
        File: {{ selectedImageName }}
      </p>
      <p v-if="isExtractingPalette" class="text-muted-foreground text-xs">Extracting palette...</p>
    </section>

    <!-- Palette preview -->
    <section v-if="hasPalette" class="space-y-1 pt-1">
      <p class="text-[11px] text-muted-foreground">Extracted palette preview</p>
      <div class="flex items-center gap-1 flex-wrap">
        <div
          v-for="(color, index) in extractedPalette"
          :key="`palette-${index}`"
          class="h-4 w-4 rounded-sm border border-border"
          :style="{ backgroundColor: `oklch(${color.l} ${color.c} ${color.h})` }"
        />
      </div>
    </section>

    <!-- Controls -->
    <section>
      <Button
        :disabled="isGenerating || !canGenerateFromImage"
        variant="default"
        size="sm"
        class="w-full"
        @click="emit('generateFromImage')"
      >
        {{ isGenerating ? "Generating..." : "Generate Theme" }}
      </Button>
    </section>

    <!-- Examples -->
    <FromImageExamples @imageSelected="emit('imageSelected', $event)" />
  </div>
</template>
