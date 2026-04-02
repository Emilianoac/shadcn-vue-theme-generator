<script setup lang="ts">
import { FileIcon } from "lucide-vue-next";
import { computed } from "vue";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/shared/components/ui/item";
import { Progress } from "@/shared/components/ui/progress";

const files = computed(() => [
  {
    id: "1",
    name: "document.pdf",
    progress: 45,
    timeRemaining: "2m 30s",
  },
  {
    id: "2",
    name: "presentation.pptx",
    progress: 78,
    timeRemaining: "45s",
  },
  {
    id: "3",
    name: "spreadsheet.xlsx",
    progress: 12,
    timeRemaining: "5m 12s",
  },
  {
    id: "4",
    name: "image.jpg",
    progress: 100,
    timeRemaining: "Complete",
  },
]);
</script>

<template>
  <ItemGroup data-component-x-ray="ItemGroup">
    <Item v-for="file in files" :key="file.id" size="sm" class="px-0" data-component-x-ray="Item">
      <ItemMedia variant="icon" data-component-x-ray="ItemMedia">
        <FileIcon />
      </ItemMedia>
      <ItemContent class="inline-block truncate" data-component-x-ray="ItemContent">
        <ItemTitle class="inline" data-component-x-ray="ItemTitle">
          {{ file.name }}
        </ItemTitle>
      </ItemContent>
      <ItemContent data-component-x-ray="ItemContent">
        <Progress :model-value="file.progress" class="w-32" data-component-x-ray="Progress" />
      </ItemContent>
      <ItemActions class="w-16 justify-end" data-component-x-ray="ItemActions">
        <span class="text-sm text-muted-foreground">
          {{ file.timeRemaining }}
        </span>
      </ItemActions>
    </Item>
  </ItemGroup>
</template>
