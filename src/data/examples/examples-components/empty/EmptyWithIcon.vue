<script setup lang="ts">
import { PlusIcon, FolderIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
</script>

<template>
  <Empty class="border" data-component-x-ray="Empty">
    <EmptyHeader data-component-x-ray="EmptyHeader">
      <EmptyMedia variant="icon" data-component-x-ray="EmptyMedia">
        <FolderIcon />
      </EmptyMedia>
      <EmptyTitle data-component-x-ray="EmptyTitle">Nothing to see here</EmptyTitle>
      <EmptyDescription data-component-x-ray="EmptyDescription">
        No posts have been created yet. Get started by
        <a href="#">creating your first post</a>.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent data-component-x-ray="EmptyContent">
      <Button variant="outline" data-component-x-ray-trigger="Button">
        <PlusIcon />
        New Post
      </Button>
    </EmptyContent>
  </Empty>
</template>
