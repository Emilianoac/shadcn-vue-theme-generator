<script lang="ts" setup>
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
</script>

<template>
  <div class="space-y-4">
    <ButtonGroup class="w-full max-w-sm">
      <Button variant="outline" aria-label="Search" data-component-x-ray="Button"> Button </Button>
      <Input placeholder="Type something here..." data-component-x-ray="Input" />
    </ButtonGroup>

    <ButtonGroup class="w-full max-w-sm">
      <Input placeholder="Type something here..." data-component-x-ray="Input" />
      <Button variant="outline" aria-label="Search" data-component-x-ray="Button"> Button </Button>
    </ButtonGroup>
  </div>
</template>

<style lang="postcss" scoped></style>
