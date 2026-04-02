<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/shared/components/ui/context-menu";
</script>

<template>
  <ContextMenu data-component-x-ray="ContextMenu">
    <ContextMenuTrigger
      class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm"
      data-component-x-ray="ContextMenuTrigger"
    >
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent data-component-x-ray="ContextMenuContent">
      <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
        <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem">
          Copy
          <ContextMenuShortcut data-component-x-ray-trigger="ContextMenuShortCut"
            >⌘C</ContextMenuShortcut
          >
        </ContextMenuItem>
        <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem">
          Cut
          <ContextMenuShortcut data-component-x-ray-trigger="ContextMenuShortCut"
            >⌘X</ContextMenuShortcut
          >
        </ContextMenuItem>
      </ContextMenuGroup>
      <ContextMenuSub data-component-x-ray="ContextMenuSub">
        <ContextMenuSubTrigger data-component-x-ray-trigger="ContextMenuSubTrigger"
          >More Tools</ContextMenuSubTrigger
        >
        <ContextMenuSubContent data-component-x-ray="ContextMenuSubContent">
          <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
              >Save Page...</ContextMenuItem
            >
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
              >Create Shortcut...</ContextMenuItem
            >
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
              >Name Window...</ContextMenuItem
            >
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem"
              >Developer Tools</ContextMenuItem
            >
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
            <ContextMenuItem variant="destructive" data-component-x-ray-trigger="ContextMenuItem">
              Delete
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuSubContent>
      </ContextMenuSub>
    </ContextMenuContent>
  </ContextMenu>
</template>
