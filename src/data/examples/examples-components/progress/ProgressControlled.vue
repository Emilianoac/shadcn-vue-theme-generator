<script setup lang="ts">
import { ref } from "vue";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

const value = ref([50]);
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <Progress :model-value="value[0]" class="w-full" data-component-x-ray="Progress" />
    <Slider v-model="value" :min="0" :max="100" :step="1" data-component-x-ray-trigger="Slider" />
  </div>
</template>
