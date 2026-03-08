<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbEllipsis,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
</script>

<template>
  <Breadcrumb>
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
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Data</BreadcrumbLink>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbEllipsis data-component-x-ray="BreadcrumbEllipsis" />
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbPage data-component-x-ray="BreadcrumbPage">Bootstrap</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
