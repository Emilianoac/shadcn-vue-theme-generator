<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";

function showDescriptionToast() {
  toast("Event has been created", {
    description: "Monday, January 3rd at 6:00pm",
  });
}
</script>

<template>
  <Button
    variant="outline"
    class="w-fit"
    @click="showDescriptionToast"
    data-component-x-ray-trigger="Button"
  >
    Show Toast
  </Button>
</template>
