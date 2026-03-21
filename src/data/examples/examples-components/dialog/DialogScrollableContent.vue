<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
</script>

<template>
  <Dialog data-component-x-ray="Dialog">
    <DialogTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Scrollable Content </Button>
    </DialogTrigger>
    <DialogContent to="#examples-container" data-component-x-ray="DialogContent">
      <DialogHeader data-component-x-ray="DialogHeader">
        <DialogTitle data-component-x-ray="DialogTitle">Scrollable Content</DialogTitle>
        <DialogDescription data-component-x-ray="DialogDescription">
          This dialog has a scrollable area in the content.
        </DialogDescription>
      </DialogHeader>
      <ScrollArea class="h-[40vh] pr-4" data-component-x-ray="ScrollArea">
        <p v-for="index in 10" :key="index" class="mb-4 last-of-type:mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </ScrollArea>
    </DialogContent>
  </Dialog>
</template>
