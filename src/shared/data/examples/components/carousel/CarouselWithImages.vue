<script setup lang="ts">
import ExampleImage from "@/shared/assets/images/example-image.jpg";
import { AspectRatio } from "@/shared/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
</script>

<template>
  <div class="flex justify-center max-w-sm mx-auto">
    <Carousel
      class="w-full"
      :opts="{
        align: 'start',
      }"
      data-component-x-ray="Carousel"
    >
      <CarouselContent class="-ml-1" data-component-x-ray="CarouselContent">
        <CarouselItem
          v-for="(_, index) in 5"
          :key="index"
          class="select-none"
          data-component-x-ray="CarouselItem"
        >
          <div class="relative">
            <AspectRatio
              :ratio="1 / 1"
              class="bg-muted rounded-lg"
              data-component-x-ray="AspectRatio"
            >
              <img
                :src="ExampleImage"
                alt="Example Image"
                class="h-full w-full rounded-lg object-cover"
              />
            </AspectRatio>
            <span
              class="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-white"
            >
              {{ index + 1 }}
            </span>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious data-component-x-ray-trigger="CarouselPrevious" />
      <CarouselNext data-component-x-ray-trigger="CarouselNext" />
    </Carousel>
  </div>
</template>
