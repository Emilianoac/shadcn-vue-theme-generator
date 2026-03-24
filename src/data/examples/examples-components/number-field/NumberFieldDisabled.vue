<script setup lang="ts">
import { MinusIcon, PlusIcon } from "lucide-vue-next";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";
</script>

<template>
  <NumberField
    :default-value="10"
    :min="0"
    :max="100"
    :disabled="true"
    data-component-x-ray="NumberField"
  >
    <NumberFieldContent data-component-x-ray-trigger="NumberFieldContent">
      <NumberFieldDecrement data-component-x-ray-trigger="NumberFieldDecrement">
        <MinusIcon />
      </NumberFieldDecrement>
      <NumberFieldInput />
      <NumberFieldIncrement data-component-x-ray-trigger="NumberFieldIncrement">
        <PlusIcon />
      </NumberFieldIncrement>
    </NumberFieldContent>
  </NumberField>
</template>
