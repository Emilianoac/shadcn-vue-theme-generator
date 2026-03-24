<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
</script>

<template>
  <RadioGroup
    default-value="medium"
    class="grid grid-cols-2 gap-2"
    data-component-x-ray="RadioGroup"
  >
    <FieldLabel for="size-small" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <RadioGroupItem
          id="size-small"
          value="small"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <div class="font-medium">Small</div>
      </Field>
    </FieldLabel>
    <FieldLabel for="size-medium" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <RadioGroupItem
          id="size-medium"
          value="medium"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <div class="font-medium">Medium</div>
      </Field>
    </FieldLabel>
    <FieldLabel for="size-large" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <RadioGroupItem
          id="size-large"
          value="large"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <div class="font-medium">Large</div>
      </Field>
    </FieldLabel>
    <FieldLabel for="size-xlarge" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <RadioGroupItem
          id="size-xlarge"
          value="xlarge"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <div class="font-medium">X-Large</div>
      </Field>
    </FieldLabel>
  </RadioGroup>
</template>
