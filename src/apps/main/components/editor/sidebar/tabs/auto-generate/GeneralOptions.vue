<script setup lang="ts">
import { computed } from "vue";
import { Settings2Icon } from "lucide-vue-next";
import type { HarmonyOption } from "./constants";
import type {
  BackgroundStyle,
  ColorHarmony,
} from "@/shared/services/theme/auto/generator.interface";
import { Label } from "@/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectSeparator,
  SelectValue,
} from "@/shared/components/ui/select";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/shared/components/ui/item";

interface Option<T> {
  value: T;
  label: string;
  description: string;
}

const props = withDefaults(
  defineProps<{
    backgroundStyleOptions: Option<BackgroundStyle>[];
    harmonyOptions: HarmonyOption<ColorHarmony>[];

    showTitle?: boolean;
  }>(),
  {
    showTitle: true,
  },
);

const backgroundStyleModel = defineModel<BackgroundStyle>("backgroundStyle", { required: true });
const harmonyModel = defineModel<ColorHarmony>("harmony", { required: true });

const selectedBackgroundOption = computed(() =>
  props.backgroundStyleOptions.find(
    (option: Option<BackgroundStyle>) => option.value === backgroundStyleModel.value,
  ),
);

const selectedHarmonyOption = computed(() =>
  props.harmonyOptions.find(
    (option: HarmonyOption<ColorHarmony>) => option.value === harmonyModel.value,
  ),
);
</script>

<template>
  <div class="space-y-2">
    <Label v-if="props.showTitle" class="text-sm font-semibold">
      <Settings2Icon class="inline-block h-4 w-4" />
      General Options
    </Label>
    <div class="space-y-4">
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

      <div class="space-y-2">
        <Label class="text-xs">Background Style</Label>
        <Select v-model="backgroundStyleModel">
          <SelectTrigger class="w-full" size="sm">
            {{
              selectedBackgroundOption
                ? selectedBackgroundOption.label
                : "Select a background style"
            }}
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="option in backgroundStyleOptions"
              :key="option.value"
              :value="option.value"
            >
              <div>
                <p>{{ option.label }}</p>
                <p class="text-xs text-muted-foreground">{{ option.description }}</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
</template>
