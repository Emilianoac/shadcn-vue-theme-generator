<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from "reka-ui";
import { reactiveOmit } from "@vueuse/core";
import { DialogRoot, useForwardPropsEmits } from "reka-ui";

/**
 * SHADCN-VUE THEME GENERATOR CUSTOMIZATION:
 * Added modal prop support with default false to prevent global pointer-events lock.
 * This allows interactions outside the dialog when rendered in examples-container,
 * enabling ComponentXRay inspection without blocking the UI.
 */
const props = withDefaults(defineProps<DialogRootProps & { modal?: boolean }>(), {
  modal: false,
});
const emits = defineEmits<DialogRootEmits>();
const delegatedProps = reactiveOmit(props, "modal");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DialogRoot v-slot="slotProps" data-slot="dialog" v-bind="forwarded" :modal="props.modal">
    <slot v-bind="slotProps" />
  </DialogRoot>
</template>
