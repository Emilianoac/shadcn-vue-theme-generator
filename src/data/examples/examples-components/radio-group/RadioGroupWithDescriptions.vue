<script setup lang="ts">
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
</script>

<template>
  <RadioGroup default-value="plus" data-component-x-ray="RadioGroup">
    <FieldLabel for="plus-plan" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <FieldContent data-component-x-ray-trigger="FieldContent">
          <div class="font-medium">Plus</div>
          <FieldDescription data-component-x-ray-trigger="FieldDescription">
            For individuals and small teams
          </FieldDescription>
        </FieldContent>
        <RadioGroupItem id="plus-plan" value="plus" data-component-x-ray-trigger="RadioGroupItem" />
      </Field>
    </FieldLabel>
    <FieldLabel for="pro-plan" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <FieldContent data-component-x-ray-trigger="FieldContent">
          <div class="font-medium">Pro</div>
          <FieldDescription data-component-x-ray-trigger="FieldDescription">
            For growing businesses
          </FieldDescription>
        </FieldContent>
        <RadioGroupItem id="pro-plan" value="pro" data-component-x-ray-trigger="RadioGroupItem" />
      </Field>
    </FieldLabel>
    <FieldLabel for="enterprise-plan" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <FieldContent data-component-x-ray-trigger="FieldContent">
          <div class="font-medium">Enterprise</div>
          <FieldDescription data-component-x-ray-trigger="FieldDescription">
            For large teams and enterprises
          </FieldDescription>
        </FieldContent>
        <RadioGroupItem
          id="enterprise-plan"
          value="enterprise"
          data-component-x-ray-trigger="RadioGroupItem"
        />
      </Field>
    </FieldLabel>
  </RadioGroup>
</template>
