<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
</script>

<template>
  <div class="flex justify-center">
    <Button disabled>
      <Spinner />
      Processing Payment
    </Button>
  </div>
</template>
