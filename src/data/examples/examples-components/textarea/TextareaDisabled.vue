<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
</script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="textarea-demo-disabled" data-component-x-ray="FieldLabel">
      Message
    </FieldLabel>
    <Textarea
      id="textarea-demo-disabled"
      placeholder="Type your message here."
      :disabled="true"
      data-component-x-ray-trigger="Textarea"
    />
  </Field>
</template>
