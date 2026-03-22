<script setup lang="ts">
import {
  ChevronsUpDownIcon,
  BadgeCheckIcon,
  CreditCardIcon,
  BellIcon,
  LogOutIcon,
} from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
</script>

<template>
  <div class="flex items-center justify-between gap-4">
    <DropdownMenu data-component-x-ray-trigger="DropdownMenu">
      <DropdownMenuTrigger :as-child="true">
        <Button
          variant="outline"
          class="h-12 justify-start px-2 md:max-w-50"
          data-component-x-ray-trigger="Button"
        >
          <Avatar data-component-x-ray="Avatar">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Shadcn"
              data-component-x-ray-trigger="AvatarImage"
            />
            <AvatarFallback class="rounded-lg" data-component-x-ray-trigger="AvatarFallback">
              CN
            </AvatarFallback>
          </Avatar>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">shadcn</span>
            <span class="truncate text-xs text-muted-foreground"> shadcn@example.com </span>
          </div>
          <ChevronsUpDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="min-w-56" data-component-x-ray="DropdownMenuContent">
        <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <BadgeCheckIcon />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator data-component-x-ray="DropdownMenuSeparator" />
        <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu data-component-x-ray-trigger="DropdownMenu">
      <DropdownMenuTrigger :as-child="true">
        <Button
          variant="ghost"
          size="icon"
          class="rounded-full"
          data-component-x-ray-trigger="Button"
        >
          <Avatar data-component-x-ray="Avatar">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="shadcn"
              data-component-x-ray-trigger="AvatarImage"
            />
            <AvatarFallback data-component-x-ray-trigger="AvatarFallback">CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="top" data-component-x-ray="DropdownMenuContent">
        <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <BadgeCheckIcon />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator data-component-x-ray="DropdownMenuSeparator" />
        <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
          <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
            <LogOutIcon />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
