<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import FieldInput from "./FieldInput.vue";
import FieldInputRaw from "./FieldInput.vue?raw";
import FieldTextarea from "./FieldTextarea.vue";
import FieldTextareaRaw from "./FieldTextarea.vue?raw";
import FieldSelect from "./FieldSelect.vue";
import FieldSelectRaw from "./FieldSelect.vue?raw";
import FieldCheckbox from "./FieldCheckbox.vue";
import FieldCheckboxRaw from "./FieldCheckbox.vue?raw";
import FieldRadio from "./FieldRadio.vue";
import FieldRadioRaw from "./FieldRadio.vue?raw";
import FieldSwitch from "./FieldSwitch.vue";
import FieldSwitchRaw from "./FieldSwitch.vue?raw";
import FieldSlider from "./FieldSlider.vue";
import FieldSliderRaw from "./FieldSlider.vue?raw";
import FieldInputOTP from "./FieldInputOTP.vue";
import FieldInputOTPRaw from "./FieldInputOTP.vue?raw";
</script>

<template>
  <div class="@container max-w-250 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="FieldInputRaw">
        <template #title> Inputs fields </template>
        <template #example>
          <FieldInput />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="FieldTextareaRaw">
        <template #title> Textarea fields </template>
        <template #example>
          <FieldTextarea />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="FieldSelectRaw">
        <template #title> Select fields </template>
        <template #example>
          <FieldSelect />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="FieldCheckboxRaw">
        <template #title> Checkbox fields </template>
        <template #example>
          <FieldCheckbox />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="FieldRadioRaw">
        <template #title> Radio fields </template>
        <template #example>
          <FieldRadio />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="FieldSwitchRaw">
        <template #title> Switch fields </template>
        <template #example>
          <FieldSwitch />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="FieldSliderRaw">
        <template #title> Slider fields </template>
        <template #example>
          <FieldSlider />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="FieldInputOTPRaw">
        <template #title> OTP Input fields </template>
        <template #example>
          <FieldInputOTP />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
