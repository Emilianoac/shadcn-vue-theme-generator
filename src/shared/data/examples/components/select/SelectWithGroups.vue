<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
</script>

<template>
  <Select data-component-x-ray="Select">
    <SelectTrigger data-component-x-ray-trigger="SelectTrigger">
      <SelectValue placeholder="Select a fruit" data-component-x-ray-trigger="SelectValue" />
    </SelectTrigger>
    <SelectContent data-component-x-ray-trigger="SelectContent">
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectLabel data-component-x-ray-trigger="SelectLabel">Fruits</SelectLabel>
        <SelectItem value="apple" data-component-x-ray-trigger="SelectItem"> Apple </SelectItem>
        <SelectItem value="banana" data-component-x-ray-trigger="SelectItem"> Banana </SelectItem>
        <SelectItem value="blueberry" data-component-x-ray-trigger="SelectItem">
          Blueberry
        </SelectItem>
      </SelectGroup>
      <SelectSeparator data-component-x-ray-trigger="SelectSeparator" />
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectLabel data-component-x-ray-trigger="SelectLabel">Vegetables</SelectLabel>
        <SelectItem value="carrot" data-component-x-ray-trigger="SelectItem"> Carrot </SelectItem>
        <SelectItem value="broccoli" data-component-x-ray-trigger="SelectItem">
          Broccoli
        </SelectItem>
        <SelectItem value="spinach" data-component-x-ray-trigger="SelectItem"> Spinach </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
