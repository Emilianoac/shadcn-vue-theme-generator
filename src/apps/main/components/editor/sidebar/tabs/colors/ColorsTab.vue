<script lang="ts" setup>
import { computed, nextTick, ref } from "vue";
import { useColorMode } from "@vueuse/core";
import { useTheme } from "@/shared/composables/useTheme";
import { useEditorBridge } from "@/apps/main/bridge/useEditorBridge";
import ColorPickerField from "./ColorPickerField.vue";
import ContrastChecker from "./ContrastChecker.vue";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";

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
    contrastPair: { background: "primary", foreground: "primary-foreground" },
    isOpenByDefault: false,
  },
  {
    id: "secondary",
    title: "Secondary Colors",
    fields: [
      { label: "Secondary", key: "secondary" },
      { label: "Secondary Foreground", key: "secondary-foreground" },
    ],
    contrastPair: { background: "secondary", foreground: "secondary-foreground" },
    isOpenByDefault: false,
  },
  {
    id: "accent",
    title: "Accent Colors",
    fields: [
      { label: "Accent", key: "accent" },
      { label: "Accent Foreground", key: "accent-foreground" },
    ],
    contrastPair: { background: "accent", foreground: "accent-foreground" },
    isOpenByDefault: false,
  },
  {
    id: "base",
    title: "Base Colors",
    fields: [
      { label: "Background", key: "background" },
      { label: "Foreground", key: "foreground" },
    ],
    contrastPair: { background: "background", foreground: "foreground" },
    isOpenByDefault: false,
  },
  {
    id: "card",
    title: "Card Colors",
    fields: [
      { label: "Card", key: "card" },
      { label: "Card Foreground", key: "card-foreground" },
    ],
    contrastPair: { background: "card", foreground: "card-foreground" },
    isOpenByDefault: false,
  },
  {
    id: "muted",
    title: "Muted Colors",
    fields: [
      { label: "Muted", key: "muted" },
      { label: "Muted Foreground", key: "muted-foreground" },
    ],
    contrastPair: { background: "muted", foreground: "muted-foreground" },
    isOpenByDefault: false,
  },
  {
    id: "destructive",
    title: "Destructive Colors",
    fields: [
      { label: "Destructive", key: "destructive" },
      { label: "Destructive Foreground", key: "destructive-foreground" },
    ],
    contrastPair: { background: "destructive", foreground: "destructive-foreground" },
    isOpenByDefault: false,
  },
  {
    id: "popover",
    title: "Popover Colors",
    fields: [
      { label: "Popover", key: "popover" },
      { label: "Popover Foreground", key: "popover-foreground" },
    ],
    contrastPair: { background: "popover", foreground: "popover-foreground" },
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
    contrastPairs: [
      { background: "sidebar", foreground: "sidebar-foreground" },
      { background: "sidebar-primary", foreground: "sidebar-primary-foreground" },
      { background: "sidebar-accent", foreground: "sidebar-accent-foreground" },
    ],
    isOpenByDefault: false,
  },
] as const;

const openItems = ref<string[]>(
  COLOR_GROUPS.filter((group) => group.isOpenByDefault).map((group) => group.id),
);

const themeGroupByKey = Object.fromEntries(
  COLOR_GROUPS.flatMap((group) => group.fields.map((field) => [field.key, group.id])),
) as Record<string, string>;

function getContrastPairs(group: (typeof COLOR_GROUPS)[number]) {
  if ("contrastPair" in group && group.contrastPair) {
    return [group.contrastPair];
  }
  if ("contrastPairs" in group && group.contrastPairs) {
    return group.contrastPairs;
  }
  return [];
}

function focusThemeColorInput(themeKey: string) {
  const groupId = themeGroupByKey[themeKey];
  if (!groupId) return;

  const inputId = `theme-color-${themeKey}`;
  const wasClosed = !openItems.value.includes(groupId);
  if (wasClosed) {
    openItems.value = [...openItems.value, groupId];
  }

  const focusNow = () => {
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    const fieldElement = input?.closest("[data-theme-color-field]") as HTMLElement | null;
    if (!input || !fieldElement) return;

    fieldElement.scrollIntoView({ behavior: "smooth", block: "center" });
    input.focus({ preventScroll: true });
    input.select();
  };

  const delays = wasClosed ? [0, 80, 180, 320] : [0, 60];
  nextTick(() => {
    delays.forEach((delay) => {
      window.setTimeout(() => {
        focusNow();
      }, delay);
    });
  });
}

useEditorBridge({
  onFocusThemeColor: (themeKey: string) => {
    focusThemeColorInput(themeKey);
  },
});
</script>

<template>
  <div>
    <Accordion v-model="openItems" type="multiple">
      <AccordionItem
        v-for="group in COLOR_GROUPS"
        :key="group.id"
        :value="group.id"
        :unmount-on-hide="false"
        class="border-b overflow-hidden"
      >
        <AccordionTrigger
          class="p-4 py-3 text-xs font-semibold hover:bg-accent/30 cursor-pointer hover:no-underline rounded-none"
        >
          {{ group.title }}
        </AccordionTrigger>
        <AccordionContent class="pt-2 pb-6 px-4">
          <div class="space-y-4">
            <ColorPickerField
              v-for="field in group.fields"
              :key="field.key"
              :label="field.label"
              :theme-key="field.key"
              v-model="theme.data[mode][field.key]"
            />
          </div>

          <!-- WCAG Contrast Checker -->
          <ContrastChecker
            v-for="pair in getContrastPairs(group)"
            :key="`${pair.background}-${pair.foreground}`"
            :background="theme.data[mode][pair.background]"
            :foreground="theme.data[mode][pair.foreground]"
            class="mt-4"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
