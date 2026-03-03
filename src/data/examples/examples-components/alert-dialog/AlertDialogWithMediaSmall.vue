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
import { Layers } from "lucide-vue-next";
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child class="mx-auto block">
      <Button variant="outline"> Small (Media)</Button>
    </AlertDialogTrigger>
    <AlertDialogContent class="max-w-xs sm:max-w-xs">
      <AlertDialogHeader class="items-center">
        <Layers class="mx-auto mb-4 h-16 w-16 text-base-foreground bg-muted p-4 rounded-sm" />
        <AlertDialogTitle class="">Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription class="text-center">
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
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
