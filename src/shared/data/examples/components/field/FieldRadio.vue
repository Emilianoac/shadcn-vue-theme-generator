<script setup lang="ts">
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
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
</script>

<template>
  <FieldGroup data-component-x-ray="FieldGroup">
    <FieldSet data-component-x-ray="FieldSet">
      <FieldLegend variant="label" data-component-x-ray="FieldLabel">
        Subscription Plan
      </FieldLegend>
      <RadioGroup default-value="free" data-component-x-ray="RadioGroup">
        <Field orientation="horizontal" data-component-x-ray="Field">
          <RadioGroupItem id="radio-free" value="free" data-component-x-ray="RadioGroupItem" />
          <FieldLabel
            for="radio-free"
            class="font-normal"
            data-component-x-ray-trigger="FieldLabel"
          >
            Free Plan
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-component-x-ray="Field">
          <RadioGroupItem
            id="radio-pro"
            value="pro"
            data-component-x-ray-trigger="RadioGroupItem"
          />
          <FieldLabel for="radio-pro" class="font-normal" data-component-x-ray="FielLabel">
            Pro Plan
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-component-x-ray="Field">
          <RadioGroupItem
            id="radio-enterprise"
            value="enterprise"
            data-component-x-ray-trigger="RadioGroupItem"
          />
          <FieldLabel for="radio-enterprise" class="font-normal" data-component-x-ray="FieldLabel">
            Enterprise
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
    <FieldSet data-component-x-ray="FieldSet">
      <FieldLegend variant="label" data-component-x-ray="FieldLegend"> Battery Level </FieldLegend>
      <FieldDescription data-component-x-ray="FielDescription">
        Choose your preferred battery level.
      </FieldDescription>
      <RadioGroup data-component-x-ray="RadioGroup">
        <Field orientation="horizontal" data-component-x-ray="Field">
          <RadioGroupItem
            id="battery-high"
            value="high"
            data-component-x-ray-trigger="RadioGroupItem"
          />
          <FieldLabel for="battery-high" data-component-x-ray="FieldLabel"> High </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-component-x-ray="Field">
          <RadioGroupItem
            id="battery-medium"
            value="medium"
            data-component-x-ray-trigger="RadioGroupItem"
          />
          <FieldLabel for="battery-medium" data-component-x-ray="FieldLabel"> Medium </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-component-x-ray="Field">
          <RadioGroupItem
            id="battery-low"
            value="low"
            data-component-x-ray-trigger="RadioGroupItem"
          />
          <FieldLabel for="battery-low" data-component-x-ray="FieldLabel"> Low </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
    <RadioGroup class="gap-6" data-component-x-ray="RadioGroup">
      <Field orientation="horizontal" data-component-x-ray="Field">
        <RadioGroupItem
          id="radio-content-1"
          value="option1"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldContent data-component-x-ray="FieldContent">
          <FieldLabel for="radio-content-1" data-component-x-ray="FieldLabel">
            Enable Touch ID
          </FieldLabel>
          <FieldDescription data-component-x-ray="FieldDescription">
            Enable Touch ID to quickly unlock your device.
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-component-x-ray="Field">
        <RadioGroupItem
          id="radio-content-2"
          value="option2"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldContent data-component-x-ray="FieldContent">
          <FieldLabel for="radio-content-2" data-component-x-ray="FieldLabel">
            Enable Touch ID and Face ID to make it even faster to unlock your device. This is a long
            label to test the layout.
          </FieldLabel>
          <FieldDescription data-component-x-ray="FieldDescription">
            Enable Touch ID to quickly unlock your device.
          </FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
    <RadioGroup class="gap-3" data-component-x-ray="RadioGroup">
      <FieldLabel for="radio-title-1" data-component-x-ray-trigger="FieldLabel">
        <Field orientation="horizontal" data-component-x-ray-trigger="Field">
          <RadioGroupItem
            id="radio-title-1"
            value="title1"
            data-component-x-ray-trigger="RadioGroupItem"
          />
          <FieldContent data-component-x-ray-trigger="FieldContent">
            <FieldTitle data-component-x-ray-trigger="FieldTitle">Enable Touch ID</FieldTitle>
            <FieldDescription data-component-x-ray-trigger="FieldDescription">
              Enable Touch ID to quickly unlock your device.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
      <FieldLabel for="radio-title-2" data-component-x-ray-trigger="FieldLabel">
        <Field orientation="horizontal" data-component-x-ray-trigger="Field">
          <RadioGroupItem
            id="radio-title-2"
            value="title2"
            data-component-x-ray-trigger="RadioGroupItem"
          />
          <FieldContent data-component-x-ray-trigger="FieldContent">
            <FieldTitle data-component-x-ray-trigger="FieldTitle">
              Enable Touch ID and Face ID to make it even faster to unlock your device. This is a
              long label to test the layout.
            </FieldTitle>
            <FieldDescription data-component-x-ray-trigger="FieldDescription">
              Enable Touch ID to quickly unlock your device.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </RadioGroup>
    <FieldSet data-component-x-ray="FieldSet">
      <FieldLegend variant="label" data-component-x-ray="FieldLegend">
        Invalid Radio Group
      </FieldLegend>
      <RadioGroup data-invalid data-component-x-ray="RadioGroup">
        <Field data-invalid orientation="horizontal" data-component-x-ray="Field">
          <RadioGroupItem
            id="radio-invalid-1"
            value="invalid1"
            :aria-invalid="true"
            data-component-x-ray-trigger="RadioGroupItem"
          />
          <FieldLabel for="radio-invalid-1" data-component-x-ray="FieldLabel">
            Invalid Option 1
          </FieldLabel>
        </Field>
        <Field data-invalid orientation="horizontal" data-component-x-ray="Field">
          <RadioGroupItem
            id="radio-invalid-2"
            value="invalid2"
            :aria-invalid="true"
            data-component-x-ray-trigger="RadioGroupItem"
          />
          <FieldLabel for="radio-invalid-2" data-component-x-ray="FieldLabel">
            Invalid Option 2
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
    <FieldSet data-component-x-ray="FieldSet">
      <FieldLegend variant="label" data-component-x-ray="FieldLabeld">
        Disabled Radio Group
      </FieldLegend>
      <RadioGroup :disabled="true" data-component-x-ray="RadioGroup">
        <Field data-disabled orientation="horizontal" data-component-x-ray="Field">
          <RadioGroupItem
            id="radio-disabled-1"
            value="disabled1"
            disabled
            data-component-x-ray-trigger="RadioGroupItem"
          />
          <FieldLabel for="radio-disabled-1" data-component-x-ray="FieldLabel">
            Disabled Option 1
          </FieldLabel>
        </Field>
        <Field data-disabled orientation="horizontal" data-component-x-ray="Field">
          <RadioGroupItem
            id="radio-disabled-2"
            value="disabled2"
            disabled
            data-component-x-ray-trigger="RadioGroupItem"
          />
          <FieldLabel for="radio-disabled-2" data-component-x-ray="FieldLabel">
            Disabled Option 2
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  </FieldGroup>
</template>
