<script setup lang="ts">
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";
</script>

<template>
  <InputOTP :maxlength="6">
    <InputOTPGroup>
      <InputOTPSlot :index="0" :aria-invalid="true" />
      <InputOTPSlot :index="1" :aria-invalid="true" />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot :index="2" :aria-invalid="true" />
      <InputOTPSlot :index="3" :aria-invalid="true" />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot :index="4" :aria-invalid="true" />
      <InputOTPSlot :index="5" :aria-invalid="true" />
    </InputOTPGroup>
  </InputOTP>
</template>
