<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import ProgressValues from "./ProgressValues.vue";
import ProgressValuesRaw from "./ProgressValues.vue?raw";
import ProgressWithLabel from "./ProgressWithLabel.vue";
import ProgressWithLabelRaw from "./ProgressWithLabel.vue?raw";
import ProgressControlled from "./ProgressControlled.vue";
import ProgressControlledRaw from "./ProgressControlled.vue?raw";
import ProgressFileUploadList from "./ProgressFileUploadList.vue";
import ProgressFileUploadListRaw from "./ProgressFileUploadList.vue?raw";
</script>

<template>
  <div class="@container max-w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="ProgressValuesRaw">
        <template #title> Progress Bar </template>
        <template #example>
          <ProgressValues />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ProgressWithLabelRaw">
        <template #title> With Label </template>
        <template #example>
          <ProgressWithLabel />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ProgressControlledRaw">
        <template #title> Controlled </template>
        <template #example>
          <ProgressControlled />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ProgressFileUploadListRaw">
        <template #title> File Upload List </template>
        <template #example>
          <ProgressFileUploadList />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
