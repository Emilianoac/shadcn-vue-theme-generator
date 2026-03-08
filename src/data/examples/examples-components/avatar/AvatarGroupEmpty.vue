<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-vue-next";
</script>

<template>
  <Empty>
    <EmptyHeader data-component-x-ray="EmptyHeader">
      <EmptyMedia variant="default">
        <div class="flex flex-row items-center grayscale">
          <Avatar class="w-10 h-10 border-2 border-background">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              data-component-x-ray="AvatarImage"
            />
            <AvatarFallback data-component-x-ray="AvatarFallback">CN</AvatarFallback>
          </Avatar>
          <Avatar class="w-10 h-10 border-2 border-background -ml-3">
            <AvatarImage
              src="https://github.com/zernonia.png"
              alt="@zernonia"
              data-component-x-ray="AvatarImage"
            />
            <AvatarFallback data-component-x-ray="AvatarFallback">ZE</AvatarFallback>
          </Avatar>
          <Avatar class="w-10 h-10 border-2 border-background -ml-3">
            <AvatarImage
              src="https://github.com/yyx990803.png"
              alt="@yyx990803"
              data-component-x-ray="AvatarImage"
            />
            <AvatarFallback data-component-x-ray="AvatarFallback">EY</AvatarFallback>
          </Avatar>
          <Avatar class="w-10 h-10 border-2 border-background -ml-3">
            <AvatarFallback data-component-x-ray="AvatarFallback">
              <Plus class="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </EmptyMedia>
      <EmptyTitle data-component-x-ray="EmptyTitle"> No Team Members</EmptyTitle>
      <EmptyDescription data-component-x-ray="EmptyDescription">
        Invite your team to collaborate on this project.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent data-component-x-ray="EmptyContent">
      <Button variant="default" data-component-x-ray="Button">
        <Plus class="h-4 w-4" /> Invite Members</Button
      >
    </EmptyContent>
  </Empty>
</template>

<style lang="postcss" scoped></style>
