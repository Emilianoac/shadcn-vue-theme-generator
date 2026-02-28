<script lang="ts" setup>
import { computed, ref } from "vue";
import examples from "@/data/examples/index";

import ExamplesList from "@/components/editor/examples/ExamplesList.vue";
import ExamplesDisplayArea from "@/components/editor/examples/ExamplesDisplayArea.vue";

const selectedId = ref(examples.blocks.items[0]?.id ?? null);
const searchQuery = ref("");

const filteredExamples = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  if (!query) return examples;

  const result: Record<
    string,
    { name: string; items: (typeof examples)[keyof typeof examples]["items"] }
  > = {};

  for (const [key, group] of Object.entries(examples)) {
    const filteredItems = group.items.filter((item) => item.name.toLowerCase().includes(query));

    if (filteredItems.length > 0) {
      result[key] = {
        ...group,
        items: filteredItems,
      };
    }
  }
  return result;
});

const currentComponent = computed(() => {
  for (const group of Object.values(examples)) {
    const found = group.items.find((item) => item.id === selectedId.value);
    if (found) return found;
  }
  return null;
});

function handleSelect(id: string) {
  selectedId.value = id;
}
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[180px_1fr] h-full gap-4">
    <ExamplesList
      :searchQuery="searchQuery"
      :selectedId="selectedId"
      :filteredExamples="filteredExamples"
      :handleSelect="handleSelect"
    />

    <ExamplesDisplayArea :currentComponent="currentComponent" />
  </div>
</template>

<style lang="postcss" scoped></style>
