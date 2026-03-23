<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
</script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="input-demo-username" data-component-x-ray="FieldLabel"> Username </FieldLabel>
    <Input
      id="input-demo-username"
      type="text"
      placeholder="Enter your username"
      data-component-x-ray-trigger="Input"
    />
    <FieldDescription data-component-x-ray="FieldDescription">
      Choose a unique username for your account.
    </FieldDescription>
  </Field>
</template>
