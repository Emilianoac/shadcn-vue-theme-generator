<script setup lang="ts">
import { computed, ref } from "vue";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/shared/components/ui/item";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started.",
  },
  {
    name: "Professional",
    description: "Ideal for growing teams and businesses.",
  },
  {
    name: "Enterprise",
    description: "Advanced features for large organizations.",
  },
];

const plan = ref(plans[0]?.name);

const selectedPlan = computed(() => plans.find((p) => p.name === plan.value));
</script>

<template>
  <Select v-model="plan" data-component-x-ray="Select">
    <SelectTrigger class="h-auto! w-72" data-component-x-ray-trigger="SelectTrigger">
      <SelectValue placeholder="Select a plan" data-component-x-ray-trigger="SelectValue">
        <Item v-if="selectedPlan" size="sm" class="w-full p-0">
          <ItemContent class="gap-0" data-component-x-ray-trigger="ItemContent">
            <ItemTitle data-component-x-ray-trigger="ItemTitle">{{ selectedPlan.name }}</ItemTitle>
            <ItemDescription class="text-xs" data-component-x-ray-trigger="Itemdescription">
              {{ selectedPlan.description }}
            </ItemDescription>
          </ItemContent>
        </Item>
      </SelectValue>
    </SelectTrigger>
    <SelectContent data-component-x-ray-trigger="SelectContent">
      <SelectGroup data-component-x-ray-trigger="SelectGroup">
        <SelectItem
          v-for="p in plans"
          :key="p.name"
          :value="p.name"
          data-component-x-ray-trigger="SelectItem"
        >
          <Item size="sm" class="w-full p-0" data-component-x-ray-trigger="Item">
            <ItemContent class="gap-0" data-component-x-ray-trigger="ItemContent">
              <ItemTitle data-component-x-ray-trigger="ItemTitle">{{ p.name }}</ItemTitle>
              <ItemDescription class="text-xs" data-component-x-ray-trigger="ItemDescription">
                {{ p.description }}
              </ItemDescription>
            </ItemContent>
          </Item>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
