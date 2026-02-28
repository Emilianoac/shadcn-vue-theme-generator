<script setup lang="ts">
import { ArrowRightIcon, DownloadIcon, PlusIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="grid w-full max-w-150 items-start gap-6 mx-auto">
    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Variants</h3>
      <div class="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Sizes</h3>
      <div class="flex flex-wrap items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Icon buttons</h3>
      <div class="flex flex-wrap items-center gap-2">
        <Button size="icon" aria-label="Add item">
          <PlusIcon />
        </Button>
        <Button size="icon-sm" variant="outline" aria-label="Download">
          <DownloadIcon />
        </Button>
        <Button size="icon-lg" variant="secondary" aria-label="Go next">
          <ArrowRightIcon />
        </Button>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">States</h3>
      <div class="flex flex-wrap gap-2">
        <Button>Enabled</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>
          <DownloadIcon />
          Downloading...
        </Button>
      </div>
    </section>
  </div>
</template>
