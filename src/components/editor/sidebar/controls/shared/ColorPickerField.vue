<script setup lang="ts">
import { Input } from "@/components/ui/input";

defineProps<{
  label: string;
  modelValue: string;
}>();

const model = defineModel<string>();
</script>

<template>
  <div class="space-y-2">
    <label class="block text-xs">{{ label }}</label>
    <div class="flex items-center">
      <div
        class="relative h-7 w-7 shrink-0 overflow-hidden border border-e-0 hover:opacity-80 rounded-tl-[2px] rounded-bl-[2px]"
        :style="{ backgroundColor: modelValue }"
      >
        <input
          v-model="model"
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
