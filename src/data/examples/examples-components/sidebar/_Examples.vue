<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import SidebarBasic from "./SidebarBasic.vue";
import SidebarBasicRaw from "./SidebarBasic.vue?raw";
import SidebarRight from "./SidebarRight.vue";
import SidebarRightRaw from "./SidebarRight.vue?raw";
import SidebarCollapsible from "./SidebarCollapsible.vue";
import SidebarCollapsibleRaw from "./SidebarCollapsible.vue?raw";
</script>

<template>
  <div class="@container max-w-full mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="SidebarBasicRaw" class="col-span-1 @xl:col-span-2">
        <template #title> Basic </template>
        <template #example>
          <SidebarBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SidebarRightRaw" class="col-span-1 @xl:col-span-2">
        <template #title> Right-aligned </template>
        <template #example>
          <SidebarRight />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SidebarCollapsibleRaw" class="col-span-1 @xl:col-span-2">
        <template #title> Collapsible </template>
        <template #example>
          <SidebarCollapsible />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
