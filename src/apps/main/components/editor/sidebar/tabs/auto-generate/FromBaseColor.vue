<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { ShuffleIcon, PaletteIcon } from "lucide-vue-next";
import type { ColorHarmony } from "@/shared/services/theme/auto/generator.interface";
import type { HarmonyOption } from "./constants";
import { colorToHexForInput } from "@/shared/services/theme/themeColor.utils";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/shared/components/ui/item";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectSeparator,
  SelectValue,
} from "@/shared/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/shared/components/ui/tooltip";

const selectedColor = defineModel<string>("selected-color", { required: true });
const harmonyModel = defineModel<ColorHarmony>("harmony", { required: true });
const swatchHex = ref("#000000");

const props = withDefaults(
  defineProps<{
    isGenerating: boolean;
    hasBaseColor: boolean;
    harmonyOptions: HarmonyOption<ColorHarmony>[];

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
  props.harmonyOptions.find(
    (option: HarmonyOption<ColorHarmony>) => option.value === harmonyModel.value,
  ),
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
            <SelectValue placeholder="Select a harmony">
              <Item v-if="selectedHarmonyOption" size="sm" class="w-full p-0">
                <ItemContent class="gap-0">
                  <ItemTitle>{{ selectedHarmonyOption.label }}</ItemTitle>
                </ItemContent>
              </Item>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <template v-for="option in harmonyOptions" :key="option.value">
              <SelectItem :value="option.value">
                <Item size="sm" class="w-full p-0">
                  <ItemContent class="gap-1">
                    <div>
                      <ItemTitle class="text-xs font-semibold">{{ option.label }}</ItemTitle>
                      <ItemDescription class="text-xs">
                        {{ option.description }}
                      </ItemDescription>
                    </div>
                    <div class="flex gap-1">
                      <div
                        v-for="color in option.example"
                        :key="color"
                        class="h-2.5 w-2.5 rounded-xs"
                        :style="{ backgroundColor: color }"
                      ></div>
                    </div>
                  </ItemContent>
                </Item>
              </SelectItem>
              <SelectSeparator />
            </template>
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
                <ShuffleIcon class="h-4 w-4" />
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
