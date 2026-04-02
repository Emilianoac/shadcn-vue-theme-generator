<script setup lang="ts">
import { Skeleton } from "@/shared/components/ui/skeleton";
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <Skeleton class="h-4 w-full" data-component-x-ray="Skeleton" />
    <Skeleton class="h-4 w-full" data-component-x-ray="Skeleton" />
    <Skeleton class="h-4 w-3/4" data-component-x-ray="Skeleton" />
  </div>
</template>
