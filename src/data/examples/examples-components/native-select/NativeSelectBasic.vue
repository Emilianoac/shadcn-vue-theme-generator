<script setup lang="ts">
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
</script>

<template>
  <div class="space-y-4">
    <NativeSelect data-component-x-ray-trigger="NativeSelect">
      <NativeSelectOption value="" data-component-x-ray-trigger="NativeSelectOption">
        Choose an option
      </NativeSelectOption>
      <NativeSelectOption value="option1" data-component-x-ray-trigger="NativeSelectOption">
        Option 1
      </NativeSelectOption>
      <NativeSelectOption value="option2" data-component-x-ray-trigger="NativeSelectOption">
        Option 2
      </NativeSelectOption>
      <NativeSelectOption value="option3" data-component-x-ray-trigger="NativeSelectOption">
        Option 3
      </NativeSelectOption>
    </NativeSelect>

    <NativeSelect data-component-x-ray-trigger="NativeSelect">
      <NativeSelectOption value="" data-component-x-ray-trigger="NativeSelectOption">
        Select a country
      </NativeSelectOption>
      <NativeSelectOption value="us" data-component-x-ray-trigger="NativeSelectOption">
        United States
      </NativeSelectOption>
      <NativeSelectOption value="uk" data-component-x-ray-trigger="NativeSelectOption">
        United Kingdom
      </NativeSelectOption>
      <NativeSelectOption value="ca" data-component-x-ray-trigger="NativeSelectOption">
        Canada
      </NativeSelectOption>
      <NativeSelectOption value="au" data-component-x-ray-trigger="NativeSelectOption">
        Australia
      </NativeSelectOption>
    </NativeSelect>
  </div>
</template>
