<script setup lang="ts">
import ExampleCard from "../../ExampleCard.vue";
import ButtonVariantsSizes from "./ButtonVariantsSizes.vue";
import ButtonVariantsSizesRaw from "./ButtonVariantsSizes.vue?raw";
import ButtonIconRight from "./ButtonIconRight.vue";
import ButtonIconRightRaw from "./ButtonIconRight.vue?raw";
import ButtonIconLeft from "./ButtonIconLeft.vue";
import ButtonIconLeftRaw from "./ButtonIconLeft.vue?raw";
import ButtonIconOnly from "./ButtonIconOnly.vue";
import ButtonIconOnlyRaw from "./ButtonIconOnly.vue?raw";
</script>

<template>
  <div class="space-y-8 max-w-200 mx-auto">
    <ExampleCard :raw-component="ButtonVariantsSizesRaw">
      <template #title>Variants & Sizes</template>
      <template #example>
        <ButtonVariantsSizes />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="ButtonIconRightRaw">
      <template #title>Icon Right</template>
      <template #example>
        <ButtonIconRight />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="ButtonIconLeftRaw">
      <template #title>Icon Left</template>
      <template #example>
        <ButtonIconLeft />
      </template>
    </ExampleCard>
    <ExampleCard :raw-component="ButtonIconOnlyRaw">
      <template #title>Icon Only</template>
      <template #example>
        <ButtonIconOnly />
      </template>
    </ExampleCard>
  </div>
</template>
