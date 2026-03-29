<script setup lang="ts">
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <Card class="w-full" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <Skeleton class="h-4 w-2/3" data-component-x-ray="Skeleton" />
      <Skeleton class="h-4 w-1/2" data-component-x-ray="Skeleton" />
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <Skeleton class="aspect-square w-full" data-component-x-ray="Skeleton" />
    </CardContent>
  </Card>
</template>
