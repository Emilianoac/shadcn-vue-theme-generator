<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    description: "Perfect for small businesses.",
    price: "$10",
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "Advanced features with more storage.",
    price: "$20",
  },
] as const;
</script>

<template>
  <Card data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle class="text-lg" data-component-x-ray="CardTitle">
        Upgrade your subscription
      </CardTitle>
      <CardDescription class="text-balance" data-component-x-ray="CardDescription">
        You are currently on the free plan. Upgrade to the pro plan to get access to all features.
      </CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-3 md:flex-row">
          <div class="flex flex-1 flex-col gap-2">
            <Label for="name" data-component-x-ray="Label">Name</Label>
            <Input id="name" placeholder="Evil Rabbit" data-component-x-ray="Input" />
          </div>
          <div class="flex flex-1 flex-col gap-2">
            <Label for="email" data-component-x-ray="Label">Email</Label>
            <Input id="email" placeholder="example@acme.com" data-component-x-ray="Input" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <Label for="card-number" data-component-x-ray="Label">Card Number</Label>
          <div class="grid grid-cols-2 gap-3 md:grid-cols-[1fr_80px_60px]">
            <Input
              id="card-number"
              placeholder="1234 1234 1234 1234"
              class="col-span-2 md:col-span-1"
              data-component-x-ray="Input"
            />
            <Input id="card-number-expiry" placeholder="MM/YY" data-component-x-ray="Input" />
            <Input id="card-number-cvc" placeholder="CVC" data-component-x-ray="Input" />
          </div>
        </div>
        <fieldset class="flex flex-col gap-3">
          <legend class="text-sm font-medium">Plan</legend>
          <p class="text-muted-foreground text-sm">Select the plan that best fits your needs.</p>
          <RadioGroup
            default-value="starter"
            class="grid gap-3 md:grid-cols-2"
            data-component-x-ray="RadioGroup"
          >
            <Label
              v-for="plan in plans"
              :key="plan.id"
              class="has-data-[state=checked]:border-ring has-data-[state=checked]:bg-input/20 flex items-start gap-3 rounded-lg border p-3"
              data-component-x-ray="Label"
            >
              <RadioGroupItem
                :id="plan.name"
                :value="plan.id"
                class="data-[state=checked]:border-primary"
                data-component-x-ray-trigger="RadioGroupItem"
              />
              <div class="grid gap-1 font-normal">
                <div class="font-medium">{{ plan.name }}</div>
                <div class="text-muted-foreground text-xs leading-snug text-balance">
                  {{ plan.description }}
                </div>
              </div>
            </Label>
          </RadioGroup>
        </fieldset>
        <div class="flex flex-col gap-2">
          <Label for="notes" data-component-x-ray="Label">Notes</Label>
          <Textarea id="notes" placeholder="Enter notes" data-component-x-ray-trigger="Textarea" />
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <Checkbox id="terms" data-component-x-ray-trigger="Checkbox" />
            <Label for="terms" class="font-normal" data-component-x-ray="Label">
              I agree to the terms and conditions
            </Label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox
              id="newsletter"
              :default-value="true"
              data-component-x-ray-trigger="Checkbox"
            />
            <Label for="newsletter" class="font-normal" data-component-x-ray="Label">
              Allow us to send you emails
            </Label>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter class="flex justify-between" data-component-x-ray="CardFooter">
      <Button variant="outline" size="sm" data-component-x-ray-trigger="Button"> Cancel </Button>
      <Button size="sm" data-component-x-ray-trigger="Button"> Upgrade Plan </Button>
    </CardFooter>
  </Card>
</template>
