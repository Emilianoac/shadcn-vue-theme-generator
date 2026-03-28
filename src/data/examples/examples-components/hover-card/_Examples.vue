<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import HoverCardInDialog from "./HoverCardInDialog.vue";
import HoverCardInDialogRaw from "./HoverCardInDialog.vue?raw";
import HoverCardSides from "./HoverCardSides.vue";
import HoverCardSidesRaw from "./HoverCardSides.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="HoverCardInDialogRaw">
        <template #title> In Dialog </template>
        <template #example>
          <HoverCardInDialog />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="HoverCardSidesRaw">
        <template #title> Sides </template>
        <template #example>
          <HoverCardSides />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
