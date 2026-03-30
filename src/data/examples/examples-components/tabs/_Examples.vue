<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import TabsBasic from "./TabsBasic.vue";
import TabsBasicRaw from "./TabsBasic.vue?raw";
import TabsDisabled from "./TabsLineDisabled.vue";
import TabsDisabledRaw from "./TabsLineDisabled.vue?raw";
import TabsWithIcons from "./TabsWithIcons.vue";
import TabsWithIconsRaw from "./TabsWithIcons.vue?raw";
import TabsIconOnly from "./TabsIconOnly.vue";
import TabsIconOnlyRaw from "./TabsIconOnly.vue?raw";
import TabsWithContent from "./TabsWithContent.vue";
import TabsWithContentRaw from "./TabsWithContent.vue?raw";
</script>

<template>
  <div class="@container max-w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="TabsBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <TabsBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TabsDisabledRaw">
        <template #title> Disabled </template>
        <template #example>
          <TabsDisabled />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TabsWithIconsRaw">
        <template #title> With Icons </template>
        <template #example>
          <TabsWithIcons />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TabsIconOnlyRaw">
        <template #title> Icon Only </template>
        <template #example>
          <TabsIconOnly />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="TabsWithContentRaw">
        <template #title> With Content </template>
        <template #example>
          <TabsWithContent />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
