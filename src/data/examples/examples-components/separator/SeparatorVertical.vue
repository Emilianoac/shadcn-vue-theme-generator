<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
</script>

<template>
  <Example title="Vertical">
    <div class="flex h-5 items-center gap-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" data-component-x-ray="Separator" />
      <div>Docs</div>
      <Separator orientation="vertical" data-component-x-ray="Separator" />
      <div>Source</div>
    </div>
  </Example>
</template>
