<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import { ArrowRightIcon } from "lucide-vue-next";
</script>

<template>
  <div class="space-y-6 w-full">
    <section>
      <div class="flex flex-wrap gap-2">
        <Button size="icon-sm" variant="default" data-component-x-ray="Button">
          <ArrowRightIcon />
        </Button>
        <Button size="icon-sm" variant="secondary" data-component-x-ray="Button">
          <ArrowRightIcon />
        </Button>
        <Button size="icon-sm" variant="destructive" data-component-x-ray="Button">
          <ArrowRightIcon />
        </Button>
        <Button size="icon-sm" variant="outline" data-component-x-ray="Button">
          <ArrowRightIcon />
        </Button>
        <Button size="icon-sm" variant="ghost" data-component-x-ray="Button">
          <ArrowRightIcon />
        </Button>
        <Button size="icon-sm" variant="link" data-component-x-ray="Button">
          <ArrowRightIcon />
        </Button>
      </div>
    </section>

    <div class="flex flex-wrap gap-2">
      <Button size="icon" variant="default" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
      <Button size="icon" variant="secondary" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
      <Button size="icon" variant="destructive" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
      <Button size="icon" variant="outline" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
      <Button size="icon" variant="ghost" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
      <Button size="icon" variant="link" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
    </div>

    <div class="flex flex-wrap gap-2">
      <Button size="icon-lg" variant="default" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
      <Button size="icon-lg" variant="secondary" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
      <Button size="icon-lg" variant="destructive" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
      <Button size="icon-lg" variant="outline" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
      <Button size="icon-lg" variant="ghost" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
      <Button size="icon-lg" variant="link" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
    </div>
  </div>
</template>
