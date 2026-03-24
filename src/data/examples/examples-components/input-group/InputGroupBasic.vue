<script setup lang="ts">
import { MailIcon } from "lucide-vue-next";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
</script>

<template>
  <div class="space-y-4">
    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupAddon align="inline-start" data-component-x-ray-trigger="InputGroupAddon">
        <MailIcon />
      </InputGroupAddon>
      <InputGroupInput
        type="email"
        placeholder="Email"
        data-component-x-ray-trigger="InputGroupInput"
      />
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupInput
        type="text"
        placeholder="Username"
        data-component-x-ray-trigger="InputGroupInput"
      />
      <InputGroupAddon align="inline-end" data-component-x-ray-trigger="InputGroupAddon">
        @example.com
      </InputGroupAddon>
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupAddon align="inline-start" data-component-x-ray-trigger="InputGroupAddon">
        https://
      </InputGroupAddon>
      <InputGroupInput
        type="text"
        placeholder="example.com"
        data-component-x-ray-trigger="InputGroupInput"
      />
    </InputGroup>
  </div>
</template>
