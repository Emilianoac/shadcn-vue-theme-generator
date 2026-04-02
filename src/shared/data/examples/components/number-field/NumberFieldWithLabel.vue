<script setup lang="ts">
import { MinusIcon, PlusIcon } from "lucide-vue-next";
import { Label } from "@/shared/components/ui/label";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/shared/components/ui/number-field";
</script>

<template>
  <div class="space-y-3">
    <Label for="quantity" data-component-x-ray="Label">Quantity</Label>
    <NumberField
      id="quantity"
      :default-value="5"
      :min="1"
      :max="50"
      :data-component-x-ray="NumberField"
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
  </div>
</template>
