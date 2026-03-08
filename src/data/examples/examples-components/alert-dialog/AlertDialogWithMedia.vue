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
      <Button variant="outline" data-component-x-ray-trigger="Button"> Default (Media) </Button>
    </AlertDialogTrigger>
    <AlertDialogContent class="max-w-xs md:max-w-md" data-component-x-ray="AlertDialogContent">
      <AlertDialogHeader
        class="md:grid grid-cols-[auto_1fr] items-center gap-y-1 gap-x-4"
        data-component-x-ray="AlertDialogHeader"
      >
        <Layers
          class="col-span-1 row-span-2 mx-auto mb-4 h-16 w-16 text-base-foreground bg-muted p-4 rounded-sm"
        />
        <AlertDialogTitle class="col-start-2" data-component-x-ray="AlertDialogTitle">
          Are you absolutely sure?
        </AlertDialogTitle>
        <AlertDialogDescription class="col-start-2" data-component-x-ray="AlertDialogDescription">
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
