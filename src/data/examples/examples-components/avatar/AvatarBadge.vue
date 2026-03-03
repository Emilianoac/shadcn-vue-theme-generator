<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
</script>

<template>
  <div class="space-y-5">
    <div class="flex flex-row flex-wrap items-center gap-2 max-w-150 mx-auto">
      <div class="relative inline-flex">
        <Avatar class="w-6 h-6">
          <AvatarImage src="https://github.com/yyx990803.png" alt="@yyx990803" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background p-0"
        />
      </div>
      <div class="relative inline-flex">
        <Avatar class="w-8 h-8">
          <AvatarImage src="https://github.com/yyx990803.png" alt="@yyx990803" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background p-0"
        />
      </div>
      <div class="relative inline-flex">
        <Avatar class="w-10 h-10">
          <AvatarImage src="https://github.com/yyx990803.png" alt="@yyx990803" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background p-0"
        />
      </div>
    </div>

    <div class="flex flex-row flex-wrap items-center gap-2 max-w-150 mx-auto">
      <div class="relative inline-flex">
        <Avatar class="w-6 h-6">
          <AvatarImage src="#" alt="@yyx990803" />
          <AvatarFallback class="border text-xs text-muted-foreground">EY</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background p-0"
        />
      </div>
      <div class="relative inline-flex">
        <Avatar class="w-8 h-8">
          <AvatarImage src="#" alt="@yyx990803" />
          <AvatarFallback class="border text-sm text-muted-foreground">EY</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background p-0"
        />
      </div>
      <div class="relative inline-flex">
        <Avatar class="w-10 h-10">
          <AvatarImage src="#" alt="@yyx990803" />
          <AvatarFallback class="border text-muted-foreground">EY</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background p-0"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
