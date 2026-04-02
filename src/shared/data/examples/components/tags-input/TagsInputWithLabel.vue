<script setup lang="ts">
import { ref } from "vue";
import { XIcon } from "lucide-vue-next";
import { Label } from "@/shared/components/ui/label";
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/shared/components/ui/tags-input";

const tags = ref(["TypeScript", "JavaScript", "Python"]);
</script>

<template>
  <Example title="Tags Input with Label">
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <Label for="skills" data-component-x-ray="Label">Skills</Label>
      <TagsInput id="skills" v-model="tags" data-component-x-ray="TagsInput">
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
        <TagsInputInput placeholder="Add skill..." data-component-x-ray-trigger="TagsInputInput" />
      </TagsInput>
    </div>
  </Example>
</template>
