<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import { Spinner } from "@/shared/components/ui/spinner";
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <Button data-component-x-ray-trigger="Button">
      <Spinner data-icon="inline-start" data-component-x-ray-trigger="Spinner" /> Submit
    </Button>
    <Button disabled data-component-x-ray-trigger="Button">
      <Spinner data-icon="inline-start" data-component-x-ray-trigger="Spinner" /> Disabled
    </Button>
    <Button variant="outline" disabled data-component-x-ray-trigger="Button">
      <Spinner data-icon="inline-start" data-component-x-ray-trigger="Spinner" /> Outline
    </Button>
    <Button variant="outline" size="icon" disabled data-component-x-ray-trigger="Button">
      <Spinner data-icon="inline-start" data-component-x-ray-trigger="Spinner" />
      <span class="sr-only">Loading...</span>
    </Button>
  </div>
</template>
