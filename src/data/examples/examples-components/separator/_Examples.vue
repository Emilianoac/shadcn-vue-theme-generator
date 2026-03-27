<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import SeparatorHorizontal from "./SeparatorHorizontal.vue";
import SeparatorHorizontalRaw from "./SeparatorHorizontal.vue?raw";
import SeparatorVertical from "./SeparatorVertical.vue";
import SeparatorVerticalRaw from "./SeparatorVertical.vue?raw";
</script>

<template>
  <div class="@container max-w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="SeparatorHorizontalRaw">
        <template #title> Horizontal </template>
        <template #example>
          <SeparatorHorizontal />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SeparatorVerticalRaw">
        <template #title> Vertical </template>
        <template #example>
          <SeparatorVertical />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
