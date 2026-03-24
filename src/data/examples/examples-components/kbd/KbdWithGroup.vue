<script setup lang="ts">
import { Kbd, KbdGroup } from "@/components/ui/kbd";
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <span class="text-sm">Select all:</span>
      <KbdGroup data-component-x-ray="KbdGroup">
        <Kbd data-component-x-ray="Kbd">Ctrl</Kbd>
        <Kbd data-component-x-ray="Kbd">A</Kbd>
      </KbdGroup>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm">Open command palette:</span>
      <KbdGroup data-component-x-ray="KbdGroup">
        <Kbd data-component-x-ray="Kbd">Ctrl</Kbd>
        <Kbd data-component-x-ray="Kbd">K</Kbd>
      </KbdGroup>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm">Find and replace:</span>
      <KbdGroup data-component-x-ray="KbdGroup">
        <Kbd data-component-x-ray="Kbd">Ctrl</Kbd>
        <Kbd data-component-x-ray="Kbd">H</Kbd>
      </KbdGroup>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm">Multiple selection:</span>
      <KbdGroup data-component-x-ray="KbdGroup">
        <Kbd data-component-x-ray="Kbd">Ctrl</Kbd>
        <Kbd data-component-x-ray="Kbd">Shift</Kbd>
        <Kbd data-component-x-ray="Kbd">L</Kbd>
      </KbdGroup>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm">Toggle terminal:</span>
      <KbdGroup data-component-x-ray="KbdGroup">
        <Kbd data-component-x-ray="Kbd">Ctrl</Kbd>
        <Kbd data-component-x-ray="Kbd">`</Kbd>
      </KbdGroup>
    </div>
  </div>
</template>
