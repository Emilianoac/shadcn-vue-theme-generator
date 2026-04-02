<script lang="ts" setup>
import { Button } from "@/shared/components/ui/button";
import { ButtonGroup } from "@/shared/components/ui/button-group";
</script>

<template>
  <ButtonGroup>
    <Button variant="outline" data-component-x-ray="Button">Button</Button>
    <Button variant="outline" data-component-x-ray="Button">Another Button</Button>
  </ButtonGroup>
</template>

<style lang="postcss" scoped></style>
