<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import AspectRatio16_9 from "./AspectRatio16_9.vue";
import AspectRatio16_9Raw from "./AspectRatio16_9.vue?raw";
import AspectRatio21_9 from "./AspectRatio21_9.vue";
import AspectRatio21_9Raw from "./AspectRatio21_9.vue?raw";
import AspectRatio1_1 from "./AspectRatio1_1.vue";
import AspectRatio1_1Raw from "./AspectRatio1_1.vue?raw";
import AspectRatio9_16 from "./AspectRatio9_16.vue";
import AspectRatio9_16Raw from "./AspectRatio9_16.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="AspectRatio16_9Raw">
        <template #title>Aspect Ratio 16:9</template>
        <template #example>
          <AspectRatio16_9 />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AspectRatio21_9Raw">
        <template #title>Aspect Ratio 21:9</template>
        <template #example>
          <AspectRatio21_9 />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AspectRatio1_1Raw">
        <template #title>Aspect Ratio 1:1</template>
        <template #example>
          <AspectRatio1_1 />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="AspectRatio9_16Raw">
        <template #title>Aspect Ratio 9:16</template>
        <template #example>
          <AspectRatio9_16 />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
