<script setup lang="ts">
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";
</script>

<template>
  <div class="space-y-4">
    <NativeSelect data-component-x-ray-trigger="NativeSelect">
      <NativeSelectOption value="" data-component-x-ray-trigger="NativeSelectOption">
        Select a fruit
      </NativeSelectOption>
      <NativeSelectOptGroup label="Citrus" data-component-x-ray="NativeSelectOptGroup">
        <NativeSelectOption value="orange" data-component-x-ray-trigger="NativeSelectOption">
          Orange
        </NativeSelectOption>
        <NativeSelectOption value="lemon" data-component-x-ray-trigger="NativeSelectOption">
          Lemon
        </NativeSelectOption>
        <NativeSelectOption value="lime" data-component-x-ray-trigger="NativeSelectOption">
          Lime
        </NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Berries" data-component-x-ray="NativeSelectOptGroup">
        <NativeSelectOption value="strawberry" data-component-x-ray-trigger="NativeSelectOption">
          Strawberry
        </NativeSelectOption>
        <NativeSelectOption value="blueberry" data-component-x-ray-trigger="NativeSelectOption">
          Blueberry
        </NativeSelectOption>
        <NativeSelectOption value="raspberry" data-component-x-ray-trigger="NativeSelectOption">
          Raspberry
        </NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>

    <NativeSelect>
      <NativeSelectOption value=""> Select a programming language </NativeSelectOption>
      <NativeSelectOptGroup label="Frontend">
        <NativeSelectOption value="javascript"> JavaScript </NativeSelectOption>
        <NativeSelectOption value="typescript"> TypeScript </NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Backend">
        <NativeSelectOption value="python"> Python </NativeSelectOption>
        <NativeSelectOption value="java"> Java </NativeSelectOption>
        <NativeSelectOption value="go"> Go </NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  </div>
</template>
