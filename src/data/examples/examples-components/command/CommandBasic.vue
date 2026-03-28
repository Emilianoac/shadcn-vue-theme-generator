<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const open = ref(false);
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button
      variant="outline"
      class="w-fit"
      @click="open = true"
      data-component-x-ray-trigger="Button"
    >
      Open Menu
    </Button>
    <CommandDialog v-model:open="open" data-component-x-ray="CommandDialog">
      <Command data-component-x-ray="Command">
        <CommandInput
          placeholder="Type a command or search..."
          data-component-x-ray-trigger="CommandInput"
        />
        <CommandList data-component-x-ray="CommandList">
          <CommandEmpty data-component-x-ray="CommandEmpty">No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions" data-component-x-ray="CommandGroup">
            <CommandItem value="calendar" data-component-x-ray-trigger="CommandItem">
              <CalendarIcon />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem value="search-emoji" data-component-x-ray-trigger="CommandItem">
              <SmileIcon />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem value="calculator" data-component-x-ray-trigger="CommandItem">
              <CalculatorIcon />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  </div>
</template>
