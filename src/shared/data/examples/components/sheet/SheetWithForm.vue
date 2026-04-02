<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
</script>

<template>
  <Sheet data-component-x-ray="Sheet">
    <SheetTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Open </Button>
    </SheetTrigger>
    <SheetContent data-component-x-ray="SheetContent">
      <SheetHeader data-component-x-ray="SheetHeader">
        <SheetTitle data-component-x-ray="SheetTitle">Edit profile</SheetTitle>
        <SheetDescription data-component-x-ray="SheetDescription">
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div class="px-4">
        <FieldGroup data-component-x-ray="FieldGroup">
          <Field data-component-x-ray="Field">
            <FieldLabel for="sheet-demo-name" data-component-x-ray="FieldLabel"> Name </FieldLabel>
            <Input
              id="sheet-demo-name"
              default-value="Pedro Duarte"
              data-component-x-ray-trigger="Input"
            />
          </Field>
          <Field data-component-x-ray="Field">
            <FieldLabel for="sheet-demo-username" data-component-x-ray="FieldLabel">
              Username
            </FieldLabel>
            <Input
              id="sheet-demo-username"
              default-value="@peduarte"
              data-component-x-ray-trigger="Input"
            />
          </Field>
        </FieldGroup>
      </div>
      <SheetFooter data-component-x-ray="SheetFooter">
        <Button type="submit" data-component-x-ray-trigger="Button"> Save changes </Button>
        <SheetClose :as-child="true">
          <Button variant="outline" data-component-x-ray-trigger="Button"> Close </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
