<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <div class="flex w-full flex-col gap-7">
    <div class="flex flex-col gap-3">
      <Skeleton class="h-4 w-20" data-component-x-ray="Skeleton" />
      <Skeleton class="h-10 w-full" data-component-x-ray="Skeleton" />
    </div>
    <div class="flex flex-col gap-3">
      <Skeleton class="h-4 w-24" data-component-x-ray="Skeleton" />
      <Skeleton class="h-10 w-full" data-component-x-ray="Skeleton" />
    </div>
    <Skeleton class="h-9 w-24" data-component-x-ray="Skeleton" />
  </div>
</template>
