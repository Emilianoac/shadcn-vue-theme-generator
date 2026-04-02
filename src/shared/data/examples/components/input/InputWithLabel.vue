<script setup lang="ts">
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
</script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="input-demo-email" data-component-x-ray="FieldLabel"> Email </FieldLabel>
    <Input
      id="input-demo-email"
      type="email"
      placeholder="name@example.com"
      data-component-x-ray-trigger="Input"
    />
  </Field>
</template>
