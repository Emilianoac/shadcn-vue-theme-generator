<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import DialogWithForm from "./DialogWithForm.vue";
import DialogWithFormRaw from "./DialogWithForm.vue?raw";
import DialogScrollableContent from "./DialogScrollableContent.vue";
import DialogScrollableContentRaw from "./DialogScrollableContent.vue?raw";
import DialogWithStickyFooter from "./DialogWithStickyFooter.vue";
import DialogWithStickyFooterRaw from "./DialogWithStickyFooter.vue?raw";
import DialogNoCloseButton from "./DialogNoCloseButton.vue";
import DialogNoCloseButtonRaw from "./DialogNoCloseButton.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="DialogWithFormRaw">
        <template #title> With Form </template>
        <template #example>
          <DialogWithForm />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="DialogScrollableContentRaw">
        <template #title> Scrollable Content </template>
        <template #example>
          <DialogScrollableContent />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="DialogWithStickyFooterRaw">
        <template #title> Sticky Footer </template>
        <template #example>
          <DialogWithStickyFooter />
        </template>
      </ExampleCard>
      <ExampleCard :raw-component="DialogNoCloseButtonRaw">
        <template #title> No Close Button </template>
        <template #example>
          <DialogNoCloseButton />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
