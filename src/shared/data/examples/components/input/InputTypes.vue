<script setup lang="ts">
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-password" data-component-x-ray="FieldLabel">
        Password
      </FieldLabel>
      <Input
        id="input-demo-password"
        type="password"
        placeholder="Password"
        data-component-x-ray-trigger="Input"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-tel" data-component-x-ray="FieldLabel"> Phone </FieldLabel>
      <Input
        id="input-demo-tel"
        type="tel"
        placeholder="+1 (555) 123-4567"
        data-component-x-ray-trigger="Input"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-url" data-component-x-ray="FieldLabel"> URL </FieldLabel>
      <Input
        id="input-demo-url"
        type="url"
        placeholder="https://example.com"
        data-component-x-ray-trigger="Input"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-search" data-component-x-ray="FieldLabel"> Search </FieldLabel>
      <Input
        id="input-demo-search"
        type="search"
        placeholder="Search"
        data-component-x-ray-trigger="Input"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-number" data-component-x-ray="FieldLabel"> Number </FieldLabel>
      <Input
        id="input-demo-number"
        type="number"
        placeholder="123"
        data-component-x-ray-trigger="Input"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-date" data-component-x-ray="FieldLabel"> Date </FieldLabel>
      <Input id="input-demo-date" type="date" data-component-x-ray-trigger="Input" />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-time" data-component-x-ray="FieldLabel"> Time </FieldLabel>
      <Input id="input-demo-time" type="time" data-component-x-ray-trigger="Input" />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-file" data-component-x-ray="FieldLabel"> File </FieldLabel>
      <Input id="input-demo-file" type="file" data-component-x-ray-trigger="Input" />
    </Field>
  </div>
</template>
