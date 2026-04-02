<script setup lang="ts">
import { Slider } from "@/shared/components/ui/slider";
</script>

<template>
  <Slider :default-value="[25, 50]" :max="100" :step="5" data-component-x-ray-trigger="Slider" />
</template>
