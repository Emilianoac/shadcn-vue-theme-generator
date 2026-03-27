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
  <div class="flex flex-col gap-4">
    <Select data-component-x-ray="Select">
      <SelectTrigger size="sm" data-component-x-ray-trigger="SelectTrigger">
        <SelectValue placeholder="Small size" data-component-x-ray-trigger="SelectValue" />
      </SelectTrigger>
      <SelectContent data-component-x-ray-trigger="SelectContent">
        <SelectGroup data-component-x-ray-trigger="SelectGroup">
          <SelectItem value="apple" data-component-x-ray-trigger="SelectItem"> Apple </SelectItem>
          <SelectItem value="banana" data-component-x-ray-trigger="SelectItem"> Banana </SelectItem>
          <SelectItem value="blueberry" data-component-x-ray-trigger="SelectItem">
            Blueberry
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Select data-component-x-ray="Select">
      <SelectTrigger size="default" data-component-x-ray-trigger="SelectTrigger">
        <SelectValue placeholder="Default size" data-component-x-ray-trigger="SelectValue" />
      </SelectTrigger>
      <SelectContent data-component-x-ray-trigger="SelectContent">
        <SelectGroup data-component-x-ray-trigger="SelectGroup">
          <SelectItem value="apple" data-component-x-ray-trigger="SelectItem"> Apple </SelectItem>
          <SelectItem value="banana" data-component-x-ray-trigger="SelectItem"> Banana </SelectItem>
          <SelectItem value="blueberry" data-component-x-ray-trigger="SelectItem">
            Blueberry
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
