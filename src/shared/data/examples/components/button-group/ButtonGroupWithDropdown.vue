<script setup lang="ts">
import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
import { ButtonGroup } from "@/shared/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
</script>

<template>
  <ButtonGroup>
    <Button variant="outline" data-component-x-ray="Button"> Follow </Button>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline" size="icon" data-component-x-ray-trigger="Button">
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-component-x-ray="DropdownMenuContent">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <VolumeOffIcon />
            Mute Conversation
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CheckIcon />
            Mark as Read
          </DropdownMenuItem>
          <DropdownMenuItem>
            <AlertTriangleIcon />
            Report Conversation
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserRoundXIcon />
            Block User
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShareIcon />
            Share Conversation
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Copy Conversation
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            Delete Conversation
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </ButtonGroup>
</template>
