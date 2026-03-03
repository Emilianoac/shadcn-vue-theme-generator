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
    <EmptyHeader>
      <EmptyMedia variant="default">
        <div class="flex flex-row items-center grayscale">
          <Avatar class="w-10 h-10 border-2 border-background">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback class="border text-muted-foreground">CN</AvatarFallback>
          </Avatar>
          <Avatar class="w-10 h-10 border-2 border-background -ml-3">
            <AvatarImage src="https://github.com/zernonia.png" alt="@zernonia" />
            <AvatarFallback class="border text-muted-foreground">ZE</AvatarFallback>
          </Avatar>
          <Avatar class="w-10 h-10 border-2 border-background -ml-3">
            <AvatarImage src="https://github.com/yyx990803.png" alt="@yyx990803" />
            <AvatarFallback class="border text-muted-foreground">EY</AvatarFallback>
          </Avatar>
          <Avatar class="w-10 h-10 border-2 border-background -ml-3">
            <AvatarFallback class="border text-muted-foreground">
              <Plus class="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </EmptyMedia>
      <EmptyTitle>No Team Members</EmptyTitle>
      <EmptyDescription> Invite your team to collaborate on this project. </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button><Plus class="h-4 w-4" /> Invite Members</Button>
    </EmptyContent>
  </Empty>
</template>

<style lang="postcss" scoped></style>
