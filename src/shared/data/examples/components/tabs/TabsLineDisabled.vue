<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
</script>

<template>
  <Tabs default-value="overview" data-component-x-ray="Tabs">
    <TabsList variant="line" data-component-x-ray="TabsList">
      <TabsTrigger value="overview" data-component-x-ray-trigger="TabsTrigger">
        Overview
      </TabsTrigger>
      <TabsTrigger value="analytics" data-component-x-ray-trigger="TabsTrigger">
        Analytics
      </TabsTrigger>
      <TabsTrigger value="reports" :disabled="true" data-component-x-ray-trigger="TabsTrigger">
        Reports
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
