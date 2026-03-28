<script lang="ts" setup>
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child class="mx-auto block">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Small </Button>
    </AlertDialogTrigger>
    <AlertDialogContent class="max-w-xs sm:max-w-xs" data-component-x-ray="AlertDialogContent">
      <AlertDialogHeader data-component-x-ray="AlertDialogHeader">
        <AlertDialogTitle class="text-center" data-component-x-ray="AlertDialogTitle">
          Allow accessory to connect?
        </AlertDialogTitle>
        <AlertDialogDescription class="text-center" data-component-x-ray="AlertDialogDescription">
          Do you want to allow the USB accessory to connect to this device?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter class="sm:grid grid-cols-2" data-component-x-ray="AlertDialogFooter">
        <AlertDialogCancel data-component-x-ray-trigger="AlertDialogCancel">
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction data-component-x-ray-trigger="AlertDialogAction">
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style lang="postcss" scoped></style>
