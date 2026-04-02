<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shared/components/ui/hover-card";

const HOVER_CARD_SIDES = ["top", "right", "bottom", "left"] as const;
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <HoverCard
      v-for="side in HOVER_CARD_SIDES"
      :key="side"
      :open-delay="100"
      :close-delay="100"
      data-component-x-ray="HoverCard"
    >
      <HoverCardTrigger :as-child="true">
        <Button variant="outline" class="capitalize" data-component-x-ray-trigger="Button">
          {{ side }}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent :side="side" class="w-64" data-component-x-ray="HoverCardContent">
        <div class="flex flex-col gap-1">
          <h4 class="font-semibold">Hover Card</h4>
          <p class="text-sm">This hover card appears on the {{ side }} side of the trigger.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
</template>
