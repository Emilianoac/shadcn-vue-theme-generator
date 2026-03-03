<script lang="ts" setup>
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
</script>

<template>
  <div class="space-y-5">
    <Alert variant="default">
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
    </Alert>
    <Alert>
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription> This is an alert with title and description </AlertDescription>
    </Alert>
    <Alert>
      <AlertDescription> This one has a description only. No title. No icon. </AlertDescription>
    </Alert>
  </div>
</template>

<style lang="postcss" scoped></style>
