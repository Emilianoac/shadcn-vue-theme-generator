<script setup lang="ts">
import {
  MessageSquareIcon,
  SendIcon,
  CodeIcon,
  CornerDownLeftIcon,
  CopyIcon,
  RefreshCcwIcon,
} from "lucide-vue-next";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
  InputGroupButton,
  InputGroupText,
} from "@/shared/components/ui/input-group";
</script>

<template>
  <div class="space-y-4">
    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupAddon align="block-start" class="border-b" data-component-x-ray="InputGroupAddon">
        <InputGroupText class="font-mono font-medium" data-component-x-ray="InputGroupText">
          <CodeIcon />
          script.js
        </InputGroupText>
        <InputGroupButton
          class="ml-auto"
          size="icon-xs"
          data-component-x-ray-trigger="InputGroupButton"
        >
          <RefreshCcwIcon />
        </InputGroupButton>
        <InputGroupButton
          variant="ghost"
          size="icon-xs"
          data-component-x-ray-trigger="InputGroupButton"
        >
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupTextarea
        id="textarea-code-32"
        placeholder="console.log('Hello, world!');"
        class="min-h-50 focus-visible:ring-offset-0"
        data-component-x-ray-trigger="InputGroupTextarea"
      />
      <InputGroupAddon align="block-end" class="border-t" data-component-x-ray="InputGroupAddon">
        <InputGroupText data-component-x-ray="InputGroupText">Line 1, Column 1</InputGroupText>
        <InputGroupButton
          size="sm"
          class="ml-auto"
          variant="default"
          data-component-x-ray-trigger="InputGroupButton"
        >
          Run <CornerDownLeftIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupAddon align="inline-start" data-component-x-ray="InputGroupAddon">
        <MessageSquareIcon />
      </InputGroupAddon>
      <InputGroupTextarea
        placeholder="Type your message here..."
        class="focus-visible:ring-offset-0"
        data-component-x-ray-trigger="InputGroupTextarea"
      />
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupTextarea
        placeholder="Add a comment..."
        rows="4"
        class="focus-visible:ring-offset-0"
        data-component-x-ray-trigger="InputGroupTextarea"
      />
      <InputGroupAddon align="inline-end" data-component-x-ray="InputGroupAddon">
        <SendIcon />
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
