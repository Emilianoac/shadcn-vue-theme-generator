<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
</script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel html-for="progress-upload" data-component-x-ray="FieldLabel">
      <span>Upload progress</span>
      <span class="ml-auto">66%</span>
    </FieldLabel>
    <Progress id="progress-upload" :model-value="66" data-component-x-ray="Progress" />
  </Field>
</template>
