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
      <Button variant="outline" data-component-x-ray-trigger="Button"> Default </Button>
    </AlertDialogTrigger>
    <AlertDialogContent data-component-x-ray="AlertDialogContent">
      <AlertDialogHeader data-component-x-ray="AlertDialogHeader">
        <AlertDialogTitle data-component-x-ray="AlertDialogTitle">
          Are you absolutely sure?
        </AlertDialogTitle>
        <AlertDialogDescription data-component-x-ray="AlertDialogDescription">
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter data-component-x-ray="AlertDialogFooter">
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
