<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
</script>

<template>
  <Tabs default-value="account" data-component-x-ray="Tabs">
    <TabsList data-component-x-ray="TabsList">
      <TabsTrigger value="account" data-component-x-ray-trigger="TabsTrigger">
        Account
      </TabsTrigger>
      <TabsTrigger value="password" data-component-x-ray-trigger="TabsTrigger">
        Password
      </TabsTrigger>
      <TabsTrigger value="notifications" data-component-x-ray-trigger="TabsTrigger">
        Notifications
      </TabsTrigger>
    </TabsList>
    <div class="p-4 rounded-md border">
      <TabsContent value="account" data-component-x-ray="TabsContent">
        Manage your account preferences and profile information.
      </TabsContent>
      <TabsContent value="password" data-component-x-ray="TabsContent">
        Update your password to keep your account secure.
      </TabsContent>
      <TabsContent value="notifications" data-component-x-ray="TabsContent">
        Configure how you receive notifications and alerts.
      </TabsContent>
    </div>
  </Tabs>
</template>
