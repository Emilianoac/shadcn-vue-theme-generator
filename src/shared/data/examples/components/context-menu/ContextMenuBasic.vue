<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/shared/components/ui/context-menu";
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger
      class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm"
      data-component-x-ray="ContextMenuTrigger"
    >
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent data-component-x-ray="ContextMenuContent">
      <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
        <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"> Back </ContextMenuItem>
        <ContextMenuItem disabled> Forward </ContextMenuItem>
        <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem">Reload</ContextMenuItem>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenu>
</template>
