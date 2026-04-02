<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Textarea } from "@/shared/components/ui/textarea";

const id = 3;
</script>

<template>
  <Card data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Report an issue</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        What area are you having problems with?
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-6" data-component-x-ray="CardContent">
      <div class="grid grid-cols-2 gap-4">
        <div class="grid gap-2">
          <Label for="area" data-component-x-ray="Label">Area</Label>
          <Select default-value="billing" data-component-x-ray-trigger="Select">
            <SelectTrigger id="area" class="w-full" data-component-x-ray-trigger="SelectTrigger">
              <SelectValue placeholder="Select" data-component-x-ray-trigger="SelectValue" />
            </SelectTrigger>
            <SelectContent data-component-x-ray="SelectContent">
              <SelectItem value="team" data-component-x-ray-trigger="SelectItem"> Team </SelectItem>
              <SelectItem value="billing" data-component-x-ray-trigger="SelectItem">
                Billing
              </SelectItem>
              <SelectItem value="account" data-component-x-ray-trigger="SelectItem">
                Account
              </SelectItem>
              <SelectItem value="deployments" data-component-x-ray-trigger="SelectItem">
                Deployments
              </SelectItem>
              <SelectItem value="support" data-component-x-ray-trigger="SelectItem">
                Support
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="grid gap-2">
          <Label for="security-level" data-component-x-ray="Label">Security Level</Label>
          <Select default-value="2" data-component-x-ray-trigger="Select">
            <SelectTrigger
              id="security-level"
              class="w-full truncate"
              data-component-x-ray-trigger="SelectTrigger"
            >
              <SelectValue placeholder="Select level" data-component-x-ray-trigger="SelectValue" />
            </SelectTrigger>
            <SelectContent data-component-x-ray="SelectContent">
              <SelectItem value="1" data-component-x-ray-trigger="SelectItem">
                Severity 1 (Highest)
              </SelectItem>
              <SelectItem value="2" data-component-x-ray-trigger="SelectItem">
                Severity 2
              </SelectItem>
              <SelectItem value="3 " data-component-x-ray-trigger="SelectItem">
                Severity 3
              </SelectItem>
              <SelectItem value="4" data-component-x-ray-trigger="SelectItem">
                Severity 4 (Lowest)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div class="grid gap-2">
        <Label :for="`subject-${id}`" data-component-x-ray="Label">Subject</Label>
        <Input
          :id="`subject-${id}`"
          placeholder="I need help with..."
          data-component-x-ray-trigger="Input"
        />
      </div>
      <div class="grid gap-2">
        <Label for="description" data-component-x-ray="Label">Description</Label>
        <Textarea
          id="description"
          placeholder="Please include all information relevant to your issue."
          data-component-x-ray-trigger="Textarea"
        />
      </div>
    </CardContent>
    <CardFooter class="justify-end gap-2" data-component-x-ray="CardFooter">
      <Button variant="ghost" size="sm" data-component-x-ray-trigger="Button"> Cancel </Button>
      <Button size="sm" data-component-x-ray-trigger="Button"> Submit </Button>
    </CardFooter>
  </Card>
</template>
