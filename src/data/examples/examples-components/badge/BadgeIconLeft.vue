<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Verified } from "lucide-vue-next";
</script>

<template>
  <div class="flex w-full flex-wrap gap-2">
    <Badge variant="default" data-component-x-ray="Badge"><Verified /> Default </Badge>
    <Badge variant="secondary" data-component-x-ray="Badge"><Verified /> Secondary </Badge>
    <Badge variant="destructive" data-component-x-ray="Badge"><Verified /> Destructive </Badge>
    <Badge variant="outline" data-component-x-ray="Badge"><Verified /> Outline </Badge>
  </div>
</template>
