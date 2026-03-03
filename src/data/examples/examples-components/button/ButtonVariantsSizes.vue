<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="space-y-6 w-full">
    <section>
      <div class="flex flex-wrap gap-2">
        <Button size="sm" variant="default">Default</Button>
        <Button size="sm" variant="secondary">Secondary</Button>
        <Button size="sm" variant="destructive">Destructive</Button>
        <Button size="sm" variant="outline">Outline</Button>
        <Button size="sm" variant="ghost">Ghost</Button>
        <Button size="sm" variant="link">Link</Button>
      </div>
    </section>

    <div class="flex flex-wrap gap-2">
      <Button size="default" variant="default">Default</Button>
      <Button size="default" variant="secondary">Secondary</Button>
      <Button size="default" variant="destructive">Destructive</Button>
      <Button size="default" variant="outline">Outline</Button>
      <Button size="default" variant="ghost">Ghost</Button>
      <Button size="default" variant="link">Link</Button>
    </div>

    <div class="flex flex-wrap gap-2">
      <Button size="lg" variant="default">Default</Button>
      <Button size="lg" variant="secondary">Secondary</Button>
      <Button size="lg" variant="destructive">Destructive</Button>
      <Button size="lg" variant="outline">Outline</Button>
      <Button size="lg" variant="ghost">Ghost</Button>
      <Button size="lg" variant="link">Link</Button>
    </div>
  </div>
</template>
