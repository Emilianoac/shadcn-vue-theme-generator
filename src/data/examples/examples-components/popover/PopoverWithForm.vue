<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
</script>

<template>
  <Popover data-component-x-ray="Popover">
    <PopoverTrigger as-child>
      <Button variant="outline" data-component-x-ray-trigger="Button"> Open popover </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80" data-component-x-ray="PopoverContent">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Dimensions</h4>
          <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
        <FieldGroup class="gap-4" data-component-x-ray="FieldGroup">
          <Field orientation="horizontal" data-component-x-ray="Field">
            <FieldLabel html-for="width" class="w-1/2" data-component-x-ray="FieldLabel">
              Width
            </FieldLabel>
            <Input id="width" default-value="100%" data-component-x-ray-trigger="Input" />
          </Field>
          <Field orientation="horizontal" data-component-x-ray="Field">
            <FieldLabel html-for="height" class="w-1/2" data-component-x-ray="FieldLabel">
              Height
            </FieldLabel>
            <Input id="height" default-value="25px" data-component-x-ray-trigger="Input" />
          </Field>
        </FieldGroup>
      </div>
    </PopoverContent>
  </Popover>
</template>
