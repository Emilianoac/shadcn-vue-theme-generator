<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

const sides = ["top", "right", "bottom", "left"] as const;
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <TooltipProvider v-for="side in sides" :key="side">
      <Tooltip data-component-x-ray="Tooltip">
        <TooltipTrigger :as-child="true">
          <Button variant="outline" class="w-fit capitalize" data-component-x-ray-trigger="Button">
            {{ side }}
          </Button>
        </TooltipTrigger>
        <TooltipContent :side="side" data-component-x-ray="TooltipContent">
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
