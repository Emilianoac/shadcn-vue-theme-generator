<script setup lang="ts">
import { Spinner } from "@/components/ui/spinner";
</script>

<template>
  <div class="flex items-center gap-6">
    <Spinner data-component-x-ray="Spinner" />
    <Spinner class="size-6" data-component-x-ray="Spinner" />
  </div>
</template>
