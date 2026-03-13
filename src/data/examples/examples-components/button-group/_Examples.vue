<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import ButtonGroupDefault from "./ButtonGroupDefault.vue";
import ButtonGroupDefaultRaw from "./ButtonGroupDefault.vue?raw";
import ButtonGroupWithInput from "./ButtonGroupWithInput.vue";
import ButtonGroupWithInputRaw from "./ButtonGroupWithInput.vue?raw";
import ButtonGroupWithDropdown from "./ButtonGroupWithDropdown.vue";
import ButtonGroupWithDropdownRaw from "./ButtonGroupWithDropdown.vue?raw";
import ButtonGroupWithSelect from "./ButtonGroupWithSelect.vue";
import ButtonGroupWithSelectRaw from "./ButtonGroupWithSelect.vue?raw";
import ButtonGroupWithIcons from "./ButtonGroupWithIcons.vue";
import ButtonGroupWithIconsRaw from "./ButtonGroupWithIcons.vue?raw";
import ButtonGroupVertical from "./ButtonGroupVertical.vue";
import ButtonGroupVerticalRaw from "./ButtonGroupVertical.vue?raw";

defineOptions({
  name: "ButtonGroupExamples",
});
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="ButtonGroupDefaultRaw">
        <template #title>Default</template>
        <template #example>
          <ButtonGroupDefault />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="ButtonGroupWithInputRaw">
        <template #title>With Input</template>
        <template #example>
          <ButtonGroupWithInput />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="ButtonGroupWithDropdownRaw">
        <template #title>With Dropdown</template>
        <template #example>
          <ButtonGroupWithDropdown />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="ButtonGroupWithSelectRaw">
        <template #title>With Select</template>
        <template #example>
          <ButtonGroupWithSelect />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="ButtonGroupWithIconsRaw">
        <template #title>With Icons</template>
        <template #example>
          <ButtonGroupWithIcons />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="ButtonGroupVerticalRaw">
        <template #title>Vertical</template>
        <template #example>
          <ButtonGroupVertical />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
