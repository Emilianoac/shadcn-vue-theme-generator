<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from "reka-ui";
import { useForwardPropsEmits } from "reka-ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Command from "./Command.vue";

const props = withDefaults(
  defineProps<
    DialogRootProps & {
      title?: string;
      description?: string;
      // SHADCN-VUE THEME GENERATOR CUSTOMIZATION: Allow optional "to" prop for portal target, defaulting to body if not provided.
      to?: string;
    }
  >(),
  {
    title: "Command Palette",
    description: "Search for a command to run...",
  },
);
const emits = defineEmits<DialogRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <Dialog v-slot="slotProps" v-bind="forwarded">
    <!-- SHADCN-VUE THEME GENERATOR CUSTOMIZATION:
    Portal to #examples-container instead of body to scope dialog rendering to the preview area.-->
    <DialogContent class="overflow-hidden p-0" :to="props.to">
      <DialogHeader class="sr-only">
        <DialogTitle>{{ title }}</DialogTitle>
        <DialogDescription>{{ description }}</DialogDescription>
      </DialogHeader>
      <Command>
        <slot v-bind="slotProps" />
      </Command>
    </DialogContent>
  </Dialog>
</template>
