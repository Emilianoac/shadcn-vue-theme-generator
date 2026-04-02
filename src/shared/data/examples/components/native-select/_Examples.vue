<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import NativeSelectBasic from "./NativeSelectBasic.vue";
import NativeSelectBasicRaw from "./NativeSelectBasic.vue?raw";
import NativeSelectWithOptGroup from "./NativeSelectWithOptGroup.vue";
import NativeSelectWithOptGroupRaw from "./NativeSelectWithOptGroup.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="NativeSelectBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <NativeSelectBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="NativeSelectWithOptGroupRaw">
        <template #title> With OptGroup </template>
        <template #example>
          <NativeSelectWithOptGroup />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
