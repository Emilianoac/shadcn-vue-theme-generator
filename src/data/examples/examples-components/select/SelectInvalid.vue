<script setup lang="ts">
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
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
      <SelectTrigger :aria-invalid="true" data-component-x-ray-trigger="SelectTrigger">
        <SelectValue placeholder="Select a fruit" data-component-x-ray-trigger="SelectValue" />
      </SelectTrigger>
      <SelectContent data-component-x-ray-trigger="SelectContent">
        <SelectGroup data-component-x-ray-trigger="SelectGroup">
          <SelectItem value="apple" data-component-x-ray-trigger="SelectItem"> Apple </SelectItem>
          <SelectItem value="banana" data-component-x-ray-trigger="SelectItem"> Banana </SelectItem>
          <SelectItem value="blueberry" data-component-x-ray-trigger="SelectItem">
            Blueberry
          </SelectItem>
          <SelectItem value="grapes" data-component-x-ray-trigger="SelectItem"> Grapes </SelectItem>
          <SelectItem value="pineapple" data-component-x-ray-trigger="SelectItem">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Field data-invalid>
      <FieldLabel html-for="select-fruit-invalid"> Favorite Fruit </FieldLabel>
      <Select>
        <SelectTrigger id="select-fruit-invalid" :aria-invalid="true">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple"> Apple </SelectItem>
            <SelectItem value="banana"> Banana </SelectItem>
            <SelectItem value="blueberry"> Blueberry </SelectItem>
            <SelectItem value="grapes"> Grapes </SelectItem>
            <SelectItem value="pineapple"> Pineapple </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError :errors="[{ message: 'Please select a valid fruit.' }]" />
    </Field>
  </div>
</template>
