<script setup lang="ts">
import { BotIcon, AlertTriangleIcon, CheckIcon, CopyIcon } from "lucide-vue-next";

import { Button } from "@/shared/components/ui/button";
import { ButtonGroup } from "@/shared/components/ui/button-group";
</script>

<template>
  <ButtonGroup>
    <ButtonGroup>
      <Button size="icon" variant="outline" data-component-x-ray="Button">
        <BotIcon />
      </Button>
      <Button size="icon" variant="outline" data-component-x-ray="Button">
        <AlertTriangleIcon />
      </Button>
      <Button size="icon" variant="outline" data-component-x-ray="Button">
        <CheckIcon />
      </Button>
      <Button size="icon" variant="outline" data-component-x-ray="Button">
        <CopyIcon />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
</template>
