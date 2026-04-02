<script setup lang="ts">
import { Field } from "@/shared/components/ui/field";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
</script>

<template>
  <Field data-component-x-ray="Field">
    <Label for="label-demo-message" data-component-x-ray="Label"> Message </Label>
    <Textarea
      id="label-demo-message"
      placeholder="Message"
      data-component-x-ray-trigger="Textarea"
    />
  </Field>
</template>
