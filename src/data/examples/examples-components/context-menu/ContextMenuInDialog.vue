<script setup lang="ts">
import { CopyIcon, ScissorsIcon, ClipboardPasteIcon, TrashIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
</script>

<template>
  <Dialog>
    <DialogTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Open Dialog </Button>
    </DialogTrigger>
    <DialogContent to="#examples-container" data-component-x-ray="DialogContent">
      <DialogHeader data-component-x-ray="DialogHeader">
        <DialogTitle data-component-x-ray="DialogTitle">Context Menu in Dialog</DialogTitle>
        <DialogDescription data-component-x-ray="DialogDescription">
          Right click on the area below to see the context menu.
        </DialogDescription>
      </DialogHeader>
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
              <CopyIcon />
              Copy
            </ContextMenuItem>
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem">
              <ScissorsIcon />
              Cut
            </ContextMenuItem>
            <ContextMenuItem data-component-x-ray-trigger="ContextMenuItem">
              <ClipboardPasteIcon :size="30" />
              Paste
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuSub data-component-x-ray="ContextMenuSub">
            <ContextMenuSubTrigger data-component-x-ray-trigger="ContextMenuSubTrigger">
              More Options
            </ContextMenuSubTrigger>
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
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
            <ContextMenuItem variant="destructive" data-component-x-ray-trigger="ContextMenuItem">
              <TrashIcon />
              Delete
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </DialogContent>
  </Dialog>
</template>
