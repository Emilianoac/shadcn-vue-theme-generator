<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-vue-next";
</script>

<template>
  <div class="flex w-full flex-wrap gap-2">
    <Badge variant="default">Default <Loader2 class="animate-spin" /></Badge>
    <Badge variant="secondary">Secondary <Loader2 class="animate-spin" /></Badge>
    <Badge variant="destructive">Destructive <Loader2 class="animate-spin" /></Badge>
    <Badge variant="outline">Outline <Loader2 class="animate-spin" /></Badge>
  </div>
</template>
