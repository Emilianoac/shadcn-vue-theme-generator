<script lang="ts" setup>
import { ChevronDown, Check } from "lucide-vue-next";
import { themesList, type ThemeId } from "@/data/themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

defineProps<{
  currentThemeName: string;
  currentThemeId: ThemeId;
}>();

const emit = defineEmits<{
  (e: "select", id: ThemeId): void;
}>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      class="p-2 text-start flex justify-between items-center gap-4 hover:bg-accent hover:text-accent-foreground rounded-sm"
    >
      <div class="flex items-center gap-4">
        <div class="flex gap-2">
          <div class="w-4 h-4 border rounded-sm" style="background: var(--primary)"></div>
          <div class="w-4 h-4 border rounded-sm" style="background: var(--accent)"></div>
          <div class="w-4 h-4 border rounded-sm" style="background: var(--secondary)"></div>
          <div class="w-4 h-4 border rounded-sm" style="background: var(--background)"></div>
        </div>
        <span class="text-sm">{{ currentThemeName }}</span>
      </div>
      <ChevronDown :size="22" />
    </DropdownMenuTrigger>
    <DropdownMenuContent class="min-w-72">
      <DropdownMenuLabel>{{ themesList.length }} Themes</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        v-for="theme in themesList"
        :key="theme.id"
        class="flex justify-between items-center"
        @select="(ev: Event) => ev.preventDefault()"
        @click="emit('select', theme.id)"
      >
        <div class="flex items-center gap-5">
          <ul class="flex gap-1">
            <li
              v-for="color in theme.palette.dark"
              :key="color"
              class="w-4 h-4 border border-border rounded-sm"
              :style="{ background: color }"
            ></li>
          </ul>
          {{ theme.name }}
        </div>

        <Check v-if="currentThemeId == theme.id" :size="22" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style lang="postcss" scoped></style>
