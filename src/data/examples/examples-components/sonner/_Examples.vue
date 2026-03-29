<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import SonnerBasic from "./SonnerBasic.vue";
import SonnerBasicRaw from "./SonnerBasic.vue?raw";
import SonnerWithDescription from "./SonnerWithDescription.vue";
import SonnerWithDescriptionRaw from "./SonnerWithDescription.vue?raw";
import SonnerSuccess from "./SonnerSuccess.vue";
import SonnerSuccessRaw from "./SonnerSuccess.vue?raw";
import SonnerError from "./SonnerError.vue";
import SonnerErrorRaw from "./SonnerError.vue?raw";
import SonnerLoading from "./SonnerLoading.vue";
import SonnerLoadingRaw from "./SonnerLoading.vue?raw";
import SonnerCustom from "./SonnerCustom.vue";
import SonnerCustomRaw from "./SonnerCustom.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="SonnerBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <SonnerBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SonnerWithDescriptionRaw">
        <template #title> With Description </template>
        <template #example>
          <SonnerWithDescription />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SonnerSuccessRaw">
        <template #title> Success </template>
        <template #example>
          <SonnerSuccess />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SonnerErrorRaw">
        <template #title> Error </template>
        <template #example>
          <SonnerError />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SonnerLoadingRaw">
        <template #title> Loading </template>
        <template #example>
          <SonnerLoading />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="SonnerCustomRaw">
        <template #title> Custom </template>
        <template #example>
          <SonnerCustom />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
