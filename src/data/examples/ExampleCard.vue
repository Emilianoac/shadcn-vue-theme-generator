<script lang="ts" setup>
import { computed } from "vue";
import CoppyButton from "@/components/global/CoppyButton.vue";
import { removeXRayAttributes } from "@/lib/utils/codeCleanup";

const props = defineProps<{
  rawComponent: string;
}>();

const cleanCode = computed(() => removeXRayAttributes(props.rawComponent));
</script>

<template>
  <div class="space-y-2 h-full flex flex-col">
    <div class="flex justify-between items-center">
      <span class="block text-sm text-muted-foreground">
        <slot name="title" />
      </span>

      <CoppyButton :show-text="false" :show-tooltip="true" :textToCopy="cleanCode" />
    </div>
    <div class="border border-dashed p-6 flex-1">
      <slot name="example" />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
