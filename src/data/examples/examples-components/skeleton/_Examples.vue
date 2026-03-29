<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import SkeletonAvatar from "./SkeletonAvatar.vue";
import SkeletonAvatarRaw from "./SkeletonAvatar.vue?raw";
import SkeletonCard from "./SkeletonCard.vue";
import SkeletonCardRaw from "./SkeletonCard.vue?raw";
import SkeletonText from "./SkeletonText.vue";
import SkeletonTextRaw from "./SkeletonText.vue?raw";
import SkeletonForm from "./SkeletonForm.vue";
import SkeletonFormRaw from "./SkeletonForm.vue?raw";
import SkeletonTable from "./SkeletonTable.vue";
import SkeletonTableRaw from "./SkeletonTable.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="SkeletonAvatarRaw">
        <template #title> Avatar </template>
        <template #example>
          <SkeletonAvatar />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SkeletonCardRaw">
        <template #title> Card </template>
        <template #example>
          <SkeletonCard />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SkeletonTextRaw">
        <template #title> Text </template>
        <template #example>
          <SkeletonText />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SkeletonFormRaw">
        <template #title> Form </template>
        <template #example>
          <SkeletonForm />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SkeletonTableRaw">
        <template #title> Table </template>
        <template #example>
          <SkeletonTable />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
