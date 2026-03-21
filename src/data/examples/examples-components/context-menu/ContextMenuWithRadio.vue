<script setup lang="ts">
import { ref } from "vue";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const user = ref("pedro");
const theme = ref("light");
</script>

<template>
  <ContextMenu data-component-x-ray="ContextMenuWithRadio">
    <ContextMenuTrigger
      class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm"
    >
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent data-component-x-ray="ContextMenuContent">
      <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
        <ContextMenuLabel data-component-x-ray="ContextMenuLabel">People</ContextMenuLabel>
        <ContextMenuRadioGroup v-model="user" data-component-x-ray="ContextMenuRadioGroup">
          <ContextMenuRadioItem value="pedro" data-component-x-ray-trigger="ContextMenuItem">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm" data-component-x-ray-trigger="ContextMenuItem">
            Colm Tuite
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuGroup>
      <ContextMenuSeparator />
      <ContextMenuGroup data-component-x-ray="ContextMenuGroup">
        <ContextMenuLabel data-component-x-ray="ContextMenuLabel">Theme</ContextMenuLabel>
        <ContextMenuRadioGroup v-model="theme" data-component-x-ray="ContextMenuRadioGroup">
          <ContextMenuRadioItem value="light" data-component-x-ray-trigger="ContextMenuItem">
            Light
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark" data-component-x-ray-trigger="ContextMenuItem">
            Dark
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="system" data-component-x-ray-trigger="ContextMenuItem">
            System
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenu>
</template>
