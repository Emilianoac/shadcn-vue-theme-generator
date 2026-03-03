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
      <Button variant="outline"> Small </Button>
    </AlertDialogTrigger>
    <AlertDialogContent class="max-w-xs sm:max-w-xs">
      <AlertDialogHeader>
        <AlertDialogTitle class="text-center">Allow accessory to connect?</AlertDialogTitle>
        <AlertDialogDescription class="text-center">
          Do you want to allow the USB accessory to connect to this device?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter class="sm:grid grid-cols-2">
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style lang="postcss" scoped></style>
