<script setup lang="ts">
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
</script>

<template>
  <div class="flex justify-center">
    <NativeSelect>
      <NativeSelectOption value=""> Select status </NativeSelectOption>
      <NativeSelectOption value="todo"> Todo </NativeSelectOption>
      <NativeSelectOption value="in-progress"> In Progress </NativeSelectOption>
      <NativeSelectOption value="done"> Done </NativeSelectOption>
      <NativeSelectOption value="cancelled"> Cancelled </NativeSelectOption>
    </NativeSelect>
  </div>
</template>
