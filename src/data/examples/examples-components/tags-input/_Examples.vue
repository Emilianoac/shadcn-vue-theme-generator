<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import TagsInputBasic from "./TagsInputBasic.vue";
import TagsInputRaw from "./TagsInputBasic.vue?raw";
import TagsInputWithLabel from "./TagsInputWithLabel.vue";
import TagsInputWithLabelRaw from "./TagsInputWithLabel.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="TagsInputRaw">
        <template #title> Basic </template>
        <template #example>
          <TagsInputBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TagsInputWithLabelRaw">
        <template #title> With Label </template>
        <template #example>
          <TagsInputWithLabel />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
