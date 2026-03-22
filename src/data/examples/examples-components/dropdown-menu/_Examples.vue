<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import DropdownMenuBasic from "./DropdownMenuBasic.vue";
import DropdownMenuBasicRaw from "./DropdownMenuBasic.vue?raw";
import DropdownMenuWithSubmenu from "./DropdownMenuWithSubmenu.vue";
import DropdownMenuWithSubmenuRaw from "./DropdownMenuWithSubmenu.vue?raw";
import DropdownMenuWithRadioIcons from "./DropdownMenuWithRadioIcons.vue";
import DropdownMenuWithRadioIconsRaw from "./DropdownMenuWithRadioIcons.vue?raw";
import DropdownMenuWithAvatar from "./DropdownMenuWithAvatar.vue";
import DropdownMenuWithAvatarRaw from "./DropdownMenuWithAvatar.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="DropdownMenuBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <DropdownMenuBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="DropdownMenuWithSubmenuRaw">
        <template #title> With Submenu </template>
        <template #example>
          <DropdownMenuWithSubmenu />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="DropdownMenuWithRadioIconsRaw">
        <template #title> With Radio Icons </template>
        <template #example>
          <DropdownMenuWithRadioIcons />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="DropdownMenuWithAvatarRaw">
        <template #title> With Avatar </template>
        <template #example>
          <DropdownMenuWithAvatar />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
