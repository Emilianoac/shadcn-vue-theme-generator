<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";

function showSuccessToast() {
  toast.success("Event has been created");
}
</script>

<template>
  <Button
    variant="outline"
    class="w-fit"
    @click="showSuccessToast"
    data-component-x-ray-trigger="Button"
  >
    Show Success Toast
  </Button>
</template>
