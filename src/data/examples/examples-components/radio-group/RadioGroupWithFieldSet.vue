<script setup lang="ts">
import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
</script>

<template>
  <FieldSet data-component-x-ray="FieldSet">
    <FieldLegend data-component-x-ray="FieldLegend">Battery Level</FieldLegend>
    <FieldDescription data-component-x-ray="FieldDescription">
      Choose your preferred battery level.
    </FieldDescription>
    <RadioGroup default-value="medium" data-component-x-ray="RadioGroup">
      <Field orientation="horizontal" data-component-x-ray="Field">
        <RadioGroupItem
          id="battery-high"
          value="high"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="battery-high" class="font-normal" data-component-x-ray="FieldLabel">
          High
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" data-component-x-ray="Field">
        <RadioGroupItem
          id="battery-medium"
          value="medium"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="battery-medium" class="font-normal" data-component-x-ray="FieldLabel">
          Medium
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" data-component-x-ray="Field">
        <RadioGroupItem
          id="battery-low"
          value="low"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="battery-low" class="font-normal" data-component-x-ray="FieldLabel">
          Low
        </FieldLabel>
      </Field>
    </RadioGroup>
  </FieldSet>
</template>
