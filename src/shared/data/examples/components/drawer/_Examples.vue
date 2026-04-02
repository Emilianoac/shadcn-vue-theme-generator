<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import DrawerScrollableContent from "./DrawerScrollableContent.vue";
import DrawerScrollableContentRaw from "./DrawerScrollableContent.vue?raw";
import DrawerWithSides from "./DrawerWithSides.vue";
import DrawerWithSidesRaw from "./DrawerWithSides.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="DrawerScrollableContentRaw">
        <template #title> Scrollable Content </template>
        <template #example>
          <DrawerScrollableContent />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="DrawerWithSidesRaw">
        <template #title> Sides </template>
        <template #example>
          <DrawerWithSides />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
