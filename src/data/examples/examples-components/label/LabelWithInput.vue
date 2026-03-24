<script setup lang="ts">
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
</script>

<template>
  <Field>
    <Label for="label-demo-username" data-component-x-ray="Label">Username</Label>
    <Input id="label-demo-username" placeholder="Username" data-component-x-ray-trigger="Input" />
  </Field>
</template>
