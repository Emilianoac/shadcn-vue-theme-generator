<script setup lang="ts">
import { XCircleIcon } from "lucide-vue-next";
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";

function showBasicToast() {
  toast("This is a custom toast!", {
    position: "bottom-center",
    icon: XCircleIcon,
    style: {
      background: "var(--popover)",
      color: "var(--destructive)",
      border: "1px solid var(--border)",
    },
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
    Show Custom Toast
  </Button>
</template>
