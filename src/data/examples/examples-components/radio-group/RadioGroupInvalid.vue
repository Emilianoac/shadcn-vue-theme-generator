<script setup lang="ts">
import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
</script>

<template>
  <FieldSet data-component-x-ray="FieldSet">
    <FieldLegend data-component-x-ray="FieldLegend">Notification Preferences</FieldLegend>
    <FieldDescription data-component-x-ray="FieldDescription">
      Choose how you want to receive notifications.
    </FieldDescription>
    <RadioGroup default-value="email" data-component-x-ray="RadioGroup">
      <Field orientation="horizontal" data-invalid data-component-x-ray="Field">
        <RadioGroupItem
          id="invalid-email"
          value="email"
          :aria-invalid="true"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="invalid-email" class="font-normal" data-component-x-ray="FieldLabel">
          Email only
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" data-invalid data-component-x-ray="Field">
        <RadioGroupItem
          id="invalid-sms"
          value="sms"
          :aria-invalid="true"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="invalid-sms" class="font-normal" data-component-x-ray="FieldLabel">
          SMS only
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" data-invalid data-component-x-ray="Field">
        <RadioGroupItem
          id="invalid-both"
          value="both"
          :aria-invalid="true"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="invalid-both" class="font-normal" data-component-x-ray="FieldLabel">
          Both Email & SMS
        </FieldLabel>
      </Field>
    </RadioGroup>
  </FieldSet>
</template>
