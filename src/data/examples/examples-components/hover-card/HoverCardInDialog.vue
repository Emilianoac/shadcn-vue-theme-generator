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
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
</script>

<template>
  <Dialog data-component-x-ray="Dialog">
    <DialogTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Open Dialog </Button>
    </DialogTrigger>
    <DialogContent data-component-x-ray="DialogContent">
      <DialogHeader data-component-x-ray="DialogHeader">
        <DialogTitle data-component-x-ray="DialogTitle">Hover Card Example</DialogTitle>
        <DialogDescription data-component-x-ray="DialogDescription">
          Hover over the button below to see the hover card.
        </DialogDescription>
      </DialogHeader>
      <HoverCard :open-delay="100" :close-delay="100" data-component-x-ray="HoverCard">
        <HoverCardTrigger :as-child="true">
          <Button variant="outline" class="w-fit" data-component-x-ray-trigger="Button">
            Hover me
          </Button>
        </HoverCardTrigger>
        <HoverCardContent class="w-64" data-component-x-ray="HoverCardContent">
          <div class="flex flex-col gap-1">
            <h4 class="font-medium">Hover Card</h4>
            <p class="text-sm">
              This hover card appears inside a dialog. Hover over the button to see it.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </DialogContent>
  </Dialog>
</template>
