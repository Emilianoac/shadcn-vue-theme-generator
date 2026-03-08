<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <div class="flex w-full flex-wrap gap-2">
    <Badge variant="default" data-component-x-ray="Badge">Default <ArrowRight /></Badge>
    <Badge variant="secondary" data-component-x-ray="Badge">Secondary <ArrowRight /></Badge>
    <Badge variant="destructive" data-component-x-ray="Badge">Destructive <ArrowRight /></Badge>
    <Badge variant="outline" data-component-x-ray="Badge">Outline <ArrowRight /></Badge>
  </div>
</template>
