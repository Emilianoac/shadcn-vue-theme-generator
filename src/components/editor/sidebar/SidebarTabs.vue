<script setup lang="ts">
import { ref } from "vue";
import { PaletteIcon, BotIcon } from "lucide-vue-next";
import { useEditorBridge } from "@/bridge/useEditorBridge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ControlsColor from "@/components/editor/sidebar/controls/ControlsColor.vue";
import AutoGenerate from "@/components/editor/sidebar/tabs/auto-generate/AutoGenerate.vue";

const activeTab = ref("colors");

const tabs = [
  {
    id: "colors",
    label: "Colors",
    component: ControlsColor,
    icon: PaletteIcon,
  },
  {
    id: "auto-generate",
    label: "Auto Generate",
    component: AutoGenerate,
    icon: BotIcon,
  },
];

useEditorBridge({
  onFocusThemeColor: () => {
    activeTab.value = "colors";
  },
});
</script>

<template>
  <Tabs
    v-model="activeTab"
    class="flex min-h-0 w-full flex-1 flex-col gap-0"
    :unmount-on-hide="false"
  >
    <TabsList
      class="d-block space-x-2 bg-background p-3 justify-start rounded-none h-14 sticky top-0 z-10 border-b w-full"
    >
      <TabsTrigger
        v-for="tab in tabs"
        :key="tab.id"
        class="py-1 text-start font-semibold rounded-[5px] text-[0.8em] data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground cursor-pointer data-[state=inactive]:hover:opacity-60"
        :value="tab.id"
      >
        <component :is="tab.icon" />
        {{ tab.label }}
      </TabsTrigger>
    </TabsList>
    <TabsContent
      v-for="tab in tabs"
      :key="tab.id"
      :value="tab.id"
      class="size-full overflow-auto mt-0!"
    >
      <Component :is="tab.component" v-if="tab.component" />
      <span v-else class="text-muted-foreground text-sm block text-center p-4">
        Not implemented yet.
      </span>
    </TabsContent>
  </Tabs>
</template>
