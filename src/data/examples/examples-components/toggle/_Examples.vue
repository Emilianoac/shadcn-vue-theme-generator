<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import ToggleBasic from "./ToggleBasic.vue";
import ToggleBasicRaw from "./ToggleBasic.vue?raw";
import ToggleOutline from "./ToggleOutline.vue";
import ToggleOutlineRaw from "./ToggleOutline.vue?raw";
import ToggleSizes from "./ToggleSizes.vue";
import ToggleSizesRaw from "./ToggleSizes.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="ToggleBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <ToggleBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ToggleOutlineRaw">
        <template #title> Outline </template>
        <template #example>
          <ToggleOutline />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ToggleSizesRaw">
        <template #title> Sizes </template>
        <template #example>
          <ToggleSizes />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
