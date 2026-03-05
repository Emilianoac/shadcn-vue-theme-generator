<script setup lang="ts">
import { RotateCcw } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { useTheme } from "@/composables/useTheme";

const { isCustomTheme, resetTheme } = useTheme();
</script>

<template>
  <TooltipProvider :disabled="!isCustomTheme">
    <Tooltip>
      <TooltipTrigger class="w-full">
        <Button
          :disabled="!isCustomTheme"
          variant="ghost"
          size="sm"
          class="h-5 px-2"
          @click="resetTheme"
        >
          <RotateCcw class="w-4 h-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Reset theme to default</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
