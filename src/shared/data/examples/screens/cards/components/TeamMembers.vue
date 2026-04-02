<script setup lang="ts">
import { reactive } from "vue";
import { ChevronDown } from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";

import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";

const users = reactive({
  sofia: {
    name: "Sofia Davis",
    email: "m@example.com",
    role: "Owner",
    avatar: "/avatars/01.png",
  },
  jackson: {
    name: "Jackson Lee",
    email: "m@example.com",
    role: "Member",
    avatar: "/avatars/02.png",
  },
  isabella: {
    name: "Isabella Nguyen",
    email: "m@example.com",
    role: "Member",
    avatar: "/avatars/03.png",
  },
});

const roles = [
  {
    value: "Viewer",
    title: "Viewer",
    description: "Can view and comment.",
  },
  {
    value: "Developer",
    title: "Developer",
    description: "Can view, comment and edit.",
  },
  {
    value: "Billing",
    title: "Billing",
    description: "Can view, comment and manage billing.",
  },
  {
    value: "Owner",
    title: "Owner",
    description: "Admin-level access to all resources.",
  },
];
</script>

<template>
  <Card data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Team Members</CardTitle>
      <CardDescription> Invite your team members to collaborate. </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-6" data-component-x-ray="CardContent">
      <div
        v-for="(user, key) in users"
        :key="key"
        class="flex items-center justify-between space-x-4"
      >
        <div class="flex items-center space-x-4">
          <Avatar data-component-x-ray="Avatar">
            <AvatarImage :src="user.avatar" data-component-x-ray-trigger="AvatarImage" />
            <AvatarFallback data-component-x-ray="AvatFallback">OM</AvatarFallback>
          </Avatar>
          <div>
            <p class="text-sm font-medium leading-none">{{ user.name }}</p>
            <p class="text-sm text-muted-foreground">{{ user.email }}</p>
          </div>
        </div>
        <Popover data-component-x-ray="Popover">
          <PopoverTrigger as-child>
            <Button variant="outline" class="ml-auto" data-component-x-ray-trigger="Button">
              {{ user.role }}
              <ChevronDown class="ml-2 h-4 w-4 text-muted-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="p-0" align="end" data-component-x-ray="PopoverContent">
            <Command v-model="user.role" :highlight-on-hover="true" data-component-x-ray="Command">
              <CommandInput
                placeholder="Select new role..."
                data-component-x-ray-trigger="CommandInput"
              />
              <CommandList data-component-x-ray="CommandList">
                <CommandEmpty data-component-x-ray="CommandEmpty">No roles found.</CommandEmpty>
                <CommandGroup data-component-x-ray="CommandGroup">
                  <CommandItem
                    v-for="role in roles"
                    :key="role.value"
                    :value="role.value"
                    class="space-y-1 flex flex-col items-start px-4 py-2"
                    data-component-x-ray-trigger="CommandItem"
                  >
                    <p>{{ role.title }}</p>
                    <p class="text-sm text-muted-foreground">{{ role.description }}</p>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </CardContent>
  </Card>
</template>
