<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import CheckboxBasic from "./CheckboxBasic.vue";
import CheckboxBasicRaw from "./CheckboxBasic.vue?raw";
import CheckboxDisabled from "./CheckboxDisabled.vue";
import CheckboxDisabledRaw from "./CheckboxDisabled.vue?raw";
import CheckboxGroup from "./CheckboxGroup.vue";
import CheckboxGroupRaw from "./CheckboxGroup.vue?raw";
import CheckboxTable from "./CheckboxTable.vue";
import CheckboxTableRaw from "./CheckboxTable.vue?raw";
</script>

<template>
  <div class="@container w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="CheckboxBasicRaw">
        <template #title>Basic</template>
        <template #example>
          <CheckboxBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CheckboxDisabledRaw">
        <template #title>Disabled</template>
        <template #example>
          <CheckboxDisabled />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CheckboxGroupRaw">
        <template #title>Group</template>
        <template #example>
          <CheckboxGroup />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CheckboxTableRaw">
        <template #title>In table</template>
        <template #example>
          <CheckboxTable />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
