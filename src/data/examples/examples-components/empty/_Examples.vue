<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import EmptyBasic from "./EmptyBasic.vue";
import EmptyBasicRaw from "./EmptyBasic.vue?raw";
import EmptyWithMutedBackground from "./EmptyWithMutedBackground.vue";
import EmptyWithMutedBackgroundRaw from "./EmptyWithMutedBackground.vue?raw";
import EmptyWithBorder from "./EmptyWithBorder.vue";
import EmptyWithBorderRaw from "./EmptyWithBorder.vue?raw";
import EmptyWithIcon from "./EmptyWithIcon.vue";
import EmptyWithIconRaw from "./EmptyWithIcon.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="EmptyBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <EmptyBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="EmptyWithMutedBackgroundRaw">
        <template #title> With Muted Background </template>
        <template #example>
          <EmptyWithMutedBackground />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="EmptyWithBorderRaw">
        <template #title> With Border </template>
        <template #example>
          <EmptyWithBorder />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="EmptyWithIconRaw">
        <template #title> With Icon </template>
        <template #example>
          <EmptyWithIcon />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
