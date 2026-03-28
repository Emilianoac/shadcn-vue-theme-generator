<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import ScrollAreaVertical from "./ScrollAreaVertical.vue";
import ScrollAreaVericalRaw from "./ScrollAreaVertical.vue?raw";
import ScrollAreaHorizontal from "./ScrollAreaHorizontal.vue";
import ScrollAreaHorizontalRaw from "./ScrollAreaHorizontal.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="ScrollAreaVericalRaw">
        <template #title> Vertical </template>
        <template #example>
          <ScrollAreaVertical />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ScrollAreaHorizontalRaw">
        <template #title> Horizontal </template>
        <template #example>
          <ScrollAreaHorizontal />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
