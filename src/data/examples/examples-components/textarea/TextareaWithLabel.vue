<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
</script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="textarea-demo-message" data-component-x-ray="FieldLabel"> Message </FieldLabel>
    <Textarea
      id="textarea-demo-message"
      placeholder="Type your message here."
      :rows="6"
      data-component-x-ray-trigger="Textarea"
    />
  </Field>
</template>
