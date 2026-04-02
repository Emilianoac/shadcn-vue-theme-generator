<script setup lang="ts">
import { BookUser, CreditCard, Truck } from "lucide-vue-next";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/shared/components/ui/stepper";

const steps = [
  {
    step: 1,
    title: "Address",
    description: "Add your address",
    icon: BookUser,
  },
  {
    step: 2,
    title: "Shipping",
    description: "Set your preferred",
    icon: Truck,
  },
  {
    step: 3,
    title: "Payment",
    description: "Add any payment",
    icon: CreditCard,
  },
  {
    step: 4,
    title: "Checkout",
    description: "Confirm your order",
  },
];
</script>

<template>
  <div class="flex justify-center">
    <Stepper class="flex w-10/12 items-start gap-2" data-component-x-ray="Stepper">
      <StepperItem
        v-for="item in steps"
        :key="item.step"
        :step="item.step"
        class="relative flex w-full flex-col items-center justify-center"
        data-component-x-ray-trigger="StepperItem"
      >
        <StepperTrigger data-component-x-ray-trigger="StepperTrigger">
          <StepperIndicator
            v-slot="{ step }"
            class="bg-muted"
            data-component-x-ray-trigger="StepperIndicator"
          >
            <template v-if="item.icon">
              <component :is="item.icon" class="w-4 h-4" />
            </template>
            <span v-else>{{ step }}</span>
          </StepperIndicator>
        </StepperTrigger>
        <StepperSeparator
          v-if="item.step !== steps[steps.length - 1]?.step"
          class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
          data-component-x-ray="StepperSeparator"
        />
        <div class="flex flex-col items-center">
          <StepperTitle data-component-x-ray="StepperTitle">
            {{ item.title }}
          </StepperTitle>
          <StepperDescription data-component-x-ray="StepperDescription">
            {{ item.description }}
          </StepperDescription>
        </div>
      </StepperItem>
    </Stepper>
  </div>
</template>
