<script setup lang="ts">
import type { BackgroundStyle } from "@/shared/services/theme/auto/generator.interface";
import { Settings2Icon } from "lucide-vue-next";
import { Label } from "@/shared/components/ui/label";
import { computed } from "vue";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";

interface Option<T> {
  value: T;
  label: string;
  description: string;
}

const props = withDefaults(
  defineProps<{
    backgroundStyleOptions: Option<BackgroundStyle>[];
    showTitle?: boolean;
  }>(),
  {
    showTitle: true,
  },
);

const backgroundStyleModel = defineModel<BackgroundStyle>("backgroundStyle", { required: true });

const selectedBackgroundOption = computed(() =>
  props.backgroundStyleOptions.find(
    (option: Option<BackgroundStyle>) => option.value === backgroundStyleModel.value,
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
