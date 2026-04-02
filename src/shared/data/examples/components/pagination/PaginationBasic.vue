<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/components/ui/pagination";
</script>

<template>
  <Pagination
    v-slot="{ page }"
    :items-per-page="10"
    :total="30"
    :default-page="2"
    data-component-x-ray="Pagination"
  >
    <PaginationContent v-slot="{ items }" data-component-x-ray="PaginationContent">
      <PaginationPrevious data-component-x-ray-trigger="PaginationPrevious" />

      <template v-for="(item, index) in items" :key="index">
        <PaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          :is-active="item.value === page"
          data-component-x-ray-trigger="PaginationItem"
        >
          {{ item.value }}
        </PaginationItem>
      </template>

      <PaginationEllipsis :index="4" data-component-x-ray="PaginationEllipsis" />

      <PaginationNext data-component-x-ray-trigger="PaginationNext" />
    </PaginationContent>
  </Pagination>
</template>
