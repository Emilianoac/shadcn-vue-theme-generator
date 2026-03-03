<script setup lang="ts">
import ExampleCard from "../../ExampleCard.vue";
import BreadcrumbDefault from "./BreadcrumbDefault.vue";
import BreadcrumbDefaultRaw from "./BreadcrumbDefault.vue?raw";
import BreadcrumbWithEllipsis from "./BreadcrumbWithEllipsis.vue";
import BreadcrumbWithEllipsisRaw from "./BreadcrumbWithEllipsis.vue?raw";
import BreadcrumbCustomSeparator from "./BreadcrumbCustomSeparator.vue";
import BreadcrumbCustomSeparatorRaw from "./BreadcrumbCustomSeparator.vue?raw";
import BreadcrumbEllipsisDropdown from "./BreadcrumbEllipsisDropdown.vue";
import BreadcrumbEllipsisDropdownRaw from "./BreadcrumbEllipsisDropdown.vue?raw";
import BreadcrumbDropdown from "./BreadcrumbDropdown.vue";
import BreadcrumbDropdownRaw from "./BreadcrumbDropdown.vue?raw";
</script>

<template>
  <div class="space-y-8">
    <ExampleCard :raw-component="BreadcrumbDefaultRaw">
      <template #title>Default</template>
      <template #example>
        <BreadcrumbDefault />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="BreadcrumbWithEllipsisRaw">
      <template #title>With Ellipsis</template>
      <template #example>
        <BreadcrumbWithEllipsis />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="BreadcrumbCustomSeparatorRaw">
      <template #title>Custom Separator</template>
      <template #example>
        <BreadcrumbCustomSeparator />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="BreadcrumbEllipsisDropdownRaw">
      <template #title>Ellipsis with Dropdown</template>
      <template #example>
        <BreadcrumbEllipsisDropdown />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="BreadcrumbDropdownRaw">
      <template #title>With Dropdown Menu</template>
      <template #example>
        <BreadcrumbDropdown />
      </template>
    </ExampleCard>
  </div>
</template>
