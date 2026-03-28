<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import CommandBasic from "./CommandBasic.vue";
import CommandBasicRaw from "./CommandBasic.vue?raw";
import CommandWithGroups from "./CommandWithGroups.vue";
import CommandWithGroupsRaw from "./CommandWithGroups.vue?raw";
</script>

<template>
  <div class="@container w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="CommandBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <CommandBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CommandWithGroupsRaw">
        <template #title> With Groups </template>
        <template #example>
          <CommandWithGroups />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
