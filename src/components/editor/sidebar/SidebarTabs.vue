<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ControlsColor from "@/components/editor/sidebar/controls/ControlsColor.vue";

const tabs = [
  {
    id: "colors",
    label: "Colors",
    component: ControlsColor,
  },
  {
    id: "typography",
    label: "Typography",
    component: null,
  },
  {
    id: "others",
    label: "Others",
    component: null,
  },
];
</script>

<template>
  <Tabs default-value="colors" class="flex min-h-0 w-full flex-1 flex-col" :unmount-on-hide="false">
    <TabsList class="bg-transparent p-4 justify-start border-b rounded-none h-14">
      <TabsTrigger
        v-for="tab in tabs"
        :key="tab.id"
        class="py-1 font-semibold rounded-[5px] text-[0.8em] data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground cursor-pointer data-[state=inactive]:hover:opacity-60"
        :value="tab.id"
      >
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
      <span v-else class="text-muted-foreground text-sm block text-center p-4"
        >Not implemented yet.</span
      >
    </TabsContent>
  </Tabs>
</template>
