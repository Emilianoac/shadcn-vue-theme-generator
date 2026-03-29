<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";

function showErrorToast() {
  toast.error("Something went wrong");
}
</script>

<template>
  <Button
    variant="outline"
    class="w-fit"
    @click="showErrorToast"
    data-component-x-ray-trigger="Button"
  >
    Show Error Toast
  </Button>
</template>
