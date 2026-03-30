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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
</script>

<template>
  <Card data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Cookie Settings</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        Manage your cookie settings here.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-6" data-component-x-ray="CardContent">
      <div class="flex items-center justify-between gap-4">
        <Label for="necessary" class="flex flex-col items-start" data-component-x-ray="Label">
          <span>Strictly Necessary</span>
          <span class="text-muted-foreground leading-snug font-normal">
            These cookies are essential in order to use the website and use its features.
          </span>
        </Label>
        <Switch
          id="necessary"
          :default-value="true"
          aria-label="Necessary"
          data-component-x-ray-trigger="Switch"
        />
      </div>
      <div class="flex items-center justify-between gap-4">
        <Label for="functional" class="flex flex-col items-start" data-component-x-ray="Label">
          <span>Functional Cookies</span>
          <span class="text-muted-foreground leading-snug font-normal">
            These cookies allow the website to provide personalized functionality.
          </span>
        </Label>
        <Switch id="functional" aria-label="Functional" data-component-x-ray-trigger="Switch" />
      </div>
    </CardContent>
    <CardFooter data-component-x-ray="CardFooter">
      <Button variant="outline" class="w-full" data-component-x-ray-trigger="Buttton">
        Save preferences
      </Button>
    </CardFooter>
  </Card>
</template>
