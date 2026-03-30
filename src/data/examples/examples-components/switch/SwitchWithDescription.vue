<script setup lang="ts">
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
</script>

<template>
  <FieldLabel for="switch-focus-mode" data-component-x-ray-trigger="FieldLabel">
    <Field orientation="horizontal" data-component-x-ray-trigger="Field">
      <FieldContent data-component-x-ray-trigger="FieldContent">
        <FieldTitle data-component-x-ray-trigger="FieldLabel">Share across devices</FieldTitle>
        <FieldDescription data-component-x-ray-trigger="FieldDescription">
          Focus is shared across devices, and turns off when you leave the app.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-focus-mode" data-component-x-ray-trigger="Switch" />
    </Field>
  </FieldLabel>
</template>
