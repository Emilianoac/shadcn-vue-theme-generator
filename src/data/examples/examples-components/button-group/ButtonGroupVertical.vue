<script setup lang="ts">
import { MinusIcon, PlusIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
</script>

<template>
  <ButtonGroup orientation="vertical" aria-label="Media controls" class="h-fit">
    <Button variant="outline" size="icon" data-component-x-ray="Button">
      <PlusIcon />
    </Button>
    <Button variant="outline" size="icon" data-component-x-ray="Button">
      <MinusIcon />
    </Button>
  </ButtonGroup>
</template>
