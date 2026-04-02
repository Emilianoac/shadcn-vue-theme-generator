<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import SwitchBasic from "./SwitchBasic.vue";
import SwitchBasicRaw from "./SwitchBasic.vue?raw";
import SwitchWithDescription from "./SwitchWithDescription.vue";
import SwitchWithDescriptionRaw from "./SwitchWithDescription.vue?raw";
import SwitchDisabled from "./SwitchDisabled.vue";
import SwitchDisabledRaw from "./SwitchDisabled.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="SwitchBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <SwitchBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SwitchWithDescriptionRaw">
        <template #title> With description </template>
        <template #example>
          <SwitchWithDescription />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SwitchDisabledRaw">
        <template #title> Disabled </template>
        <template #example>
          <SwitchDisabled />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
