<script setup lang="ts">
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ExampleImage from "@/assets/images/example-image.jpg";
</script>

<template>
  <div class="max-w-150 mx-auto">
    <AspectRatio :ratio="1 / 1" class="bg-muted rounded-lg" data-component-x-ray="AspectRatio">
      <img
        :src="ExampleImage"
        alt="A shiba inu sitting in a field of grass"
        fill
        class="h-full w-full rounded-lg object-cover"
      />
    </AspectRatio>
  </div>
</template>
