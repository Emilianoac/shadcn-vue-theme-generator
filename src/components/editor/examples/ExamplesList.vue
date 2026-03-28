<script lang="ts" setup>
import type { Example } from "@/data/examples";
import "vue-sonner/style.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

defineProps<{
  searchQuery: string;
  selectedId: string | null;
  filteredExamples: Record<string, { name: string; items: Example[] }>;
  handleSelect: (id: string) => void;
}>();

const emit = defineEmits<{
  "update:searchQuery": [value: string];
}>();
</script>

<template>
  <!-- Example List -->
  <nav class="flex flex-col h-full bg-background overflow-y-auto p-2">
    <Input
      :modelValue="searchQuery"
      @update:modelValue="emit('update:searchQuery', String($event))"
      placeholder="Search example..."
      class="rounded-sm shadow-none text-xs bg-none focus-visible:ring-1 focus-visible:ring-primary/50"
    />
    <div class="overflow-y-auto flex-1 max-h-50 lg:max-h-none mt-4 mb-5">
      <ScrollArea class="h-full">
        <div class="space-y-4">
          <div v-for="(group, groupKey) in filteredExamples" :key="groupKey">
            <p
              class="px-2 text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-2"
            >
              {{ group.name }} {{ group.items.length > 0 ? `(${group.items.length})` : "" }}
            </p>

            <ul class="space-y-1 px-2">
              <li v-for="item in group.items" :key="item.id">
                <Button
                  variant="ghost"
                  @click="handleSelect(item.id)"
                  :class="[
                    'w-full text-left px-3 py-2 text-sm  flex items-center justify-between cursor-pointer',
                    selectedId === item.id
                      ? 'bg-accent text-accent-foreground font-medium'
                      : 'hover:bg-accent/50 text-muted-foreground hover:text-foreground',
                  ]"
                >
                  {{ item.name }}
                  <span v-if="selectedId === item.id" class="text-[10px] text-primary">●</span>
                </Button>
              </li>
            </ul>
          </div>

          <div
            v-if="Object.keys(filteredExamples).length === 0"
            class="p-4 text-center text-xs text-muted-foreground"
          >
            No results found.
          </div>
        </div>
      </ScrollArea>
    </div>
  </nav>
</template>

<style scoped></style>
