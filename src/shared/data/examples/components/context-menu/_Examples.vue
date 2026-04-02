<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import ContextMenuBasic from "./ContextMenuBasic.vue";
import ContextMenuBasicRaw from "./ContextMenuBasic.vue?raw";
import ContextMenuInDialog from "./ContextMenuInDialog.vue";
import ContextMenuInDialogRaw from "./ContextMenuInDialog.vue?raw";
import ContextMenuWithRadio from "./ContextMenuWithRadio.vue";
import ContextMenuWithRadioRaw from "./ContextMenuWithRadio.vue?raw";
import ContextMenuWithSubMenu from "./ContextMenuWithSubMenu.vue";
import ContextMenuWithSubMenuRaw from "./ContextMenuWithSubMenu.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="ContextMenuBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <ContextMenuBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ContextMenuWithSubMenuRaw">
        <template #title> With Sub Menu </template>
        <template #example>
          <ContextMenuWithSubMenu />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ContextMenuWithRadioRaw">
        <template #title> With Radio Group </template>
        <template #example>
          <ContextMenuWithRadio />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="ContextMenuInDialogRaw">
        <template #title> In Dialog </template>
        <template #example>
          <ContextMenuInDialog />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
