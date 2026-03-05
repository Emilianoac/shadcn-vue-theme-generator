<script setup lang="ts">
import { ref, watch } from "vue";
import { Input } from "@/components/ui/input";
import { colorToHexForInput } from "@/services/theme/themeColor.utils";

defineProps<{
  label: string;
}>();

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
  <div class="space-y-2">
    <label class="block text-xs">{{ label }}</label>
    <div class="flex items-center">
      <div
        class="relative h-7 w-7 shrink-0 overflow-hidden border border-e-0 hover:opacity-80 rounded-tl-[2px] rounded-bl-[2px]"
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
        v-model="model"
        class="rounded-[2px] shadow-none h-7 text-[0.8em]! rounded-tl-none! rounded-bl-none! border-border"
      />
    </div>
  </div>
</template>
