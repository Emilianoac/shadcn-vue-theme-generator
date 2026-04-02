<script lang="ts" setup>
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
</script>

<template>
  <FieldGroup>
    <Field orientation="horizontal">
      <Checkbox id="checkbox-disabled-example" name="checkbox-disabled-example" disabled />
      <FieldLabel for="checkbox-disabled-example">Accept terms and conditions</FieldLabel>
    </Field>
  </FieldGroup>
</template>

<style lang="postcss" scoped></style>
