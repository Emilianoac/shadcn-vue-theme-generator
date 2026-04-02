<script setup lang="ts">
import { HomeIcon, SearchIcon, SettingsIcon } from "lucide-vue-next";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
</script>

<template>
  <Tabs default-value="home" data-component-x-ray="Tabs">
    <TabsList data-component-x-ray="TabsList">
      <TabsTrigger value="home" data-component-x-ray-trigger="TabsTrigger">
        <HomeIcon />
      </TabsTrigger>
      <TabsTrigger value="search" data-component-x-ray-trigger="TabsTrigger">
        <SearchIcon />
      </TabsTrigger>
      <TabsTrigger value="settings" data-component-x-ray-trigger="TabsTrigger">
        <SettingsIcon />
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
