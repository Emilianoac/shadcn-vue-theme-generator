<script setup lang="ts">
import { ScanEye } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { useComponentXRay } from "@/composables/useComponentXRay";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";

const { isActive, toggle } = useComponentXRay();
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button :variant="isActive ? 'default' : 'ghost'" @click="toggle">
          <ScanEye class="w-4 h-4" />
          X-Ray
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" class="max-w-87.5">
        <p>{{ isActive ? "X-Ray is active" : "Activate X-Ray to inspect components" }}</p>
        <Separator class="my-2" v-if="isActive" />
        <div v-if="isActive" class="space-y-3">
          <p><strong>Controls</strong></p>
          <ul class="text-xs space-y-3">
            <li class="space-y-1">
              <KbdGroup>
                <Kbd>Click</Kbd>
              </KbdGroup>
              <p>Inspect Component</p>
            </li>
            <li class="space-y-1">
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <span>+</span>
                <Kbd>Click</Kbd>
              </KbdGroup>
              <p>Inspect trigger components without activating their actions</p>
            </li>
          </ul>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
