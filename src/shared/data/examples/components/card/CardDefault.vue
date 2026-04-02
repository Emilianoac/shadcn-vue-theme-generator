<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
</script>

<template>
  <Card class="w-full max-w-sm mx-auto" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle"> Default Card </CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        This is a default card component.
      </CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <p>This is the content of the card. You can put any content here, such as text, images.</p>
    </CardContent>
    <CardFooter data-component-x-ray="CardFooter">
      <Button variant="outline" class="w-full" data-component-x-ray="Button"> Action </Button>
    </CardFooter>
  </Card>
</template>
