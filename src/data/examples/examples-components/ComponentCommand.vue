<script setup lang="ts">
import { ref } from "vue";
import { useMagicKeys, whenever } from "@vueuse/core";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-vue-next";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const open = ref(false);

const { meta_j } = useMagicKeys();

whenever(
  () => meta_j?.value,
  () => {
    open.value = true;
  },
);
</script>

<template>
  <div class="flex justify-center">
    <Command class="rounded-lg border shadow-md md:min-w-112.5 max-w-150 h-min">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">
            <Calendar />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem value="emoji">
            <Smile />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled value="calculator">
            <Calculator />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile">
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem value="billing">
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem value="settings">
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </div>
</template>
