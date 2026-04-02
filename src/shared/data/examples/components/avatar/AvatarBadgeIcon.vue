<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { Badge } from "@/shared/components/ui/badge";
import { Plus } from "lucide-vue-next";
</script>

<template>
  <div class="space-y-5">
    <div class="flex flex-row flex-wrap items-center gap-2 max-w-150 mx-auto">
      <div class="relative inline-flex">
        <Avatar class="w-6 h-6">
          <AvatarImage
            src="https://github.com/zernonia.png"
            alt="@zernonia"
            data-component-x-ray="AvatarImage"
          />
          <AvatarFallback class="text-xs" data-component-x-ray="AvatarFallback">ZE</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background p-0"
          data-component-x-ray="Badge"
        >
          <Plus class="h-2 w-2" />
        </Badge>
      </div>
      <div class="relative inline-flex">
        <Avatar class="w-8 h-8">
          <AvatarImage
            src="https://github.com/zernonia.png"
            alt="@zernonia"
            data-component-x-ray="AvatarImage"
          />
          <AvatarFallback class="text-sm" data-component-x-ray="AvatarFallback">ZE</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background p-0"
          data-component-x-ray="Badge"
        >
          <Plus class="h-2.5 w-2.5" />
        </Badge>
      </div>
      <div class="relative inline-flex">
        <Avatar class="w-10 h-10">
          <AvatarImage
            src="https://github.com/zernonia.png"
            alt="@zernonia"
            data-component-x-ray="AvatarImage"
          />
          <AvatarFallback data-component-x-ray="AvatarFallback">ZE</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background p-0"
          data-component-x-ray="Badge"
        >
          <Plus class="h-3 w-3" />
        </Badge>
      </div>
    </div>

    <div class="flex flex-row flex-wrap items-center gap-2 max-w-150 mx-auto">
      <div class="relative inline-flex">
        <Avatar class="w-6 h-6">
          <AvatarImage src="#" alt="@zernonia" data-component-x-ray="AvatarImage" />
          <AvatarFallback class="text-xs" data-component-x-ray="AvatarFallback">ZE</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background p-0"
          data-component-x-ray="Badge"
        >
          <Plus class="h-2 w-2" />
        </Badge>
      </div>
      <div class="relative inline-flex">
        <Avatar class="w-8 h-8">
          <AvatarImage src="#" alt="@zernonia" data-component-x-ray="AvatarImage" />
          <AvatarFallback class="text-sm" data-component-x-ray="AvatarFallback">ZE</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background p-0"
          data-component-x-ray="Badge"
        >
          <Plus class="h-2.5 w-2.5" />
        </Badge>
      </div>
      <div class="relative inline-flex">
        <Avatar class="w-10 h-10">
          <AvatarImage src="#" alt="@zernonia" data-component-x-ray="AvatarImage" />
          <AvatarFallback data-component-x-ray="AvatarFallback"> ZE</AvatarFallback>
        </Avatar>
        <Badge
          variant="default"
          class="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background p-0"
          data-component-x-ray="Badge"
        >
          <Plus class="h-3 w-3" />
        </Badge>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
