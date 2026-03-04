<script lang="ts" setup>
import { Separator } from "@/components/ui/separator";
import EditorThemeSelector from "@/components/editor/EditorThemeSelector.vue";
import ThemeCodeModal from "@/components/editor/actions/theme-code-modal/ThemeCodeModal.vue";
import { useTheme } from "@/composables/useTheme";

const { theme, themeId, setTheme } = useTheme();
</script>

<template>
  <header class="flex justify-between h-14 items-center gap-2 px-4 border-b shrink-0">
    <div class="flex h-5 items-center space-x-2">
      <EditorThemeSelector
        class="relative"
        :current-theme-name="theme.name"
        :current-theme-id="themeId"
        @select="(id) => setTheme(id)"
      />
      <Separator orientation="vertical" />
      <ThemeCodeModal />
    </div>
    <slot name="sidebar-trigger" />
  </header>
</template>

<style lang="postcss" scoped></style>
