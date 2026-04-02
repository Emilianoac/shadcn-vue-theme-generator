<script setup lang="ts">
import { Input } from "@/shared/components/ui/input";
</script>

<template>
  <Input
    type="text"
    placeholder="Error"
    :aria-invalid="true"
    data-component-x-ray-trigger="Input"
  />
</template>
