<script setup lang="ts">
import ExampleCard from "../../ExampleCard.vue";
import AlertDialogBasic from "./AlertDialogBasic.vue";
import AlertDialogBasicRaw from "./AlertDialogBasic.vue?raw";
import AlertDialogSmall from "./AlertDialogSmall.vue";
import AlertDialogSmallRaw from "./AlertDialogSmall.vue?raw";
import AlertDialogWithMedia from "./AlertDialogWithMedia.vue";
import AlertDialogWithMediaRaw from "./AlertDialogWithMedia.vue?raw";
import AlertDialogWithMediaSmall from "./AlertDialogWithMediaSmall.vue";
import AlertDialogWithMediaSmallRaw from "./AlertDialogWithMediaSmall.vue?raw";
</script>

<template>
  <div class="@container">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 max-w-200 mx-auto">
      <ExampleCard :raw-component="AlertDialogBasicRaw">
        <template #title>Basic</template>
        <template #example>
          <AlertDialogBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="AlertDialogSmallRaw">
        <template #title>Small</template>
        <template #example>
          <AlertDialogSmall />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="AlertDialogWithMediaRaw">
        <template #title>With Media</template>
        <template #example>
          <AlertDialogWithMedia />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AlertDialogWithMediaSmallRaw">
        <template #title>With Media Small</template>
        <template #example>
          <AlertDialogWithMediaSmall />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>
