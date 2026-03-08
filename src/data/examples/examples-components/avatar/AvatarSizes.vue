<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<template>
  <div class="space-y-5">
    <div class="flex flex-row flex-wrap items-center gap-2 max-w-150 mx-auto">
      <Avatar class="w-6 h-6" data-component-x-ray="Avatar">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          data-component-x-ray="AvatarImage"
        />
        <AvatarFallback class="text-xs" data-component-x-ray="AvatarFallback"> CN </AvatarFallback>
      </Avatar>
      <Avatar class="w-8 h-8" data-component-x-ray="Avatar">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          data-component-x-ray="AvatarImage"
        />
        <AvatarFallback class="text-sm" data-component-x-ray="AvatarFallback"> CN </AvatarFallback>
      </Avatar>
      <Avatar class="w-10 h-10" data-component-x-ray="Avatar">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          data-component-x-ray="AvatarImage"
        />
        <AvatarFallback data-component-x-ray="AvatarFallback"> CN </AvatarFallback>
      </Avatar>
    </div>

    <div class="flex flex-row flex-wrap items-center gap-2 max-w-150 mx-auto">
      <Avatar class="w-6 h-6 relative">
        <AvatarImage src="#" alt="@shadcn" />
        <AvatarFallback class="text-xs" data-component-x-ray="AvatarFallback"> CN </AvatarFallback>
      </Avatar>
      <Avatar class="w-8 h-8">
        <AvatarImage src="#" alt="@shadcn" data-component-x-ray="AvatarImage" />
        <AvatarFallback class="text-sm" data-component-x-ray="AvatarFallback"> CN </AvatarFallback>
      </Avatar>
      <Avatar class="w-10 h-10">
        <AvatarImage src="#" alt="@shadcn" data-component-x-ray="AvatarImage" />
        <AvatarFallback data-component-x-ray="AvatarFallback"> CN </AvatarFallback>
      </Avatar>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
