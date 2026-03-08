<script setup lang="ts">
import type { MappedColorClass } from "@/services/componentXRay/componentXRay.interface";
import { PaletteIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

defineProps<{
  mapped: MappedColorClass;
}>();

const emit = defineEmits<{
  navigate: [themeKey: string];
}>();
</script>

<template>
  <div class="flex items-center justify-between gap-4 bg-muted/50 px-4 py-3 rounded-lg">
    <div class="flex-1 min-w-0">
      <p class="font-medium text-sm">
        {{ mapped.label }}
      </p>

      <p>
        <code class="text-xs text-muted-foreground font-mono select-text break-all">
          {{ mapped.className }}
        </code>
      </p>
    </div>
    <div class="shrink-0 flex items-center gap-2">
      <Button
        size="sm"
        variant="default"
        class="cursor-pointer"
        @click="emit('navigate', mapped.themeKey)"
      >
        <PaletteIcon />
        Edit color
      </Button>
    </div>
  </div>
</template>
