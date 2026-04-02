<script setup lang="ts">
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import { Textarea } from "@/shared/components/ui/textarea";
</script>

<template>
  <FieldGroup data-component-x-ray="FieldGroup">
    <Field data-component-x-ray="Field">
      <FieldLabel for="textarea-basic" data-component-x-ray="FieldLabel">
        Basic Textarea
      </FieldLabel>
      <Textarea
        id="textarea-basic"
        placeholder="Enter your message"
        data-component-x-ray-trigger="Textarea"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="textarea-comments" data-component-x-ray="FielLabel"> Comments </FieldLabel>
      <Textarea
        id="textarea-comments"
        placeholder="Share your thoughts..."
        class="min-h-25"
        data-component-x-ray-trigger="Textarea"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        Maximum 500 characters allowed.
      </FieldDescription>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="textarea-bio" data-component-x-ray="FieldLabel"> Bio </FieldLabel>
      <FieldDescription data-component-x-ray="FieldDescription">
        Tell us about yourself in a few sentences.
      </FieldDescription>
      <Textarea
        id="textarea-bio"
        placeholder="I am a..."
        class="min-h-30"
        data-component-x-ray-trigger="Textarea"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="textarea-desc-after" data-component-x-ray="FieldLabel"> Message </FieldLabel>
      <Textarea
        id="textarea-desc-after"
        placeholder="Enter your message"
        data-component-x-ray-trigger="Textarea"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        Enter your message so it is long enough to test the layout.
      </FieldDescription>
    </Field>
    <Field data-invalid data-component-x-ray="Field">
      <FieldLabel for="textarea-invalid" data-component-x-ray="FieldLabel">
        Invalid Textarea
      </FieldLabel>
      <Textarea
        id="textarea-invalid"
        placeholder="This field has an error"
        :aria-invalid="true"
        data-component-x-ray-trigger="Textarea"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        This field contains validation errors.
      </FieldDescription>
    </Field>
    <Field data-disabled data-component-x-ray="Field">
      <FieldLabel for="textarea-disabled-field" data-component-x-ray="FieldLabel">
        Disabled Field
      </FieldLabel>
      <Textarea
        id="textarea-disabled-field"
        placeholder="Cannot edit"
        disabled
        data-component-x-ray-trigger="Textarea"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        This field is currently disabled.
      </FieldDescription>
    </Field>
  </FieldGroup>
</template>
