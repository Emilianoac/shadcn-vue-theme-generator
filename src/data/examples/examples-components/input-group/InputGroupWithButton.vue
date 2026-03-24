<script setup lang="ts">
import { SearchIcon, CopyIcon } from "lucide-vue-next";
import { InputGroup, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
</script>

<template>
  <div class="space-y-4">
    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupInput
        type="text"
        placeholder="Search..."
        data-component-x-ray-trigger="InputGroupInput"
      />
      <InputGroupButton data-component-x-ray-trigger="InputGroupButton">
        <SearchIcon />
      </InputGroupButton>
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupButton data-component-x-ray-trigger="InputGroupButton">
        <CopyIcon />
      </InputGroupButton>
      <InputGroupInput
        type="text"
        placeholder="Copy this text"
        data-component-x-ray-trigger="InputGroupInput"
      />
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupButton data-component-x-ray-trigger="InputGroupButton"> - </InputGroupButton>
      <InputGroupInput
        type="number"
        placeholder="0"
        data-component-x-ray-trigger="InputGroupInput"
      />
      <InputGroupButton data-component-x-ray-trigger="InputGroupButton"> + </InputGroupButton>
    </InputGroup>
  </div>
</template>
