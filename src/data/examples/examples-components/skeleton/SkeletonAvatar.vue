<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <div class="flex w-full items-center gap-4">
    <Skeleton class="size-10 shrink-0 rounded-full" data-component-x-ray="Skeleton" />
    <div class="grid gap-2">
      <Skeleton class="h-4 w-37.5" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-25" data-component-x-ray="Skeleton" />
    </div>
  </div>
</template>
