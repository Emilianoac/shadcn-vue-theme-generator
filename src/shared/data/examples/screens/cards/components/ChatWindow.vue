<script setup lang="ts">
import { computed, ref } from "vue";
import { Check, Plus, Send } from "lucide-vue-next";
import { cn } from "@/shared/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";

const input = ref("");
const inputLength = computed(() => input.value.trim().length);
const users = ref([
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/01.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/avatars/05.png",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "/avatars/02.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "/avatars/04.png",
  },
]);

type User = (typeof users.value)[number];

const messages = ref([
  { role: "agent", content: "Hi, how can I help you today?" },
  { role: "user", content: "Hey, I'm having trouble with my account." },
  { role: "agent", content: "What seems to be the problem?" },
  { role: "user", content: "I can't log in." },
]);

const open = ref(false);
const selectedUsers = ref<User[]>([]);

function handleSendMessage() {
  if (inputLength.value === 0) return;
  messages.value.push({
    role: "user",
    content: input.value,
  });
  input.value = "";

  // Simulate agent response
  setTimeout(() => {
    messages.value.push({
      role: "agent",
      content: "I'm sorry to hear that. Let's see what we can do to fix this.",
    });
  }, 1000);
}
</script>

<template>
  <Card class="max-w-100" data-component-x-ray="Card">
    <CardHeader
      class="flex flex-row items-center justify-between"
      data-component-x-ray="CardHeader"
    >
      <div class="flex items-center space-x-4">
        <Avatar data-component-x-ray="Avatar">
          <AvatarImage
            src="/avatars/01.png"
            alt="Image"
            data-component-x-ray-trigger="AvatarImage"
          />
          <AvatarFallback data-component-x-ray="AvatarFallback">S</AvatarFallback>
        </Avatar>
        <div>
          <p class="text-sm font-medium leading-none">Sofia Davis</p>
          <p class="text-sm text-muted-foreground">m@example.com</p>
        </div>
      </div>
      <TooltipProvider>
        <Tooltip :delay-duration="200">
          <TooltipTrigger as-child>
            <Button
              variant="outline"
              class="rounded-full p-2.5 flex items-center justify-center"
              @click="open = true"
              data-component-x-ray-trigger="Button"
            >
              <Plus class="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent :side-offset="10"> New message </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <div class="space-y-4">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="
            cn(
              'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm',
              message.role === 'user' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted',
            )
          "
        >
          {{ message.content }}
        </div>
      </div>
    </CardContent>
    <CardFooter data-component-x-ray="CardFooter">
      <form class="flex w-full items-center space-x-2" @submit.prevent="handleSendMessage()">
        <Input
          v-model="input"
          placeholder="Type a message..."
          class="flex-1"
          data-component-x-ray-trigger="Input"
        />
        <Button
          class="p-2.5 flex items-center justify-center"
          :disabled="inputLength === 0"
          aria-label="Send message"
          data-component-x-ray-trigger="Button"
        >
          <Send class="w-4 h-4" />
        </Button>
      </form>
    </CardFooter>
  </Card>

  <Dialog v-model:open="open" data-component-x-ray="Dialog">
    <DialogContent class="gap-0 p-0 outline-none" data-component-x-ray="DialogContent">
      <DialogHeader class="px-4 pb-4 pt-5" data-component-x-ray="DialogHeader">
        <DialogTitle data-component-x-ray="DialogTitle">New message</DialogTitle>
        <DialogDescription data-component-x-ray="DialogDescription">
          Invite a user to this thread. This will create a new group message.
        </DialogDescription>
      </DialogHeader>
      <Command class="overflow-hidden rounded-t-none border-t" data-component-x-ray="Command">
        <CommandInput placeholder="Search user..." data-component-x-ray-trigger="CommandInput" />
        <CommandList data-component-x-ray="CommandList">
          <CommandEmpty data-component-x-ray="CommandEmpty">No users found.</CommandEmpty>
          <CommandGroup class="p-2" data-component-x-ray="CommandGroup">
            <CommandItem
              v-for="user in users"
              :key="user.email"
              :value="user"
              class="flex items-center px-2"
              @select="
                () => {
                  const index = selectedUsers.findIndex((u) => u === user);
                  if (index !== -1) {
                    selectedUsers.splice(index, 1);
                  } else {
                    selectedUsers.push(user);
                  }
                }
              "
              data-component-x-ray-trigger="CommandItem"
            >
              <Avatar data-component-x-ray-trigger="Avatar">
                <AvatarImage
                  :src="user.avatar"
                  alt="Image"
                  data-component-x-ray-trigger="AvatarImage"
                />
                <AvatarFallback data-component-x-ray-trigger="AvatarFallback">{{
                  user.name[0]
                }}</AvatarFallback>
              </Avatar>
              <div class="ml-2">
                <p class="text-sm font-medium leading-none">
                  {{ user.name }}
                </p>
                <p class="text-sm text-muted-foreground">
                  {{ user.email }}
                </p>
              </div>
              <Check
                v-if="selectedUsers.includes(user)"
                class="ml-auto flex h-5 w-5 text-primary"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <DialogFooter
        class="flex items-center border-t p-4 sm:justify-between"
        data-component-x-ray="DialogFooter"
      >
        <div v-if="selectedUsers.length > 0" class="flex -space-x-2 overflow-hidden">
          <Avatar
            v-for="user in selectedUsers"
            :key="user.email"
            class="inline-block border-2 border-background"
            data-component-x-ray="Avatar"
          >
            <AvatarImage :src="user.avatar" data-component-x-ray="AvatarImage" />
            <AvatarFallback data-component-x-ray="AvatarFallback">{{
              user.name[0]
            }}</AvatarFallback>
          </Avatar>
        </div>

        <p v-else class="text-sm text-muted-foreground">Select users to add to this thread.</p>

        <Button
          :disabled="selectedUsers.length < 2"
          @click="open = false"
          data-component-x-ray-trigger="Button"
        >
          Continue
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
