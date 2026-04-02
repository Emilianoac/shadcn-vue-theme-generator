<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import SelectBasic from "./SelectBasic.vue";
import SelectBasicRaw from "./SelectBasic.vue?raw";
import SelectWithIcons from "./SelectWithIcons.vue";
import SelectWithIconsRaw from "./SelectWithIcons.vue?raw";
import SelectWithGroups from "./SelectWithGroups.vue";
import SelectWithGroupsRaw from "./SelectWithGroups.vue?raw";
import SelectLargeList from "./SelectLargeList.vue";
import SelectLargeListRaw from "./SelectLargeList.vue?raw";
import SelectSizes from "./SelectSizes.vue";
import SelectSizesRaw from "./SelectSizes.vue?raw";
import SelectInvalid from "./SelectInvalid.vue";
import SelectInvalidRaw from "./SelectInvalid.vue?raw";
import SelectPlan from "./SelectPlan.vue";
import SelectPlanRaw from "./SelectPlan.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="SelectBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <SelectBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SelectWithIconsRaw">
        <template #title> With Icons </template>
        <template #example>
          <SelectWithIcons />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SelectWithGroupsRaw">
        <template #title> With Groups </template>
        <template #example>
          <SelectWithGroups />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SelectLargeListRaw">
        <template #title> Large List </template>
        <template #example>
          <SelectLargeList />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SelectSizesRaw">
        <template #title> Sizes </template>
        <template #example>
          <SelectSizes />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SelectInvalidRaw">
        <template #title> Invalid State </template>
        <template #example>
          <SelectInvalid />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SelectPlanRaw">
        <template #title> Custom Content </template>
        <template #example>
          <SelectPlan />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
