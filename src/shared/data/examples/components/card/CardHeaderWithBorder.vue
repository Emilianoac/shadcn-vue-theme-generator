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
    <CardHeader class="border-b" data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Header with Border</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        This is a card with a header that has a bottom border.
      </CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <p>
        The header has a border-b class applied, creating a visual separation between the header and
        content sections.
      </p>
    </CardContent>
    <CardFooter data-component-x-ray="CardFooter">
      <Button variant="outline" class="w-full" data-component-x-ray="Button"> Action </Button>
    </CardFooter>
  </Card>
</template>
