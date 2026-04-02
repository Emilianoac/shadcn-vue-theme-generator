<script setup lang="ts">
import { ref } from "vue";
import { XIcon } from "lucide-vue-next";
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/shared/components/ui/tags-input";

const tags = ref(["Vue", "React", "Angular"]);
</script>

<template>
  <TagsInput v-model="tags" class="w-full max-w-sm" data-component-x-ray="TagsInput">
    <TagsInputItem
      v-for="tag in tags"
      :key="tag"
      :value="tag"
      data-component-x-ray-trigger="TagsInputItem"
    >
      <TagsInputItemText data-component-x-ray-trigger="TagsInputItemText" />
      <TagsInputItemDelete data-component-x-ray-trigger="TagsInputItemDelete">
        <XIcon class="h-4 w-4" />
      </TagsInputItemDelete>
    </TagsInputItem>
    <TagsInputInput placeholder="Add tag..." data-component-x-ray-trigger="TagsInputInput" />
  </TagsInput>
</template>
