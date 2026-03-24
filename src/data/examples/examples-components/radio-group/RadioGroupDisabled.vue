<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
</script>

<template>
  <RadioGroup default-value="option2" :disabled="true" data-component-x-ray="RadioGroup">
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem
        id="disabled-1"
        value="option1"
        data-component-x-ray-trigger="RadioGroupItem"
      />
      <FieldLabel for="disabled-1" class="font-normal" data-component-x-ray="FieldLabel">
        Option 1
      </FieldLabel>
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem
        id="disabled-2"
        value="option2"
        data-component-x-ray-trigger="RadioGroupItem"
      />
      <FieldLabel for="disabled-2" class="font-normal" data-component-x-ray="FieldLabel">
        Option 2
      </FieldLabel>
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem
        id="disabled-3"
        value="option3"
        data-component-x-ray-trigger="RadioGroupItem"
      />
      <FieldLabel for="disabled-3" class="font-normal" data-component-x-ray="FieldLabel">
        Option 3
      </FieldLabel>
    </Field>
  </RadioGroup>
</template>
