<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
import { reactive } from "vue";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
  <Card>
    <CardHeader>
      <CardTitle>Team Members</CardTitle>
      <CardDescription> Invite your team members to collaborate. </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-6">
      <div
        v-for="(user, key) in users"
        :key="key"
        class="flex items-center justify-between space-x-4"
      >
        <div class="flex items-center space-x-4">
          <Avatar>
            <AvatarImage :src="user.avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div>
            <p class="text-sm font-medium leading-none">{{ user.name }}</p>
            <p class="text-sm text-muted-foreground">{{ user.email }}</p>
          </div>
        </div>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline" class="ml-auto">
              {{ user.role }}
              <ChevronDown class="ml-2 h-4 w-4 text-muted-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="p-0" align="end">
            <Command v-model="user.role" :highlight-on-hover="true">
              <CommandInput placeholder="Select new role..." />
              <CommandList>
                <CommandEmpty>No roles found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem
                    v-for="role in roles"
                    :key="role.value"
                    :value="role.value"
                    class="space-y-1 flex flex-col items-start px-4 py-2"
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
