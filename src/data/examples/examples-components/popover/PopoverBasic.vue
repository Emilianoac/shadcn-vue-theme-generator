<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
</script>

<template>
  <Popover data-component-x-ray="Popover">
    <PopoverTrigger as-child>
      <Button variant="outline" data-component-x-ray-trigger="Button"> Open popover </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80" data-component-x-ray="PopoverContent">
      <div class="space-y-2">
        <h4 class="font-medium leading-none">Dimensions</h4>
        <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
      </div>
    </PopoverContent>
  </Popover>
</template>
