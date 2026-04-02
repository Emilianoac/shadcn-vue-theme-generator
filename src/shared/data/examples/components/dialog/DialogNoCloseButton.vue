<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
</script>

<template>
  <Dialog data-component-x-ray="Dialog">
    <DialogTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> No Close Button </Button>
    </DialogTrigger>
    <DialogContent :show-close-button="false" data-component-x-ray="DialogContent">
      <DialogHeader data-component-x-ray="DialogHeader">
        <DialogTitle data-component-x-ray="DialogTitle">No Close Button</DialogTitle>
        <DialogDescription data-component-x-ray="DialogDescription">
          This dialog doesn't have a close button in the top-right corner.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter data-component-x-ray="DialogFooter">
        <DialogClose :as-child="true">
          <Button variant="outline" data-component-x-ray-trigger="Button"> Close </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
