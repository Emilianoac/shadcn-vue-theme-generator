<script setup lang="ts">
import type { AlertDialogEmits, AlertDialogProps } from "reka-ui";
import { reactiveOmit } from "@vueuse/core";
import { AlertDialogRoot, useForwardPropsEmits } from "reka-ui";

/**
 * SHADCN-VUE THEME GENERATOR CUSTOMIZATION:
 * Added modal prop support with default false to prevent global pointer-events lock.
 * This allows interactions outside the dialog when rendered in examples-container,
 * enabling ComponentXRay inspection without blocking the UI.
 */
const props = withDefaults(defineProps<AlertDialogProps & { modal?: boolean }>(), {
  modal: false,
});
const emits = defineEmits<AlertDialogEmits>();

const delegatedProps = reactiveOmit(props, "modal");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <AlertDialogRoot
    v-slot="slotProps"
    data-slot="alert-dialog"
    :modal="props.modal"
    v-bind="forwarded"
  >
    <slot v-bind="slotProps" />
  </AlertDialogRoot>
</template>
