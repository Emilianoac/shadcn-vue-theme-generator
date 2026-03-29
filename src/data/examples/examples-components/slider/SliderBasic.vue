<script setup lang="ts">
import { Slider } from "@/components/ui/slider";
</script>

<template>
  <Slider :default-value="[50]" :max="100" :step="1" data-component-x-ray-trigger="Slider" />
</template>
