<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import SpinnerBasic from "./SpinnerBasic.vue";
import SpinnerBasicRaw from "./SpinnerBasic.vue?raw";
import SpinnerInButtons from "./SpinnerInButtons.vue";
import SpinnerInButtonsRaw from "./SpinnerInButtons.vue?raw";
import SpinnerInBadges from "./SpinnerInBadges.vue";
import SpinnerInBadgesRaw from "./SpinnerInBadges.vue?raw";
import SpinnerInInputGroup from "./SpinnerInInputGroup.vue";
import SpinnerInInputGroupRaw from "./SpinnerInInputGroup.vue?raw";
import SpinnerInEmpty from "./SpinnerInEmpty.vue";
import SpinnerInEmptyRaw from "./SpinnerInEmpty.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="SpinnerBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <SpinnerBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SpinnerInButtonsRaw">
        <template #title> In Buttons </template>
        <template #example>
          <SpinnerInButtons />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SpinnerInBadgesRaw">
        <template #title> In Badges </template>
        <template #example>
          <SpinnerInBadges />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SpinnerInInputGroupRaw">
        <template #title> In Input Group </template>
        <template #example>
          <SpinnerInInputGroup />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SpinnerInEmptyRaw" container-class="lg:col-span-full">
        <template #title> In Empty State </template>
        <template #example>
          <SpinnerInEmpty />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
