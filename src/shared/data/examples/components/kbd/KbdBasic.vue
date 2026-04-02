<script setup lang="ts">
import { Kbd } from "@/shared/components/ui/kbd";
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <div class="flex items-center gap-2">
      <span class="text-sm">Save:</span>
      <Kbd data-component-x-ray="Kbd">Ctrl</Kbd>
      <span>+</span>
      <Kbd data-component-x-ray="Kbd">S</Kbd>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm">Copy:</span>
      <Kbd data-component-x-ray="Kbd">Ctrl</Kbd>
      <span>+</span>
      <Kbd data-component-x-ray="Kbd">C</Kbd>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm">Paste:</span>
      <Kbd data-component-x-ray="Kbd">Ctrl</Kbd>
      <span>+</span>
      <Kbd data-component-x-ray="Kbd">V</Kbd>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm">Undo:</span>
      <Kbd data-component-x-ray="Kbd">Ctrl</Kbd>
      <span>+</span>
      <Kbd data-component-x-ray="Kbd">Z</Kbd>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm">Search:</span>
      <Kbd data-component-x-ray="Kbd">/</Kbd>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm">Escape:</span>
      <Kbd data-component-x-ray="Kbd">Esc</Kbd>
    </div>
  </div>
</template>
