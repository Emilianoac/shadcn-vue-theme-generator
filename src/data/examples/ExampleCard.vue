<script lang="ts" setup>
import { useClipboard } from "@vueuse/core";
import { Copy, Check } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const props = defineProps<{
  rawComponent: string;
}>();

const { copy, copied } = useClipboard({
  source: props.rawComponent,
});
</script>

<template>
  <div class="space-y-2 h-full flex flex-col">
    <div class="flex justify-between items-center">
      <span class="block text-sm text-muted-foreground">
        <slot name="title" />
      </span>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button @click="copy()" variant="ghost" size="icon-sm">
              <Copy v-if="!copied" />
              <Check v-else />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy to clipboard</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
    <div class="border border-dashed p-6 flex-1">
      <slot name="example" />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
