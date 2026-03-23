<script setup lang="ts">
import { ArrowUpRightIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
</script>

<template>
  <Empty class="bg-muted" data-component-x-ray="Empty">
    <EmptyHeader>
      <EmptyTitle data-component-x-ray="EmptyTitle">No results found</EmptyTitle>
      <EmptyDescription data-component-x-ray="EmptyDescription">
        No results found for your search. Try adjusting your search terms.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent data-component-x-ray="EmptyContent">
      <Button data-component-x-ray-trigger="Button">Try again</Button>
      <Button
        variant="link"
        :as-child="true"
        class="text-muted-foreground"
        data-component-x-ray-trigger="Button"
      >
        <a href="#">
          Learn more
          <ArrowUpRightIcon />
        </a>
      </Button>
    </EmptyContent>
  </Empty>
</template>
