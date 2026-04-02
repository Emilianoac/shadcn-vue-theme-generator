<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/shared/components/ui/tooltip";
</script>

<template>
  <TooltipProvider>
    <Tooltip data-component-x-ray="Tooltip">
      <TooltipTrigger :as-child="true">
        <Button variant="outline" class="w-fit" data-component-x-ray-trigger="Button">
          Show Tooltip
        </Button>
      </TooltipTrigger>
      <TooltipContent data-component-x-ray="TooltipContent">
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
