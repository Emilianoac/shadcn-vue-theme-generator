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
  <Empty data-component-x-ray="Empty">
    <EmptyHeader data-component-x-ray="EmptyHeader">
      <EmptyTitle data-component-x-ray="EmptyTitle"> No projects yet </EmptyTitle>
      <EmptyDescription data-component-x-ray="EmptyDescription">
        You haven't created any projects yet. Get started by creating your first project.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent data-component-x-ray="EmptyContent">
      <div class="flex gap-2">
        <Button :as-child="true" data-component-x-ray-trigger="Button">
          <a href="#">Create project</a>
        </Button>
        <Button variant="outline" data-component-x-ray-trigger="Button"> Import project </Button>
      </div>
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
