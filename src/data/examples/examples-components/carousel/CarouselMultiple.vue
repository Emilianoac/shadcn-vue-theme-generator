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
    class="relative w-full"
    :opts="{
      align: 'start',
    }"
    data-component-x-ray="Carousel"
  >
    <CarouselContent data-component-x-ray="CarouselContent">
      <CarouselItem
        v-for="(_, index) in 5"
        :key="index"
        class="md:basis-1/2 lg:basis-1/3"
        data-component-x-ray="CarouselItem"
      >
        <div class="p-1">
          <Card data-component-x-ray="Card">
            <CardContent
              class="flex aspect-square items-center justify-center p-6"
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
