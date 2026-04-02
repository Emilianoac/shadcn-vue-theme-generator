<script setup lang="ts">
import { ref } from "vue";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";

const value = ref("");
const pinValue = ref("");
</script>

<template>
  <FieldGroup data-component-x-ray="FieldGroup">
    <Field data-component-x-ray="Field">
      <FieldLabel for="otp-basic" data-component-x-ray="FieldLabel"> Verification Code </FieldLabel>
      <InputOTP id="otp-basic" :maxlength="6" data-component-x-ray-trigger="InputOTP">
        <InputOTPGroup data-component-x-ray-trigger="InputOTPGroup">
          <InputOTPSlot :index="0" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="1" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="2" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="3" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="4" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="5" data-component-x-ray-trigger="InputOTPSlot" />
        </InputOTPGroup>
      </InputOTP>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="otp-with-desc" data-component-x-ray="FieldLabel"> Enter OTP </FieldLabel>
      <InputOTP
        id="otp-with-desc"
        v-model="value"
        :maxlength="6"
        data-component-x-ray-trigger="InputOTP"
      >
        <InputOTPGroup data-component-x-ray-trigger="InputOTPGroup">
          <InputOTPSlot :index="0" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="1" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="2" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="3" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="4" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="5" data-component-x-ray-trigger="InputOTPSlot" />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription data-component-x-ray="FieldDescription">
        Enter the 6-digit code sent to your email.
      </FieldDescription>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="otp-separator" data-component-x-ray="FieldLabel">
        Two-Factor Authentication
      </FieldLabel>
      <InputOTP id="otp-separator" :maxlength="6" data-component-x-ray-trigger="InputOTP">
        <InputOTPGroup data-component-x-ray-trigger="InputOTPGroup">
          <InputOTPSlot :index="0" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="1" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="2" data-component-x-ray-trigger="InputOTPSlot" />
        </InputOTPGroup>
        <InputOTPSeparator data-component-x-ray-trigger="InputOTPSeparator" />
        <InputOTPGroup>
          <InputOTPSlot :index="3" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="4" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="5" data-component-x-ray-trigger="InputOTPSlot" />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription data-component-x-ray="FieldDescription">
        Enter the code from your authenticator app.
      </FieldDescription>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="otp-pin" data-component-x-ray="FieldLabel"> PIN Code </FieldLabel>
      <InputOTP
        id="otp-pin"
        v-model="pinValue"
        :maxlength="4"
        pattern="[0-9]*"
        data-component-x-ray-trigger="InputOTP"
      >
        <InputOTPGroup data-component-x-ray-trigger="InputOTPGroup">
          <InputOTPSlot :index="0" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="1" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="2" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="3" data-component-x-ray-trigger="InputOTPSlot" />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription data-component-x-ray="FielDescription">
        Enter your 4-digit PIN (numbers only).
      </FieldDescription>
    </Field>
    <Field data-invalid data-component-x-ray="Field">
      <FieldLabel for="otp-invalid" data-component-x-ray="FieldLabel"> Invalid OTP </FieldLabel>
      <InputOTP id="otp-invalid" :maxlength="6" data-component-x-ray-trigger="InputOTP">
        <InputOTPGroup data-component-x-ray-trigger="InputOTPGroup">
          <InputOTPSlot :index="0" :aria-invalid="true" />
          <InputOTPSlot :index="1" :aria-invalid="true" />
          <InputOTPSlot :index="2" :aria-invalid="true" />
          <InputOTPSlot :index="3" :aria-invalid="true" />
          <InputOTPSlot :index="4" :aria-invalid="true" />
          <InputOTPSlot :index="5" :aria-invalid="true" />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription data-component-x-ray="FieldDescription">
        This OTP field contains validation errors.
      </FieldDescription>
    </Field>
    <Field data-disabled data-component-x-ray="Field">
      <FieldLabel for="otp-disabled-field" data-component-x-ray="FieldLabel">
        Disabled OTP
      </FieldLabel>
      <InputOTP
        id="otp-disabled-field"
        :maxlength="6"
        disabled
        data-component-x-ray-trigger="InputOTP"
      >
        <InputOTPGroup data-component-x-ray-trigger="InputOTPGroup">
          <InputOTPSlot :index="0" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="1" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="2" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="3" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="4" data-component-x-ray-trigger="InputOTPSlot" />
          <InputOTPSlot :index="5" data-component-x-ray-trigger="InputOTPSlot" />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription data-component-x-ray="FieldDescription">
        This OTP field is currently disabled.
      </FieldDescription>
    </Field>
  </FieldGroup>
</template>
