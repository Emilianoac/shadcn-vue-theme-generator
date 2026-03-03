<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-vue-next";
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Library</BreadcrumbLink>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbPage>Data</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
