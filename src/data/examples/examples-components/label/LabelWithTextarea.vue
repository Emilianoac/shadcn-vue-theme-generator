<script setup lang="ts">
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
