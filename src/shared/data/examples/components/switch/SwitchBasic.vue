<script setup lang="ts">
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Switch } from "@/shared/components/ui/switch";
</script>

<template>
  <Field orientation="horizontal" data-component-x-ray="Field">
    <Switch id="switch-basic" data-component-x-ray-trigger="Switch" />
    <FieldLabel for="switch-basic" data-component-x-ray="FieldLabel"> Airplane Mode </FieldLabel>
  </Field>
</template>
