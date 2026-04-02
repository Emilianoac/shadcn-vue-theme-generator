<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-vue-next";
import { Toggle } from "@/shared/components/ui/toggle";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Toggle aria-label="Toggle bold" :default-pressed="true" data-component-x-ray-trigger="Toggle">
      <BoldIcon />
    </Toggle>
    <Toggle aria-label="Toggle italic" data-component-x-ray-trigger="Toggle">
      <ItalicIcon />
    </Toggle>
    <Toggle aria-label="Toggle underline" data-component-x-ray-trigger="Toggle">
      <UnderlineIcon />
    </Toggle>
  </div>
</template>
