<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import MenubarBasic from "./MenubarBasic.vue";
import MenubarBasicRaw from "./MenubarBasic.vue?raw";
import MenubarWithSubmenu from "./MenubarWithSubmenu.vue";
import MenubarWithSubmenuRaw from "./MenubarWithSubmenu.vue?raw";
import MenubarWithCheckboxes from "./MenubarWithCheckboxes.vue";
import MenubarWithCheckboxesRaw from "./MenubarWithCheckboxes.vue?raw";
import MenubarWithRadio from "./MenubarWithRadio.vue";
import MenubarWithRadioRaw from "./MenubarWithRadio.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="MenubarBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <MenubarBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="MenubarWithSubmenuRaw">
        <template #title> With Submenu </template>
        <template #example>
          <MenubarWithSubmenu />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="MenubarWithCheckboxesRaw">
        <template #title> With Checkboxes </template>
        <template #example>
          <MenubarWithCheckboxes />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="MenubarWithRadioRaw">
        <template #title> With Radio </template>
        <template #example>
          <MenubarWithRadio />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
