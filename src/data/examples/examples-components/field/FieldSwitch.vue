<script setup lang="ts">
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
</script>

<template>
  <FieldGroup data-component-x-ray="FieldGroup">
    <Field orientation="horizontal" data-component-x-ray="Field">
      <FieldContent data-component-x-ray="FieldContent">
        <FieldLabel for="switch-airplane" data-component-x-ray="FieldLabel">
          Airplane Mode
        </FieldLabel>
        <FieldDescription data-component-x-ray="FieldDescription">
          Turn on airplane mode to disable all connections.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-airplane" data-component-x-ray-trigger="Switch" />
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <FieldLabel for="switch-dark" data-component-x-ray="FieldLabel"> Dark Mode </FieldLabel>
      <Switch id="switch-dark" data-component-x-ray-trigger="Switch" />
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <Switch id="switch-marketing" data-component-x-ray-trigger="Switch" />
      <FieldContent data-component-x-ray="FieldContent">
        <FieldLabel for="switch-marketing" data-component-x-ray="FieldLabel">
          Marketing Emails
        </FieldLabel>
        <FieldDescription data-component-x-ray="FieldDescription">
          Receive emails about new products, features, and more.
        </FieldDescription>
      </FieldContent>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel data-component-x-ray="FieldLabel">Privacy Settings</FieldLabel>
      <FieldDescription data-component-x-ray="FieldDescription">
        Manage your privacy preferences.
      </FieldDescription>
      <Field orientation="horizontal" data-component-x-ray="Field">
        <Switch id="switch-profile" :default-checked="true" data-component-x-ray-trigger="Switch" />
        <FieldContent data-component-x-ray="FieldContent">
          <FieldLabel for="switch-profile" class="font-normal" data-component-x-ray="FieldLabel">
            Make profile visible to others
          </FieldLabel>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-component-x-ray="Field">
        <Switch id="switch-email" data-component-x-ray-trigger="Switch" />
        <FieldContent data-component-x-ray="FieldContent">
          <FieldLabel for="switch-email" class="font-normal" data-component-x-ray="FieldLabel">
            Show email on profile
          </FieldLabel>
        </FieldContent>
      </Field>
    </Field>
    <Field data-invalid orientation="horizontal" data-component-x-ray="Field">
      <FieldContent data-component-x-ray="FieldContent">
        <FieldLabel for="switch-invalid" data-component-x-ray="FieldLabel">
          Invalid Switch
        </FieldLabel>
        <FieldDescription data-component-x-ray="FieldDescription">
          This switch has validation errors.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-invalid" :aria-invalid="true" data-component-x-ray-trigger="Switch" />
    </Field>
    <Field data-disabled orientation="horizontal" data-component-x-ray="Field">
      <FieldContent data-component-x-ray="FieldContent">
        <FieldLabel for="switch-disabled-field" data-component-x-ray="FieldLabel">
          Disabled Switch
        </FieldLabel>
        <FieldDescription data-component-x-ray="FieldDescription">
          This switch is currently disabled.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-disabled-field" disabled data-component-x-ray-trigger="Switch" />
    </Field>
  </FieldGroup>
</template>
