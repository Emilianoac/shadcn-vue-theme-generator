<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <!-- Top -->
    <Sheet data-component-x-ray="Sheet">
      <SheetTrigger :as-child="true">
        <Button variant="outline" class="capitalize" data-component-x-ray-trigger="Button">
          Top
        </Button>
      </SheetTrigger>
      <SheetContent side="top" class="max-h-[60vh]" data-component-x-ray="SheetContent">
        <SheetHeader data-component-x-ray="SheetHeader">
          <SheetTitle data-component-x-ray="SheetTitle">Edit profile</SheetTitle>
          <SheetDescription data-component-x-ray="SheetDescription">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div class="px-4 overflow-y-auto">
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <SheetFooter data-component-x-ray="SheetFooter">
          <Button type="submit" data-component-x-ray-trigger="Button"> Save changes </Button>
          <SheetClose :as-child="true">
            <Button variant="outline" data-component-x-ray-trigger="Button"> Cancel </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    <!-- Right -->
    <Sheet data-component-x-ray="Sheet">
      <SheetTrigger :as-child="true">
        <Button variant="outline" class="capitalize" data-component-x-ray-trigger="Button">
          Right
        </Button>
      </SheetTrigger>
      <SheetContent side="right" data-component-x-ray="SheetContent">
        <SheetHeader data-component-x-ray="SheetHeader">
          <SheetTitle data-component-x-ray="SheetTitle">Edit profile</SheetTitle>
          <SheetDescription data-component-x-ray="SheetDescription">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div class="px-4 overflow-y-auto">
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <SheetFooter data-component-x-ray="SheetFooter">
          <Button type="submit" data-component-x-ray-trigger="Button"> Save changes </Button>
          <SheetClose :as-child="true">
            <Button variant="outline" data-component-x-ray-trigger="Button"> Cancel </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    <!-- Bottom -->
    <Sheet data-component-x-ray="Sheet">
      <SheetTrigger :as-child="true">
        <Button variant="outline" class="capitalize" data-component-x-ray-trigger="Button">
          Bottom
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" class="max-h-[60vh]" data-component-x-ray="SheetContent">
        <SheetHeader data-component-x-ray="SheetHeader">
          <SheetTitle data-component-x-ray-trigger="SheetTitle">Edit profile</SheetTitle>
          <SheetDescription data-component-x-ray-trigger="SheetDescription">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div class="px-4 overflow-y-auto">
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <SheetFooter data-component-x-ray="SheetFooter">
          <Button type="submit" data-component-x-ray-trigger="Button"> Save changes </Button>
          <SheetClose :as-child="true">
            <Button variant="outline" data-component-x-ray-trigger="Button"> Cancel </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    <!-- Left -->
    <Sheet data-component-x-ray="Sheet">
      <SheetTrigger :as-child="true">
        <Button variant="outline" class="capitalize" data-component-x-ray-trigger="Button">
          Left
        </Button>
      </SheetTrigger>
      <SheetContent side="left" data-component-x-ray="SheetContent">
        <SheetHeader data-component-x-ray="SheetHeader">
          <SheetTitle data-component-x-ray="SheetTitle">Edit profile</SheetTitle>
          <SheetDescription data-component-x-ray="SheetDescription">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div class="px-4 overflow-y-auto">
          <p v-for="index in 10" :key="index" class="mb-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <SheetFooter data-component-x-ray="SheetFooter">
          <Button type="submit" data-component-x-ray-trigger="Button"> Save changes </Button>
          <SheetClose :as-child="true">
            <Button variant="outline" data-component-x-ray-trigger="Button"> Cancel </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
</template>
