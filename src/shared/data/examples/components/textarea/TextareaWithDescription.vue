<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from "@/shared/components/ui/field";
import { Textarea } from "@/shared/components/ui/textarea";
</script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="textarea-demo-message-2" data-component-x-ray="FieldLabel">
      Message
    </FieldLabel>
    <Textarea
      id="textarea-demo-message-2"
      placeholder="Type your message here."
      :rows="6"
      data-component-x-ray-trigger="Textarea"
    />
    <FieldDescription data-component-x-ray="FieldDescription">
      Type your message and press enter to send.
    </FieldDescription>
  </Field>
</template>
