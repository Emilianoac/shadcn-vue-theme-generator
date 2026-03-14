<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import CarouselDefault from "./CarouselDefault.vue";
import CarouselDefaultRaw from "./CarouselDefault.vue?raw";
import CarouselMultiple from "./CarouselMultiple.vue";
import CarouselMultipleRaw from "./CarouselMultiple.vue?raw";
import CarouselWithImages from "./CarouselWithImages.vue";
import CarouselWithImagesRaw from "./CarouselWithImages.vue?raw";
import CarouselContainedControls from "./CarouselContainedControls.vue";
import CarouselContainedControlsRaw from "./CarouselContainedControls.vue?raw";
import CarouselVertical from "./CarouselVertical.vue";
import CarouselVerticalRaw from "./CarouselVertical.vue?raw";
import CarouselVerticalWithImages from "./CarouselVerticalImages.vue";
import CarouselVerticalWithImagesRaw from "./CarouselVerticalImages.vue?raw";
</script>

<template>
  <div class="@container w-full mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="CarouselDefaultRaw">
        <template #title>Default</template>
        <template #example>
          <CarouselDefault />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CarouselMultipleRaw">
        <template #title>Multiple Items</template>
        <template #example>
          <CarouselMultiple />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CarouselWithImagesRaw">
        <template #title>With Images</template>
        <template #example>
          <CarouselWithImages />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CarouselContainedControlsRaw">
        <template #title>Contained Controls</template>
        <template #example>
          <CarouselContainedControls />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CarouselVerticalRaw">
        <template #title>Vertical</template>
        <template #example>
          <CarouselVertical />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CarouselVerticalWithImagesRaw">
        <template #title>Vertical with Images</template>
        <template #example>
          <CarouselVerticalWithImages />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
