<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-vue-next";
</script>

<template>
  <div class="space-y-6 w-full">
    <section>
      <div class="flex flex-wrap gap-2">
        <Button size="sm" variant="default"><ArrowLeftIcon /> Default</Button>
        <Button size="sm" variant="secondary"><ArrowLeftIcon /> Secondary</Button>
        <Button size="sm" variant="destructive"><ArrowLeftIcon /> Destructive</Button>
        <Button size="sm" variant="outline"><ArrowLeftIcon /> Outline</Button>
        <Button size="sm" variant="ghost"><ArrowLeftIcon /> Ghost</Button>
        <Button size="sm" variant="link"><ArrowLeftIcon /> Link</Button>
      </div>
    </section>

    <div class="flex flex-wrap gap-2">
      <Button size="default" variant="default"><ArrowLeftIcon /> Default</Button>
      <Button size="default" variant="secondary"><ArrowLeftIcon /> Secondary</Button>
      <Button size="default" variant="destructive"><ArrowLeftIcon /> Destructive</Button>
      <Button size="default" variant="outline"><ArrowLeftIcon /> Outline</Button>
      <Button size="default" variant="ghost"><ArrowLeftIcon /> Ghost</Button>
      <Button size="default" variant="link"><ArrowLeftIcon /> Link</Button>
    </div>

    <div class="flex flex-wrap gap-2">
      <Button size="lg" variant="default"><ArrowLeftIcon /> Default</Button>
      <Button size="lg" variant="secondary"><ArrowLeftIcon /> Secondary</Button>
      <Button size="lg" variant="destructive"><ArrowLeftIcon /> Destructive</Button>
      <Button size="lg" variant="outline"><ArrowLeftIcon /> Outline</Button>
      <Button size="lg" variant="ghost"><ArrowLeftIcon /> Ghost</Button>
      <Button size="lg" variant="link"><ArrowLeftIcon /> Link</Button>
    </div>
  </div>
</template>
