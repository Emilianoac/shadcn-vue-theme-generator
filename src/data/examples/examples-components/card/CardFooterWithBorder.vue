<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
</script>

<template>
  <Card class="w-full max-w-sm mx-auto" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Footer with Border</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        This is a card with a footer that has a top border.
      </CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <p>
        The footer has a border-t class applied, creating a visual separation between the content
        and footer sections.
      </p>
    </CardContent>
    <CardFooter class="border-t" data-component-x-ray="CardFooter">
      <Button variant="outline" class="w-full" data-component-x-ray="Button"> Action </Button>
    </CardFooter>
  </Card>
</template>
