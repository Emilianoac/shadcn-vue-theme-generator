<script setup lang="ts">
import { AppWindowIcon, CodeIcon } from "lucide-vue-next";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
</script>

<template>
  <Tabs default-value="preview" data-component-x-ray="Tabs">
    <TabsList data-component-x-ray="TabsList">
      <TabsTrigger value="preview" data-component-x-ray-trigger="TabsTrigger">
        <AppWindowIcon />
        Preview
      </TabsTrigger>
      <TabsTrigger value="code" data-component-x-ray-trigger="TabsTrigger">
        <CodeIcon />
        Code
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
