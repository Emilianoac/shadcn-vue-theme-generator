<script setup lang="ts">
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
</script>

<template>
  <Field :data-disabled="true" data-component-x-ray="Field">
    <Label for="label-demo-disabled" data-component-x-ray="Label"> Disabled </Label>
    <Input
      id="label-demo-disabled"
      placeholder="Disabled"
      disabled
      data-component-x-ray-trigger="Input"
    />
  </Field>
</template>
