<script setup lang="ts">
import { Badge } from "@/shared/components/ui/badge";
</script>

<template>
  <div class="flex w-full flex-wrap gap-2">
    <Badge variant="default" data-component-x-ray="Badge"> Default </Badge>
    <Badge variant="secondary" data-component-x-ray="Badge"> Secondary </Badge>
    <Badge variant="destructive" data-component-x-ray="Badge"> Destructive </Badge>
    <Badge variant="outline" data-component-x-ray="Badge"> Outline </Badge>
  </div>
</template>
