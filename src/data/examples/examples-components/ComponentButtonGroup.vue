<script setup lang="ts">
import { ref } from "vue";
import {
  AlertTriangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BotIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const voiceEnabled = ref(false);

const currencies = [
  { value: "USD", label: "US Dollar" },
  { value: "EUR", label: "Euro" },
  { value: "MXN", label: "Mexican Peso" },
  { value: "CLP", label: "Chilean Peso" },
];
</script>

<template>
  <div class="grid w-full max-w-150 items-start gap-6 mx-auto p-4">
    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Orientation</h3>
      <ButtonGroup orientation="vertical" aria-label="Media controls" class="h-fit">
        <Button variant="outline" size="icon" aria-label="Increase">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Decrease">
          <MinusIcon />
        </Button>
      </ButtonGroup>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Size</h3>
      <div class="flex flex-col items-start gap-4">
        <ButtonGroup>
          <Button variant="outline" size="sm">Small</Button>
          <Button variant="outline" size="sm">Button</Button>
          <Button variant="outline" size="sm">Group</Button>
          <Button variant="outline" size="icon-sm" aria-label="Add small">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Default</Button>
          <Button variant="outline">Button</Button>
          <Button variant="outline">Group</Button>
          <Button variant="outline" size="icon" aria-label="Add default">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="lg">Large</Button>
          <Button variant="outline" size="lg">Button</Button>
          <Button variant="outline" size="lg">Group</Button>
          <Button variant="outline" size="icon-lg" aria-label="Add large">
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Nested</h3>
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon-sm" aria-label="Previous">
            <ArrowLeftIcon />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Next">
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Separator</h3>
      <ButtonGroup>
        <Button variant="secondary" size="sm">Copy</Button>
        <ButtonGroupSeparator />
        <Button variant="secondary" size="sm">Paste</Button>
      </ButtonGroup>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Split</h3>
      <ButtonGroup>
        <Button variant="secondary">Button</Button>
        <ButtonGroupSeparator />
        <Button size="icon" variant="secondary" aria-label="Add split action">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Input</h3>
      <ButtonGroup class="w-full max-w-sm">
        <Input placeholder="Search..." />
        <Button variant="outline" aria-label="Search">
          <SearchIcon />
        </Button>
      </ButtonGroup>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Input Group</h3>
      <ButtonGroup class="w-full max-w-sm [--radius:9999rem]">
        <ButtonGroup>
          <Button variant="outline" size="icon" aria-label="Add">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup class="flex-1">
          <InputGroup>
            <InputGroupInput
              :placeholder="voiceEnabled ? 'Record and send audio...' : 'Send a message...'"
              :disabled="voiceEnabled"
            />
            <InputGroupAddon align="inline-end">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <InputGroupButton
                      :aria-pressed="voiceEnabled"
                      size="icon-xs"
                      aria-label="Voice Mode"
                      @click="voiceEnabled = !voiceEnabled"
                    >
                      <BotIcon v-if="voiceEnabled" />
                      <VolumeOffIcon v-else />
                    </InputGroupButton>
                  </TooltipTrigger>
                  <TooltipContent>Voice Mode</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </InputGroupAddon>
          </InputGroup>
        </ButtonGroup>
      </ButtonGroup>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Dropdown Menu</h3>
      <ButtonGroup>
        <Button variant="outline">Follow</Button>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="icon" aria-label="Open actions">
              <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <VolumeOffIcon />
                Mute Conversation
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CopyIcon />
                Copy Link
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ShareIcon />
                Share
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UserRoundXIcon />
                Block User
              </DropdownMenuItem>
              <DropdownMenuItem>
                <AlertTriangleIcon />
                Report
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <TrashIcon />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Select</h3>
      <ButtonGroup class="w-full max-w-sm">
        <ButtonGroup>
          <ButtonGroupText>Pay</ButtonGroupText>
        </ButtonGroup>
        <ButtonGroup class="flex-1">
          <Select default-value="USD">
            <SelectTrigger class="w-28 rounded-none border-x-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="currency in currencies"
                :key="currency.value"
                :value="currency.value"
              >
                <div class="flex w-full items-center justify-between gap-4">
                  <span>{{ currency.value }}</span>
                  <span class="text-muted-foreground">{{ currency.label }}</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="10.00" pattern="[0-9]*" class="rounded-none border-x-0" />
        </ButtonGroup>
        <ButtonGroup>
          <Button aria-label="Send" size="icon" variant="outline">
            <CheckIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </section>

    <section class="space-y-3">
      <h3 class="text-sm font-medium text-muted-foreground">Popover</h3>
      <ButtonGroup>
        <Button variant="outline">
          <BotIcon />
          Copilot
        </Button>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline" size="icon" aria-label="Open popover">
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" class="p-0 text-sm rounded-xl w-80">
            <div class="px-4 py-3">
              <div class="text-sm font-medium">Agent Tasks</div>
              <p class="text-muted-foreground mt-1">
                Summarize the changes and propose next steps.
              </p>
            </div>
            <Separator />
            <div class="p-3">
              <Textarea class="min-h-24" placeholder="Type a prompt..." />
              <div class="mt-3 flex justify-end">
                <Button size="sm">Run</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </ButtonGroup>
    </section>
  </div>
</template>
