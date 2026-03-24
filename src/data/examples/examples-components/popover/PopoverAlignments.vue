<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
</script>

<template>
  <div class="flex gap-6">
    <Popover data-component-x-ray="Popover">
      <PopoverTrigger :as-child="true">
        <Button variant="outline" size="sm" data-component-x-ray-trigger="Button"> Start </Button>
      </PopoverTrigger>
      <PopoverContent align="start" class="w-40" data-component-x-ray="PopoverContent">
        <p class="text-sm">Aligned to start</p>
      </PopoverContent>
    </Popover>
    <Popover data-component-x-ray="Popover">
      <PopoverTrigger :as-child="true">
        <Button variant="outline" size="sm" data-component-x-ray-trigger="Button"> Center </Button>
      </PopoverTrigger>
      <PopoverContent align="center" class="w-40" data-component-x-ray="PopoverContent">
        <p class="text-sm">Aligned to center</p>
      </PopoverContent>
    </Popover>
    <Popover data-component-x-ray="Popover">
      <PopoverTrigger :as-child="true">
        <Button variant="outline" size="sm" data-component-x-ray-trigger="Button"> End </Button>
      </PopoverTrigger>
      <PopoverContent align="end" class="w-40" data-component-x-ray="PopoverContent">
        <p class="text-sm">Aligned to end</p>
      </PopoverContent>
    </Popover>
  </div>
</template>
