<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
</script>

<template>
  <Breadcrumb data-component-x-ray="Breadcrumb" class="p-2">
    <BreadcrumbList data-component-x-ray="BreadcrumbList">
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Home</BreadcrumbLink>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Library</BreadcrumbLink>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbPage data-component-x-ray="BreadcrumbPage">Data</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
