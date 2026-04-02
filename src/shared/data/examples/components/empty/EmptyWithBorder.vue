<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/shared/components/ui/empty";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui/input-group";
import { Kbd } from "@/shared/components/ui/kbd";
</script>

<template>
  <Empty class="border" data-component-x-ray="Empty">
    <EmptyHeader data-component-x-ray="EmptyHeader">
      <EmptyTitle data-component-x-ray="EmptyTitle">404 - Not Found</EmptyTitle>
      <EmptyDescription data-component-x-ray="EmptyDescription">
        The page you're looking for doesn't exist. Try searching for what you need below.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent data-component-x-ray="EmptyContent">
      <InputGroup class="w-3/4" data-component-x-ray="InputGroup">
        <InputGroupInput
          placeholder="Try searching for pages..."
          data-component-x-ray-trigger="InputGroupInput"
        />
        <InputGroupAddon data-component-x-ray-trigger="InputGroupAddon">
          <ArrowUpRightIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end" data-component-x-ray-trigger="InputGroupAddon">
          <Kbd>/</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <EmptyDescription data-component-x-ray="EmptyDescription">
        Need help? <a href="#">Contact support</a>
      </EmptyDescription>
    </EmptyContent>
  </Empty>
</template>
