<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import PaginationBasic from "./PaginationBasic.vue";
import PaginationBasicRaw from "./PaginationBasic.vue?raw";
import PaginationSimple from "./PaginationSimple.vue";
import PaginationSimpleRaw from "./PaginationSimple.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="PaginationBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <PaginationBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="PaginationSimpleRaw">
        <template #title> Simple </template>
        <template #example>
          <PaginationSimple />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
