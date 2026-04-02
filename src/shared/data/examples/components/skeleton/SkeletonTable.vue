<script setup lang="ts">
import { Skeleton } from "@/shared/components/ui/skeleton";
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <div class="flex gap-4">
      <Skeleton class="h-4 flex-1" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-24" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-20" data-component-x-ray="Skeleton" />
    </div>
    <div class="flex gap-4">
      <Skeleton class="h-4 flex-1" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-24" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-20" data-component-x-ray="Skeleton" />
    </div>
    <div class="flex gap-4">
      <Skeleton class="h-4 flex-1" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-24" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-20" data-component-x-ray="Skeleton" />
    </div>
  </div>
</template>
