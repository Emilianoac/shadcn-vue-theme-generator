<script setup lang="ts">
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ExampleImage from "@/assets/images/example-image.jpg";
</script>

<template>
  <div class="max-w-150 mx-auto">
    <AspectRatio :ratio="16 / 9" class="bg-muted rounded-lg">
      <img
        :src="ExampleImage"
        alt="Photo by Drew Beamer"
        fill
        class="h-full w-full rounded-lg object-cover"
      />
    </AspectRatio>
  </div>
</template>
