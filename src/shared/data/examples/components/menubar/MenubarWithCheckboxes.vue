<script setup lang="ts">
import { reactive } from "vue";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/shared/components/ui/menubar";

const view = reactive({
  alwaysShowBookmarksBar: false,
  alwaysShowFullUrls: true,
});

const format = reactive({
  strikethrough: false,
  code: false,
  superscript: true,
});
</script>

<template>
  <Menubar data-component-x-ray="Menubar">
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenuBarTrigger">View</MenubarTrigger>
      <MenubarContent class="w-64" data-component-x-ray="MenubarContent">
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarCheckboxItem
            v-model="view.alwaysShowBookmarksBar"
            data-component-x-ray-trigger="MenubarCheckboxItem"
          >
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            v-model="view.alwaysShowFullUrls"
            data-component-x-ray-trigger="MenubarCheckboxItem"
          >
            Always Show Full URLs
          </MenubarCheckboxItem>
        </MenubarGroup>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem :inset="true" data-component-x-ray-trigger="MenubarItem">
            Reload
            <MenubarShortcut data-component-x-ray-trigger="MenubarShorcut">⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem :disabled="true" :inset="true" data-component-x-ray-trigger="MenubarItem">
            Force Reload
            <MenubarShortcut data-component-x-ray-trigger="MenubarShorcut">⇧⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">Format</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarCheckboxItem
          v-model="format.strikethrough"
          data-component-x-ray-trigger="MenubarItem"
        >
          Strikethrough
        </MenubarCheckboxItem>
        <MenubarCheckboxItem v-model="format.code" data-component-x-ray-trigger="MenubarItem">
          Code
        </MenubarCheckboxItem>
        <MenubarCheckboxItem
          v-model="format.superscript"
          data-component-x-ray-trigger="MenubarItem"
        >
          Superscript
        </MenubarCheckboxItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
