<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
</script>

<template>
  <Tabs default-value="home" data-component-x-ray="Tabs">
    <TabsList data-component-x-ray="TabsList">
      <TabsTrigger value="home" data-component-x-ray-trigger="TabsTrigger"> Home </TabsTrigger>
      <TabsTrigger value="settings" data-component-x-ray-trigger="TabsTrigger">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
