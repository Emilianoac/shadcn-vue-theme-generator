<script lang="ts" setup>
import { useClipboard } from "@vueuse/core";
import { Copy, Check } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const props = withDefaults(
  defineProps<{
    textToCopy: string;
    showText?: boolean;
    showTooltip?: boolean;
  }>(),
  {
    showText: true,
    showTooltip: false,
  },
);

const { copy, copied } = useClipboard({
  source: props.textToCopy,
});
</script>

<template>
  <TooltipProvider v-if="showTooltip">
    <Tooltip>
      <TooltipTrigger as-child>
        <Button @click="copy()" variant="ghost" size="sm" class="gap-2">
          <component :is="copied ? Check : Copy" />
          <span v-if="showText">{{ copied ? "Copied" : "Copy" }}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{{ copied ? "Copied!" : "Copy to clipboard" }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>

  <Button v-else @click="copy()" variant="ghost" size="sm" class="gap-2">
    <component :is="copied ? Check : Copy" />
    <span v-if="showText">{{ copied ? "Copied" : "Copy" }}</span>
  </Button>
</template>

<style lang="postcss" scoped></style>
