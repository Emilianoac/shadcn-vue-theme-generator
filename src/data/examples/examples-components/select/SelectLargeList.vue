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
      <SelectValue placeholder="Select an item" data-component-x-ray-trigger="SelectValue" />
    </SelectTrigger>
    <SelectContent data-component-x-ray-trigger="SelectContent">
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectItem
          v-for="i in 100"
          :key="i"
          :value="`item-${i - 1}`"
          data-component-x-ray-trigger="SelectItem"
        >
          Item {{ i - 1 }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
