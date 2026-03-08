<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-vue-next";
</script>

<template>
  <div class="space-y-6 w-full">
    <section>
      <div class="flex flex-wrap gap-2">
        <Button size="sm" variant="default" data-component-x-ray="Button">
          <ArrowLeftIcon /> Default
        </Button>
        <Button size="sm" variant="secondary" data-component-x-ray="Button">
          <ArrowLeftIcon /> Secondary
        </Button>
        <Button size="sm" variant="destructive" data-component-x-ray="Button">
          <ArrowLeftIcon /> Destructive
        </Button>
        <Button size="sm" variant="outline" data-component-x-ray="Button">
          <ArrowLeftIcon /> Outline
        </Button>
        <Button size="sm" variant="ghost" data-component-x-ray="Button">
          <ArrowLeftIcon /> Ghost
        </Button>
        <Button size="sm" variant="link" data-component-x-ray="Button">
          <ArrowLeftIcon /> Link
        </Button>
      </div>
    </section>

    <div class="flex flex-wrap gap-2">
      <Button size="default" variant="default" data-component-x-ray="Button">
        <ArrowLeftIcon /> Default
      </Button>
      <Button size="default" variant="secondary" data-component-x-ray="Button">
        <ArrowLeftIcon /> Secondary
      </Button>
      <Button size="default" variant="destructive" data-component-x-ray="Button">
        <ArrowLeftIcon /> Destructive
      </Button>
      <Button size="default" variant="outline" data-component-x-ray="Button">
        <ArrowLeftIcon /> Outline
      </Button>
      <Button size="default" variant="ghost" data-component-x-ray="Button">
        <ArrowLeftIcon /> Ghost
      </Button>
      <Button size="default" variant="link" data-component-x-ray="Button">
        <ArrowLeftIcon /> Link
      </Button>
    </div>

    <div class="flex flex-wrap gap-2">
      <Button size="lg" variant="default" data-component-x-ray="Button">
        <ArrowLeftIcon /> Default
      </Button>
      <Button size="lg" variant="secondary" data-component-x-ray="Button">
        <ArrowLeftIcon /> Secondary
      </Button>
      <Button size="lg" variant="destructive" data-component-x-ray="Button">
        <ArrowLeftIcon /> Destructive
      </Button>
      <Button size="lg" variant="outline" data-component-x-ray="Button">
        <ArrowLeftIcon /> Outline
      </Button>
      <Button size="lg" variant="ghost" data-component-x-ray="Button">
        <ArrowLeftIcon /> Ghost
      </Button>
      <Button size="lg" variant="link" data-component-x-ray="Button">
        <ArrowLeftIcon /> Link
      </Button>
    </div>
  </div>
</template>
