<script setup lang="ts">
import { BoldIcon, ItalicIcon } from "lucide-vue-next";
import { Toggle } from "@/shared/components/ui/toggle";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Toggle variant="outline" aria-label="Toggle italic" data-component-x-ray-trigger="Toggle">
      <ItalicIcon />
      Italic
    </Toggle>
    <Toggle variant="outline" aria-label="Toggle bold" data-component-x-ray-trigger="Toggle">
      <BoldIcon />
      Bold
    </Toggle>
  </div>
</template>
