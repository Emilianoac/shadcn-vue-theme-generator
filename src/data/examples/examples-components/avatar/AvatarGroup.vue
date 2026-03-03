<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<template>
  <div class="space-y-5">
    <!-- Small  -->
    <div class="flex flex-row items-center">
      <Avatar class="w-6 h-6 border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback class="border text-xs text-muted-foreground">CN</AvatarFallback>
      </Avatar>
      <Avatar class="w-6 h-6 border-2 border-background -ml-2">
        <AvatarImage src="https://github.com/zernonia.png" alt="@zernonia" />
        <AvatarFallback class="border text-xs text-muted-foreground">ZE</AvatarFallback>
      </Avatar>
      <Avatar class="w-6 h-6 border-2 border-background -ml-2">
        <AvatarImage src="https://github.com/yyx990803.png" alt="@yyx990803" />
        <AvatarFallback class="border text-xs text-muted-foreground">EY</AvatarFallback>
      </Avatar>
    </div>

    <!-- Medium  -->
    <div class="flex flex-row items-center">
      <Avatar class="w-8 h-8 border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback class="border text-sm text-muted-foreground">CN</AvatarFallback>
      </Avatar>
      <Avatar class="w-8 h-8 border-2 border-background -ml-3">
        <AvatarImage src="https://github.com/zernonia.png" alt="@zernonia" />
        <AvatarFallback class="border text-sm text-muted-foreground">ZE</AvatarFallback>
      </Avatar>
      <Avatar class="w-8 h-8 border-2 border-background -ml-3">
        <AvatarImage src="https://github.com/yyx990803.png" alt="@yyx990803" />
        <AvatarFallback class="border text-sm text-muted-foreground">EY</AvatarFallback>
      </Avatar>
    </div>

    <!-- Large  -->
    <div class="flex flex-row items-center">
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
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
