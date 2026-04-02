<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/shared/components/ui/button";

function showBasicToast() {
  toast("This is a basic toast message!");
}
</script>

<template>
  <Button
    variant="outline"
    class="w-fit"
    @click="showBasicToast"
    data-component-x-ray-trigger="Button"
  >
    Show Toast
  </Button>
</template>
