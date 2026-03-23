<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
</script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="input-demo-disabled" data-component-x-ray="FieldLabel"> Email </FieldLabel>
    <Input
      id="input-demo-disabled"
      type="email"
      placeholder="Email"
      :disabled="true"
      data-component-x-ray-trigger="Input"
    />
  </Field>
</template>
