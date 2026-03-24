<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import KbdBasic from "./KbdBasic.vue";
import KbdBasicRaw from "./KbdBasic.vue?raw";
import KbdWithGroup from "./KbdWithGroup.vue";
import KbdWithGroupRaw from "./KbdWithGroup.vue?raw";
</script>

<template>
  <div class="@container max-w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="KbdBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <KbdBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="KbdWithGroupRaw">
        <template #title> With KbdGroup </template>
        <template #example>
          <KbdWithGroup />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
