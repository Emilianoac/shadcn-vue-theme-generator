<script setup lang="ts">
import { CheckIcon, ChevronsUpDownIcon } from "lucide-vue-next";
import { computed, ref } from "vue";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";

const timezones = [
  {
    value: "Americas",
    items: [
      "(GMT-5) New York",
      "(GMT-8) Los Angeles",
      "(GMT-6) Chicago",
      "(GMT-5) Toronto",
      "(GMT-8) Vancouver",
      "(GMT-3) São Paulo",
    ],
  },
  {
    value: "Europe",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+1) Rome",
      "(GMT+1) Madrid",
      "(GMT+1) Amsterdam",
    ],
  },
  {
    value: "Asia/Pacific",
    items: [
      "(GMT+9) Tokyo",
      "(GMT+8) Shanghai",
      "(GMT+8) Singapore",
      "(GMT+4) Dubai",
      "(GMT+11) Sydney",
      "(GMT+9) Seoul",
    ],
  },
] as const;

const open = ref(false);
const value = ref("");

const selectedTimezone = computed(() => {
  for (const group of timezones) {
    const found = group.items.find((item) => item === value.value);
    if (found) {
      return found;
    }
  }
  return null;
});

function selectTimezone(selectedValue: string) {
  value.value = selectedValue === value.value ? "" : selectedValue;
  open.value = false;
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-50 justify-between"
        data-component-x-ray-trigger="Button"
      >
        {{ selectedTimezone || "Select timezone..." }}
        <ChevronsUpDownIcon class="opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-50 p-0">
      <Command data-component-x-ray="Command">
        <CommandInput
          class="h-9"
          placeholder="Search timezone..."
          data-component-x-ray-trigger="CommandInput"
        />
        <CommandList data-component-x-ray="CommandList">
          <CommandEmpty data-component-x-ray="CommandEmpty"> No timezone found. </CommandEmpty>
          <template v-for="group in timezones" :key="group.value">
            <CommandGroup :heading="group.value" data-component-x-ray="CommandGroup">
              <CommandItem
                v-for="item in group.items"
                :key="item"
                :value="item"
                @select="
                  (ev) => {
                    selectTimezone(ev.detail.value as string);
                  }
                "
                data-component-x-ray-trigger="CommandItem"
              >
                {{ item }}
                <CheckIcon :class="cn('ml-auto', value === item ? 'opacity-100' : 'opacity-0')" />
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
          </template>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
