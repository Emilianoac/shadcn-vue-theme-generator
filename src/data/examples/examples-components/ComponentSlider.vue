<script setup lang="ts">
import { Slider } from "@/components/ui/slider";
</script>

<template>
  <Slider :default-value="[33]" :max="100" :step="1" class="max-w-100 mx-auto" />
</template>
