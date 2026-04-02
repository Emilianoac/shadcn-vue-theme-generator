<script setup lang="ts">
import { ref } from "vue";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/shared/components/ui/menubar";

const user = ref("benoit");
const theme = ref("system");
</script>

<template>
  <Menubar data-component-x-ray="Menubar">
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">Profiles</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarRadioGroup v-model="user" data-component-x-ray="MenubarRadioGroup">
          <MenubarRadioItem value="andy" data-component-x-ray-trigger="MenubarRadioItem">
            Andy
          </MenubarRadioItem>
          <MenubarRadioItem value="benoit" data-component-x-ray-trigger="MenubarRadioItem">
            Benoit
          </MenubarRadioItem>
          <MenubarRadioItem value="luis" data-component-x-ray-trigger="MenubarRadioItem">
            Luis
          </MenubarRadioItem>
        </MenubarRadioGroup>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem inset data-component-x-ray-trigger="MenubarRadioItem"> Edit... </MenubarItem>
          <MenubarItem inset data-component-x-ray-trigger="MenubarRadioItem">
            Add Profile...
          </MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">Theme</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarRadioGroup v-model="theme" data-component-x-ray="MenubarRadioGroup">
          <MenubarRadioItem value="light" data-component-x-ray-trigger="MenubarRadioItem">
            Light
          </MenubarRadioItem>
          <MenubarRadioItem value="dark" data-component-x-ray-trigger="MenubarRadioItem">
            Dark
          </MenubarRadioItem>
          <MenubarRadioItem value="system" data-component-x-ray-trigger="MenubarRadioItem">
            System
          </MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
