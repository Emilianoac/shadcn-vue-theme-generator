<script setup lang="ts">
import ExampleCard from "../../ExampleCard.vue";
import BadgeVariants from "./BadgeVariants.vue";
import BadgeVariantsRaw from "./BadgeVariants.vue?raw";
import BadgeIconLeft from "./BadgeIconLeft.vue";
import BadgeIconLeftRaw from "./BadgeIconLeft.vue?raw";
import BadgeIconRight from "./BadgeIconRight.vue";
import BadgeIconRightRaw from "./BadgeIconRight.vue?raw";
import BadgeSpinner from "./BadgeSpinner.vue";
import BadgeSpinnerRaw from "./BadgeSpinner.vue?raw";
import BadgeCustomColors from "./BadgeCustomColors.vue";
import BadgeCustomColorsRaw from "./BadgeCustomColors.vue?raw";
</script>

<template>
  <div class="space-y-8">
    <ExampleCard :raw-component="BadgeVariantsRaw">
      <template #title>Variants</template>
      <template #example>
        <BadgeVariants />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="BadgeIconLeftRaw">
      <template #title>Icon Left</template>
      <template #example>
        <BadgeIconLeft />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="BadgeIconRightRaw">
      <template #title>Icon Right</template>
      <template #example>
        <BadgeIconRight />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="BadgeSpinnerRaw">
      <template #title>Icon Right Spinner</template>
      <template #example>
        <BadgeSpinner />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="BadgeCustomColorsRaw">
      <template #title>Custom Colors</template>
      <template #example>
        <BadgeCustomColors />
      </template>
    </ExampleCard>
  </div>
</template>
