<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-vue-next";
import { ToggleGroup, ToggleGroupItem } from "@/shared/components/ui/toggle-group";
</script>

<template>
  <ToggleGroup type="multiple" :spacing="1" data-component-x-ray="ToggleGroup">
    <ToggleGroupItem
      value="bold"
      aria-label="Toggle bold"
      data-component-x-ray-trigger="ToggleGroupItem"
    >
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="italic"
      aria-label="Toggle italic"
      data-component-x-ray-trigger="ToggleGroupItem"
    >
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="underline"
      aria-label="Toggle underline"
      data-component-x-ray-trigger="ToggleGroupItem"
    >
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
