<script setup lang="ts">
import { ref } from "vue";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const value = ref([0.3, 0.7]);
</script>

<template>
  <div class="grid w-full gap-3">
    <div class="flex items-center justify-between gap-2">
      <Label html-for="slider-demo-temperature" data-component-x-ray="Label">Temperature</Label>
      <span class="text-muted-foreground text-sm">
        {{ value.join(", ") }}
      </span>
    </div>
    <Slider
      id="slider-demo-temperature"
      v-model="value"
      :min="0"
      :max="1"
      :step="0.1"
      data-component-x-ray-trigger="Slider"
    />
  </div>
</template>
