<script setup lang="ts">
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui/input-group";
import { Spinner } from "@/shared/components/ui/spinner";
</script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel html-for="input-group-spinner" data-component-x-ray="FieldLabel">
      Input Group
    </FieldLabel>
    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupInput
        id="input-group-spinner"
        placeholder="Loading..."
        data-component-x-ray-trigger="InputGroupInput"
      />
      <InputGroupAddon data-component-x-ray-trigger="InputGroupAddon">
        <Spinner data-component-x-ray-trigger="Spinner" />
      </InputGroupAddon>
    </InputGroup>
  </Field>
</template>
