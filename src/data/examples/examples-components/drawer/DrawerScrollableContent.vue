<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
</script>

<template>
  <Drawer direction="right" data-component-x-ray="Drawer">
    <DrawerTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Scrollable Content </Button>
    </DrawerTrigger>
    <DrawerContent to="#examples-container" data-component-x-ray="DrawerContent">
      <DrawerHeader data-component-x-ray="DrawerHeader">
        <DrawerTitle data-component-x-ray="DrawerTitle">Move Goal</DrawerTitle>
        <DrawerDescription data-component-x-ray="DrawerDescription"
          >Set your daily activity goal.</DrawerDescription
        >
      </DrawerHeader>
      <div class="no-scrollbar overflow-y-auto px-4">
        <p
          v-for="index in 10"
          :key="index"
          class="style-lyra:mb-2 style-lyra:leading-relaxed mb-4 leading-normal"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
      <DrawerFooter data-component-x-ray="DrawerFooter">
        <Button data-component-x-ray-trigger="Button">Submit</Button>
        <DrawerClose :as-child="true">
          <Button data-component-x-ray-trigger="Button" variant="outline"> Cancel </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
