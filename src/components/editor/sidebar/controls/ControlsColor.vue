<script lang="ts" setup>
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
import { useTheme } from "@/composables/useTheme";
import SidebarControlGroup from "../SidebarControlGroup.vue";
import ColorPickerField from "./shared/ColorPickerField.vue";

const { theme } = useTheme();
const colorMode = useColorMode();
const mode = computed(() => (colorMode.value === "auto" ? "light" : colorMode.value));

const COLOR_GROUPS = [
  {
    id: "primary",
    title: "Primary Colors",
    fields: [
      { label: "Primary", key: "primary" },
      { label: "Primary Foreground", key: "primary-foreground" },
    ],
    isOpenByDefault: true,
  },
  {
    id: "secondary",
    title: "Secondary Colors",
    fields: [
      { label: "Secondary", key: "secondary" },
      { label: "Secondary Foreground", key: "secondary-foreground" },
    ],
    isOpenByDefault: true,
  },
  {
    id: "accent",
    title: "Accent Colors",
    fields: [
      { label: "Accent", key: "accent" },
      { label: "Accent Foreground", key: "accent-foreground" },
    ],
    isOpenByDefault: false,
  },
  {
    id: "base",
    title: "Base Colors",
    fields: [
      { label: "Background", key: "background" },
      { label: "Foreground", key: "foreground" },
    ],
    isOpenByDefault: false,
  },
  {
    id: "card",
    title: "Card Colors",
    fields: [
      { label: "Card", key: "card" },
      { label: "Card Foreground", key: "card-foreground" },
    ],
    isOpenByDefault: false,
  },
  {
    id: "muted",
    title: "Muted Colors",
    fields: [
      { label: "Muted", key: "muted" },
      { label: "Muted Foreground", key: "muted-foreground" },
    ],
    isOpenByDefault: false,
  },
  {
    id: "destructive",
    title: "Destructive Colors",
    fields: [
      { label: "Destructive", key: "destructive" },
      { label: "Destructive Foreground", key: "destructive-foreground" },
    ],
    isOpenByDefault: false,
  },
  {
    id: "popover",
    title: "Popover Colors",
    fields: [
      { label: "Popover", key: "popover" },
      { label: "Popover Foreground", key: "popover-foreground" },
    ],
    isOpenByDefault: false,
  },
  {
    id: "system",
    title: "Border & Inputs Colors",
    fields: [
      { label: "Border", key: "border" },
      { label: "Input", key: "input" },
      { label: "Ring", key: "ring" },
    ],
    isOpenByDefault: false,
  },
  {
    id: "charts",
    title: "Charts Colors",
    fields: [
      { label: "Chart 1", key: "chart-1" },
      { label: "Chart 2", key: "chart-2" },
      { label: "Chart 3", key: "chart-3" },
      { label: "Chart 4", key: "chart-4" },
      { label: "Chart 5", key: "chart-5" },
    ],
    isOpenByDefault: false,
  },
  {
    id: "sibebar",
    title: "Sidebar Colors",
    fields: [
      { label: "Sidebar Background", key: "sidebar" },
      { label: "Sidebar Foreground", key: "sidebar-foreground" },
      { label: "Sidebar Primary", key: "sidebar-primary" },
      { label: "Sidebar Primary Foreground", key: "sidebar-primary-foreground" },
      { label: "Sidebar Accent", key: "sidebar-accent" },
      { label: "Sidebar Accent Foreground", key: "sidebar-accent-foreground" },
      { label: "Sidebar Border", key: "sidebar-border" },
      { label: "Sidebar Ring", key: "sidebar-ring" },
    ],
    isOpenByDefault: false,
  },
] as const;
</script>

<template>
  <div>
    <SidebarControlGroup
      v-for="(group, id) in COLOR_GROUPS"
      :key="id"
      :title="group.title"
      :default-open="group.isOpenByDefault"
    >
      <div class="space-y-4">
        <ColorPickerField
          v-for="field in group.fields"
          :key="field.key"
          :label="field.label"
          v-model="theme.data[mode][field.key]"
        />
      </div>
    </SidebarControlGroup>
  </div>
</template>
