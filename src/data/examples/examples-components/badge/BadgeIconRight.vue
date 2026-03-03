<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <div class="flex w-full flex-wrap gap-2">
    <Badge variant="default">Default <ArrowRight /></Badge>
    <Badge variant="secondary">Secondary <ArrowRight /></Badge>
    <Badge variant="destructive">Destructive <ArrowRight /> </Badge>
    <Badge variant="outline">Outline <ArrowRight /></Badge>
  </div>
</template>
