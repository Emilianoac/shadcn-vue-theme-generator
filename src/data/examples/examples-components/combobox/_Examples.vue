<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import ComboboxBasic from "./ComboboxBasic.vue";
import ComboboxBasicRaw from "./ComboboxBasic.vue?raw";
import ComboboxGroups from "./ComboboxGroups.vue";
import ComboboxGroupsRaw from "./ComboboxGroups.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="ComboboxBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <ComboboxBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ComboboxGroupsRaw">
        <template #title> Groups </template>
        <template #example>
          <ComboboxGroups />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
