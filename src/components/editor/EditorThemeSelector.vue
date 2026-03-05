<script lang="ts" setup>
import { ChevronDown, Check } from "lucide-vue-next";
import { themesList, type ThemeId } from "@/data/themes";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

defineProps<{
  currentThemeName: string;
  currentThemeId: ThemeId;
  isCustom: boolean;
}>();

const emit = defineEmits<{
  (e: "select", id: ThemeId): void;
}>();
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="ghost">
        <div class="flex items-center gap-4">
          <div class="flex gap-2">
            <div class="w-4 h-4 border rounded-sm" style="background: var(--primary)"></div>
            <div class="w-4 h-4 border rounded-sm" style="background: var(--accent)"></div>
            <div class="w-4 h-4 border rounded-sm" style="background: var(--secondary)"></div>
            <div class="w-4 h-4 border rounded-sm" style="background: var(--background)"></div>
          </div>
          <span class="text-sm"
            >{{ currentThemeName
            }}<span v-if="isCustom" class="text-muted-foreground"> (Custom)</span></span
          >
        </div>
        <ChevronDown :size="22" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="p-0" align="start">
      <Command :highlight-on-hover="true">
        <CommandInput placeholder="Search theme" />
        <CommandList>
          <CommandEmpty>No Themes Found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="theme in themesList"
              :key="theme.id"
              :value="theme.id"
              @click="emit('select', theme.id)"
              class="flex justify-between items-center"
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
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>

<style lang="postcss" scoped></style>
