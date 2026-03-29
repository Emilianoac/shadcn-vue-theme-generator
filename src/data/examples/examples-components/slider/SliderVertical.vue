<script setup lang="ts">
import { Slider } from "@/components/ui/slider";
</script>

<template>
  <div class="flex items-center gap-6">
    <Slider
      :default-value="[50]"
      :max="100"
      :step="1"
      orientation="vertical"
      class="h-40"
      data-component-x-ray-trigger="Slider"
    />
    <Slider
      :default-value="[25]"
      :max="100"
      :step="1"
      orientation="vertical"
      class="h-40"
      data-component-x-ray-trigger="Slider"
    />
  </div>
</template>
