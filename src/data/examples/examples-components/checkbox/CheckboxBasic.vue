<script lang="ts" setup>
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
</script>

<template>
  <FieldGroup>
    <Field orientation="horizontal">
      <Checkbox id="checkbox-basic-example" name="checkbox-basic-example" />
      <FieldLabel for="checkbox-basic-example">Accept terms and conditions</FieldLabel>
    </Field>
  </FieldGroup>
</template>

<style lang="postcss" scoped></style>
