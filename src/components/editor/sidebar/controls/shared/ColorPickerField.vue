<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { Input } from "@/components/ui/input";
import { colorToHexForInput } from "@/services/theme/themeColor.utils";

const props = defineProps<{
  label: string;
  themeKey?: string;
}>();

const inputId = computed(() => (props.themeKey ? `theme-color-${props.themeKey}` : undefined));

const model = defineModel<string>();
const swatchHex = ref("#000000");

watch(
  model,
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
  model.value = target.value;
}
</script>

<template>
  <div class="space-y-2" :data-theme-color-field="themeKey">
    <label :for="inputId" class="block text-xs">{{ label }}</label>
    <div class="flex items-center gap-1">
      <div
        class="relative h-7 w-7 shrink-0 overflow-hidden border hover:opacity-80"
        :style="{ backgroundColor: swatchHex }"
      >
        <input
          :value="swatchHex"
          @input="updateFromSwatch"
          class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          type="color"
        />
      </div>
      <Input
        :id="inputId"
        v-model="model"
        class="shadow-none h-7 text-[0.8em]! rounded-tl-none! rounded-bl-none! border-border focus:border-primary focus:outline-none"
      />
    </div>
  </div>
</template>
