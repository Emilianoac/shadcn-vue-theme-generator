<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
</script>

<template>
  <div class="space-y-5">
    <!-- Small  -->
    <div class="flex flex-row items-center">
      <Avatar class="w-6 h-6 border-2 border-background">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          data-component-x-ray="AvatarImage"
        />
        <AvatarFallback class="text-xs" data-component-x-ray="AvatarFallback">CN</AvatarFallback>
      </Avatar>
      <Avatar class="w-6 h-6 border-2 border-background -ml-2">
        <AvatarImage
          src="https://github.com/zernonia.png"
          alt="@zernonia"
          data-component-x-ray="AvatarImage"
        />
        <AvatarFallback class="text-xs" data-component-x-ray="AvatarFallback">ZE</AvatarFallback>
      </Avatar>
      <Avatar class="w-6 h-6 border-2 border-background -ml-2">
        <AvatarImage
          src="https://github.com/yyx990803.png"
          alt="@yyx990803"
          data-component-x-ray="AvatarImage"
        />
        <AvatarFallback class="text-xsd" data-component-x-ray="AvatarFallback">EY</AvatarFallback>
      </Avatar>
      <Avatar class="w-6 h-6 border-2 border-background -ml-2">
        <AvatarFallback class="text-xs" data-component-x-ray="AvatarFallback">+3</AvatarFallback>
      </Avatar>
    </div>

    <!-- Medium  -->
    <div class="flex flex-row items-center">
      <Avatar class="w-8 h-8 border-2 border-background">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          data-component-x-ray="AvatarImage"
        />
        <AvatarFallback class="text-sm" data-component-x-ray="AvatarFallback">CN </AvatarFallback>
      </Avatar>
      <Avatar class="w-8 h-8 border-2 border-background -ml-3">
        <AvatarImage
          src="https://github.com/zernonia.png"
          alt="@zernonia"
          data-component-x-ray="AvatarImage"
        />
        <AvatarFallback class="text-sm" data-component-x-ray="AvatarFallback">ZE </AvatarFallback>
      </Avatar>
      <Avatar class="w-8 h-8 border-2 border-background -ml-3">
        <AvatarImage
          src="https://github.com/yyx990803.png"
          alt="@yyx990803"
          data-component-x-ray="AvatarImage"
        />
        <AvatarFallback class="text-sm" data-component-x-ray="AvatarFallback">EY</AvatarFallback>
      </Avatar>
      <Avatar class="w-8 h-8 border-2 border-background -ml-3">
        <AvatarFallback class="text-sm" data-component-x-ray="AvatarFallback">+3</AvatarFallback>
      </Avatar>
    </div>

    <!-- Large  -->
    <div class="flex flex-row items-center">
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
        <AvatarFallback data-component-x-ray="AvatarFallback">+3</AvatarFallback>
      </Avatar>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
