<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<template>
  <div class="space-y-5">
    <div class="flex flex-row flex-wrap items-center gap-2 max-w-150 mx-auto">
      <Avatar class="w-6 h-6">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback class="border text-xs text-muted-foreground">CN</AvatarFallback>
      </Avatar>
      <Avatar class="w-8 h-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@evilrabbit" />
        <AvatarFallback class="border text-sm text-muted-foreground">CN</AvatarFallback>
      </Avatar>
      <Avatar class="w-10 h-10">
        <AvatarImage src="https://github.com/shadcn.png" alt="@evilrabbit" />
        <AvatarFallback class="border text-muted-foreground">CN</AvatarFallback>
      </Avatar>
    </div>

    <div class="flex flex-row flex-wrap items-center gap-2 max-w-150 mx-auto">
      <Avatar class="w-6 h-6 relative">
        <AvatarImage src="#" alt="@shadcn" />
        <AvatarFallback class="border text-xs text-muted-foreground">CN</AvatarFallback>
      </Avatar>
      <Avatar class="w-8 h-8">
        <AvatarImage src="#" alt="@shadcn" />
        <AvatarFallback class="border text-sm text-muted-foreground">CN</AvatarFallback>
      </Avatar>
      <Avatar class="w-10 h-10">
        <AvatarImage src="#" alt="@shadcn" />
        <AvatarFallback class="border text-muted-foreground">CN</AvatarFallback>
      </Avatar>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
