<script setup lang="ts">
import { ArrowRightIcon } from "lucide-vue-next";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";

const CURRENCIES = [
  {
    value: "$",
    label: "US Dollar",
  },
  {
    value: "€",
    label: "Euro",
  },
  {
    value: "£",
    label: "British Pound",
  },
];
const currency = ref("$");
</script>

<template>
  <ButtonGroup>
    <ButtonGroup>
      <Select v-model="currency">
        <SelectTrigger class="font-mono w-14" data-component-x-ray-trigger="SelectTrigger">
          {{ currency }}
        </SelectTrigger>
        <SelectContent class="min-w-24" data-component-x-ray="SelectContent">
          <SelectItem
            v-for="item in CURRENCIES"
            :key="item.value"
            :value="item.value"
            data-component-x-ray="SelectItem"
          >
            {{ item.value }}
            <span class="text-muted-foreground">{{ item.label }}</span>
          </SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="10.00" pattern="[0-9]*" data-component-x-ray="Input" />
      <Button aria-label="Send" size="icon" variant="outline" data-component-x-ray="Button">
        <ArrowRightIcon />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
</template>
