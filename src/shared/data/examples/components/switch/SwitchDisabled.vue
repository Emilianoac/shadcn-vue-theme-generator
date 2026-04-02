<script setup lang="ts">
import { Label } from "@/shared/components/ui/label";
import { Switch } from "@/shared/components/ui/switch";
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex items-center gap-2">
      <Switch
        id="switch-disabled-unchecked"
        :disabled="true"
        data-component-x-ray-trigger="Switch"
      />
      <Label for="switch-disabled-unchecked" data-component-x-ray="Label"> Disabled</Label>
    </div>
  </div>
</template>
