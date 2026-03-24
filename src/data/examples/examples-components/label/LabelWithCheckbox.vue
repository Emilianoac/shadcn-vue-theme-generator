<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
</script>

<template>
  <Field orientation="horizontal" data-component-x-ray="Field">
    <Checkbox id="label-demo-terms" data-component-x-ray-trigger="Checkbox" />
    <Label for="label-demo-terms" data-component-x-ray="Label"> Accept terms and conditions </Label>
  </Field>
</template>
