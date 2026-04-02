<script setup lang="ts">
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
</script>

<template>
  <RadioGroup default-value="comfortable" data-component-x-ray="RadioGroup">
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem id="r1" value="default" data-component-x-ray-trigger="RadioGroupItem" />
      <FieldLabel for="r1" class="font-normal" data-component-x-ray="FieldLabel">
        Default
      </FieldLabel>
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem id="r2" value="comfortable" data-component-x-ray-trigger="RadioGroupItem" />
      <FieldLabel for="r2" class="font-normal" data-component-x-ray="FieldLabel">
        Comfortable
      </FieldLabel>
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem id="r3" value="compact" data-component-x-ray-trigger="RadioGroupItem" />
      <FieldLabel for="r3" class="font-normal" data-component-x-ray="FieldLabel">
        Compact
      </FieldLabel>
    </Field>
  </RadioGroup>
</template>
