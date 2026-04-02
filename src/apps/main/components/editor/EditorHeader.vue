<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { Moon, Sun } from "lucide-vue-next";

import { Switch } from "@/shared/components/ui/switch";
import siteLogo from "@/apps/main/components/assets/siteLogo.vue";

const isDark = useDark({
  initialValue: "dark",
  valueDark: "dark",
  valueLight: "light",
});
</script>

<template>
  <header class="border-b px-4 py-2 flex justify-between items-center">
    <siteLogo class="max-w-47.5 md:max-w-50" />
    <div class="flex items-center space-x-2">
      <Switch id="color-schema" v-model="isDark" class="border-border">
        <template #thumb>
          <div class="w-full h-full rounded-full flex items-center justify-center">
            <Moon :size="14" v-if="isDark" />
            <Sun :size="14" v-else />
          </div>
        </template>
      </Switch>
    </div>
  </header>
</template>

<style lang="postcss" scoped></style>
