<script setup lang="ts">
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
</script>

<template>
  <Pagination :items-per-page="10" :total="30" :default-page="2">
    <PaginationContent data-component-x-ray="PaginationContent">
      <PaginationItem :value="1" data-component-x-ray-trigger="PaginationItem"> 1 </PaginationItem>
      <PaginationItem :value="2" :is-active="true" data-component-x-ray-trigger="PaginationItem">
      </PaginationItem>
      <PaginationItem :value="3" data-component-x-ray-trigger="PaginationItem"> 3 </PaginationItem>
      <PaginationItem :value="4" data-component-x-ray-trigger="PaginationItem"> 4 </PaginationItem>
      <PaginationItem :value="5" data-component-x-ray-trigger="PaginationItem"> 5 </PaginationItem>
    </PaginationContent>
  </Pagination>
</template>
