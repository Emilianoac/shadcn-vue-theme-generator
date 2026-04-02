<script setup lang="ts">
import { Toggle } from "@/shared/components/ui/toggle";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Toggle
      variant="outline"
      aria-label="Toggle small"
      size="sm"
      data-component-x-ray-trigger="Toggle"
    >
      Small
    </Toggle>
    <Toggle
      variant="outline"
      aria-label="Toggle default"
      size="default"
      data-component-x-ray-trigger="Toggle"
    >
      Default
    </Toggle>
    <Toggle
      variant="outline"
      aria-label="Toggle large"
      size="lg"
      data-component-x-ray-trigger="Toggle"
    >
      Large
    </Toggle>
  </div>
</template>
