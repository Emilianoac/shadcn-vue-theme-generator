<script setup lang="ts">
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/shared/components/ui/field";
</script>

<template>
  <FieldGroup data-component-x-ray="FieldGroup">
    <Field orientation="horizontal" data-component-x-ray="Field">
      <Checkbox
        id="checkbox-basic"
        :default-checked="true"
        data-component-x-ray-trigger="Checkbox"
      />
      <FieldLabel for="checkbox-basic" class="font-normal" data-component-x-ray="FieldLabel">
        I agree to the terms and conditions
      </FieldLabel>
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <FieldLabel for="checkbox-right" data-component-x-ray="FieldLabel">
        Accept terms and conditions
      </FieldLabel>
      <Checkbox id="checkbox-right" data-component-x-ray-trigger="Checkbox" />
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <Checkbox id="checkbox-with-desc" data-component-x-ray-trigger="Checkbox" />
      <FieldContent data-component-x-ray="FieldContent">
        <FieldLabel for="checkbox-with-desc" data-component-x-ray="FieldLabel">
          Subscribe to newsletter
        </FieldLabel>
        <FieldDescription data-component-x-ray="FieldDescription">
          Receive weekly updates about new features and promotions.
        </FieldDescription>
      </FieldContent>
    </Field>
    <FieldLabel for="checkbox-with-title" data-component-x-ray="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <Checkbox id="checkbox-with-title" data-component-x-ray-trigger="Checkbox" />
        <FieldContent data-component-x-ray-trigger="FieldContent">
          <FieldTitle data-component-x-ray-trigger="FieldTitle">Enable Touch ID</FieldTitle>
          <FieldDescription data-component-x-ray-trigger="FieldDescription">
            Enable Touch ID to quickly unlock your device.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldLabel>
    <FieldSet data-component-x-ray="FieldSet">
      <FieldLegend variant="label" data-component-x-ray="FieldLegend"> Preferences </FieldLegend>
      <FieldDescription data-component-x-ray="FieldDescription">
        Select all that apply to customize your experience.
      </FieldDescription>
      <FieldGroup class="gap-3" data-component-x-ray="FieldGroup">
        <Field orientation="horizontal" data-component-x-ray="Field">
          <Checkbox id="pref-dark" data-component-x-ray-trigger="Checkbox" />
          <FieldLabel for="pref-dark" class="font-normal" data-component-x-ray="FieldLabel">
            Dark mode
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-component-x-ray="Field">
          <Checkbox id="pref-compact" data-component-x-ray-trigger="Checkbox" />
          <FieldLabel for="pref-compact" class="font-normal" data-component-x-ray="FieldLabel">
            Compact view
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-component-x-ray="Field">
          <Checkbox id="pref-notifications" data-component-x-ray-trigger="Checkbox" />
          <FieldLabel
            for="pref-notifications"
            class="font-normal"
            data-component-x-ray="FieldLabel"
          >
            Enable notifications
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
    <Field data-invalid orientation="horizontal" data-component-x-ray="Field">
      <Checkbox
        id="checkbox-invalid"
        :aria-invalid="true"
        data-component-x-ray-trigger="Checkbox"
      />
      <FieldLabel for="checkbox-invalid" class="font-normal" data-component-x-ray="FieldLabel">
        Invalid checkbox
      </FieldLabel>
    </Field>
    <Field data-disabled orientation="horizontal" data-component-x-ray="Field">
      <Checkbox id="checkbox-disabled-field" disabled />
      <FieldLabel
        for="checkbox-disabled-field"
        class="font-normal"
        data-component-x-ray="FieldLabel"
      >
        Disabled checkbox
      </FieldLabel>
    </Field>
  </FieldGroup>
</template>
