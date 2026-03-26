<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import ResizableHorizontal from "./ResizableHorizontal.vue";
import ResizableHorizontalRaw from "./ResizableHorizontal.vue?raw";
import ResizableVertical from "./ResizableVertical.vue";
import ResizableVerticalRaw from "./ResizableVertical.vue?raw";
import ResizableWithHandle from "./ResizableWithHandle.vue";
import ResizableWithHandleRaw from "./ResizableWithHandle.vue?raw";
import ResizableNested from "./ResizableNested.vue";
import ResizableNestedRaw from "./ResizableNested.vue?raw";
import ResizableControlled from "./ResizableControlled.vue";
import ResizableControlledRaw from "./ResizableControlled.vue?raw";
</script>

<template>
  <div class="@container max-w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="ResizableHorizontalRaw">
        <template #title> Horizontal </template>
        <template #example>
          <ResizableHorizontal />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ResizableVerticalRaw">
        <template #title> Vertical </template>
        <template #example>
          <ResizableVertical />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ResizableWithHandleRaw">
        <template #title> With Handle </template>
        <template #example>
          <ResizableWithHandle />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ResizableNestedRaw">
        <template #title> Nested </template>
        <template #example>
          <ResizableNested />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ResizableControlledRaw">
        <template #title> Controlled </template>
        <template #example>
          <ResizableControlled />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
