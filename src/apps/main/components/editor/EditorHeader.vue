<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { Moon, Sun } from "lucide-vue-next";
import { GithubIcon } from "@/shared/assets/icons";

import { Switch } from "@/shared/components/ui/switch";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/shared/components/ui/tooltip";
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
    <div class="flex h-5 items-center space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon-sm" as-child>
              <a
                href="https://github.com/Emilianoac/shadcn-vue-theme-generator"
                target="_blank"
                aria-label="GitHub Repository"
              >
                <GithubIcon class="w-5 h-5" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent> GitHub Repository </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Separator orientation="vertical" />
      <Switch id="color-schema" v-model="isDark" class="border-border cursor-pointer">
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
