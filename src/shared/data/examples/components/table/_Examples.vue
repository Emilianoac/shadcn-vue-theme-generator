<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import TableBasic from "./TableBasic.vue";
import TableBasicRaw from "./TableBasic.vue?raw";
import TableWithFooter from "./TableWithFooter.vue";
import TableWithFooterRaw from "./TableWithFooter.vue?raw";
import TableWithBadges from "./TableWithBadges.vue";
import TableWithBadgesRaw from "./TableWithBadges.vue?raw";
import TableWithActions from "./TableWithActions.vue";
import TableWithActionsRaw from "./TableWithActions.vue?raw";
</script>

<template>
  <div class="@container max-w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="TableBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <TableBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TableWithFooterRaw">
        <template #title> With Footer </template>
        <template #example>
          <TableWithFooter />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TableWithBadgesRaw">
        <template #title> With Badges </template>
        <template #example>
          <TableWithBadges />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TableWithActionsRaw">
        <template #title> With Actions </template>
        <template #example>
          <TableWithActions />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
