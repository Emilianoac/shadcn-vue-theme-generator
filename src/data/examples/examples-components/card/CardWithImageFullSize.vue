<script setup lang="ts">
import exampleImage from "@/assets/images/example-image.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardAction,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
</script>

<template>
  <Card class="w-full max-w-sm mx-auto pt-0 overflow-hidden" data-component-x-ray="Card">
    <CardContent class="px-0" data-component-x-ray="CardContent">
      <img
        :src="exampleImage"
        class="w-full h-auto mb-4"
        alt="A shiba inu dog sitting on the grass"
      />
    </CardContent>
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Card with Image full size</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        This is a card example that includes a full-width image in the content section.
      </CardDescription>
    </CardHeader>
    <CardFooter data-component-x-ray="CardFooter">
      <CardAction class="w-full" data-component-x-ray="CardAction">
        <Button variant="outline" class="w-full" data-component-x-ray="Button">Action</Button>
      </CardAction>
    </CardFooter>
  </Card>
</template>
