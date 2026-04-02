<script setup lang="ts">
import { RotateCcw } from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/shared/components/ui/tooltip";
import { useTheme } from "@/shared/composables/useTheme";

const { isCustomTheme, resetTheme } = useTheme();
</script>

<template>
  <TooltipProvider :disabled="!isCustomTheme">
    <Tooltip>
      <TooltipTrigger class="w-full">
        <Button :disabled="!isCustomTheme" variant="ghost" @click="resetTheme">
          <RotateCcw class="w-4 h-4" />
          Reset
        </Button>
      </TooltipTrigger>
      <TooltipContent>Reset theme to default</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
