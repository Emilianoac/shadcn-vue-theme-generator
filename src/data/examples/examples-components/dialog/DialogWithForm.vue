<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
</script>

<template>
  <Dialog data-component-x-ray="Dialog">
    <form>
      <DialogTrigger :as-child="true">
        <Button variant="outline" data-component-x-ray-trigger="Button"> Edit Profile </Button>
      </DialogTrigger>
      <DialogContent to="#examples-container" data-component-x-ray="DialogContent">
        <DialogHeader data-component-x-ray="DialogHeader">
          <DialogTitle data-component-x-ray="DialogTitle">Edit profile</DialogTitle>
          <DialogDescription data-component-x-ray="DialogDescription">
            Make changes to your profile here. Click save when you're done. Your profile will be
            updated immediately.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup data-component-x-ray-field="FieldGroup">
          <Field data-component-x-ray-field="Field">
            <FieldLabel html-for="name-1" data-component-x-ray="FieldLabel"> Name </FieldLabel>
            <Input
              id="name-1"
              name="name"
              default-value="Pedro Duarte"
              data-component-x-ray-trigger="Input"
            />
          </Field>
          <Field data-component-x-ray-field="Field">
            <FieldLabel html-for="username-1" data-component-x-ray="FieldLabel">
              Username
            </FieldLabel>
            <Input
              id="username-1"
              name="username"
              default-value="@peduarte"
              data-component-x-ray-trigger="Input"
            />
          </Field>
        </FieldGroup>
        <DialogFooter data-component-x-ray="DialogFooter">
          <DialogClose :as-child="true">
            <Button variant="outline" data-component-x-ray-trigger="Button"> Cancel </Button>
          </DialogClose>
          <Button type="submit" data-component-x-ray-trigger="Button"> Save </Button>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
</template>
