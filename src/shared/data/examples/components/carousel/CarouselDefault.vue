<script setup lang="ts">
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
</script>

<template>
  <div class="flex justify-center">
    <Carousel class="w-full max-w-xs" data-component-x-ray="Carousel">
      <CarouselContent data-component-x-ray="CarouselContent">
        <CarouselItem v-for="i in 5" :key="i" data-component-x-ray="CarouselItem">
          <div class="p-1">
            <Card data-component-x-ray="Card">
              <CardContent
                class="flex aspect-square items-center justify-center p-6"
                data-component-x-ray="CardContent"
              >
                <span class="text-4xl font-semibold">{{ i }}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious data-component-x-ray-trigger="CarouselPrevious" />
      <CarouselNext data-component-x-ray-trigger="CarouselNext" />
    </Carousel>
  </div>
</template>
