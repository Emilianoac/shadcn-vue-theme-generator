<script lang="ts" setup>
import { Separator } from "@/components/ui/separator";
import EditorThemeSelector from "@/components/editor/EditorThemeSelector.vue";
import ThemeCodeModal from "@/components/editor/actions/theme-code-modal/ThemeCodeModal.vue";
import ResetThemeButton from "@/components/editor/actions/ResetThemeButton.vue";
import { useTheme } from "@/composables/useTheme";

const { theme, themeId, setTheme, isCustomTheme } = useTheme();
</script>

<template>
  <header class="flex justify-between h-14 items-center gap-2 px-4 border-b shrink-0">
    <div class="flex h-5 items-center space-x-2">
      <EditorThemeSelector
        class="relative"
        :current-theme-name="theme.name"
        :current-theme-id="themeId"
        :is-custom="isCustomTheme"
        @select="(id) => setTheme(id)"
      />
    </div>
    <div class="flex h-7 items-center space-x-4">
      <div class="flex items-center gap-1">
        <ThemeCodeModal />
        <ResetThemeButton />
      </div>
      <Separator orientation="vertical" />
      <slot name="sidebar-trigger" />
    </div>
  </header>
</template>

<style lang="postcss" scoped></style>
