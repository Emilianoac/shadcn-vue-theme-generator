<script lang="ts" setup>
import { Alert, AlertDescription, AlertTitle } from "@/shared/components/ui/alert";
</script>

<template>
  <div class="space-y-5">
    <Alert variant="default" data-component-x-ray="Alert">
      <AlertTitle data-component-x-ray="AlertTitle">
        Success! Your changes have been saved
      </AlertTitle>
    </Alert>
    <Alert variant="default" data-component-x-ray="Alert">
      <AlertTitle data-component-x-ray="AlertTitle">
        Success! Your changes have been saved
      </AlertTitle>
      <AlertDescription data-component-x-ray="AlertDescription">
        This is an alert with title and description
      </AlertDescription>
    </Alert>
    <Alert variant="default" data-component-x-ray="Alert">
      <AlertDescription data-component-x-ray="AlertDescription">
        This one has a description only. No title. No icon.
      </AlertDescription>
    </Alert>
  </div>
</template>

<style lang="postcss" scoped></style>
