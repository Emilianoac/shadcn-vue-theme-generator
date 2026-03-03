<script setup lang="ts">
import ExampleCard from "../../ExampleCard.vue";
import AlertBasic from "./AlertBasic.vue";
import AlertBasicRaw from "./AlertBasic.vue?raw";
import AlertIcons from "./AlertIcons.vue";
import AlertIconsRaw from "./AlertIcons.vue?raw";
import AlertDestructive from "./AlertDestructive.vue";
import AlertDestructiveRaw from "./AlertDestructive.vue?raw";
</script>

<template>
  <div class="max-w-150 mx-auto space-y-6">
    <ExampleCard :raw-component="AlertBasicRaw">
      <template #title>Basic</template>
      <template #example>
        <AlertBasic />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="AlertIconsRaw">
      <template #title>With Icons</template>
      <template #example>
        <AlertIcons />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="AlertDestructiveRaw">
      <template #title>Destructive</template>
      <template #example>
        <AlertDestructive />
      </template>
    </ExampleCard>
  </div>
</template>
