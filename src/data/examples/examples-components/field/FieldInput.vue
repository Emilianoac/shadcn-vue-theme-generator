<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
</script>

<template>
  <FieldGroup data-component-x-ray="FieldGroup">
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-basic" data-component-x-ray="FieldLabel"> Basic Input </FieldLabel>
      <Input id="input-basic" placeholder="Enter text" data-component-x-ray-trigger="Input" />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-with-desc" data-component-x-ray="FielLabel">
        Input with Description
      </FieldLabel>
      <Input
        id="input-with-desc"
        placeholder="Enter your username"
        data-component-x-ray-trigger="Input"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        Choose a unique username for your account.
      </FieldDescription>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-desc-first" data-component-x-ray="FieldLabel">
        Email Address
      </FieldLabel>
      <FieldDescription data-component-x-ray="FieldDescription">
        We'll never share your email with anyone.
      </FieldDescription>
      <Input
        id="input-desc-first"
        type="email"
        placeholder="email@example.com"
        data-component-x-ray-trigger="Input"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-required" data-component-x-ray="FieldLabel">
        Required Field <span class="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="input-required"
        placeholder="This field is required"
        required
        data-component-x-ray-trigger="Input"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        This field must be filled out.
      </FieldDescription>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-disabled" data-component-x-ray="FieldLabel">
        Disabled Input
      </FieldLabel>
      <Input
        id="input-disabled"
        placeholder="Cannot edit"
        disabled
        data-component-x-ray-trigger="Input"
      />
      <FieldDescription data-component-x-ray="FieldDescription"
        >This field is currently disabled.</FieldDescription
      >
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-badge" data-component-x-ray="FieldLabel">
        Input with Badge
        <Badge variant="secondary" class="ml-auto"> Recommended </Badge>
      </FieldLabel>
      <Input id="input-badge" placeholder="Enter value" data-component-x-ray-trigger="Input" />
    </Field>
    <Field data-invalid data-component-x-ray="Field">
      <FieldLabel for="input-invalid" data-component-x-ray="FieldLabel"> Invalid Input </FieldLabel>
      <Input
        id="input-invalid"
        placeholder="This field has an error"
        :aria-invalid="true"
        data-component-x-ray-trigger="Input"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        This field contains validation errors.
      </FieldDescription>
    </Field>
    <Field data-disabled data-component-x-ray="Field">
      <FieldLabel for="input-disabled-field" data-component-x-ray="FieldLabel">
        Disabled Field
      </FieldLabel>
      <Input
        id="input-disabled-field"
        placeholder="Cannot edit"
        disabled
        data-component-x-ray-trigger="Input"
      />
      <FieldDescription data-component-x-ray="FieldDescription"
        >This field is currently disabled.</FieldDescription
      >
    </Field>
  </FieldGroup>
</template>
