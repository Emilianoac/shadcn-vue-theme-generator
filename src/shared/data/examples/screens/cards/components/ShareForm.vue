<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Separator } from "@/shared/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
</script>

<template>
  <Card data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Share this document</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        Anyone with the link can view this document.
      </CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <div class="flex space-x-2">
        <Input
          value="http://example.com/link/to/document"
          read-only
          data-component-x-ray-trigger="Input"
        />
        <Button variant="secondary" class="shrink-0" data-component-x-ray-trigger="Button">
          Copy Link
        </Button>
      </div>
      <Separator class="my-4" data-component-x-ray="Separator" />
      <div class="space-y-4">
        <h4 class="text-sm font-medium">People with access</h4>
        <div class="grid gap-6">
          <div class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <Avatar data-component-x-ray="Avatar">
                <AvatarImage src="/avatars/03.png" data-component-x-ray="AvatarImage" />
                <AvatarFallback data-component-x-ray="AvatarFallback">OM</AvatarFallback>
              </Avatar>
              <div>
                <p class="text-sm font-medium leading-none">Olivia Martin</p>
                <p class="text-sm text-muted-foreground">m@example.com</p>
              </div>
            </div>
            <Select default-value="edit">
              <SelectTrigger class="ml-auto w-27.5" data-component-x-ray-trigger="SelectTrigger">
                <SelectValue placeholder="Select" data-component-x-ray-trigger="SelectValue" />
              </SelectTrigger>
              <SelectContent data-component-x-ray="SelectContent">
                <SelectItem value="edit" data-component-x-ray-trigger="SelectItem">
                  Can edit
                </SelectItem>
                <SelectItem value="view" data-component-x-ray-trigger="SelectItem">
                  Can view
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <Avatar data-component-x-ray="Avatar">
                <AvatarImage src="/avatars/05.png" data-component-x-ray="AvatarImage" />
                <AvatarFallback data-component-x-ray="AvatarFallback">IN</AvatarFallback>
              </Avatar>
              <div>
                <p class="text-sm font-medium leading-none">Isabella Nguyen</p>
                <p class="text-sm text-muted-foreground">b@example.com</p>
              </div>
            </div>
            <Select default-value="view">
              <SelectTrigger class="ml-auto w-27.5" data-component-x-ray-trigger="SelectTrigger">
                <SelectValue placeholder="Select" data-component-x-ray-trigger="SelectValue" />
              </SelectTrigger>
              <SelectContent data-component-x-ray="SelectContent">
                <SelectItem value="edit" data-component-x-ray-trigger="SelectItem">
                  Can edit
                </SelectItem>
                <SelectItem value="view" data-component-x-ray-trigger="SelectItem">
                  Can view
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <Avatar data-component-x-ray="Avatar">
                <AvatarImage src="/avatars/01.png" data-component-x-ray="AvatarImage" />
                <AvatarFallback data-component-x-ray-trigger="AvatarFallback">SD</AvatarFallback>
              </Avatar>
              <div>
                <p class="text-sm font-medium leading-none">Sofia Davis</p>
                <p class="text-sm text-muted-foreground">p@example.com</p>
              </div>
            </div>
            <Select default-value="view" data-component-x-ray-trigger="Select">
              <SelectTrigger class="ml-auto w-27.5" data-component-x-ray-trigger="SelectTrigger">
                <SelectValue placeholder="Select" data-component-x-ray-trigger="SelectValue" />
              </SelectTrigger>
              <SelectContent data-component-x-ray-trigger="SelectContent">
                <SelectItem value="edit" data-component-x-ray-trigger="SelectItem">
                  Can edit
                </SelectItem>
                <SelectItem value="view" data-component-x-ray-trigger="SelectItem">
                  Can view
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
