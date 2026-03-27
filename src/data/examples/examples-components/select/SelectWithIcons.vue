<script setup lang="ts">
import { ChartLineIcon, ChartBarIcon, ChartPieIcon } from "lucide-vue-next";
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
    <SelectTrigger size="sm" data-component-x-ray-trigger="SelectTrigger">
      <SelectValue placeholder="Select a chart type" data-component-x-ray-trigger="SelectValue" />
    </SelectTrigger>
    <SelectContent data-component-x-ray-trigger="SelectContent">
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectItem value="line" data-component-x-ray-trigger="SelectItem">
          <ChartLineIcon />
          Line
        </SelectItem>
        <SelectItem value="bar" data-component-x-ray-trigger="SelectItem">
          <ChartBarIcon />
          Bar
        </SelectItem>
        <SelectItem value="pie" data-component-x-ray-trigger="SelectItem">
          <ChartPieIcon />
          Pie
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
