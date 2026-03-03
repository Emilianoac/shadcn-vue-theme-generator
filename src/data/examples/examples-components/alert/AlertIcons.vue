<script lang="ts" setup>
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-vue-next";
</script>

<template>
  <div class="space-y-5">
    <Alert variant="default">
      <AlertCircleIcon />
      <AlertTitle>
        Let's try one with icon, title and a
        <a href="#" class="underline underline-offset-2">link</a>.
      </AlertTitle>
    </Alert>

    <Alert>
      <AlertCircleIcon />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription> This is an alert with icon, title and description. </AlertDescription>
    </Alert>

    <Alert>
      <AlertCircleIcon />
      <AlertTitle>
        This is a very long alert title that demonstrates how the component handles extended text
        content and potentially wraps across multiple lines
      </AlertTitle>
    </Alert>

    <Alert>
      <AlertCircleIcon />
      <AlertDescription>
        This is a very long alert description that demonstrates how the component handles extended
        text content and potentially wraps across multiple lines
      </AlertDescription>
    </Alert>

    <Alert>
      <AlertCircleIcon />
      <AlertTitle>
        This is an extremely long alert title that spans multiple lines to demonstrate how the
        component handles very lengthy headings while maintaining readability and proper text
        wrapping behavior
      </AlertTitle>
      <AlertDescription>
        This is an equally long description that contains detailed information about the alert. It
        shows how the component can accommodate extensive content while preserving proper spacing,
        alignment, and readability across different screen sizes and viewport widths. This helps
        ensure the user experience remains consistent regardless of the content length.
      </AlertDescription>
    </Alert>
  </div>
</template>

<style lang="postcss" scoped></style>
