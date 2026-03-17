<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import CollaposibleBasic from "./CollpasibleBasic.vue";
import CollaposibleBasicRaw from "./CollpasibleBasic.vue?raw";
import CollapsibleSetting from "./CollapsibleSetting.vue";
import CollapsibleSettingRaw from "./CollapsibleSetting.vue?raw";
import CollapsibleFileTree from "./CollapasibleFileTree.vue";
import CollapsibleFileTreeRaw from "./CollapasibleFileTree.vue?raw";
</script>

<template>
  <div class="@container w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="CollaposibleBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <CollaposibleBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CollapsibleSettingRaw">
        <template #title>Setting</template>
        <template #example>
          <CollapsibleSetting />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CollapsibleFileTreeRaw">
        <template #title>File Tree</template>
        <template #example>
          <CollapsibleFileTree />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
