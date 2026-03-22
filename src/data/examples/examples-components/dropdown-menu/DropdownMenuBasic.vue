<script setup lang="ts">
import {
  UserIcon,
  CreditCardIcon,
  SettingsIcon,
  GitBranchIcon,
  HelpCircleIcon,
  CodeIcon,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
</script>

<template>
  <DropdownMenu data-component-x-ray="DropdownMenu">
    <DropdownMenuTrigger :as-child="true">
      <Button variant="outline" class="w-fit" data-component-x-ray-trigger="Button"> Open </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent data-component-x-ray="DropdownMenuContent">
      <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
        <DropdownMenuLabel data-component-x-ray="DropdownMenuLabel">My Account</DropdownMenuLabel>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          <CreditCardIcon />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          <SettingsIcon />
          Settings
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator data-component-x-ray="DropdownMenuSeparator" />
      <DropdownMenuGroup>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          <GitBranchIcon />
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          <HelpCircleIcon />
          Support
        </DropdownMenuItem>
        <DropdownMenuItem :disabled="true" data-component-x-ray-trigger="DropdownMenuItem">
          <CodeIcon />
          API
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
