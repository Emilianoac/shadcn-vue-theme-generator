<script setup lang="ts">
import { Badge } from "@/shared/components/ui/badge";
</script>

<template>
  <div class="flex w-full flex-wrap gap-2">
    <Badge class="bg-blue-500 text-white dark:bg-blue-600"> Blue </Badge>
    <Badge class="bg-green-500 text-white dark:bg-green-600"> Green </Badge>
    <Badge class="bg-purple-500 text-white dark:bg-purple-600"> Purple </Badge>
    <Badge class="bg-pink-500 text-white dark:bg-pink-600"> Pink </Badge>
    <Badge class="bg-yellow-500 text-white dark:bg-yellow-600"> Yellow </Badge>
    <Badge class="bg-cyan-500 text-white dark:bg-cyan-600"> Cyan </Badge>
    <Badge class="bg-teal-500 text-white dark:bg-teal-600"> Teal </Badge>
    <Badge class="bg-orange-500 text-white dark:bg-orange-600"> Orange </Badge>
    <Badge class="bg-gray-500 text-white dark:bg-gray-600"> Gray </Badge>
    <Badge class="bg-red-500 text-white dark:bg-red-600"> Red </Badge>
  </div>
</template>
