<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Progress } from "@/components/ui/progress";

const progress = ref(5);

onMounted(() => {
  const timer = setTimeout(() => {
    progress.value = 90;
  }, 500);

  return () => clearTimeout(timer);
});
</script>

<template>
  <div class="space-y-4">
    <Progress :model-value="0" data-component-x-ray="Progress" />
    <Progress :model-value="25" data-component-x-ray="Progress" />
    <Progress :model-value="50" data-component-x-ray="Progress" />
    <Progress :model-value="75" data-component-x-ray="Progress" />
    <Progress :model-value="100" data-component-x-ray="Progress" />
    <Progress :model-value="progress" data-component-x-ray="Progress" />
  </div>
</template>
