<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
</script>

<template>
  <DropdownMenu data-component-x-ray="DropdownMenu">
    <DropdownMenuTrigger :as-child="true">
      <Button variant="outline" class="w-fit" data-component-x-ray-trigger="Button"> Open </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent data-component-x-ray="DropdownMenuContent">
      <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">Team</DropdownMenuItem>
        <DropdownMenuSub data-component-x-ray="DropdownMenuSub">
          <DropdownMenuSubTrigger data-component-x-ray="DropdownMenuSubTrigger">
            Invite users
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent data-component-x-ray="DropdownMenuSubContent">
            <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                Email
              </DropdownMenuItem>
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                Message
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator data-component-x-ray="DropdownMenuSeparator" />
            <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                More...
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
          New Team
          <DropdownMenuShortcut data-component-x-ray-trigger="DropdownMenuShortcut">
            ⌘+T
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
