<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { Shuffle } from "lucide-vue-next";
import { PaletteIcon } from "lucide-vue-next";
import type { ColorHarmony } from "@/shared/services/theme/auto/generator.interface";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/shared/components/ui/tooltip";
import { colorToHexForInput } from "@/shared/services/theme/themeColor.utils";

const selectedColor = defineModel<string>("selected-color", { required: true });
const harmonyModel = defineModel<ColorHarmony>("harmony", { required: true });
const swatchHex = ref("#000000");

interface Option<T> {
  value: T;
  label: string;
  description: string;
}

const props = withDefaults(
  defineProps<{
    isGenerating: boolean;
    hasBaseColor: boolean;
    harmonyOptions: Option<ColorHarmony>[];

    showTitle?: boolean;
  }>(),
  {
    showTitle: true,
  },
);

const emit = defineEmits<{
  generate: [];
  random: [];
  generateFromImage: [];
}>();

const selectedHarmonyOption = computed(() =>
  props.harmonyOptions.find((option: Option<ColorHarmony>) => option.value === harmonyModel.value),
);

watch(
  selectedColor,
  (value) => {
    const nextHex = colorToHexForInput(value ?? "");
    if (nextHex) {
      swatchHex.value = nextHex;
    }
  },
  { immediate: true },
);

function updateFromSwatch(event: Event) {
  const target = event.target as HTMLInputElement;
  swatchHex.value = target.value;
  selectedColor.value = target.value;
}
</script>

<template>
  <div class="space-y-2">
    <Label v-if="props.showTitle" class="text-sm font-semibold">
      <PaletteIcon class="inline-block h-4 w-4" />
      Generate from base color
    </Label>

    <div class="space-y-4">
      <div class="space-y-2">
        <Label class="text-xs">Base Color</Label>
        <div class="flex items-center gap-1">
          <div
            class="relative h-7 w-7 shrink-0 overflow-hidden border hover:opacity-80 rounded-sm"
            :style="{ backgroundColor: swatchHex }"
          >
            <input
              :value="swatchHex"
              @input="updateFromSwatch"
              type="color"
              class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            />
          </div>
          <Input v-model="selectedColor" class="h-7 text-[0.8em]!" placeholder="#3b82f6" />
        </div>
      </div>

      <div class="space-y-2">
        <Label class="text-xs">Color Harmony</Label>
        <Select v-model="harmonyModel">
          <SelectTrigger class="w-full" size="sm">
            {{ selectedHarmonyOption ? selectedHarmonyOption.label : "Select a harmony" }}
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="option in harmonyOptions" :key="option.value" :value="option.value">
              <div>
                <p>{{ option.label }}</p>
                <p class="text-xs text-muted-foreground">{{ option.description }}</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div class="flex gap-2">
        <Button
          @click="emit('generate')"
          :disabled="isGenerating || !hasBaseColor"
          class="flex-1"
          size="sm"
        >
          {{ isGenerating ? "Generating..." : "Generate Theme" }}
        </Button>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger class="w-max">
              <Button @click="emit('random')" :disabled="isGenerating" variant="outline" size="sm">
                <Shuffle class="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Generate a random theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </div>
</template>
