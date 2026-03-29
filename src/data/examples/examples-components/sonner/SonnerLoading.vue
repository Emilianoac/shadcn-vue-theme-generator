<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";

function showBasicToast() {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  toast.promise(promise, {
    loading: "Loading...",
    success: "Data loaded successfully!",
    error: "Failed to load data.",
    duration: 1000,
  });
}
</script>

<template>
  <Button
    variant="outline"
    class="w-fit"
    @click="showBasicToast"
    data-component-x-ray-trigger="Button"
  >
    Show Loading Toast
  </Button>
</template>
