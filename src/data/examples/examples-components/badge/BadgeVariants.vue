<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
</script>

<template>
  <div class="flex w-full flex-wrap gap-2">
    <Badge variant="default">Default</Badge>
    <Badge variant="secondary"> Secondary </Badge>
    <Badge variant="destructive"> Destructive </Badge>
    <Badge variant="outline"> Outline </Badge>
  </div>
</template>
