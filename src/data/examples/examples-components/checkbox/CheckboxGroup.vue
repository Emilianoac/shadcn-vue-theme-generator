<script lang="ts" setup>
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
</script>

<template>
  <FieldSet>
    <FieldLegend>Choose your favorite fruits</FieldLegend>
    <FieldDescription> Select all the fruits you like from the list below. </FieldDescription>
    <FieldGroup class="gap-3">
      <Field orientation="horizontal">
        <Checkbox id="fruit-apple" name="fruits" value="apple" />
        <FieldLabel for="fruit-apple">Apple</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="fruit-banana" name="fruits" value="banana" />
        <FieldLabel for="fruit-banana">Banana</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="fruit-orange" name="fruits" value="orange" />
        <FieldLabel for="fruit-orange">Orange</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="fruit-grape" name="fruits" value="grape" />
        <FieldLabel for="fruit-grape">Grape</FieldLabel>
      </Field>
    </FieldGroup>
  </FieldSet>
</template>

<style lang="postcss" scoped></style>
