<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
</script>

<template>
  <Menubar data-component-x-ray="Menubar">
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">File</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarSub data-component-x-ray="MenubarSub">
          <MenubarSubTrigger data-component-x-ray-trigger="MenubarTrigger">Share</MenubarSubTrigger>
          <MenubarSubContent data-component-x-ray="MenubarSubContent">
            <MenubarGroup data-component-x-ray="MenubarGroup">
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Email link</MenubarItem>
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Messages</MenubarItem>
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Notes</MenubarItem>
            </MenubarGroup>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem data-component-x-ray-trigger="MenubarItem">
            Print...
            <MenubarShortcut data-component-x-ray-trigger="MenubarShortcut">⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">Edit</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem data-component-x-ray-trigger="MenubarItem">
            Undo
            <MenubarShortcut data-component-x-ray-trigger="MenubarShortcut">⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem data-component-x-ray-trigger="MenubarItem">
            Redo
            <MenubarShortcut data-component-x-ray-trigger="MenubarShortcut">⇧⌘Z</MenubarShortcut>
          </MenubarItem>
        </MenubarGroup>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarSub data-component-x-ray="MenubarSub">
          <MenubarSubTrigger data-component-x-ray-trigger="MenubarTrigger">Find</MenubarSubTrigger>
          <MenubarSubContent data-component-x-ray="MenubarSubContent">
            <MenubarGroup data-component-x-ray="MenubarGroup">
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Find...</MenubarItem>
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Find Next</MenubarItem>
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Find Previous</MenubarItem>
            </MenubarGroup>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem data-component-x-ray-trigger="MenubarItem">Cut</MenubarItem>
          <MenubarItem data-component-x-ray-trigger="MenubarItem">Copy</MenubarItem>
          <MenubarItem data-component-x-ray-trigger="MenubarItem">Paste</MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
