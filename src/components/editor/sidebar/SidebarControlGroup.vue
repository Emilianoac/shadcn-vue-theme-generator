<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
withDefaults(
  defineProps<{
    title: string;
    defaultOpen?: boolean;
  }>(),
  {
    defaultOpen: false,
  },
);
</script>

<template>
  <Collapsible class="border-b overflow-hidden" :default-open="defaultOpen">
    <CollapsibleTrigger
      class="flex justify-between w-full p-4 py-3 text-xs font-semibold hover:bg-accent/30 hover:no-underline transition-all cursor-pointer border-0!"
    >
      <span class="font-bold">{{ title }}</span>
      <ChevronDown :size="16" />
    </CollapsibleTrigger>
    <CollapsibleContent class="pt-2 pb-6 px-4">
      <slot />
    </CollapsibleContent>
  </Collapsible>
</template>
