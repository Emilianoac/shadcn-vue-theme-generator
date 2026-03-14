<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import CardDefault from "./CardDefault.vue";
import CardDefaultRaw from "./CardDefault.vue?raw";
import CardHeaderWithBorder from "./CardHeaderWithBorder.vue";
import CardHeaderWithBorderRaw from "./CardHeaderWithBorder.vue?raw";
import CardFooterWithBorder from "./CardFooterWithBorder.vue";
import CardFooterWithBorderRaw from "./CardFooterWithBorder.vue?raw";
import CardWithImage from "./CardWithImage.vue";
import CardWithImageRaw from "./CardWithImage.vue?raw";
import CardWithImageFullSize from "./CardWithImageFullSize.vue";
import CardWithImageFullSizeRaw from "./CardWithImageFullSize.vue?raw";
import CardLogin from "./CardLogin.vue";
import CardLoginRaw from "./CardLogin.vue?raw";
</script>

<template>
  <div class="@container max-w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="CardDefaultRaw">
        <template #title>Default Card</template>
        <template #example>
          <CardDefault />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CardHeaderWithBorderRaw">
        <template #title>Header with Border</template>
        <template #example>
          <CardHeaderWithBorder />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CardFooterWithBorderRaw">
        <template #title>Footer with Border</template>
        <template #example>
          <CardFooterWithBorder />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CardWithImageRaw">
        <template #title>With Image</template>
        <template #example>
          <CardWithImage />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CardWithImageFullSizeRaw">
        <template #title>With Full-Width Image</template>
        <template #example>
          <CardWithImageFullSize />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="CardLoginRaw">
        <template #title>Login Form</template>
        <template #example>
          <CardLogin />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
