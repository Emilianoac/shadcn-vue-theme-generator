<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
</script>

<template>
  <Carousel
    orientation="vertical"
    class="relative w-full max-w-xs mx-auto"
    :opts="{
      align: 'start',
    }"
    data-component-x-ray="Carousel"
  >
    <CarouselContent class="-mt-1 h-50" data-component-x-ray="CarouselContent">
      <CarouselItem
        v-for="(_, index) in 5"
        :key="index"
        class="shrink p-1 md:basis-1/2"
        data-component-x-ray="CarouselItem"
      >
        <div class="p-0">
          <Card data-component-x-ray="Card">
            <CardContent
              class="flex items-center justify-center p-6"
              data-component-x-ray="CardContent"
            >
              <span class="text-3xl font-semibold">{{ index + 1 }}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious data-component-x-ray-trigger="CarouselPrevious" />
    <CarouselNext data-component-x-ray-trigger="CarouselNext" />
  </Carousel>
</template>
