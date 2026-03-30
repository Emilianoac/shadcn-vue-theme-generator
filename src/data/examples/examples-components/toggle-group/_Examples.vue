<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import ToggleGroupBasic from "./ToggleGroupBasic.vue";
import ToggleGroupBasicRaw from "./ToggleGroupBasic.vue?raw";
import ToggleGroupOutline from "./ToggleGroupOutline.vue";
import ToggleGroupOutlineRaw from "./ToggleGroupOutline.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="ToggleGroupBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <ToggleGroupBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ToggleGroupOutlineRaw">
        <template #title> Outline Variant </template>
        <template #example>
          <ToggleGroupOutline />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
