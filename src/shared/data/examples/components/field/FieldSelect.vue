<script setup lang="ts">
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
</script>

<template>
  <FieldGroup data-component-x-ray="FieldGroup">
    <Field data-component-x-ray="Field">
      <FieldLabel for="select-basic" data-component-x-ray="FieldLabel"> Basic Select </FieldLabel>
      <Select data-component-x-ray="Select">
        <SelectTrigger id="select-basic" data-component-x-ray-trigger="SelectTrigger">
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent data-component-x-ray="SelectContent">
          <SelectItem value="option1" data-component-x-ray-trigger="SelectItem">
            Option 1
          </SelectItem>
          <SelectItem value="option2" data-component-x-ray-trigger="SelectItem">
            Option 2
          </SelectItem>
          <SelectItem value="option3" data-component-x-ray-trigger="SelectItem">
            Option 3
          </SelectItem>
        </SelectContent>
      </Select>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="select-country" data-component-x-ray="SelectLabel"> Country </FieldLabel>
      <Select data-component-x-ray="Select">
        <SelectTrigger id="select-country" data-component-x-ray-trigger="SelectTrigger">
          <SelectValue placeholder="Select your country" />
        </SelectTrigger>
        <SelectContent data-component-x-ray="SelectContent">
          <SelectItem value="us" data-component-x-ray-trigger="SelectItem">
            United States
          </SelectItem>
          <SelectItem value="uk" data-component-x-ray-trigger="SelectItem">
            United Kingdom
          </SelectItem>
          <SelectItem value="ca" data-component-x-ray-trigger="SelectItem"> Canada </SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription data-component-x-ray="SelectDescription">
        Select the country where you currently reside.
      </FieldDescription>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="select-timezone" data-component-x-ray="FieldLabel"> Timezone </FieldLabel>
      <FieldDescription data-component-x-ray="SelectDescription">
        Choose your local timezone for accurate scheduling.
      </FieldDescription>
      <Select data-component-x-ray="Select">
        <SelectTrigger id="select-timezone" data-component-x-ray-trigger="SelectTrigger">
          <SelectValue placeholder="Select timezone" />
        </SelectTrigger>
        <SelectContent data-component-x-ray="SelectContent">
          <SelectItem value="utc" data-component-x-ray-trigger="SelectItem"> UTC </SelectItem>
          <SelectItem value="est" data-component-x-ray-trigger="SelectItem">
            Eastern Time
          </SelectItem>
          <SelectItem value="pst" data-component-x-ray-trigger="SelectItem">
            Pacific Time
          </SelectItem>
        </SelectContent>
      </Select>
    </Field>
    <Field data-invalid data-component-x-ray="Field">
      <FieldLabel for="select-invalid" data-component-x-ray="FieldLabel">
        Invalid Select
      </FieldLabel>
      <Select>
        <SelectTrigger
          id="select-invalid"
          :aria-invalid="true"
          data-component-x-ray-trigger="SelectTrigger"
        >
          <SelectValue placeholder="This field has an error" />
        </SelectTrigger>
        <SelectContent data-component-x-ray="SelectContent">
          <SelectItem value="option1" data-component-x-ray-trigger="SelectItem">
            Option 1
          </SelectItem>
          <SelectItem value="option2" data-component-x-ray-trigger="SelectItem">
            Option 2
          </SelectItem>
          <SelectItem value="option3" data-component-x-ray-trigger="SelectItem">
            Option 3
          </SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription data-component-x-ray="FieldDescription">
        This field contains validation errors.
      </FieldDescription>
    </Field>
    <Field data-disabled data-component-x-ray="Field">
      <FieldLabel for="select-disabled-field" data-component-x-ray="FieldLabel">
        Disabled Field
      </FieldLabel>
      <Select :disabled="true" data-component-x-ray="Select">
        <SelectTrigger id="select-disabled-field" data-component-x-ray-trigger="SelectTrigger">
          <SelectValue placeholder="Cannot select" />
        </SelectTrigger>
        <SelectContent data-component-x-ray="SelectContent">
          <SelectItem value="option1" data-component-x-ray-trigger="SelectItem">
            Option 1
          </SelectItem>
          <SelectItem value="option2" data-component-x-ray-trigger="SelectItem">
            Option 2
          </SelectItem>
          <SelectItem value="option3" data-component-x-ray-trigger="SelectItem">
            Option 3
          </SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription data-component-x-ray="FieldDescription">
        This field is currently disabled.
      </FieldDescription>
    </Field>
  </FieldGroup>
</template>
