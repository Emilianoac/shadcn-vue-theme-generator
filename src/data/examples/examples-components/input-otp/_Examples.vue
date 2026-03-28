<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import InputOTPBasic from "./InputOTPBasic.vue";
import InputOTPBasicRaw from "./InputOTPBasic.vue?raw";
import InputOTPWithSeparator from "./InputOTPWithSeparator.vue";
import InputOTPWithSeparatorRaw from "./InputOTPWithSeparator.vue?raw";
import InputOTPDisabled from "./InputOTPDisabled.vue";
import InputOTPDisabledRaw from "./InputOTPDisabled.vue?raw";
import InputOTPInvalid from "./InputOTPInvalid.vue";
import InputOTPInvalidRaw from "./InputOTPInvalid.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="InputOTPBasicRaw">
        <template #title> Basic </template>
        <template #example>
          <InputOTPBasic />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="InputOTPWithSeparatorRaw">
        <template #title> With Separator </template>
        <template #example>
          <InputOTPWithSeparator />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="InputOTPDisabledRaw">
        <template #title> Disabled </template>
        <template #example>
          <InputOTPDisabled />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="InputOTPInvalidRaw">
        <template #title> Invalid </template>
        <template #example>
          <InputOTPInvalid />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
