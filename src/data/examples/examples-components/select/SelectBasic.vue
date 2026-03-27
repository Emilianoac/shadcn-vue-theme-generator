<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
</script>

<template>
  <Select data-component-x-ray="Select">
    <SelectTrigger data-component-x-ray-trigger="SelectTrigger">
      <SelectValue placeholder="Select a fruit" data-component-x-ray-trigger="SelectValue" />
    </SelectTrigger>
    <SelectContent data-component-x-ray-trigger="SelectContent">
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectItem value="apple" data-component-x-ray-trigger="SelectItem"> Apple </SelectItem>
        <SelectItem value="banana" data-component-x-ray-trigger="SelectItem"> Banana </SelectItem>
        <SelectItem value="blueberry" data-component-x-ray-trigger="SelectItem">
          Blueberry
        </SelectItem>
        <SelectItem value="grapes" :disabled="true" data-component-x-ray-trigger="SelectItem">
          Grapes
        </SelectItem>
        <SelectItem value="pineapple" data-component-x-ray-trigger="SelectItem">
          Pineapple
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
