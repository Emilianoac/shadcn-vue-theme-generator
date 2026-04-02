<script setup lang="ts">
import { Textarea } from "@/shared/components/ui/textarea";
</script>

<template>
  <Textarea
    placeholder="Type your message here."
    :aria-invalid="true"
    data-component-x-ray-trigger="Textarea"
  />
</template>
