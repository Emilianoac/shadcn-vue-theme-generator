<script setup lang="ts">
import { Badge } from "@/shared/components/ui/badge";
import { Spinner } from "@/shared/components/ui/spinner";
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <Badge data-component-x-ray="Badge">
      <Spinner data-icon="inline-start" data-component-x-ray="Spinner" />
      Badge
    </Badge>
    <Badge variant="secondary" data-component-x-ray="Badge">
      <Spinner data-icon="inline-start" data-component-x-ray="Spinner" />
      Badge
    </Badge>
    <Badge variant="destructive" data-component-x-ray="Badge">
      <Spinner data-icon="inline-start" data-component-x-ray="Spinner" />
      Badge
    </Badge>
    <Badge variant="outline" data-component-x-ray="Badge">
      <Spinner data-icon="inline-start" data-component-x-ray="Spinner" />
      Badge
    </Badge>
  </div>
</template>
