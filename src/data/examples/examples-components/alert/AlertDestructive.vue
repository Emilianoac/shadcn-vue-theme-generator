<script lang="ts" setup>
import { AlertCircleIcon } from "lucide-vue-next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
</script>

<template>
  <div class="max-w-150 mx-auto space-y-6">
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Something went wrong!</AlertTitle>
      <AlertDescription> Your session has expired. Please log in again. </AlertDescription>
    </Alert>
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>
        <p>Please verify your billing information and try again.</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>Check your card details</li>
          <li>Ensure sufficient funds</li>
          <li>Verify billing address</li>
        </ul>
      </AlertDescription>
    </Alert>
  </div>
</template>

<style lang="postcss" scoped></style>
